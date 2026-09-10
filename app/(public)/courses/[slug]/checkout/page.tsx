'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock,
  CreditCard,
  ShieldCheck,
  Users,
} from 'lucide-react'

declare global {
  interface Window {
    Razorpay: any
  }
}

export default function CheckoutPage() {
  const params = useParams()

  const slug = params.slug as string

  const [course, setCourse] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState('')

  // =========================================================
  // 1. Load Razorpay Checkout script
  // =========================================================

  useEffect(() => {
    const scriptId = 'razorpay-checkout-script'

    if (document.getElementById(scriptId)) {
      return
    }

    const script = document.createElement('script')

    script.id = scriptId
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true

    document.body.appendChild(script)

    return () => {
      // Do not remove the script
    }
  }, [])

  // =========================================================
  // 2. Fetch course
  // =========================================================

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true)
        setError('')

        const response = await fetch(
          `/api/courses/${slug}`,
          {
            cache: 'no-store',
          }
        )

        if (!response.ok) {
          throw new Error('Course not found')
        }

        const data = await response.json()

        setCourse(data)
      } catch (error) {
        console.error('Course fetch error:', error)

        setError('Unable to load course')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchCourse()
    }
  }, [slug])

  // =========================================================
  // 3. Proceed to payment
  // =========================================================

  const handleProceedToPayment = async () => {
    try {
      setProcessing(true)
      setError('')

      // -------------------------------------------------------
      // Make sure Razorpay script is loaded
      // -------------------------------------------------------

      if (!window.Razorpay) {
        throw new Error(
          'Payment system is still loading. Please try again.'
        )
      }

      // -------------------------------------------------------
      // Create order through our backend
      // -------------------------------------------------------

      const response = await fetch(
        `/api/courses/${slug}/checkout`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.error ||
            'Unable to create payment order'
        )
      }

      console.log(
        'Razorpay order created:',
        data
      )

      // -------------------------------------------------------
      // Razorpay checkout options
      // -------------------------------------------------------

      const options = {
        key: data.razorpay.key_id,

        amount: data.razorpay.amount,

        currency: data.razorpay.currency,

        name: 'Creek Learning Solutions',

        description: data.course.title,

        order_id: data.razorpay.order_id,

        prefill: {
          name: '',
          email: '',
        },

        theme: {
          color: '#2563eb',
        },

        // -----------------------------------------------------
        // Payment successful
        // -----------------------------------------------------

        handler: async function (
          paymentResponse: any
        ) {
          try {
            setProcessing(true)
            setError('')

            console.log(
              'Razorpay payment response:',
              paymentResponse
            )

            // -------------------------------------------------
            // Verify payment on server
            // -------------------------------------------------

            const verifyResponse = await fetch(
              `/api/courses/${slug}/checkout/verify`,
              {
                method: 'POST',

                headers: {
                  'Content-Type':
                    'application/json',
                },

                body: JSON.stringify({
                  order_id: data.order.id,

                  razorpay_order_id:
                    paymentResponse.razorpay_order_id,

                  razorpay_payment_id:
                    paymentResponse.razorpay_payment_id,

                  razorpay_signature:
                    paymentResponse.razorpay_signature,
                }),
              }
            )

            const verifyData =
              await verifyResponse.json()

            if (!verifyResponse.ok) {
              throw new Error(
                verifyData.error ||
                  'Payment verification failed'
              )
            }

            console.log(
              'Payment verified:',
              verifyData
            )

            // -------------------------------------------------
            // Payment successful
            // -------------------------------------------------

            alert(
              'Payment successful! You are now enrolled in the course.'
            )

            // You can change this later to your
            // course learning page
            window.location.href = `/my-courses`
          } catch (error: any) {
            console.error(
              'Payment verification error:',
              error
            )

            setError(
              error.message ||
                'Payment verification failed'
            )
          } finally {
            setProcessing(false)
          }
        },

        // -----------------------------------------------------
        // Modal closed
        // -----------------------------------------------------

        modal: {
          ondismiss: function () {
            console.log(
              'Razorpay payment window closed'
            )

            setProcessing(false)
          },
        },
      }

      // -------------------------------------------------------
      // Open Razorpay
      // -------------------------------------------------------

      const razorpay =
        new window.Razorpay(options)

      razorpay.on(
        'payment.failed',
        function (response: any) {
          console.error(
            'Razorpay payment failed:',
            response
          )

          setError(
            response.error?.description ||
              'Payment failed'
          )

          setProcessing(false)
        }
      )

      razorpay.open()
    } catch (error: any) {
      console.error(
        'Payment initialization error:',
        error
      )

      setError(
        error.message ||
          'Unable to start payment'
      )

      setProcessing(false)
    }
  }

  // =========================================================
  // 4. Loading
  // =========================================================

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 p-10">
        Loading checkout...
      </main>
    )
  }

  // =========================================================
  // 5. Course not found
  // =========================================================

  if (!course) {
    return (
      <main className="min-h-screen bg-gray-50 p-10">
        <p className="text-red-600">
          {error || 'Course not found'}
        </p>
      </main>
    )
  }

  // =========================================================
