'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Award, Mail, Phone, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { CourseCard } from '@/components/course-card'

export default function TrainerDetailPage() {
const params = useParams()

console.log('PARAMS =>', params)

const slug = params.slug as string

console.log('SLUG =>', slug)
  
  const [trainer, setTrainer] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTrainer = async () => {
      try {
        const response = await fetch(`/api/trainers/${slug}`)
        if (!response.ok) throw new Error('Trainer not found')
       const result = await response.json()

console.log( result)

setTrainer(result.data)
      } catch (error) {
        console.error('Error fetching trainer:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTrainer()
  }, [slug])

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 py-12">Loading...</div>
      </main>
    )
  }

  if (!trainer) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <Link href="/trainers">
            <Button variant="ghost">
              <ArrowLeft className="mr-2" size={20} />
              Back to Trainers
            </Button>
          </Link>
          <div className="mt-8 bg-white rounded-lg p-12 text-center">
            <p className="text-gray-600 text-lg">Trainer not found</p>
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
          <Link href="/trainers">
            <Button variant="ghost">
              <ArrowLeft className="mr-2" size={20} />
              Back to Trainers
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Profile Section */}
        <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 p-10 shadow-2xl">
      <div className="relative z-10">

  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">

    {/* LEFT SIDE */}

    <div className="w-full lg:w-[280px] flex justify-center">

      <div className="relative h-60 w-60 overflow-hidden rounded-[32px] border-[6px] border-white bg-slate-700 shadow-[0_25px_60px_rgba(0,0,0,0.35)]">

        {trainer.profile_image_url ? (
          <Image
            src={trainer.profile_image_url}
            alt={`${trainer.first_name} ${trainer.last_name}`}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700">
            <span className="text-6xl font-bold text-white">
              {trainer.first_name?.charAt(0)}
              {trainer.last_name?.charAt(0)}
            </span>
          </div>
        )}

      </div>

    </div>

    {/* RIGHT SIDE */}

    <div className="flex-1">

      <span className="inline-flex rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200">
        Corporate Trainer
      </span>

      <h1 className="mt-5 text-5xl font-bold tracking-tight text-white">
        {trainer.first_name} {trainer.last_name}
      </h1>

      <p className="mt-3 text-2xl text-slate-300">
        {trainer.designation}
      </p>

      {trainer.qualification && (
        <p className="mt-2 text-lg text-slate-400">
          {trainer.qualification}
        </p>
      )}

      {trainer.is_verified && (
        <div className="mt-5 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-emerald-300">
          <Award className="mr-2 h-5 w-5" />
          Verified Trainer
        </div>
      )}

      {trainer.bio && (
        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          {trainer.bio}
        </p>
      )}

      <div className="mt-8 flex flex-wrap gap-4">

        {trainer.email && (
          <a href={`mailto:${trainer.email}`}>
            <Button
              size="lg"
              className="rounded-xl bg-white px-8 text-slate-900 hover:bg-slate-100"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
          </a>
        )}

        {trainer.phone && (
          <a href={`tel:${trainer.phone}`}>
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl border-white/30 bg-transparent px-8 text-white hover:bg-white/10"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Trainer
            </Button>
          </a>
        )}

      </div>

            {/* Stats */}

      <div className="mt-12 grid grid-cols-2 gap-5 border-t border-white/10 pt-10 lg:grid-cols-4">

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
          <p className="text-4xl font-bold text-white">
            {trainer.years_of_experience || 0}+
          </p>
          <p className="mt-2 text-sm text-slate-300">
            Years Experience
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
          <p className="text-4xl font-bold text-white">
            {trainer.courses?.length || 0}
          </p>
          <p className="mt-2 text-sm text-slate-300">
            Training Programs
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
          <p className="text-4xl font-bold text-white">
            {trainer.specializations
              ? trainer.specializations.split(",").length
              : 0}
          </p>
          <p className="mt-2 text-sm text-slate-300">
            Specializations
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
          <p className="text-4xl font-bold text-white">
            {trainer.expertise?.length || 0}
          </p>
          <p className="mt-2 text-sm text-slate-300">
            Expertise Areas
          </p>
        </div>

      </div>

    </div>

  </div>

</div>
        </div>


  

   {/* Expertise */}

<div className="mb-12 rounded-[36px] border border-slate-200 bg-white p-10 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">

  <div className="flex items-center justify-between">

    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
        EXPERTISE
      </p>

      <h2 className="mt-2 text-4xl font-bold text-slate-900">
        Areas of Expertise
      </h2>

      <p className="mt-3 max-w-2xl text-slate-600">
        Specialized corporate training domains delivered by this trainer.
      </p>
    </div>

    <div className="hidden h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 lg:flex">
      <Award className="h-10 w-10 text-blue-700" />
    </div>

  </div>

  <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">

    {trainer.expertise?.map((skill: string, index: number) => (

      <div
        key={index}
        className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-white hover:shadow-lg"
      >

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            ✓
          </div>

          <p className="font-semibold text-slate-800">
            {skill}
          </p>

        </div>

      </div>

    ))}

  </div>

</div>


{/* Professional Profile */}

