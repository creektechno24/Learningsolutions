'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Spinner } from '@/components/ui/spinner'
import { useRouter } from 'next/navigation'
import { BookOpen } from 'lucide-react'

export default function CoursesListPage() {
  const [courses, setCourses] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

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
          <p className="text-gray-600 mt-2">
  Browse all published training courses.
</p>
        </div>
       
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {courses.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <p className="text-gray-600 mb-4">You haven&apos;t created any courses yet</p>
         
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {courses.map((course) => (
           <div
  key={course.id}
  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
> 
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{course.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{course.description}</p>
                <div className="grid grid-cols-2 gap-4 border-t pt-4 mt-4">

  <div>
    <p className="text-xs uppercase tracking-wide text-slate-500">
      Duration
    </p>

    <p className="font-medium text-slate-900">
      {course.duration_hours || "N/A"} Hours
    </p>
  </div>

  <div>
    <p className="text-xs uppercase tracking-wide text-slate-500">
      Level
    </p>

    <p className="font-medium capitalize text-slate-900">
      {course.level}
    </p>
  </div>

</div>
              </div>

             <div className="flex items-center">
  <BookOpen className="w-6 h-6 text-blue-600" />
</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
