'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { signUp } from '@/lib/supabase/auth'

function SignUpPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const redirect = searchParams.get('redirect')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setError(null)

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    setLoading(true)

    try {
      const result = await signUp({
        email: formData.email,
        password: formData.password,
        userType: 'learner',
        firstName: formData.firstName,
        lastName: formData.lastName,
      })

      if (result.error) {
        setError(result.error)
        return
      }

      alert('Account created successfully. Please login.')

      // Preserve checkout URL
      const loginUrl = redirect
        ? `/auth/login?redirect=${encodeURIComponent(redirect)}`
        : '/auth/login'

      router.push(loginUrl)

    } catch (error) {
      console.error('Signup error:', error)
      setError('Unable to create account. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">

          <div className="text-center mb-8">

            <h1 className="text-3xl font-bold text-slate-900">
              Create Your Account
            </h1>

            <p className="mt-3 text-slate-500">
              Create an account to enroll in courses.
            </p>

          </div>

          {error && (
            <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            <div className="grid grid-cols-2 gap-4">

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  First Name
                </label>

                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  placeholder="First name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Last Name
                </label>

                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  placeholder="Last name"
                />
              </div>

            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Email
              </label>

              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Password
              </label>

              <Input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={loading}
                placeholder="Create password"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Confirm Password
              </label>

              <Input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                disabled={loading}
                placeholder="Confirm password"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="h-14 w-full rounded-2xl bg-slate-900 text-base font-semibold text-white hover:bg-blue-700"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>

          </form>

          <div className="mt-6 text-center text-sm text-slate-600">

            Already have an account?{' '}

            <Link
              href={
                redirect
                  ? `/auth/login?redirect=${encodeURIComponent(redirect)}`
                  : '/auth/login'
              }
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Login
            </Link>

          </div>

        </div>

      </div>

    </div>
  )
}


export default function SignUpPage() {
  return (
    <Suspense fallback={null}>
      <SignUpPageContent />
    </Suspense>
  )
}