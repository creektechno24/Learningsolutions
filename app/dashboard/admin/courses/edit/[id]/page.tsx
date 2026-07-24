'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { CourseForm } from '@/components/course-form'

export default function EditCoursePage() {
  const params = useParams()
  const router = useRouter()

  const id = params.id as string

  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(
          `/api/admin/courses/${id}`
        )

        if (!response.ok) {
          throw new Error('Failed to fetch course')
        }

        const data = await response.json()

        setCourse(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchCourse()
    }
  }, [id])

  if (loading) {
    return (
      <div className="p-6">
        Loading...
      </div>
    )
  }

  if (!course) {
    return (
      <div className="p-6">
        Course not found
      </div>
    )
  }

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Edit Course
        </h1>

        <p className="text-gray-600">
          Update course information
        </p>
      </div>

      <div className="bg-white rounded-xl border p-6">
        <CourseForm
          courseId={id}
          initialData={course}
          onSubmit={() => {
            router.push(
              '/dashboard/admin/courses'
            )
          }}
        />
      </div>

    </div>
  )
}