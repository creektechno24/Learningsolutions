'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'

export default function CoursesManagement() {
  const [courses, setCourses] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

    const { toast } = useToast()

  useEffect(() => {
    fetchCourses()
  }, [])

  const fetchCourses = async () => {

    try {
      const response = await fetch('/api/admin/courses')
      const data = await response.json()
      console.log(data)

      setCourses(data)
    } catch (error) {
      console.error('Error fetching courses:', error)
    } finally {
      setLoading(false)
    }
  }

  const togglePublish = async (
  id: string,
  currentStatus: boolean
) => {
  try {
    const response = await fetch(
      `/api/admin/courses/${id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          is_published: !currentStatus,
        }),
      }
    )

    if (!response.ok) {
      throw new Error('Failed')
    }

    fetchCourses()
  } catch (error) {
    console.error(error)
  }
}

  const handleDelete = async (id: string) => {
  const confirmed = window.confirm(
    'Are you sure you want to delete this course?'
  )

  if (!confirmed) return

  try {
    const response = await fetch(
      `/api/admin/courses/${id}`,
      {
        method: 'DELETE',
      }
    )

    if (!response.ok) {
      throw new Error('Failed to delete course')
    }

    toast({
      title: 'Success',
      description: 'Course deleted successfully',
    })

    fetchCourses()
  } catch (error) {
    console.error(error)

    toast({
      variant: 'destructive',
      title: 'Error',
      description: 'Failed to delete course',
    })
  }
}

  return (
    <div className="space-y-6">
     <div className="flex items-center justify-between">

  <div>
    <h1 className="text-3xl font-bold mb-2">
      Courses Management
    </h1>

    <p className="text-gray-600">
      Create and manage all training programs
    </p>
  </div>

  <Link href="/dashboard/admin/courses/create">
    <Button>
      + Add New Course
    </Button>
  </Link>

</div>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell className="font-medium">{course.title}</TableCell>
             
               <TableCell>
  {course.course_categories?.name || 'N/A'}
</TableCell>
                <TableCell>
                  <Badge variant="outline">{course.level}</Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={course.is_published ? 'default' : 'secondary'}
                  >
                    {course.is_published ? 'Published' : 'Draft'}
                  </Badge>
                </TableCell>
                <TableCell>
                  {course.rating ? `${course.rating.toFixed(1)} ★` : 'N/A'}
                </TableCell>
               <TableCell>
  <div className="flex gap-2">

    <Link href={`/dashboard/admin/courses/edit/${course.id}`}>
      <Button size="sm" variant="outline">
        Edit
      </Button>
    </Link>

    <Button
  size="sm"
  variant="destructive"
  onClick={() => handleDelete(course.id)}
>
  Delete
</Button>

<Button
  size="sm"
  variant={
    course.is_published
      ? 'secondary'
      : 'default'
  }
  onClick={() =>
    togglePublish(
      course.id,
      course.is_published
    )
  }
>
  {course.is_published
    ? 'Unpublish'
    : 'Publish'}
</Button>

  </div>
</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {courses.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-500">No courses found</p>
        </div>
      )}
    </div>
  )
}
