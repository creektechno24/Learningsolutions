'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { createClient } from '@/lib/supabase/client'

import {
  signUp,
  createTrainerProfile,
} from '@/lib/supabase/auth'

import {
  Briefcase,
  Loader2,
  Phone,
  BadgeCheck,
  CalendarRange,
  Sparkles,
  Linkedin,
  FileText,
} from "lucide-react";

export default function TrainerProfilePage() {

  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [signupData, setSignupData] = useState<any>(null)

  const [formData, setFormData] = useState({
    phone: '',
    designation: '',
    yearsOfExperience: '',
    expertise: '',
    linkedin: '',
    bio: '',
  })

  useEffect(() => {
    const data = sessionStorage.getItem('trainer-signup')

    if (!data) {
      router.push('/auth/sign-up')
      return
    }

    setSignupData(JSON.parse(data))
  }, [router])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault()

  if (!signupData) {
    setError('Signup data not found')
    return
  }

  setLoading(true)
  setError(null)

  try {
    let userId: string

    // -----------------------------------------
    // 1. Existing user
    // -----------------------------------------

    if (signupData.existingUser) {
      const supabase = (await import('@/lib/supabase/client'))
        .createClient()

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser()

      if (userError || !user) {
        setError(
          'Please login before submitting your trainer application.'
        )
        return
      }

      // Make sure logged-in email matches signup email
      if (
        user.email?.trim().toLowerCase() !==
        signupData.email.trim().toLowerCase()
      ) {
        setError(
          'The logged-in email does not match the trainer application email.'
        )
        return
      }

      userId = user.id
    }

    // -----------------------------------------
    // 2. New user
    // -----------------------------------------

    else {
      const result = await signUp({
        email: signupData.email,
        password: signupData.password,
        userType: 'trainer',
        firstName: signupData.firstName,
        lastName: signupData.lastName,
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

      userId = user.id
    }


    // -----------------------------------------
// 3. Check for existing trainer application
// -----------------------------------------

const supabase = createClient()

const {
  data: existingTrainerProfile,
  error: existingTrainerError,
} = await supabase
  .from('trainer_profiles')
  .select('id, status')
  .eq('id', userId)
  .maybeSingle()

if (existingTrainerError) {
  console.error(
    'Existing trainer profile check error:',
    existingTrainerError
  )

  setError(
    'Unable to check existing trainer application.'
  )

  return
}

if (existingTrainerProfile) {
  setError(
    'You already have a trainer application.'
  )

  return
}

    // -----------------------------------------
    // 3. Create trainer profile
    // -----------------------------------------

    const trainerProfile = await createTrainerProfile(
      userId,
      {
        firstName: signupData.firstName,
        lastName: signupData.lastName,
        email: signupData.email,

        phone: formData.phone,
        designation: formData.designation,

        yearsOfExperience: Number(
          formData.yearsOfExperience
        ),

        linkedin: formData.linkedin,

        bio: formData.bio,

        expertise: formData.expertise
          .split(',')
          .map((item) => item.trim())
          .filter(Boolean),
      }
    )

    if (trainerProfile.error) {
      setError(trainerProfile.error)
      return
    }

    // Clear signup information
    sessionStorage.removeItem('trainer-signup')

    router.push('/auth/sign-up-success')

  } catch (error) {
    console.error('Trainer application error:', error)

    setError('Something went wrong')
  } finally {
    setLoading(false)
  }
}
 


    
      return (
  
  <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-12">

    <div className="w-full max-w-6xl">

      <div className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-12 shadow-xl">

      <div className="mb-12 text-center">

  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
    <Briefcase className="h-8 w-8 text-blue-700" />
  </div>

  <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
    Step 2 of 2
  </span>

  <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
    Complete Your Professional Profile
  </h1>

  <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-600">
    Tell us about your professional background so enterprises can better understand your expertise.
  </p>

</div>

      {error && (
  <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-4">
    <p className="font-semibold text-red-700">
      Something went wrong
    </p>

    <p className="mt-1 text-sm text-red-600">
      {error}
    </p>
  </div>
)}

<div className="mb-8">

  <div className="mb-4 flex items-center gap-3">

    <div className="h-px flex-1 bg-slate-200" />

    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
      Professional Details
    </span>

    <div className="h-px flex-1 bg-slate-200" />

  </div>

  <p className="text-center text-sm leading-6 text-slate-500">
    Tell us about your experience, expertise, and professional background.
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
      Phone Number
    </label>

    <div className="relative">

  <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

  <Input
    name="phone"
    value={formData.phone}
    onChange={handleInputChange}
    placeholder="+91 9876543210"
    className="h-14 rounded-2xl border-slate-300 bg-white pl-12"
  />

</div>
  </div>

  <div>
    <label className="mb-2 block text-sm font-semibold text-slate-700">
      Current Designation
    </label>

   <div className="relative">

  <BadgeCheck className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

  <Input
    name="designation"
    value={formData.designation}
    onChange={handleInputChange}
    placeholder="Corporate Trainer"
    className="h-14 rounded-2xl border-slate-300 bg-white pl-12"
  />

</div>
  </div>

</div>

       

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-semibold text-slate-700">
      Years of Experience
    </label>

<div className="relative">

  <CalendarRange className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

  <Input
    name="yearsOfExperience"
    type="number"
    value={formData.yearsOfExperience}
    onChange={handleInputChange}
    placeholder="10"
    className="h-14 rounded-2xl border-slate-300 bg-white pl-12"
  />

</div>
  
  </div>

  <div>
    <label className="mb-2 block text-sm font-semibold text-slate-700">
      LinkedIn Profile
    </label>

   <div className="relative">

  <Linkedin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

  <Input
    name="linkedin"
    value={formData.linkedin}
    onChange={handleInputChange}
    placeholder="https://linkedin.com/in/your-profile"
    className="h-14 rounded-2xl border-slate-300 bg-white pl-12"
  />

</div>
  </div>

</div>

      <div>

  <label className="mb-2 block text-sm font-semibold text-slate-700">
    Primary Expertise
  </label>

 <div className="relative">

  <Sparkles className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

  <Input
    name="expertise"
    value={formData.expertise}
    onChange={handleInputChange}
    placeholder="Leadership, Soft Skills, Project Management"
    className="h-14 rounded-2xl border-slate-300 bg-white pl-12"
  />

</div>

  <p className="mt-2 text-sm text-slate-500">
    Separate multiple skills with commas.
  </p>

</div>

       <div>

  <label className="mb-2 block text-sm font-semibold text-slate-700">
    Professional Bio
  </label>

 <div className="relative">

  <FileText className="absolute left-4 top-5 h-5 w-5 text-slate-400" />

  <Textarea
    name="bio"
    value={formData.bio}
    onChange={handleInputChange}
    rows={6}
    placeholder="Tell us about your professional background, training expertise, certifications, industries you've worked with, and the value you bring to enterprise clients."
    className="resize-none rounded-2xl border-slate-300 bg-white pl-12"
  />

</div>

  <p className="mt-2 text-sm text-slate-500">
    A clear and concise bio helps enterprises understand your expertise.
  </p>

</div>

<div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">

  <h3 className="text-sm font-semibold text-slate-900">
    Application Summary
  </h3>

  <p className="mt-2 text-sm leading-6 text-slate-600">
    Your account will be created and your trainer profile will be submitted
    for admin review. You'll receive access once your application is approved.
  </p>

</div>

    <Button
  type="submit"
  disabled={loading}
  className="group mt-4 flex h-14 w-full items-center justify-center rounded-2xl bg-slate-900 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-2xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
>
  {loading ? (
    <>
      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
      Submitting...
    </>
  ) : (
    <>
      Submit Application
      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </>
  )}
</Button>

      </form>
      </div>

    </div>
  </div>
  </div>
  
)
    
  
}