'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface StartCourseButtonProps {
  courseId: string
  courseSlug: string
  started: boolean
  completed: boolean
}

export default function StartCourseButton({
  courseId,
  courseSlug,
  started,
  completed,
}: StartCourseButtonProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    try {
      setLoading(true)

      // =======================================================
      // Completed course → Review Course
      // =======================================================

      if (completed) {
        router.push(`/courses/${courseSlug}/learn`)
        return
      }

      // =======================================================
      // Start / Continue course
      // =======================================================

      const response = await fetch(
        `/api/my-courses/${courseId}/start`,
        {
          method: 'POST',
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.error || 'Unable to open course'
        )
      }

      router.push(
        `/courses/${courseSlug}/learn`
      )
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : 'Unable to open course'
      )
    } finally {
      setLoading(false)
    }
  }

  // =========================================================
  // Button text
  // =========================================================

  const buttonText = completed
    ? 'Review Course'
    : started
      ? 'Continue Learning'
      : 'Start Course'

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className={`w-full h-12 rounded-xl font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${
        completed
          ? 'bg-green-600 text-white hover:bg-green-700'
          : 'bg-slate-900 text-white hover:bg-slate-800'
      }`}
    >
      {loading
        ? 'Opening...'
        : buttonText}
    </button>
  )
}