// 6. Checkout UI
// =========================================================

return (
  <main className="min-h-screen bg-slate-50">
    {/* Top Back Bar */}
    <div className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Course
        </button>
      </div>
    </div>

    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-14">

      {/* Header */}
      <div className="mb-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
          <ShieldCheck className="h-4 w-4" />
          Secure Checkout
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Complete Your Enrollment
        </h1>

        <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-600">
          Review your course details and complete your payment to start
          learning.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.35fr_0.8fr]">

        {/* LEFT — Course Details */}
        <div className="space-y-6">

          {/* Course Card */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

            <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-7 py-8 sm:px-9">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
                <BookOpen className="h-4 w-4" />
                {course.course_categories?.name || 'Training Program'}
              </div>

              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {course.title}
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                {course.description}
              </p>
            </div>

            {/* Course Info */}
            <div className="grid gap-4 p-6 sm:grid-cols-3 sm:p-8">

              <div className="rounded-2xl bg-slate-50 p-5">
                <Clock className="mb-3 h-5 w-5 text-blue-600" />

                <p className="text-sm text-slate-500">
                  Duration
                </p>

                <p className="mt-1 font-bold text-slate-900">
                  {course.duration_hours
                    ? `${course.duration_hours} Hours`
                    : 'Self Paced'}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <Users className="mb-3 h-5 w-5 text-blue-600" />

                <p className="text-sm text-slate-500">
                  Delivery
                </p>

                <p className="mt-1 font-bold capitalize text-slate-900">
                  {course.delivery_mode || 'Online'}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <BookOpen className="mb-3 h-5 w-5 text-blue-600" />

                <p className="text-sm text-slate-500">
                  Level
                </p>

                <p className="mt-1 font-bold capitalize text-slate-900">
                  {course.level || 'Beginner'}
                </p>
              </div>

            </div>
          </section>

          {/* Enrollment Includes */}
          <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">

            <div className="mb-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                What You Get
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                Enrollment Includes
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                <div>
                  <p className="font-semibold text-slate-900">
                    Full Course Access
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Access all published lessons included in the course.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                <div>
                  <p className="font-semibold text-slate-900">
                    Flexible Learning
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Learn at your own pace and continue where you left off.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                <div>
                  <p className="font-semibold text-slate-900">
                    Video & PDF Materials
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Learn through available video, PDF and written content.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                <div>
                  <p className="font-semibold text-slate-900">
                    Progress Tracking
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Your lesson completion and course progress are tracked.
                  </p>
                </div>
              </div>

            </div>
          </section>

        </div>

        {/* RIGHT — Order Summary */}
        <aside>
          <div className="sticky top-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">

            {/* Summary Header */}
            <div className="border-b border-slate-200 bg-slate-50 px-7 py-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <CreditCard className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-950">
                    Order Summary
                  </h2>

                  <p className="text-sm text-slate-500">
                    Review your enrollment
                  </p>
                </div>
              </div>
            </div>

            <div className="p-7">

              {/* Course */}
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm text-slate-500">
                    Course
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {course.title}
                  </p>
                </div>

                <div className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {course.course_categories?.name || 'Course'}
                </div>
              </div>

              <div className="my-6 border-t border-slate-200" />

              {/* Price */}
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-500">
                    Total Payable
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    One-time course fee
                  </p>
                </div>

                <div className="text-3xl font-bold text-blue-700">
                  ₹
                  {Number(
                    course.price || 0
                  ).toLocaleString('en-IN')}
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  {error}
                </div>
              )}

              {/* Payment Button */}
              <Button
                className="mt-7 h-14 w-full rounded-2xl bg-slate-950 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
                onClick={handleProceedToPayment}
                disabled={processing}
              >
                {processing
                  ? 'Processing...'
                  : 'Proceed to Secure Payment'}
              </Button>

              {/* Security */}
              <div className="mt-5 flex items-start gap-3 rounded-2xl bg-emerald-50 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                <div>
                  <p className="text-sm font-semibold text-emerald-800">
                    Secure Payment
                  </p>

                  <p className="mt-1 text-xs leading-5 text-emerald-700">
                    Your payment is securely processed through Razorpay.
                  </p>
                </div>
              </div>

              <p className="mt-5 text-center text-xs leading-5 text-slate-500">
                By proceeding, you agree to complete the purchase for this
                training program.
              </p>

            </div>
          </div>
        </aside>

      </div>
    </div>
  </main>
)

  
}