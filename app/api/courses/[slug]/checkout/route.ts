import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import Razorpay from 'razorpay'
import { supabaseAdmin } from '@/lib/supabase/admin'

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    // =========================================================
    // 1. Get slug and Supabase client
    // =========================================================

    const { slug } = await params
    const supabase = await createClient()

    // =========================================================
    // 2. Check logged-in user
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

    // Get public.users record
const {
  data: publicUser,
  error: publicUserError,
} = await supabaseAdmin
  .from('users')
  .select('id, auth_user_id, name, email, role')
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
    // 3. Get course from database
    // =========================================================

    const { data: course, error: courseError } = await supabase
      .from('courses')
      .select(`
        id,
        title,
        slug,
        price,
        description,
        course_categories (
          name
        )
      `)
      .eq('slug', slug)
      .single()

    if (courseError || !course) {
      console.error('Course fetch error:', courseError)

      return NextResponse.json(
        {
          error: 'Course not found',
        },
        { status: 404 }
      )
    }

    // =========================================================
    // 4. Check existing enrollment
    // =========================================================

  const {
  data: existingEnrollment,
  error: enrollmentError,
} = await supabaseAdmin
  .from('course_enrollments')
  .select('id, status')
  .eq('user_id', publicUser.id)
  .eq('course_id', course.id)
  .maybeSingle()

    if (enrollmentError) {
      console.error(
        'Enrollment check error:',
        enrollmentError
      )

      return NextResponse.json(
        {
          error: 'Unable to check enrollment',
        },
        { status: 500 }
      )
    }

    // =========================================================
    // 5. Prevent duplicate purchase
    // =========================================================

    if (
      existingEnrollment &&
      existingEnrollment.status !== 'cancelled'
    ) {
      return NextResponse.json(
        {
          error: 'You are already enrolled in this course',
        },
        { status: 400 }
      )
    }

    // =========================================================
    // 6. Get price from database
    // =========================================================

    const amount = Number(course.price)

    if (!Number.isFinite(amount) || amount <= 0) {
      return NextResponse.json(
        {
          error: 'Invalid course price',
        },
        { status: 400 }
      )
    }

    // Razorpay uses paise
    // ₹4999 = 499900 paise

    const razorpayAmount = Math.round(amount * 100)

    // =========================================================
    // 7. Get Razorpay credentials
    // =========================================================

    const razorpayKeyId = process.env.RAZORPAY_KEY_ID
    const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET

    if (!razorpayKeyId || !razorpayKeySecret) {
      console.error(
        'Razorpay environment variables are missing'
      )

      return NextResponse.json(
        {
          error: 'Razorpay configuration is missing',
        },
        { status: 500 }
      )
    }

    // =========================================================
    // 8. Create Razorpay client
    // =========================================================

    const razorpay = new Razorpay({
      key_id: razorpayKeyId,
      key_secret: razorpayKeySecret,
    })

    // =========================================================
    // 9. Create internal course order
    // =========================================================

    const {
      data: order,
      error: orderError,
    } = await supabaseAdmin
      .from('course_orders')
      .insert({
  user_id: publicUser.id,
  course_id: course.id,
  amount: amount,
  currency: 'INR',
  status: 'pending',
  payment_provider: 'razorpay',
})
    
      .select()
      .single()

    if (orderError || !order) {
      console.error(
        'Course order creation error:',
        orderError
      )

      return NextResponse.json(
        {
          error: 'Unable to create course order',
          details: orderError?.message,
        },
        { status: 500 }
      )
    }

    console.log('Internal course order created:', order.id)

    // =========================================================
    // 10. Create Razorpay order
    // =========================================================

    let razorpayOrder

    try {
      razorpayOrder = await razorpay.orders.create({
        amount: razorpayAmount,
        currency: 'INR',
        receipt: order.id,
       notes: {
  course_id: course.id,
  user_id: publicUser.id,
  course_title: course.title,
},
      })
    } catch (razorpayError) {
      console.error(
        'Razorpay order creation error:',
        razorpayError
      )

      // Mark internal order as failed
      await supabaseAdmin
        .from('course_orders')
        .update({
          status: 'failed',
          updated_at: new Date().toISOString(),
        })
        .eq('id', order.id)

      return NextResponse.json(
        {
          error: 'Unable to create Razorpay order',
        },
        { status: 500 }
      )
    }

    console.log(
      'Razorpay order created:',
      razorpayOrder.id
    )

    // =========================================================
    // 11. Save Razorpay order ID
    // =========================================================

    const {
      data: updatedOrder,
      error: updateOrderError,
    } = await supabaseAdmin
      .from('course_orders')
      .update({
        payment_order_id: razorpayOrder.id,
        payment_provider: 'razorpay',
        status: 'pending',
        updated_at: new Date().toISOString(),
      })
      .eq('id', order.id)
      .select()
      .single()

    // Debug information
    console.log('=================================')
    console.log(
      'Razorpay Order ID:',
      razorpayOrder.id
    )
    console.log(
      'Internal Order ID:',
      order.id
    )
    console.log(
      'Updated Order:',
      updatedOrder
    )
    console.log(
      'Update Error:',
      updateOrderError
    )
    console.log('=================================')

    if (updateOrderError || !updatedOrder) {
      console.error(
        'Failed to save Razorpay order ID:',
        updateOrderError
      )

      return NextResponse.json(
        {
          error: 'Unable to save payment order',
          details:
            updateOrderError?.message ||
            'Order update returned no data',
        },
        { status: 500 }
      )
    }

    // =========================================================
    // 12. Return payment information to frontend
    // =========================================================

    return NextResponse.json({
      success: true,

      razorpay: {
        key_id: razorpayKeyId,
        order_id: razorpayOrder.id,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
      },

      order: {
        id: updatedOrder.id,
        amount: updatedOrder.amount,
        currency: updatedOrder.currency,
        status: updatedOrder.status,
        payment_provider:
          updatedOrder.payment_provider,
        payment_order_id:
          updatedOrder.payment_order_id,
      },

      course: {
        id: course.id,
        title: course.title,
        slug: course.slug,
      },
    })
  } catch (error) {
    console.error(
      'Checkout API error:',
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