'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import VideoUploader from '@/components/admin/video-uploader'
import PdfUploader from '@/components/admin/pdf-uploader'

interface Course {
  id: string
  title: string
}

interface Lesson {
  id: string
  module_id: string
  title: string
  description: string | null
  content: string | null
  video_url: string | null
  pdf_url: string | null
  lesson_order: number
  is_published: boolean
}

interface Module {
  id: string
  course_id: string
  title: string
  description: string | null
  module_order: number
  course_lessons: Lesson[]
}

export default function CourseContentPage() {
  const params = useParams()

  const courseId = params.id as string

  const [course, setCourse] = useState<Course | null>(null)
  const [modules, setModules] = useState<Module[]>([])

  const [loading, setLoading] = useState(true)
  const [showModuleForm, setShowModuleForm] = useState(false)

  const [expandedModules, setExpandedModules] = useState<
  Record<string, boolean>
>({})

  const [moduleTitle, setModuleTitle] = useState('')
  const [moduleDescription, setModuleDescription] = useState('')

  const [saving, setSaving] = useState(false)


  const [showLessonForm, setShowLessonForm] = useState<string | null>(null)

const [lessonTitle, setLessonTitle] = useState('')
const [lessonDescription, setLessonDescription] = useState('')
const [lessonContent, setLessonContent] = useState('')
const [lessonOrder, setLessonOrder] = useState('1')
const [lessonPublished, setLessonPublished] = useState(false)

const [lessonSaving, setLessonSaving] = useState(false)


const [editingLessonId, setEditingLessonId] =
  useState<string | null>(null)

const [deletingLessonId, setDeletingLessonId] =
  useState<string | null>(null)

  const [editModuleId, setEditModuleId] =
  useState<string | null>(null)

  const [lessonVideoUrl, setLessonVideoUrl] =
  useState('')

  const [lessonPdfUrl, setLessonPdfUrl] =
  useState('')

  useEffect(() => {
    fetchCourseContent()
  }, [courseId])

  const fetchCourseContent = async () => {
    try {
      setLoading(true)

      const response = await fetch(
        `/api/admin/courses/${courseId}/content`
      )

      if (!response.ok) {
        throw new Error('Failed to fetch course content')
      }

      const data = await response.json()

      setCourse(data.course)
      const fetchedModules = data.modules || []

setModules(fetchedModules)

setExpandedModules(
  Object.fromEntries(
    fetchedModules.map((module: Module) => [
      module.id,
      true,
    ])
  )
)
    } catch (error) {
      console.error(
        'Course content fetch error:',
        error
      )
    } finally {
      setLoading(false)
    }
  }

  const handleAddModule = async () => {
    if (!moduleTitle.trim()) {
      alert('Module title is required')
      return
    }

    try {
      setSaving(true)

      const response = await fetch(
        `/api/admin/courses/${courseId}/content/modules`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: moduleTitle.trim(),
            description:
              moduleDescription.trim() || null,
            module_order: modules.length + 1,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.error || 'Failed to create module'
        )
      }

      setModules((prev) => [
        ...prev,
        data.module,
      ])

      setModuleTitle('')
      setModuleDescription('')
      setShowModuleForm(false)

    } catch (error) {
      console.error(
        'Add module error:',
        error
      )

      alert(
        error instanceof Error
          ? error.message
          : 'Failed to create module'
      )
    } finally {
      setSaving(false)
    }
  }

  const handleAddLesson = async (moduleId: string) => {
  if (!lessonTitle.trim()) {
    alert('Lesson title is required')
    return
  }

  try {
    setLessonSaving(true)

    const response = await fetch(
      `/api/admin/courses/${courseId}/content/modules/${moduleId}/lessons`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
           body: JSON.stringify({
  title: lessonTitle,
  description: lessonDescription,
  content: lessonContent,
  video_url: lessonVideoUrl || null,
pdf_url: lessonPdfUrl || null,
lesson_order: Number(lessonOrder),
 
  is_published: lessonPublished,
})
    
      }
    )

    const data = await response.json()

    if (!response.ok) {
      throw new Error(
        data.error || 'Failed to create lesson'
      )
    }

   alert('Lesson created successfully')

await fetchCourseContent()

// Reset form
setLessonTitle('')
setLessonDescription('')
setLessonContent('')
setLessonVideoUrl('')
setLessonPdfUrl('')
setLessonOrder('1')
setLessonPublished(true)


  } catch (error) {
    console.error(
      'Add lesson error:',
      error
    )

    alert(
      error instanceof Error
        ? error.message
        : 'Failed to create lesson'
    )
  } finally {
    setLessonSaving(false)
  }
}

