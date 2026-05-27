'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export default function SignUpSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">Account Created!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for signing up. Please check your email to confirm your account.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-blue-900">
              We&apos;ve sent you a confirmation email. Click the link in the email to verify your account and get started.
            </p>
          </div>

          <div className="space-y-3">
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
              <Link href="/">Back to Home</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/courses">Browse Courses</Link>
            </Button>
          </div>

          <p className="text-sm text-gray-600 mt-6">
            Didn&apos;t receive an email?{' '}
            <button className="text-blue-600 hover:text-blue-700 font-semibold">Resend</button>
          </p>
        </div>
      </div>
    </div>
  )
}
