'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Clock, Users, Award, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

export default function CourseDetailPage() {
 const params = useParams()
const router = useRouter()
const slug = params.slug as string

const [course, setCourse] = useState<any>(null)
const [loading, setLoading] = useState(true)
const [isPurchased, setIsPurchased] = useState(false)

 
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`/api/courses/${slug}`)
        if (!response.ok) throw new Error('Course not found')
       const data = await response.json()
setCourse(data)
setIsPurchased(data.is_purchased === true)
      } catch (error) {
        console.error('Error fetching course:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCourse()
  }, [slug])

 if (loading) {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-10 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-6 md:col-span-2">
            <div className="h-80 animate-pulse rounded-[32px] bg-slate-200" />

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="h-32 animate-pulse rounded-3xl bg-slate-200" />
              <div className="h-32 animate-pulse rounded-3xl bg-slate-200" />
              <div className="h-32 animate-pulse rounded-3xl bg-slate-200" />
            </div>

            <div className="h-64 animate-pulse rounded-[28px] bg-slate-200" />
          </div>

          <div className="md:col-span-1">
            <div className="h-[520px] animate-pulse rounded-[32px] bg-slate-200" />
          </div>
        </div>
      </div>
    </main>
  )
}

  if (!course) {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container mx-auto flex min-h-[70vh] items-center justify-center px-4 py-12 md:px-6">
        <div className="w-full max-w-lg rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-xl sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-3xl">
            📚
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            Course Unavailable
          </p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
            Course Not Found
          </h1>

          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-600">
            The course you’re looking for may have been removed or is
            currently unavailable.
          </p>

          <Link href="/courses" className="mt-7 inline-block">
            <Button className="h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 font-semibold shadow-lg shadow-blue-500/20 hover:from-blue-700 hover:to-indigo-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Back Button */}
<div className="border-b border-slate-200 bg-white">
  <div className="container mx-auto max-w-7xl px-4 py-4 md:px-6">
    <Link href="/courses">
      <Button
        variant="ghost"
        className="group rounded-xl px-3 font-semibold text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900"
      >
        <ArrowLeft
          className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
        />
        Back to Courses
      </Button>
    </Link>
  </div>
</div>
     
         <div className="container mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-10 md:grid-cols-3 md:gap-10">
          
    {/* Main Content */}
    <div className="min-w-0 md:col-span-2">
            {/* Course Image */}
            <section className="relative mb-8 overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-8 shadow-xl sm:p-10 md:p-14">

  {/* Decorative Background */}
  <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

  <div className="relative z-10">


    <span className="inline-flex items-center rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-100 shadow-sm backdrop-blur">
  {course.course_categories?.name || 'Training Program'}
</span>
   

    <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
  {course.title}
</h1>

<p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl">
  {course.description}
</p>

    
    <div className="mt-7 flex flex-wrap items-center gap-3">
  <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200 backdrop-blur">
    {course.level || 'All Levels'}
  </span>

  <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200 backdrop-blur">
    {course.delivery_mode || 'Online'}
  </span>

  <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200 backdrop-blur">
    {course.duration_hours
      ? `${course.duration_hours} Hours`
      : 'Self Paced'}
  </span>
</div>

  </div>

</section>
         

            {/* Title and Meta */}

            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
  <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50">
      <Clock className="h-5 w-5 text-blue-600" />
    </div>

    <p className="text-sm font-medium text-slate-500">
      Duration
    </p>

    <h3 className="mt-1 text-xl font-bold text-slate-900">
      {course.duration_hours
        ? `${course.duration_hours} Hours`
        : 'Self Paced'}
    </h3>
  </div>

  <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50">
      <Users className="h-5 w-5 text-indigo-600" />
    </div>

    <p className="text-sm font-medium text-slate-500">
      Delivery Mode
    </p>

    <h3 className="mt-1 text-xl font-bold capitalize text-slate-900">
      {course.delivery_mode || 'Online'}
    </h3>
  </div>

  <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50">
      <Award className="h-5 w-5 text-amber-600" />
    </div>

    <p className="text-sm font-medium text-slate-500">
      Skill Level
    </p>

    <h3 className="mt-1 text-xl font-bold capitalize text-slate-900">
      {course.level || 'All Levels'}
    </h3>
  </div>
</div>
            
            
        

            {/* Description */}
            <section className="mb-8 rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
  <div className="mb-6 flex items-start gap-4">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl">
      📘
    </div>

    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
        Course Overview
      </p>

      <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        About This Course
      </h2>
    </div>
  </div>

  <p className="max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
    {course.description || 'This course is designed to help learners build practical knowledge and skills through structured learning.'}
  </p>
</section>

<section className="mb-8 rounded-[28px] border border-slate-200 bg-white p-7 shadow-md shadow-slate-200/50 sm:p-9">
  <div className="mb-7 flex items-start gap-4">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-xl">
      🎯
    </div>

    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
        What You’ll Learn
      </p>

      <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Learning Objectives
      </h2>
    </div>
  </div>

  <div className="grid gap-3">
    {course.learning_objectives?.split('\n').map((item: string, index: number) => (
      <div
        key={index}
        className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-colors hover:bg-blue-50/60"
      >
        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
          ✓
        </div>

        <span className="pt-0.5 text-base leading-7 text-slate-700">
          {item}
        </span>
      </div>
    ))}
  </div>
</section>

<section className="mb-8 rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
  <div className="mb-7 flex items-start gap-4">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-xl">
      📚
    </div>

    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">
        Course Structure
      </p>

      <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Modules Covered
      </h2>
    </div>
  </div>

  <div className="grid gap-3 sm:grid-cols-2">
    {course.modules_covered?.split('\n').map((item: string, index: number) => (
      <div
        key={index}
        className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all hover:-translate-y-0.5 hover:border-purple-100 hover:bg-purple-50/50"
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-sm font-bold text-purple-700">
          {index + 1}
        </div>

        <span className="pt-1 text-sm font-medium leading-6 text-slate-700">
          {item}
        </span>
      </div>
    ))}
  </div>
</section>




<section className="mb-8 rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
  <div className="flex items-start gap-4">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-xl">
      🎓
    </div>

    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
        Before You Begin
      </p>

      <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Prerequisites
      </h2>

      <p className="mt-4 text-base leading-8 text-slate-600">
        {course.prerequisites || 'No prerequisites required'}
      </p>
    </div>
  </div>
</section>


<section className="mb-8 rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
  <div className="flex items-start gap-4">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-xl">
      🏆
    </div>

    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Evaluation
      </p>

      <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Assessment Method
      </h2>

      <p className="mt-4 text-base leading-8 text-slate-600">
        {course.assessment_method || 'Assessment details will be shared during the course.'}
      </p>
    </div>
  </div>
</section>


            {/* Trainer Info */}
            <section className="mb-8 overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-7 text-white shadow-xl shadow-slate-300/40 sm:p-9">
  <div className="mb-8 flex items-start gap-4">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-xl ring-1 ring-white/10">
      🏢
    </div>

    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
        Training Delivery Partner
      </p>

      <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
        Creek Learning Solutions
      </h2>
    </div>
  </div>

  <p className="max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
    This training program is delivered by Creek Learning Solutions,
    a trusted corporate learning partner helping organizations build
    future-ready workforces through customized training solutions.
  </p>

  <div className="mt-8 grid gap-3 sm:grid-cols-3">
    <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
      <p className="text-3xl font-extrabold">25+</p>
      <p className="mt-1 text-sm text-blue-100">
        Years Experience
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
      <p className="text-3xl font-extrabold">2+ Lakh</p>
      <p className="mt-1 text-sm text-blue-100">
        Professionals Trained
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
      <p className="text-3xl font-extrabold">Pan India</p>
      <p className="mt-1 text-sm text-blue-100">
        Training Delivery
      </p>
    </div>
  </div>
</section>
          
</div>

          {/* Sidebar */}
          <aside className="order-first min-w-0 md:order-last md:col-span-1">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60 md:sticky md:top-6 md:self-start">
              {/* Price */}

          {isPurchased ? (
  <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50 p-7 text-center">
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl shadow-sm">
      ✓
    </div>

    <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
      Course Access
    </p>

    <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
      You’re Enrolled
    </h3>

    <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-600">
      You have full access to this course.
    </p>
  </div>
) : (
  <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-7 text-center">
    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
      Program Fee
    </p>

    <div className="mt-3 text-5xl font-extrabold tracking-tight text-slate-950">
      ₹{Number(course.price || 0).toLocaleString('en-IN')}
    </div>

    <p className="mt-2 text-sm text-slate-500">
      One-time course fee
    </p>
  </div>
)}
        

              {/* Enroll Button */}

<Button
  size="lg"
  className={
    isPurchased
      ? "h-14 w-full rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 text-lg font-bold shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-emerald-700 hover:to-green-700 hover:shadow-xl"
      : "h-14 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-lg font-bold shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl"
  }
  onClick={() => {
    if (isPurchased) {
      router.push(`/courses/${course.slug}/learn`)
    } else {
      router.push(`/courses/${course.slug}/checkout`)
    }
  }}
>
  {isPurchased ? '✓ Continue Learning' : 'Buy Course'}
</Button>


              {/* Category */}
              {/* Category */}
<div className="border-t border-slate-200 pt-6">
  <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
    Category
  </p>

  <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
    {course.course_categories?.name || 'General'}
  </div>
</div>

{/* Contact Trainer */}
<div className="border-t border-slate-200 pt-6">
  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-xl">
    💬
  </div>

  <h4 className="text-lg font-bold tracking-tight text-slate-900">
    Need More Information?
  </h4>

  <p className="mt-3 text-sm leading-7 text-slate-600">
    Speak with our learning consultants to discuss customized
    training solutions for your team and organization.
  </p>

  <Link href="/contact" className="mt-5 block">
    <Button
      variant="outline"
      className="h-12 w-full rounded-2xl border-slate-300 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
    >
      Contact Our Team
    </Button>
  </Link>
</div>
           
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
