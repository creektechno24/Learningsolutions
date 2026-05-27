'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { CourseForm } from '@/components/course-form'
import { Spinner } from '@/components/ui/spinner'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'

export default function EditCoursePage() {
  const [course, setCourse] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const params = useParams()
  const courseId = params.id as string

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
        console.error('[v0] Error fetching course:', err)
        setError(err instanceof Error ? err.message : 'Failed to load course')
      } finally {
        setLoading(false)
      }
    }

    if (courseId) {
      fetchCourse()
    }
  }, [courseId])

  const handleSubmit = () => {
    router.push('/dashboard/trainer/courses')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/trainer/courses">
          <Button variant="outline" size="sm">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Edit Course</h1>
          <p className="text-gray-600 mt-1">Update course details and settings</p>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {course && (
        <div className="bg-white rounded-lg border p-6">
          <CourseForm
            courseId={courseId}
            initialData={course}
            onSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  )
}
