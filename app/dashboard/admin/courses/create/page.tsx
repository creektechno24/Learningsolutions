'use client'

import { useRouter } from 'next/navigation'
import { CourseForm } from '@/components/course-form'

export default function CreateCoursePage() {
  const router = useRouter()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Create Course
        </h1>

        <p className="text-gray-600">
          Add a new training program
        </p>
      </div>

      <div className="bg-white rounded-xl border p-6">
        <CourseForm
          onSubmit={() => {
            router.push('/dashboard/admin/courses')
          }}
        />
      </div>
    </div>
  )
}