import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import crypto from 'crypto'
import { supabaseAdmin } from '@/lib/supabase/admin'

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    // =========================================================
    // 1. Get slug and request body
    // =========================================================

    const { slug } = await params

    const body = await request.json()

    const {
      order_id,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = body

    // =========================================================
    // 2. Validate payment data
    // =========================================================

    if (
      !order_id ||
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return NextResponse.json(
        {
          error: 'Missing payment information',
        },
        { status: 400 }
      )
    }

    // =========================================================
    // 3. Supabase client
    // =========================================================

    const supabase = await createClient()

    // =========================================================
    // 4. Check logged-in user
    // =========================================================

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return NextResponse.json(
        {
          error: 'Please login to continue',
        },
        { status: 401 }
      )
    }

    // =========================================================
    // 5. Get public.users record
    // =========================================================

    const {
      data: publicUser,
      error: publicUserError,
    } = await supabaseAdmin
      .from('users')
      .select(
        'id, auth_user_id, name, email, role'
      )
      .eq('auth_user_id', user.id)
      .single()

    if (publicUserError || !publicUser) {
      console.error(
        'Public user fetch error:',
        publicUserError
      )

      return NextResponse.json(
        {
          error: 'User profile not found',
        },
        { status: 404 }
      )
    }

    // =========================================================
    // 6. Get internal course order
    // =========================================================

    const {
      data: order,
      error: orderError,
    } = await supabaseAdmin
      .from('course_orders')
      .select('*')
      .eq('id', order_id)
      .eq('user_id', publicUser.id)
      .single()

    if (orderError || !order) {
      console.error(
        'Order fetch error:',
        orderError
      )

      return NextResponse.json(
        {
          error: 'Order not found',
        },
        { status: 404 }
      )
    }

    // =========================================================
    // 7. Make sure Razorpay order ID matches
    // =========================================================

    if (
      order.payment_order_id !==
      razorpay_order_id
    ) {
      return NextResponse.json(
        {
          error: 'Invalid Razorpay order',
        },
        { status: 400 }
      )
    }

    // =========================================================
    // 8. Get Razorpay secret
    // =========================================================

    const razorpayKeySecret =
      process.env.RAZORPAY_KEY_SECRET

    if (!razorpayKeySecret) {
      console.error(
        'Razorpay secret is missing'
      )

      return NextResponse.json(
        {
          error:
            'Razorpay configuration is missing',
        },
        { status: 500 }
      )
    }

    // =========================================================
    // 9. Verify Razorpay signature
    // =========================================================

    const generatedSignature =
      crypto
        .createHmac(
          'sha256',
          razorpayKeySecret
        )
        .update(
          `${razorpay_order_id}|${razorpay_payment_id}`
        )
        .digest('hex')

    if (
      generatedSignature !==
      razorpay_signature
    ) {
      console.error(
        'Invalid Razorpay signature'
      )

      return NextResponse.json(
        {
          error:
            'Payment verification failed',
        },
        { status: 400 }
      )
    }

    // =========================================================
    // 10. Update course order as paid
    // =========================================================

    let updatedOrder = order

    // Already paid
    if (order.status === 'paid') {
      if (
        order.payment_id !==
        razorpay_payment_id
      ) {
        return NextResponse.json(
          {
            error:
              'Order is already paid with a different payment',
          },
          { status: 400 }
        )
      }

      console.log(
        'Order already paid:',
        order.id
      )
    } else {
      const {
        data: updatedOrderData,
        error: updateError,
      } = await supabaseAdmin
        .from('course_orders')
        .update({
          status: 'paid',
          payment_id:
            razorpay_payment_id,
          updated_at:
            new Date().toISOString(),
        })
        .eq('id', order.id)
        .eq('status', 'pending')
        .select()
        .single()

      if (
        updateError ||
        !updatedOrderData
      ) {
        console.error(
          'Order update error:',
          updateError
        )

        return NextResponse.json(
          {
            error:
              'Unable to update payment order',
          },
          { status: 500 }
        )
      }

      updatedOrder =
        updatedOrderData
    }

    // =========================================================
    // 11. IMPORTANT:
    // Create / update course_purchases
    // =========================================================
    //
    // course_purchases.user_id references auth.users.id
    // Therefore use user.id here, NOT publicUser.id.
    //

    const {
      data: existingPurchase,
      error: purchaseFetchError,
    } = await supabaseAdmin
      .from('course_purchases')
      .select(
        'id, user_id, course_id, status'
      )
      .eq('user_id', user.id)
      .eq(
        'course_id',
        order.course_id
      )
      .maybeSingle()

    if (purchaseFetchError) {
      console.error(
        'Purchase fetch error:',
        purchaseFetchError
      )

      return NextResponse.json(
        {
          error:
            'Unable to check course purchase',
        },
        { status: 500 }
      )
    }

    // =========================================================
    // 12. Insert purchase if it does not exist
    // =========================================================

    if (!existingPurchase) {
      const {
        data: purchase,
        error: purchaseInsertError,
      } = await supabaseAdmin
        .from('course_purchases')
        .insert({
          user_id: user.id,
          course_id: order.course_id,
          amount: order.amount,
          currency:
            order.currency || 'INR',
          razorpay_order_id:
            razorpay_order_id,
          razorpay_payment_id:
            razorpay_payment_id,
          razorpay_signature:
            razorpay_signature,
          status: 'paid',
          purchased_at:
            new Date().toISOString(),
        })
        .select()
        .single()

      if (
        purchaseInsertError ||
        !purchase
      ) {
        console.error(
          'Course purchase insert error:',
          purchaseInsertError
        )

        return NextResponse.json(
          {
            error:
              'Payment successful but purchase record could not be created',
          },
          { status: 500 }
        )
      }

      console.log(
        'Course purchase created:',
        purchase.id
      )
    } else {
      // =======================================================
      // 13. Existing purchase:
      // update it safely
      // =======================================================

      const {
        data: updatedPurchase,
        error: purchaseUpdateError,
      } = await supabaseAdmin
        .from('course_purchases')
        .update({
          amount: order.amount,
          currency:
            order.currency || 'INR',
          razorpay_order_id:
            razorpay_order_id,
          razorpay_payment_id:
            razorpay_payment_id,
          razorpay_signature:
            razorpay_signature,
          status: 'paid',
          purchased_at:
            new Date().toISOString(),
        })
        .eq(
          'id',
          existingPurchase.id
        )
        .select()
        .single()

      if (
        purchaseUpdateError ||
        !updatedPurchase
      ) {
        console.error(
          'Course purchase update error:',
          purchaseUpdateError
        )

        return NextResponse.json(
          {
            error:
              'Payment successful but purchase record could not be updated',
          },
          { status: 500 }
        )
      }

      console.log(
        'Course purchase updated:',
        updatedPurchase.id
      )
    }

    // =========================================================
    // 14. Check existing enrollment
    // =========================================================

    const {
      data: existingEnrollment,
      error: enrollmentFetchError,
    } = await supabaseAdmin
      .from('course_enrollments')
      .select(
        'id, status, order_id'
      )
      .eq(
        'user_id',
        publicUser.id
      )
      .eq(
        'course_id',
        order.course_id
      )
      .maybeSingle()

    if (enrollmentFetchError) {
      console.error(
        'Enrollment fetch error:',
        enrollmentFetchError
      )

      return NextResponse.json(
        {
          error:
            'Unable to check course enrollment',
        },
        { status: 500 }
      )
    }

    // =========================================================
    // 15. Create enrollment if it does not exist
    // =========================================================

    if (!existingEnrollment) {
      const {
        data: enrollment,
        error: enrollmentError,
      } = await supabaseAdmin
        .from('course_enrollments')
        .insert({
          user_id: publicUser.id,
          course_id: order.course_id,
          order_id: order.id,
          status: 'active',
        })
        .select()
        .single()

      if (
        enrollmentError ||
        !enrollment
      ) {
        console.error(
          'Enrollment creation error:',
          enrollmentError
        )

        return NextResponse.json(
          {
            error:
              'Payment successful but enrollment failed',
          },
          { status: 500 }
        )
      }

      console.log(
        'Enrollment created:',
        enrollment.id
      )
    } else {
      // =======================================================
      // 16. Existing enrollment
      // =======================================================

      const {
        error: enrollmentUpdateError,
      } = await supabaseAdmin
        .from('course_enrollments')
        .update({
          order_id: order.id,
          status: 'active',
        })
        .eq(
          'id',
          existingEnrollment.id
        )

      if (
        enrollmentUpdateError
      ) {
        console.error(
          'Enrollment update error:',
          enrollmentUpdateError
        )

        return NextResponse.json(
          {
            error:
              'Payment successful but enrollment update failed',
          },
          { status: 500 }
        )
      }
    }

    // =========================================================
    // 17. Success
    // =========================================================

    return NextResponse.json({
      success: true,

      message:
        'Payment verified and course purchased successfully',

      order: {
        id: updatedOrder.id,
        status:
          updatedOrder.status,
        payment_id:
          updatedOrder.payment_id,
      },

      purchase: {
        user_id: user.id,
        course_id:
          order.course_id,
        status: 'paid',
      },

      enrollment: {
        course_id:
          order.course_id,
        status: 'active',
      },

      course: {
        id: order.course_id,
        slug,
      },
    })
  } catch (error) {
    console.error(
      'Payment verification error:',
      error
    )

    return NextResponse.json(
      {
        error: 'Something went wrong',
      },
      { status: 500 }
    )
  }
}