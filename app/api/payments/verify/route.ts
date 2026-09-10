import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { supabaseAdmin } from '@/lib/supabase/admin'
import crypto from 'crypto'

export async function POST(request: Request) {
  try {
    const supabase = await createClient()

    // 1. Check logged-in user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please login to continue',
        },
        { status: 401 }
      )
    }

    // 2. Get Razorpay payment details
    const body = await request.json()

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = body

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing Razorpay payment details',
        },
        { status: 400 }
      )
    }

    // 3. Razorpay secret
    const razorpayKeySecret =
      process.env.RAZORPAY_KEY_SECRET

    if (!razorpayKeySecret) {
      return NextResponse.json(
        {
          success: false,
          error: 'Razorpay configuration is missing',
        },
        { status: 500 }
      )
    }

    // 4. Verify Razorpay signature
    const generatedSignature =
      crypto
        .createHmac('sha256', razorpayKeySecret)
        .update(
          `${razorpay_order_id}|${razorpay_payment_id}`
        )
        .digest('hex')

    if (generatedSignature !== razorpay_signature) {
      console.error('Invalid Razorpay signature')

      return NextResponse.json(
        {
          success: false,
          error: 'Payment verification failed',
        },
        { status: 400 }
      )
    }

    // 5. Find our internal course order
    const {
      data: courseOrder,
      error: courseOrderError,
    } = await supabaseAdmin
      .from('course_orders')
      .select(`
        id,
        user_id,
        course_id,
        amount,
        currency,
        status,
        payment_order_id
      `)
      .eq(
        'payment_order_id',
        razorpay_order_id
      )
      .eq(
        'user_id',
        user.id
      )
      .single()

    if (courseOrderError || !courseOrder) {
      console.error(
        'Course order not found:',
        courseOrderError
      )

      return NextResponse.json(
        {
          success: false,
          error: 'Course order not found',
        },
        { status: 404 }
      )
    }

    // 6. Update course order as paid
    const {
      data: updatedOrder,
      error: updateOrderError,
    } = await supabaseAdmin
      .from('course_orders')
      .update({
        status: 'paid',
        payment_id: razorpay_payment_id,
        updated_at: new Date().toISOString(),
      })
      .eq('id', courseOrder.id)
      .select()
      .single()

    if (updateOrderError || !updatedOrder) {
      console.error(
        'Course order update error:',
        updateOrderError
      )

      return NextResponse.json(
        {
          success: false,
          error: 'Unable to update payment order',
        },
        { status: 500 }
      )
    }

    // 7. Create course enrollment
    const {
      data: enrollment,
      error: enrollmentError,
    } = await supabaseAdmin
      .from('course_enrollments')
      .insert({
        user_id: courseOrder.user_id,
        course_id: courseOrder.course_id,
        status: 'active',
      })
      .select()
      .single()

    if (enrollmentError || !enrollment) {
      console.error(
        'Enrollment creation error:',
        enrollmentError
      )

      return NextResponse.json(
        {
          success: false,
          error: 'Payment successful but enrollment failed',
        },
        { status: 500 }
      )
    }

    // 8. Success
    return NextResponse.json({
      success: true,
      message: 'Payment verified successfully',
      order: updatedOrder,
      enrollment,
    })
  } catch (error) {
    console.error(
      'Payment verification error:',
      error
    )

    return NextResponse.json(
      {
        success: false,
        error: 'Something went wrong',
      },
      { status: 500 }
    )
  }
}