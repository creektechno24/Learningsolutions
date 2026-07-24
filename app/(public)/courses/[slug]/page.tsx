'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Clock, Users, Award, Mail, Phone, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function CourseDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const [course, setCourse] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`/api/courses/${slug}`)
        if (!response.ok) throw new Error('Course not found')
        const data = await response.json()
        setCourse(data)
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
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 py-12">Loading...</div>
      </main>
    )
  }

  if (!course) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <Link href="/courses">
            <Button variant="ghost">
              <ArrowLeft className="mr-2" size={20} />
              Back to Courses
            </Button>
          </Link>
          <div className="mt-8 bg-white rounded-lg p-12 text-center">
            <p className="text-gray-600 text-lg">Course not found</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <Link href="/courses">
            <Button variant="ghost">
              <ArrowLeft className="mr-2" size={20} />
              Back to Courses
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Course Image */}
           <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-10 md:p-14 mb-10">

  <div className="relative z-10">

    <span className="inline-flex px-4 py-2 rounded-full bg-white/10 text-blue-100 text-sm mb-6">
      {course.course_categories?.name || 'Training Program'}
    </span>

    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
      {course.title}
    </h1>

    <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
      {course.description}
    </p>

  </div>

</section>

            {/* Title and Meta */}
            
            
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

  <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
    <div className="flex items-center gap-3 mb-3">
      <Clock className="w-6 h-6 text-blue-600" />
      <span className="text-slate-500 text-sm">
        Duration
      </span>
    </div>

    <h3 className="text-2xl font-bold text-slate-900">
      {course.duration} 
    </h3>
  </div>

 <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
  <div className="flex items-center gap-3 mb-3">
    <Users className="w-6 h-6 text-blue-600" />
    <span className="text-slate-500 text-sm">
      Delivery Mode
    </span>
  </div>

  <h3 className="text-2xl font-bold text-slate-900 capitalize">
    {course.delivery_mode}
  </h3>
</div>

  <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
    <div className="flex items-center gap-3 mb-3">
      <Award className="w-6 h-6 text-blue-600" />
      <span className="text-slate-500 text-sm">
        Skill Level
      </span>
    </div>

    <h3 className="text-2xl font-bold text-slate-900 capitalize">
      {course.level}
    </h3>
  </div>

</div>

            {/* Description */}
<div className="bg-white rounded-[32px] border border-slate-200 p-8 md:p-10 mb-8">
  <div className="flex items-center gap-3 mb-6">

    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
      A
    </div>

    <h2 className="text-3xl font-bold text-slate-900">
      About This Course
    </h2>

  </div>

  <div className="space-y-6">

    <p className="text-lg text-slate-700 leading-8">
      {course.description}
    </p>

    {course.long_description && (
      <p className="text-slate-600 leading-8">
        {course.long_description}
      </p>
    )}

  </div>

</div>

<div className="bg-white rounded-[32px] border border-slate-200 p-8 md:p-10 mb-8">

  <h2 className="text-3xl font-bold text-slate-900 mb-8">
    Learning Objectives
  </h2>

  <div className="space-y-3">
    {course.learning_objectives?.split('\n').map((item: string, index: number) => (
      <div
        key={index}
        className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50"
      >
        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
        <span>{item}</span>
      </div>
    ))}
  </div>

</div>

<div className="bg-white rounded-[32px] border border-slate-200 p-8 md:p-10 mb-8">

  <h2 className="text-3xl font-bold text-slate-900 mb-8">
    Modules Covered
  </h2>

  <div className="space-y-3">
    {course.modules_covered?.split('\n').map((item: string, index: number) => (
      <div
        key={index}
        className="p-4 rounded-2xl bg-slate-50"
      >
        {item}
      </div>
    ))}
  </div>

</div>


<div className="bg-white rounded-[32px] border border-slate-200 p-8 md:p-10 mb-8">

  <h2 className="text-3xl font-bold text-slate-900 mb-6">
    Prerequisites
  </h2>

  <p className="text-slate-700 leading-8">
    {course.prerequisites || 'No prerequisites required'}
  </p>

</div>

<div className="bg-white rounded-[32px] border border-slate-200 p-8 md:p-10 mb-8">

  <h2 className="text-3xl font-bold text-slate-900 mb-6">
    Assessment Method
  </h2>

  <p className="text-slate-700 leading-8">
    {course.assessment_method}
  </p>

</div>
            {/* Trainer Info */}
           <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 rounded-[32px] p-8 md:p-10 text-white mb-8">

  <span className="inline-flex px-4 py-2 rounded-full bg-white/10 text-blue-100 text-sm mb-6">
    Training Delivery Partner
  </span>
 

  <h3 className="text-3xl font-bold mb-4">
    Creek Learning Solutions
  </h3>

  <p className="text-slate-300 leading-8 mb-8">
    This training program is delivered by Creek Learning Solutions,
    a trusted corporate learning partner helping organizations build
    future-ready workforces through customized training solutions.
  </p>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-white/10 rounded-2xl p-5">
      <h4 className="text-3xl font-bold">25+</h4>
      <p className="text-blue-100">
        Years Experience
      </p>
    </div>

    <div className="bg-white/10 rounded-2xl p-5">
      <h4 className="text-3xl font-bold">2+ Lakh</h4>
      <p className="text-blue-100">
        Professionals Trained
      </p>
    </div>

    <div className="bg-white/10 rounded-2xl p-5">
      <h4 className="text-3xl font-bold">Pan India</h4>
      <p className="text-blue-100">
        Training Delivery
      </p>
    </div>

  </div>

</div>
</div>

          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="bg-white rounded-[32px] border border-slate-200 p-8 sticky top-6 space-y-8 shadow-sm">
              {/* Price */}
            <div className="text-center">

  <p className="text-sm uppercase tracking-wider text-slate-500 mb-2">
    Program Fee
  </p>

  <div className="text-5xl font-bold text-blue-700">
    ${course.price?.toFixed(0) || '99'}
  </div>

</div>

              {/* Enroll Button */}
             <Button
  size="lg"
  className="w-full h-14 rounded-2xl text-lg"
>
  Request Training
</Button>


              {/* Category */}
              <div className="border-t pt-6">
                <p className="text-sm text-gray-600 mb-2">Category</p>
                <div className="inline-flex px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold">
  {course.course_categories?.name || 'General'}
</div>
              </div>

              {/* Contact Trainer */}
              <div className="border-t pt-6">

  <h4 className="text-lg font-bold text-slate-900 mb-3">
    Need More Information?
  </h4>

  <p className="text-slate-600 leading-7 mb-5">
    Speak with our learning consultants to discuss customized
    training solutions for your team and organization.
  </p>

  <Link href="/contact">
    <Button
      variant="outline"
      className="w-full rounded-2xl h-12"
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