<div className="mb-12 overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)]">

  {/* Header */}

  <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 px-10 py-8">

    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-200">
      PROFESSIONAL PROFILE
    </p>

    <h2 className="mt-3 text-4xl font-bold text-white">
      Trainer Credentials
    </h2>

    <p className="mt-3 max-w-3xl text-slate-300">
      Professional background, certifications, industries served,
      delivery methodology and client experience.
    </p>

  </div>

  <div className="grid gap-8 p-10 lg:grid-cols-2">

    {trainer.certifications && (
      <div className="group rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 transition-all hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white text-2xl">
          🏆
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          Certifications
        </h3>

        <p className="mt-4 whitespace-pre-line leading-8 text-slate-600">
          {trainer.certifications}
        </p>

      </div>
    )}

    {trainer.specializations && (
      <div className="group rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 transition-all hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white text-2xl">
          🎯
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          Core Specializations
        </h3>

        <p className="mt-4 whitespace-pre-line leading-8 text-slate-600">
          {trainer.specializations}
        </p>

      </div>
    )}

    {trainer.industries_served && (
      <div className="group rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 transition-all hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white text-2xl">
          🏢
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          Industries Served
        </h3>

        <p className="mt-4 whitespace-pre-line leading-8 text-slate-600">
          {trainer.industries_served}
        </p>

      </div>
    )}

    {trainer.methodology && (
      <div className="group rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 transition-all hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-white text-2xl">
          🎓
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          Training Methodology
        </h3>

        <p className="mt-4 whitespace-pre-line leading-8 text-slate-600">
          {trainer.methodology}
        </p>

      </div>
    )}

  </div>

  {(trainer.awards || trainer.testimonials) && (
    <div className="border-t border-slate-200 bg-slate-50 p-10">

      <div className="grid gap-8 lg:grid-cols-2">

        {trainer.awards && (
          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h3 className="mb-5 text-2xl font-bold text-slate-900">
              🏅 Awards & Recognition
            </h3>

            <p className="whitespace-pre-line leading-8 text-slate-600">
              {trainer.awards}
            </p>

          </div>
        )}

        {trainer.testimonials && (
          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h3 className="mb-5 text-2xl font-bold text-slate-900">
              💬 Client Testimonials
            </h3>

            <p className="italic leading-8 text-slate-600">
              {trainer.testimonials}
            </p>

          </div>
        )}

      </div>

      {trainer.linkedin && (

        <div className="mt-10 text-center">

          <a
            href={trainer.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="rounded-2xl bg-slate-900 px-10 hover:bg-blue-700"
            >
              View LinkedIn Profile
            </Button>
          </a>

        </div>

      )}

    </div>
  )}

</div>

{/* Training Programs */}

{trainer.courses && trainer.courses.length > 0 && (

<div className="mb-12">

  {/* Header */}

  <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

    <div>

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
        TRAINING PORTFOLIO
      </p>

      <h2 className="mt-2 text-4xl font-bold text-slate-900">
        Training Programs
      </h2>

      <p className="mt-3 max-w-2xl text-lg text-slate-600">
        Discover instructor-led corporate training programs designed for
        enterprises and professionals.
      </p>

    </div>

    <div className="rounded-3xl border border-blue-100 bg-blue-50 px-8 py-6">

      <p className="text-sm uppercase tracking-wider text-slate-500">
        Total Programs
      </p>

      <h3 className="mt-2 text-4xl font-bold text-blue-700">
        {trainer.courses.length}
      </h3>

    </div>

  </div>

  {/* Cards */}

  <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

    {trainer.courses.map((course: any) => (

      <div
        key={course.id}
        className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >

        <div className="relative h-56 overflow-hidden">

          {course.thumbnail_url ? (

            <Image
              src={course.thumbnail_url}
              alt={course.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-110"
            />

          ) : (

            <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-700">

              <span className="text-6xl text-white">
                📘
              </span>

            </div>

          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-5 left-5">

            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              Enterprise Training
            </span>

          </div>

        </div>

        <div className="p-8">

          <h3 className="line-clamp-2 text-2xl font-bold text-slate-900">
            {course.title}
          </h3>

          <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
            {course.description}
          </p>

          <div className="mt-8 flex items-center justify-between border-t pt-6">

            <div>

              <p className="text-sm text-slate-500">
                Training Mode
              </p>

              <p className="font-semibold text-slate-900">
                Online / Classroom
              </p>

            </div>

            <Link href={`/courses/${course.slug}`}>

              <Button className="rounded-xl px-6">
                View Details
              </Button>

            </Link>

          </div>

        </div>

      </div>

    ))}

  </div>

</div>

)}
       
        {/* Bottom CTA */}

<div className="mt-16 overflow-hidden rounded-[36px] bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 px-10 py-14">

  <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">

    <div>

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
        CORPORATE LEARNING
      </p>

      <h2 className="mt-3 text-4xl font-bold text-white">
        Ready to Train Your Team?
      </h2>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
        Connect with this trainer to schedule instructor-led workshops,
        enterprise learning programs, and customized corporate training.
      </p>

    </div>

    <div className="flex flex-wrap justify-center gap-4">

      {trainer.email && (
        <a href={`mailto:${trainer.email}`}>
          <Button
            size="lg"
            className="rounded-2xl bg-white px-8 text-slate-900 hover:bg-slate-100"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Trainer
          </Button>
        </a>
      )}

      {trainer.phone && (
        <a href={`tel:${trainer.phone}`}>
          <Button
            size="lg"
            variant="outline"
            className="rounded-2xl border-white/30 bg-transparent px-8 text-white hover:bg-white/10"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </Button>
        </a>
      )}

    </div>

  </div>

</div>
      </div>
    </main>
  )
}
