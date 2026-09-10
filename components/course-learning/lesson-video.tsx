'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

interface LessonVideoProps {
  src: string
  slug: string
  lessonId: string
  completed: boolean
}

export default function LessonVideo({
  src,
  slug,
  lessonId,
  completed,
}: LessonVideoProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const completedRef = useRef(completed)

  const handleEnded = async () => {
    if (completedRef.current || loading) {
      return
    }

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

      completedRef.current = true

      if (data.nextLesson?.id) {
        router.push(
          `/courses/${slug}/learn?lesson=${data.nextLesson.id}`
        )
        router.refresh()
        return
      }

      router.refresh()
    } catch (error) {
      console.error(
        'Video completion error:',
        error
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-black shadow-sm">
      <video
        controls
        playsInline
        className="aspect-video w-full"
        src={src}
        onEnded={handleEnded}
      />

      {loading && (
        <div className="absolute bottom-4 left-4 rounded-lg bg-black/80 px-4 py-2 text-sm font-medium text-white">
          Saving progress...
        </div>
      )}
    </div>
  )
}