'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import {
  signUp,
  createTrainerProfile,
  createEnterpriseProfile,
  type UserType,
} from '@/lib/supabase/auth'

export default function SignUpPage() {
  const router = useRouter()

  const [userType, setUserType] = useState<UserType | null>(null)

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    companyName: '',
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

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return false
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return false
    }

    if (userType === 'trainer') {
      if (
        !formData.firstName ||
        !formData.lastName
      ) {
        setError(
          'First name and last name are required for trainers'
        )

        return false
      }
    }

    if (userType === 'enterprise') {
      if (!formData.companyName) {
        setError(
          'Company name is required for enterprises'
        )

        return false
      }
    }

    return true
  }

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    setError(null)

    if (!userType) {
      setError('Please select a user type')
      return
    }

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      /* ---------------- SIGNUP ---------------- */

      const result = await signUp({
        email: formData.email,
        password: formData.password,
        userType,

        firstName: formData.firstName,
        lastName: formData.lastName,

        companyName: formData.companyName,
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

      /* ---------------- TRAINER PROFILE ---------------- */

      if (userType === 'trainer') {
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
      }

      /* ---------------- ENTERPRISE PROFILE ---------------- */

      if (userType === 'enterprise') {
        const enterpriseProfile =
          await createEnterpriseProfile(
            user.id,
            {
              companyName:
                formData.companyName,

              email: formData.email,
            }
          )

        if (enterpriseProfile.error) {
          setError(enterpriseProfile.error)
          return
        }
      }

      /* ---------------- SUCCESS ---------------- */

      router.push('/auth/sign-up-success')
    } catch (error) {
      setError('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  /* ---------------- USER TYPE SCREEN ---------------- */

  if (!userType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Create Account
            </h1>

            <p className="text-center text-gray-600 mb-8">
              What type of account would you
              like to create?
            </p>

            <div className="space-y-4">
              <button
                onClick={() =>
                  setUserType('trainer')
                }
                className="w-full p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  I&apos;m a Trainer
                </h3>

                <p className="text-sm text-gray-600">
                  Share your expertise and
                  create courses
                </p>
              </button>

              <button
                onClick={() =>
                  setUserType('enterprise')
                }
                className="w-full p-6 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  I&apos;m from an Enterprise
                </h3>

                <p className="text-sm text-gray-600">
                  Find trainers and manage
                  training inquiries
                </p>
              </button>
            </div>

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

  /* ---------------- SIGNUP FORM ---------------- */

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <button
            onClick={() => setUserType(null)}
            className="text-sm text-gray-600 hover:text-gray-900 mb-4"
          >
            ← Back
          </button>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {userType === 'trainer'
              ? 'Join as Trainer'
              : 'Join as Enterprise'}
          </h1>

          <p className="text-gray-600 mb-8">
            {userType === 'trainer'
              ? 'Create your trainer account'
              : 'Create your enterprise account'}
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
            {/* EMAIL */}

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

            {/* TRAINER */}

            {userType === 'trainer' && (
              <div className="grid grid-cols-2 gap-4">
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
              </div>
            )}

            {/* ENTERPRISE */}

            {userType === 'enterprise' && (
              <div>
                <label className="block text-sm font-medium mb-2">
                  Company Name
                </label>

                <Input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}

            {/* PASSWORD */}

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

            {/* CONFIRM PASSWORD */}

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
        </div>
      </div>
    </div>
  )
}