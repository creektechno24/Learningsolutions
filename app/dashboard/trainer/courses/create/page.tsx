'use client'

import { useRouter } from 'next/navigation'
import { CourseForm } from '@/components/course-form'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'

export default function CreateCoursePage() {
  const router = useRouter()

  const handleSubmit = (data: any) => {
    router.push(`/dashboard/trainer/courses/${data.id}/edit`)
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
          <h1 className="text-3xl font-bold">Create New Course</h1>
          <p className="text-gray-600 mt-1">
            Add a new course to your portfolio
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-6">
        <CourseForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}
