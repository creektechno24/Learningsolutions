'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface LessonCompleteButtonProps {
  slug: string
  lessonId: string
  completed: boolean
  nextLessonId: string | null
  isLastLesson: boolean
  hasVideo?: boolean
}

export default function LessonCompleteButton({
  slug,
  lessonId,
  completed,
  nextLessonId,
  isLastLesson,
  hasVideo = false,
}: LessonCompleteButtonProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleComplete = async () => {
    try {
      setLoading(true)

      const response = await fetch(
        `/api/courses/${slug}/lessons/${lessonId}/complete`,
        {
          method: 'POST',
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.error || 'Unable to complete lesson'
        )
      }

      if (data.nextLesson?.id) {
        router.push(
          `/courses/${slug}/learn?lesson=${data.nextLesson.id}`
        )
        router.refresh()
        return
      }

      router.refresh()

      alert(
        'Congratulations! You completed the course.'
      )
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : 'Unable to complete lesson'
      )
    } finally {
      setLoading(false)
    }
  }

  // Video lessons are completed automatically
  if (hasVideo && !completed) {
    return null
  }

  // Already completed final lesson
  if (completed && isLastLesson) {
    return (
      <button
        type="button"
        disabled
        className="h-12 rounded-xl bg-green-600 px-6 font-semibold text-white"
      >
        ✓ Course Completed
      </button>
    )
  }

  // Already completed but another lesson exists
  if (completed) {
    return (
      <button
        type="button"
        onClick={handleComplete}
        disabled={loading}
        className="h-12 rounded-xl bg-slate-900 px-6 font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
      >
        {loading
          ? 'Opening...'
          : '✓ Completed · Next Lesson'}
      </button>
    )
  }

  // PDF / Written lesson manual completion
  return (
    <button
      type="button"
      onClick={handleComplete}
      disabled={loading}
      className="h-12 rounded-xl bg-green-600 px-6 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading
        ? 'Saving...'
        : '✓ Mark Lesson Complete'}
    </button>
  )
}