const handleUpdateLesson = async () => {
  if (!editingLessonId || !editModuleId) {
    return
  }

  if (!lessonTitle.trim()) {
    alert('Lesson title is required')
    return
  }

  try {
    setLessonSaving(true)

    const response = await fetch(
      `/api/admin/courses/${courseId}/content/modules/${editModuleId}/lessons/${editingLessonId}`,
      { 
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
  title: lessonTitle.trim(),
  description:
    lessonDescription.trim() || null,
  content:
    lessonContent.trim() || null,
 video_url:
  lessonVideoUrl || null,
pdf_url:
  lessonPdfUrl || null,
lesson_order:
  Number(lessonOrder) || 1,
  is_published: lessonPublished,
}),
   
     
      }
    )

    const data = await response.json()

    if (!response.ok) {
      throw new Error(
        data.error || 'Failed to update lesson'
      )
    }

    alert('Lesson updated successfully')

    await fetchCourseContent()

    setEditingLessonId(null)
    setEditModuleId(null)
    setShowLessonForm(null)

    setLessonTitle('')
    setLessonDescription('')
    setLessonContent('')
    setLessonOrder('1')
    setLessonPublished(false)
    setLessonVideoUrl('')

  } catch (error) {
    console.error(
      'Update lesson error:',
      error
    )

    alert(
      error instanceof Error
        ? error.message
        : 'Failed to update lesson'
    )
  } finally {
    setLessonSaving(false)
  }
}

const handleDeleteLesson = async (
  moduleId: string,
  lessonId: string
) => {
  const confirmed = window.confirm(
    'Are you sure you want to delete this lesson?'
  )

  if (!confirmed) return

  try {
    setDeletingLessonId(lessonId)

    const response = await fetch(
      `/api/admin/courses/${courseId}/content/modules/${moduleId}/lessons/${lessonId}`,
      {
        method: 'DELETE',
      }
    )

    const data = await response.json()

    if (!response.ok) {
      throw new Error(
        data.error || 'Failed to delete lesson'
      )
    }

    alert('Lesson deleted successfully')

    await fetchCourseContent()
  } catch (error) {
    console.error(
      'Delete lesson error:',
      error
    )

    alert(
      error instanceof Error
        ? error.message
        : 'Failed to delete lesson'
    )
  } finally {
    setDeletingLessonId(null)
  }
}

  if (loading) {
    return (
      <div className="p-8">
        Loading course content...
      </div>
    )
  }

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            {course?.title || 'Course Content'}
          </h1>

          <p className="mt-2 text-slate-600">
            Manage modules and lessons for this course
          </p>
        </div>

        <Button
          onClick={() =>
            setShowModuleForm((prev) => !prev)
          }
        >
          + Add Module
        </Button>

      </div>

      {/* Add Module Form */}
      {showModuleForm && (
        <div className="rounded-2xl border bg-white p-6 space-y-5">

          <h2 className="text-xl font-semibold">
            Add Module
          </h2>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Module Title
            </label>

            <Input
              value={moduleTitle}
              onChange={(e) =>
                setModuleTitle(e.target.value)
              }
              placeholder="Python Basics"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Description
            </label>

            <Textarea
              value={moduleDescription}
              onChange={(e) =>
                setModuleDescription(
                  e.target.value
                )
              }
              placeholder="Introduction to Python fundamentals"
            />
          </div>

          <div className="flex gap-3">

            <Button
              onClick={handleAddModule}
              disabled={saving}
            >
              {saving
                ? 'Saving...'
                : 'Save Module'}
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                setShowModuleForm(false)
                setModuleTitle('')
                setModuleDescription('')
              }}
            >
              Cancel
            </Button>

          </div>

        </div>
      )}

      {/* Modules */}
