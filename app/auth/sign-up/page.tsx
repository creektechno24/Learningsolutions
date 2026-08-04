'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import {
  User,
  UserRound,
  Mail,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

import { Eye, EyeOff } from "lucide-react";
import { CheckCircle2, XCircle } from "lucide-react";

export default function SignUpPage() {
  const router = useRouter()


  const [error, setError] = useState<string | null>(null)

  const [showPassword, setShowPassword] = useState(false);

  
const [showConfirmPassword, setShowConfirmPassword] = useState(false);



  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  })

    const passwordsMatch =
  formData.confirmPassword.length > 0 &&
  formData.password === formData.confirmPassword;

const passwordTooShort =
  formData.password.length > 0 &&
  formData.password.length < 6;

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

   try {
  sessionStorage.setItem(
    "trainer-signup",
    JSON.stringify(formData)
  )

  router.push("/auth/trainer-profile")
} catch (error) {
  setError("Something went wrong")
}
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-6xl">
   <div className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-12 shadow-xl">
    

         <div className="mb-12 text-center">

  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
    <User className="h-8 w-8 text-blue-700" />
  </div>

  <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
    Step 1 of 2
  </span>

  <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
    Join Our Trainer Network
  </h1>

  <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-600">
    Create your trainer account and become part of our trusted network of corporate trainers delivering enterprise learning solutions.
  </p>

</div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

      <div className="mb-8">

  <div className="mb-4 flex items-center gap-3">

    <div className="h-px flex-1 bg-slate-200" />

    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
      Basic Details
    </span>

    <div className="h-px flex-1 bg-slate-200" />

  </div>

  <p className="text-center text-sm leading-6 text-slate-500">
    Enter your personal details to create your trainer account.
  </p>

</div>

    <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-8">

<form
  onSubmit={handleSubmit}
  className="space-y-6"
>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

  <div>
  <label className="mb-2 block text-sm font-semibold text-slate-700">
    First Name
  </label>

  <div className="relative">
<User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />

    <Input
      name="firstName"
      value={formData.firstName}
      onChange={handleInputChange}
      required
      className="h-14 rounded-2xl border-slate-300 bg-slate-50 pl-12"
    />
  </div>
</div>

<div>
  <label className="mb-2 block text-sm font-semibold text-slate-700">
    Last Name
  </label>

  <div className="relative">
    <UserRound className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />

    <Input
      name="lastName"
      value={formData.lastName}
      onChange={handleInputChange}
      required
      className="h-14 rounded-2xl border-slate-300 bg-slate-50 pl-12"
    />
  </div>
</div>
 

</div>

           

           <div>
  <label className="mb-2 block text-sm font-semibold text-slate-700">
    Email
  </label>

  <div className="relative">
    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

    <Input
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      required
      className="h-14 rounded-2xl border-slate-300 bg-slate-50 pl-12"
    />
  </div>
</div>

  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

<div>
  <label className="mb-2 block text-sm font-semibold text-slate-700">
    Password
  </label>

  {/* Relative div only for input */}
  <div className="relative">
    <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />

    <Input
      name="password"
      type={showPassword ? "text" : "password"}
      value={formData.password}
      onChange={handleInputChange}
      className="h-14 rounded-2xl border-slate-300 bg-slate-50 pl-12 pr-12"
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
    >
      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
    </button>
  </div>

  {/* 👇 Validation message OUTSIDE relative div */}
  {formData.password.length > 0 && (
    <div
      className={`mt-3 flex items-center gap-2 text-sm ${
        passwordTooShort ? "text-red-600" : "text-green-600"
      }`}
    >
      {passwordTooShort ? (
        <>
          <XCircle className="h-4 w-4" />
          <span>Password must be at least 6 characters.</span>
        </>
      ) : (
        <>
          <CheckCircle2 className="h-4 w-4" />
          <span>Strong password</span>
        </>
      )}
    </div>
  )}
</div>

 <div>
  <label className="mb-2 block text-sm font-semibold text-slate-700">
    Confirm Password
  </label>

  <div className="relative">
    <ShieldCheck className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

    <Input
      name="confirmPassword"
      type={showConfirmPassword ? "text" : "password"}
      value={formData.confirmPassword}
      onChange={handleInputChange}
      required
      className="h-14 rounded-2xl border-slate-300 bg-slate-50 pl-12 pr-12 text-base shadow-sm transition-all duration-200 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
    />

    <button
      type="button"
      onClick={() =>
        setShowConfirmPassword(!showConfirmPassword)
      }
      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
    >
      {showConfirmPassword ? (
        <EyeOff className="h-5 w-5" />
      ) : (
        <Eye className="h-5 w-5" />
      )}
    </button>
  </div>

 {formData.confirmPassword.length > 0 && (
  <div
    className={`mt-2 flex items-center gap-2 text-sm ${
      passwordsMatch
        ? "text-green-600"
        : "text-red-600"
    }`}
  >
    {passwordsMatch ? (
      <>
        <CheckCircle2 className="h-4 w-4" />
        <span>Passwords match</span>
      </>
    ) : (
      <>
        <XCircle className="h-4 w-4" />
        <span>Passwords do not match</span>
      </>
    )}
  </div>
)}
</div>

</div>

    <Button
  type="submit"
  className="group mt-8 flex h-14 w-full items-center justify-center rounded-2xl bg-slate-900 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-2xl active:translate-y-0"
>
  Continue

  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</Button>

          </form>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6 text-center">

  <p className="text-sm text-slate-500">
    Already have an account?{" "}
    <Link
      href="/auth/login"
      className="font-semibold text-blue-600 transition hover:text-blue-700"
    >
      Sign in
    </Link>
  </p>

</div>

         
</div>
        </div>
      </div>
    
  )
}