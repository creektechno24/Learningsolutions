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
        throw new Error('Failed to update course status')
      }

      toast({
        title: currentStatus
          ? 'Course unpublished'
          : 'Course published',
        description: currentStatus
          ? 'The course is now saved as a draft.'
          : 'The course is now live for learners.',
      })

      fetchCourses()
    } catch (error) {
      console.error(error)

      toast({
        variant: 'destructive',
        title: 'Unable to update course',
        description:
          error instanceof Error
            ? error.message
            : 'Failed to update course status',
      })
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

      const data = await response.json()

      if (!response.ok) {
        toast({
          variant: 'destructive',
          title: 'Cannot delete course',
          description:
            data.error || 'Failed to delete course',
        })

        return
      }

      toast({
        title: 'Course deleted',
        description: 'Course deleted successfully.',
      })

      fetchCourses()
    } catch (error) {
      console.error(error)

      toast({
        variant: 'destructive',
        title: 'Unable to delete course',
        description:
          error instanceof Error
            ? error.message
            : 'Failed to delete course',
      })
    }
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Course Administration
            </p>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Courses Management
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Create, organize, publish and manage your training programs.
          </p>
        </div>

        <Link href="/dashboard/admin/courses/create">
          <Button className="h-11 rounded-xl bg-slate-950 px-5 font-semibold shadow-sm transition hover:bg-slate-800">
            + Add New Course
          </Button>
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Total Courses
          </p>

          <p className="mt-2 text-3xl font-bold text-slate-950">
            {courses.length}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            All training programs
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Published
          </p>

          <p className="mt-2 text-3xl font-bold text-slate-950">
            {
              courses.filter(
                (course) => course.is_published
              ).length
            }
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Currently visible to learners
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Drafts
          </p>

          <p className="mt-2 text-3xl font-bold text-slate-950">
            {
              courses.filter(
                (course) => !course.is_published
              ).length
            }
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Courses still being prepared
          </p>
        </div>
      </div>

      {/* Courses Table Card */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-6 py-5">
          <div>
            <h2 className="text-lg font-bold text-slate-950">
              All Courses
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage course details, content and publishing status.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-100 bg-slate-50/70 hover:bg-slate-50/70">
                <TableHead className="h-12 whitespace-nowrap px-6 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Course
                </TableHead>

                <TableHead className="h-12 whitespace-nowrap text-xs font-bold uppercase tracking-wider text-slate-500">
                  Category
                </TableHead>

                <TableHead className="h-12 whitespace-nowrap text-xs font-bold uppercase tracking-wider text-slate-500">
                  Level
                </TableHead>

                <TableHead className="h-12 whitespace-nowrap text-xs font-bold uppercase tracking-wider text-slate-500">
                  Status
                </TableHead>

                <TableHead className="h-12 whitespace-nowrap text-xs font-bold uppercase tracking-wider text-slate-500">
                  Rating
                </TableHead>

<TableHead className="h-12 whitespace-nowrap pr-6 text-xs font-bold uppercase tracking-wider text-slate-500">
  Actions
</TableHead>
               
              </TableRow>
            </TableHeader>

            <TableBody>
              {courses.map((course) => (
                <TableRow
                  key={course.id}
                  className="border-slate-100 transition hover:bg-slate-50/60"
                >
                  {/* Course */}
                  <TableCell className="px-6 py-5">
                    <div className="min-w-[180px]">
                      <p className="font-semibold text-slate-900">
                        {course.title}
                      </p>

                      {course.course_code && (
                        <p className="mt-1 text-xs text-slate-400">
                          {course.course_code}
                        </p>
                      )}
                    </div>
                  </TableCell>

                  {/* Category */}
                  <TableCell>
                    <span className="text-sm font-medium text-slate-600">
                      {course.course_categories?.name || 'N/A'}
                    </span>
                  </TableCell>

                  {/* Level */}
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="rounded-full border-slate-200 bg-slate-50 px-3 py-1 font-medium text-slate-600"
                    >
                      {course.level}
                    </Badge>
                  </TableCell>

                  {/* Status */}
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`rounded-full px-3 py-1 font-semibold ${
                        course.is_published
                          ? 'border-green-200 bg-green-50 text-green-700'
                          : 'border-amber-200 bg-amber-50 text-amber-700'
                      }`}
                    >
                      <span
                        className={`mr-1.5 inline-block h-1.5 w-1.5 rounded-full ${
                          course.is_published
                            ? 'bg-green-600'
                            : 'bg-amber-500'
                        }`}
                      />

                      {course.is_published
                        ? 'Published'
                        : 'Draft'}
                    </Badge>
                  </TableCell>

                  {/* Rating */}
                  <TableCell>
                    <span className="text-sm font-medium text-slate-600">
                      {course.rating
                        ? `${course.rating.toFixed(1)} ★`
                        : 'N/A'}
                    </span>
                  </TableCell>

                  {/* Actions */}
                  <TableCell className="pr-6">
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <Link
                        href={`/dashboard/admin/courses/edit/${course.id}`}
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-9 rounded-lg border-slate-200 px-3 font-medium hover:bg-slate-50"
                        >
                          Edit
                        </Button>
                      </Link>

                      <Link
                        href={`/dashboard/admin/courses/${course.id}/content`}
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-9 rounded-lg border-slate-200 px-3 font-medium hover:bg-slate-50"
                        >
                          Manage Content
                        </Button>
                      </Link>

                      <Button
                        size="sm"
                        variant="outline"
                        className="h-9 rounded-lg border-red-200 px-3 font-medium text-red-600 hover:bg-red-50 hover:text-red-700"
                        onClick={() =>
                          handleDelete(course.id)
                        }
                      >
                        Delete
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                        className={`h-9 rounded-lg px-3 font-medium ${
                          course.is_published
                            ? 'border-amber-200 text-amber-700 hover:bg-amber-50'
                            : 'border-green-200 text-green-700 hover:bg-green-50'
                        }`}
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

        {/* Empty State */}
        {courses.length === 0 && !loading && (
          <div className="px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
              <span className="text-xl">📚</span>
            </div>

            <h3 className="mt-4 text-base font-semibold text-slate-900">
              No courses yet
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Create your first training program to get started.
            </p>

            <Link
              href="/dashboard/admin/courses/create"
              className="mt-5 inline-block"
            >
              <Button className="rounded-xl bg-slate-950 px-5 hover:bg-slate-800">
                + Create Course
              </Button>
            </Link>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="px-6 py-12 text-center">
            <div className="mx-auto h-6 w-6 animate-spin rounded-full border-2 border-slate-200 border-t-slate-900" />

            <p className="mt-3 text-sm text-slate-500">
              Loading courses...
            </p>
          </div>
        )}
      </div>
    </div>
  )
}