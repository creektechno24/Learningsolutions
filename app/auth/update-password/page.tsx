'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { updatePassword } from '@/lib/supabase/auth'
import { Eye, EyeOff, Lock } from 'lucide-react'

export default function UpdatePasswordPage() {
  const router = useRouter()

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [showPassword, setShowPassword] = useState(false)
const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setError('')
    setSuccess('')

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    setLoading(true)

    const result = await updatePassword(password)

    if (result.error) {
      setError(result.error)
    } else {
      setSuccess('Password updated successfully.')

      setTimeout(() => {
        router.push('/auth/login')
      }, 1500)
    }

    setLoading(false)
  }

  return (

<div className="relative min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center p-8">

<div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[120px]" />

<div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-400/20 blur-[120px]" />
    <div className="w-full max-w-xl rounded-3xl bg-white p-10 shadow-2xl border border-slate-200">
 
<div className="flex flex-col px-10 py-10">

  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-700 shadow-xl">
    <Lock className="h-9 w-9 text-white" />
  </div>

  <span className="mx-auto mt-6 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
    Secure Password Reset
  </span>

   <h1 className="mt-6 text-center text-[42px] font-bold text-slate-900">
    Create New Password
  </h1>

<p className="mx-auto mt-3 max-w-md text-center text-lg leading-8 text-slate-500">
        Create a strong password to keep your LearningSolutions account secure.
  </p>


       

        {error && (
          <div className="mt-5 rounded-lg bg-red-50 border border-red-200 p-3 text-red-700">
            {error}
          </div>
        )}

        {success && (
          <div className="mt-5 rounded-lg bg-green-50 border border-green-200 p-3 text-green-700">
            {success}
          </div>
        )}

       <form
  onSubmit={handleSubmit}
  className="mt-10 space-y-6"
>

            <div>

  <label className="mb-2 block text-sm font-semibold text-slate-700">
    New Password
  </label>

  <div className="relative">

    <Input
      type={showPassword ? 'text' : 'password'}
      placeholder="Enter your new password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="h-16 rounded-2xl border-slate-300 bg-slate-50 px-5 pr-14 text-base shadow-sm transition-all focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
    >
      {showPassword ? (
        <EyeOff className="h-5 w-5" />
      ) : (
        <Eye className="h-5 w-5" />
      )}
    </button>

  </div>

</div>

<div className="mt-3">

  <div className="h-2 overflow-hidden rounded-full bg-slate-200">

    <div
      className={`h-full rounded-full transition-all duration-500 ${
        password.length >= 8
          ? 'w-full bg-green-500'
          : password.length >= 6
          ? 'w-2/3 bg-yellow-500'
          : 'w-1/3 bg-red-500'
      }`}
    />

  </div>

  <p className="mt-2 text-sm font-medium text-slate-500">

    {password.length >= 8
      ? 'Strong Password'
      : password.length >= 6
      ? 'Medium Password'
      : 'Weak Password'}

  </p>

</div>
    

       <div>

  <label className="mb-2 block text-sm font-semibold text-slate-700">
    Confirm Password
  </label>

  <div className="relative">

    <Input
      type={showConfirmPassword ? 'text' : 'password'}
      placeholder="Re-enter your password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      className="h-16 rounded-2xl border-slate-300 bg-slate-50 px-5 pr-14 text-base shadow-sm transition-all focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
    />

    <button
      type="button"
      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
    >
      {showConfirmPassword ? (
        <EyeOff className="h-5 w-5" />
      ) : (
        <Eye className="h-5 w-5" />
      )}
    </button>

  </div>

</div>

<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

  <div className="mb-4 flex items-center justify-between">

    <h3 className="text-sm font-bold text-slate-900">
      Password Requirements
    </h3>

    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
      Security
    </span>

  </div>

  <div className="grid gap-3">

    <div className="flex items-center gap-3">

      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-600">
        ✓
      </div>

      <span className="text-sm text-slate-700">
        Minimum 8 characters
      </span>

    </div>

    <div className="flex items-center gap-3">

      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-600">
        ✓
      </div>

      <span className="text-sm text-slate-700">
        At least one uppercase letter
      </span>

    </div>

    <div className="flex items-center gap-3">

      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-600">
        ✓
      </div>

      <span className="text-sm text-slate-700">
        At least one lowercase letter
      </span>

    </div>

    <div className="flex items-center gap-3">

      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-600">
        ✓
      </div>

      <span className="text-sm text-slate-700">
        At least one number
      </span>

    </div>

  </div>

</div>

        <Button
  type="submit"
  disabled={loading}
  className="
    group
    h-16
    w-full
    rounded-2xl
    bg-slate-900
    text-lg
    font-semibold
    text-white
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:bg-blue-700
    hover:shadow-2xl
    disabled:opacity-60
    disabled:cursor-not-allowed
  "
>
  {loading ? (
    "Updating Password..."
  ) : (
    <span className="flex items-center justify-center gap-2">
      Update Password
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </span>
  )}
</Button>
        </form>
        </div>

      </div>
    </div>
  )
}