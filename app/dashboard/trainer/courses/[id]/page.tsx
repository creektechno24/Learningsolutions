'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { Spinner } from '@/components/ui/spinner'

export default function CourseDetailsPage() {
  const params = useParams()

  const courseId = params.id as string

  const [course, setCourse] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`/api/trainer/courses/${courseId}`)

        if (!response.ok) {
          throw new Error('Failed to fetch course')
        }

        const data = await response.json()

        setCourse(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load course')
      } finally {
        setLoading(false)
      }
    }

    if (courseId) {
      fetchCourse()
    }
  }, [courseId])

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <Spinner />
      </div>
    )
  }

  if (error) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-4">
      <p className="text-red-700">{error}</p>
    </div>
  )
}

if (!course) {
  return null
}

return (
  <div className="mx-auto max-w-5xl space-y-8">

    {/* Back Button */}
    <Link
      href="/dashboard/trainer/courses"
      className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600"
    >
      <ChevronLeft className="h-4 w-4" />
      Back to Courses
    </Link>

    {/* Header */}
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="flex items-start justify-between">

  <div className="flex-1">

    <div className="flex items-center gap-3">

      <h1 className="text-4xl font-bold text-slate-900">
        {course.title}
      </h1>

      <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
        Published
      </span>

    </div>

    <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
      {course.description || "No description available."}
    </p>

  </div>

</div>

<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

  <div className="rounded-2xl border bg-white p-6 shadow-sm">
    <p className="text-sm text-slate-500">Category</p>

    <h3 className="mt-2 text-lg font-semibold">
      {course.course_categories?.name || "General"}
    </h3>
  </div>

  <div className="rounded-2xl border bg-white p-6 shadow-sm">
    <p className="text-sm text-slate-500">Level</p>

    <h3 className="mt-2 text-lg font-semibold capitalize">
      {course.level}
    </h3>
  </div>

  <div className="rounded-2xl border bg-white p-6 shadow-sm">
    <p className="text-sm text-slate-500">Duration</p>

    <h3 className="mt-2 text-lg font-semibold">
      {course.duration_hours || "N/A"} Hours
    </h3>
  </div>

  <div className="rounded-2xl border bg-white p-6 shadow-sm">
    <p className="text-sm text-slate-500">Status</p>

    <h3 className="mt-2 text-lg font-semibold text-green-600">
      Published
    </h3>
  </div>

</div>
    </div>

  </div>
)
}