<div className="space-y-4">

  {modules.length === 0 ? (
    <div className="rounded-2xl border border-dashed bg-white p-12 text-center">
      <p className="text-slate-500">
        No modules added yet.
      </p>
    </div>
  ) : (
    modules.map((module, index) => (
      <div
  key={module.id}
  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
>
      

        {/* Module Header */}
        <div className="flex flex-col gap-4 border-b border-slate-100 bg-slate-50/60 p-6 sm:flex-row sm:items-start sm:justify-between">

  <div className="flex items-start gap-4">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
      {index + 1}
    </div>

    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
        Module {index + 1}
      </p>

      <h2 className="mt-1 text-xl font-bold text-slate-950">
        {module.title}
      </h2>

      {module.description && (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          {module.description}
        </p>
      )}

      <p className="mt-2 text-xs font-medium text-slate-400">
        {module.course_lessons?.length || 0} lesson
        {(module.course_lessons?.length || 0) !== 1 ? 's' : ''}
      </p>
    </div>
  </div>

  <button
      
  type="button"
  onClick={() => {
    setExpandedModules((prev) => ({
      ...prev,
      [module.id]: !prev[module.id],
    }))
  }}
  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
  aria-label={
    expandedModules[module.id]
      ? 'Collapse module'
      : 'Expand module'
  }
>
  <span className="text-lg">
    {expandedModules[module.id] ? '⌃' : '⌄'}
  </span>
</button>

          <Button
            variant="outline"
            onClick={() => {
  if (showLessonForm === module.id) {
    setShowLessonForm(null)
    return
  }

  setEditingLessonId(null)
  setEditModuleId(null)

  setLessonTitle('')
  setLessonDescription('')
  setLessonContent('')
  setLessonOrder('1')
  setLessonPublished(false)
  setLessonVideoUrl('')

  setShowLessonForm(module.id)
}}
           
          >
            {showLessonForm === module.id
              ? 'Cancel'
              : '+ Add Lesson'}
          </Button>

        </div>

        {/* Lessons */}
{expandedModules[module.id] &&
  module.course_lessons &&
  module.course_lessons.length > 0 && (
    <div className="mt-6 space-y-3">

      <h3 className="text-sm font-semibold text-slate-700">
        Lessons
      </h3>

      {module.course_lessons
        .sort(
          (a, b) =>
            a.lesson_order - b.lesson_order
        )
        .map((lesson) => (
          <div
  key={lesson.id}
  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md"
>
  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

    {/* Lesson Details */}
    <div className="min-w-0 flex-1">

      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-xs font-bold text-white">
          {lesson.lesson_order}
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Lesson {lesson.lesson_order}
          </p>

          <h4 className="mt-0.5 truncate text-base font-bold text-slate-950 sm:text-lg">
            {lesson.title}
          </h4>
        </div>
      </div>

      {lesson.description && (
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">
          {lesson.description}
        </p>
      )}

      {/* Lesson Type Indicators */}
      <div className="mt-4 flex flex-wrap items-center gap-2">

        {lesson.video_url && (
          <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            🎥 Video
          </span>
        )}

        {lesson.pdf_url && (
          <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
            📄 PDF
          </span>
        )}

        {lesson.content && (
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
            📝 Written Content
          </span>
        )}

        {!lesson.video_url &&
          !lesson.pdf_url &&
          !lesson.content && (
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-400">
              No content added
            </span>
          )}

      </div>

      {/* Content Preview */}
      {lesson.content && (
        <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50/70 p-3">
          <p className="line-clamp-2 text-sm leading-6 text-slate-500">
            {lesson.content}
          </p>
        </div>
      )}

    </div>

    {/* Status + Actions */}
    <div className="flex shrink-0 flex-wrap items-center gap-2 lg:justify-end">

      <span
        className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
          lesson.is_published
            ? 'border-green-200 bg-green-50 text-green-700'
            : 'border-amber-200 bg-amber-50 text-amber-700'
        }`}
      >
        <span
          className={`mr-1.5 inline-block h-1.5 w-1.5 rounded-full ${
            lesson.is_published
              ? 'bg-green-600'
              : 'bg-amber-500'
          }`}
        />

        {lesson.is_published
          ? 'Published'
          : 'Draft'}
      </span>

      <Button
        size="sm"
        variant="outline"
        className="h-9 rounded-lg border-slate-200 px-3 font-medium hover:bg-slate-50"
        onClick={() => {
          setEditingLessonId(lesson.id)
          setEditModuleId(module.id)

          setLessonTitle(lesson.title)
          setLessonDescription(
            lesson.description || ''
          )
          setLessonContent(
            lesson.content || ''
          )
          setLessonOrder(
            String(lesson.lesson_order)
          )

          setLessonVideoUrl(
            lesson.video_url || ''
          )

          setLessonPdfUrl(
            lesson.pdf_url || ''
          )

          setLessonPublished(
            lesson.is_published
          )

          setShowLessonForm(module.id)
        }}
      >
        Edit
      </Button>

      <Button
        size="sm"
        variant="outline"
        className="h-9 rounded-lg border-red-200 px-3 font-medium text-red-600 hover:bg-red-50 hover:text-red-700"
        onClick={() =>
          handleDeleteLesson(
            module.id,
            lesson.id
          )
        }
        disabled={
          deletingLessonId === lesson.id
        }
      >
        {deletingLessonId === lesson.id
          ? 'Deleting...'
          : 'Delete'}
      </Button>

    </div>

  </div>
</div>
          
        ))}
    </div>
  )}

        {/* Add Lesson Form */}
        {/* Add / Edit Lesson Form */}

{showLessonForm === module.id && (
  <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

    {/* Form Header */}
    <div className="border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white px-6 py-5">
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white shadow-sm">
          {editingLessonId ? '✎' : '+'}
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-950">
            {editingLessonId
              ? 'Edit Lesson'
              : 'Add Lesson'}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {editingLessonId
              ? 'Update lesson details and learning materials.'
              : 'Create a new lesson with video, PDF, or written content.'}
          </p>
        </div>
      </div>
    </div>

    {/* Form Content */}
    <div className="space-y-8 p-6">

      {/* Basic Information */}
      <div>
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-sm">
            01
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">
              Basic Information
            </h4>

            <p className="text-xs text-slate-500">
              Add the lesson title and description.
            </p>
          </div>
        </div>

        <div className="space-y-5">

          {/* Lesson Title */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Lesson Title
            </label>

            <Input
              value={lessonTitle}
              onChange={(e) =>
                setLessonTitle(e.target.value)
              }
              placeholder="Introduction to Python"
              className="h-12 rounded-xl border-slate-200 bg-white px-4 shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Description
            </label>

            <Textarea
              value={lessonDescription}
              onChange={(e) =>
                setLessonDescription(e.target.value)
              }
              placeholder="Introduction to Python basics"
              className="min-h-[110px] rounded-xl border-slate-200 bg-white px-4 py-3 shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500"
            />
          </div>

        </div>
      </div>

      {/* Learning Content */}
      <div>
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-sm">
            02
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">
              Learning Content
            </h4>

            <p className="text-xs text-slate-500">
              Add written material for this lesson.
            </p>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Written Content
          </label>

          <Textarea
            value={lessonContent}
            onChange={(e) =>
              setLessonContent(e.target.value)
            }
            placeholder="Write the lesson content here..."
            className="min-h-[220px] rounded-xl border-slate-200 bg-white px-4 py-3 leading-6 shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500"
          />

          <p className="mt-2 text-xs text-slate-400">
            Add explanations, notes, examples, or other written learning material.
          </p>
        </div>
      </div>

      {/* Learning Materials */}
      <div>
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-sm">
            03
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">
              Learning Materials
            </h4>

            <p className="text-xs text-slate-500">
              Upload optional video and PDF resources.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">

          {/* Lesson Video */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
            <div className="mb-4">
              <h5 className="font-semibold text-slate-800">
                Lesson Video
              </h5>

              <p className="mt-1 text-xs text-slate-500">
                Upload the main lesson video.
              </p>
            </div>

            <VideoUploader
              value={lessonVideoUrl}
              onChange={setLessonVideoUrl}
            />
          </div>

          {/* Lesson PDF */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
            <div className="mb-4">
              <h5 className="font-semibold text-slate-800">
                Lesson PDF
              </h5>

              <p className="mt-1 text-xs text-slate-500">
                Upload supporting PDF material.
              </p>
            </div>

            <PdfUploader
              value={lessonPdfUrl}
              onChange={setLessonPdfUrl}
            />
          </div>

        </div>
      </div>

      {/* Lesson Settings */}
      <div>
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-sm">
            04
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">
              Lesson Settings
            </h4>

            <p className="text-xs text-slate-500">
              Control lesson order and publishing status.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">

          {/* Lesson Order */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Lesson Order
            </label>

            <Input
              type="number"
              min="1"
              value={lessonOrder}
              onChange={(e) =>
                setLessonOrder(e.target.value)
              }
              className="h-12 rounded-xl border-slate-200 bg-white px-4 shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500"
            />

            <p className="mt-2 text-xs text-slate-400">
              Determines the lesson sequence inside this module.
            </p>
          </div>

          {/* Publish */}
          <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
            <label className="flex cursor-pointer items-center gap-4">
              <input
                type="checkbox"
                checked={lessonPublished}
                onChange={(e) =>
                  setLessonPublished(e.target.checked)
                }
                className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />

              <span>
                <span className="block text-sm font-semibold text-slate-800">
                  Publish Lesson
                </span>

                <span className="mt-1 block text-xs text-slate-500">
                  Make this lesson visible to learners.
                </span>
              </span>
            </label>
          </div>

        </div>
      </div>

    </div>

    {/* Form Actions */}
    <div className="flex flex-col-reverse gap-3 border-t border-slate-200 bg-slate-50 px-6 py-5 sm:flex-row sm:justify-end">

      <Button
        variant="outline"
        className="h-11 rounded-xl border-slate-200 bg-white px-6 font-semibold hover:bg-slate-100"
        onClick={() => {
          setShowLessonForm(null)
          setLessonTitle('')
          setLessonDescription('')
          setLessonContent('')
          setLessonOrder('1')
          setLessonPublished(false)
          setLessonVideoUrl('')
        }}
      >
        Cancel
      </Button>

      <Button
        onClick={() =>
          editingLessonId
            ? handleUpdateLesson()
            : handleAddLesson(module.id)
        }
        disabled={lessonSaving}
        className="h-11 rounded-xl bg-slate-950 px-7 font-semibold text-white shadow-sm hover:bg-slate-800"
      >
        {lessonSaving
          ? 'Saving...'
          : editingLessonId
            ? 'Save Changes'
            : 'Save Lesson'}
      </Button>

    </div>

  </div>
)}
        
      </div>
    ))
  )}

</div>

    </div>
  )
}