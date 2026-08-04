'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { login } from '@/lib/supabase/auth'
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  LockKeyhole,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const result = await login({
        email: formData.email,
        password: formData.password,
      })

      if (result.error) {
        setError(result.error)
      } else {
        router.push('/dashboard')
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[120px]" />

<div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-400/20 blur-[120px]" />
      <div className="w-full max-w-md">
        <div className="w-full rounded-3xl border border-slate-200 bg-white p-10 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
          <div className="text-center mb-10">

  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-700 shadow-xl">
    <Lock className="h-9 w-9 text-white" />
  </div>

  <span className="mt-6 inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
    Secure Login
  </span>

  <h1 className="mt-6 text-4xl font-bold text-slate-900">
    Welcome Back
  </h1>

  <p className="mt-3 text-slate-500 leading-7">
    Sign in to access your LearningSolutions trainer account.
  </p>

</div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                Email
              </label>
             <div className="relative">

  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />

  <Input
    id="email"
    name="email"
    type="email"
    placeholder="Enter your email address"
    value={formData.email}
    onChange={handleInputChange}
    required
    disabled={loading}
    className="h-14 rounded-2xl border-slate-300 bg-slate-50 pl-12 pr-4"
  />

</div>
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-semibold text-slate-700">
                Password
              </label>
              <div className="relative">
                <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
  <Input
    id="password"
    name="password"
    type={showPassword ? "text" : "password"}
    placeholder="Enter your password"
    value={formData.password}
    onChange={handleInputChange}
    required
    disabled={loading}
    className="h-14 rounded-2xl border-slate-300 bg-slate-50 pl-12 pr-12"
  />

  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
  >
    {showPassword ? (
      <EyeOff className="w-5 h-5" />
    ) : (
      <Eye className="w-5 h-5" />
    )}
  </button>
</div>
            </div>

            <Button type="submit" className="group h-14 w-full rounded-2xl bg-slate-900 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:bg-blue-700 hover:shadow-2xl" disabled={loading}>
              {loading ? (
  "Signing In..."
) : (
  <span className="flex items-center justify-center gap-2">
    Sign In
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </span>
)}
            </Button>
          </form>


         <div className="mt-5 flex items-center justify-between">

  <Link
    href="/auth/forgot-password"
    className="text-sm font-semibold text-blue-600 hover:text-blue-700"
  >
    Forgot Password?
  </Link>

  <p className="text-sm text-slate-600">
    Don't have an account?{" "}
    <Link
      href="/auth/sign-up"
      className="font-semibold text-blue-600 hover:text-blue-700"
    >
      Sign Up
    </Link>
  </p>

</div>
        </div>
      </div>
    </div>
  )
}
