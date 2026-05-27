'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'

export default function CoursesListPage() {
  const [courses, setCourses] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const { toast } = useToast()

  const fetchCourses = async () => {
    try {
      const response = await fetch('/api/trainer/courses')

      if (!response.ok) {
        const err = await response.json()
        throw new Error(err.error || 'Failed to fetch courses')
      }

      const data = await response.json()
      setCourses(data)
    } catch (err) {
      console.error('[v0] Error fetching courses:', err)
      setError(err instanceof Error ? err.message : 'Failed to load courses')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  const handleTogglePublish = async (courseId: string, isPublished: boolean) => {
    try {
      const response = await fetch(`/api/trainer/courses/${courseId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          is_published: !isPublished,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to update course')
      }

      setCourses(
        courses.map((c) =>
          c.id === courseId ? { ...c, is_published: !isPublished } : c
        )
      )

      toast({
        description: !isPublished ? 'Course published' : 'Course unpublished',
      })
    } catch (err) {
      console.error('[v0] Error updating course:', err)
      toast({
        description: 'Failed to update course',
        variant: 'destructive',
      })
    }
  }

  const handleDelete = async (courseId: string) => {
    if (!confirm('Are you sure you want to delete this course?')) return

    try {
      const response = await fetch(`/api/trainer/courses/${courseId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete course')
      }

      setCourses(courses.filter((c) => c.id !== courseId))
      toast({
        description: 'Course deleted successfully',
      })
    } catch (err) {
      console.error('[v0] Error deleting course:', err)
      toast({
        description: 'Failed to delete course',
        variant: 'destructive',
      })
    }
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Courses</h1>
          <p className="text-gray-600 mt-2">Manage and publish your courses</p>
        </div>
        <Link href="/dashboard/trainer/courses/create">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create Course
          </Button>
        </Link>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {courses.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <p className="text-gray-600 mb-4">You haven&apos;t created any courses yet</p>
          <Link href="/dashboard/trainer/courses/create">
            <Button>Create Your First Course</Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg border p-6 flex items-center justify-between"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{course.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{course.description}</p>
                <div className="flex gap-4 mt-4 text-sm">
                  <span className="text-gray-500">
                    Duration: {course.duration_hours || 'N/A'} hours
                  </span>
                  <span className="text-gray-500">Level: {course.level}</span>
                  <span className="text-gray-500">
                    {course.is_published ? (
                      <span className="text-green-600 font-medium">Published</span>
                    ) : (
                      <span className="text-yellow-600 font-medium">Draft</span>
                    )}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    handleTogglePublish(course.id, course.is_published)
                  }
                  className="p-2 hover:bg-gray-100 rounded"
                  title={course.is_published ? 'Unpublish' : 'Publish'}
                >
                  {course.is_published ? (
                    <Eye className="w-5 h-5 text-green-600" />
                  ) : (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                <Link href={`/dashboard/trainer/courses/${course.id}/edit`}>
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <Edit className="w-5 h-5 text-blue-600" />
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(course.id)}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <Trash2 className="w-5 h-5 text-red-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
