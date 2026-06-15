'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import {
  signUp,
  createTrainerProfile,
} from '@/lib/supabase/auth'

export default function SignUpPage() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError('Email and password are required')
      return false
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setError('Passwords do not match')
      return false
    }

    if (formData.password.length < 6) {
      setError(
        'Password must be at least 6 characters'
      )
      return false
    }

    if (
      !formData.firstName ||
      !formData.lastName
    ) {
      setError(
        'First name and last name are required'
      )
      return false
    }

    return true
  }

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    setError(null)

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      const result = await signUp({
        email: formData.email,
        password: formData.password,
        userType: 'trainer',

        firstName: formData.firstName,
        lastName: formData.lastName,
      })

      if (result.error) {
        setError(result.error)
        return
      }

      const user = result.data?.user

      if (!user) {
        setError('User creation failed')
        return
      }

      const trainerProfile =
        await createTrainerProfile(
          user.id,
          {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
          }
        )

      if (trainerProfile.error) {
        setError(trainerProfile.error)
        return
      }

      router.push(
        '/auth/sign-up-success'
      )
    } catch (error) {
      setError('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Join as Trainer
          </h1>

          <p className="text-gray-600 mb-8">
            Create your trainer account
          </p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            <div>
              <label className="block text-sm font-medium mb-2">
                First Name
              </label>

              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Last Name
              </label>

              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>

              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Password
              </label>

              <Input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Confirm Password
              </label>

              <Input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading
                ? 'Creating Account...'
                : 'Create Account'}
            </Button>
          </form>

          <p className="text-center text-gray-600 mt-8">
            Already have an account?{' '}
            <Link
              href="/auth/login"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Sign in
            </Link>
          </p>

        </div>
      </div>
    </div>
  )
}