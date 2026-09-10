import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { supabaseAdmin } from '@/lib/supabase/admin'

export async function POST(
  request: Request,
  {
    params,
  }: {
    params: Promise<{
      slug: string
      lessonId: string
    }>
  }
) {
  try {
    const { slug, lessonId } = await params

    // =========================================================
    // 1. Check logged-in user
    // =========================================================

    const supabase = await createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json(
        {
          error: 'Unauthorized',
        },
        { status: 401 }
      )
    }

    // =========================================================
    // 2. Get course
    // =========================================================

    const {
      data: course,
      error: courseError,
    } = await supabaseAdmin
      .from('courses')
      .select('id, slug')
      .eq('slug', slug)
      .maybeSingle()

    if (courseError || !course) {
      console.error(
        'Course fetch error:',
        courseError
      )

      return NextResponse.json(
        {
          error: 'Course not found',
        },
        { status: 404 }
      )
    }

    // =========================================================
    // 3. Verify paid purchase
    // =========================================================

    const {
      data: purchase,
      error: purchaseError,
    } = await supabaseAdmin
      .from('course_purchases')
      .select('id, status')
      .eq('user_id', user.id)
      .eq('course_id', course.id)
      .eq('status', 'paid')
      .maybeSingle()

    if (purchaseError) {
      console.error(
        'Purchase check error:',
        purchaseError
      )

      return NextResponse.json(
        {
          error: 'Unable to verify course purchase',
        },
        { status: 500 }
      )
    }

    if (!purchase) {
      return NextResponse.json(
        {
          error: 'You have not purchased this course',
        },
        { status: 403 }
      )
    }

    // =========================================================
    // 4. Verify lesson belongs to this course
    // =========================================================

    const {
      data: lesson,
      error: lessonError,
    } = await supabaseAdmin
      .from('course_lessons')
      .select(`
        id,
        module_id,
        lesson_order,
        is_published,
        course_modules!inner (
          id,
          course_id
        )
      `)
      .eq('id', lessonId)
      .eq('is_published', true)
      .maybeSingle()

    if (lessonError) {
      console.error(
        'Lesson fetch error:',
        lessonError
      )

      return NextResponse.json(
        {
          error: 'Unable to load lesson',
        },
        { status: 500 }
      )
    }

    if (!lesson) {
      return NextResponse.json(
        {
          error: 'Lesson not found',
        },
        { status: 404 }
      )
    }

    const moduleData = Array.isArray(
      lesson.course_modules
    )
      ? lesson.course_modules[0]
      : lesson.course_modules

    if (
      !moduleData ||
      moduleData.course_id !== course.id
    ) {
      return NextResponse.json(
        {
          error:
            'This lesson does not belong to this course',
        },
        { status: 403 }
      )
    }

    // =========================================================
    // 5. Mark lesson complete
    // =========================================================

    const {
      data: completion,
      error: completionError,
    } = await supabaseAdmin
      .from('course_lesson_progress')
      .upsert(
        {
          user_id: user.id,
          course_id: course.id,
          lesson_id: lessonId,
          completed_at:
            new Date().toISOString(),
        },
        {
          onConflict:
            'user_id,course_id,lesson_id',
        }
      )
      .select()
      .single()

    if (completionError) {
      console.error(
        'Lesson completion error:',
        completionError
      )

      return NextResponse.json(
        {
          error:
            'Unable to mark lesson complete',
        },
        { status: 500 }
      )
    }

    // =========================================================
    // 6. Get all published lessons
    // =========================================================

    const {
      data: modules,
      error: modulesError,
    } = await supabaseAdmin
      .from('course_modules')
      .select(`
        id,
        module_order,
        course_lessons (
          id,
          lesson_order,
          is_published
        )
      `)
      .eq('course_id', course.id)
      .order('module_order', {
        ascending: true,
      })

    if (modulesError) {
      console.error(
        'Modules fetch error:',
        modulesError
      )

      return NextResponse.json(
        {
          error:
            'Unable to calculate course progress',
        },
        { status: 500 }
      )
    }

    // =========================================================
    // 7. Create ordered lesson list
    // =========================================================

    const allLessons = (modules || [])
      .sort(
        (a: any, b: any) =>
          a.module_order -
          b.module_order
      )
      .flatMap(
        (module: any) =>
          (module.course_lessons || [])
            .filter(
              (item: any) =>
                item.is_published === true
            )
            .sort(
              (a: any, b: any) =>
                a.lesson_order -
                b.lesson_order
            )
      )

    const totalLessons =
      allLessons.length

    // =========================================================
    // 8. Get completed lessons
    // =========================================================

    const {
      data: completedLessons,
      error: completedLessonsError,
    } = await supabaseAdmin
      .from('course_lesson_progress')
      .select('lesson_id')
      .eq('user_id', user.id)
      .eq('course_id', course.id)

    if (completedLessonsError) {
      console.error(
        'Completed lessons fetch error:',
        completedLessonsError
      )

      return NextResponse.json(
        {
          error:
            'Unable to calculate completed lessons',
        },
        { status: 500 }
      )
    }

    const completedLessonIds = new Set(
      (completedLessons || []).map(
        (item: any) => item.lesson_id
      )
    )

    const completedCount =
      completedLessonIds.size

    // =========================================================
    // 9. Calculate percentage
    // =========================================================

    const progress =
      totalLessons > 0
        ? Math.round(
            (completedCount /
              totalLessons) *
              100
          )
        : 0

    const courseCompleted =
      totalLessons > 0 &&
      completedCount >= totalLessons

    // =========================================================
    // 10. Find next lesson
    // =========================================================

    const currentIndex =
      allLessons.findIndex(
        (item: any) =>
          item.id === lessonId
      )

    const nextLesson =
      currentIndex >= 0 &&
      currentIndex <
        allLessons.length - 1
        ? allLessons[
            currentIndex + 1
          ]
        : null

    // =========================================================
    // 11. Get existing course progress
    // =========================================================

    const {
      data: existingProgress,
      error: existingProgressError,
    } = await supabaseAdmin
      .from('course_progress')
      .select(
        'id, started_at'
      )
      .eq('user_id', user.id)
      .eq('course_id', course.id)
      .maybeSingle()

    if (existingProgressError) {
      console.error(
        'Existing progress fetch error:',
        existingProgressError
      )
    }

    // =========================================================
    // 12. Update course progress
    // =========================================================

    const now =
      new Date().toISOString()

    const {
      error: progressError,
    } = await supabaseAdmin
      .from('course_progress')
      .upsert(
        {
          user_id: user.id,
          course_id: course.id,
          started_at:
            existingProgress?.started_at ||
            now,
          progress,
          last_lesson_id: lessonId,
          completed_at:
            courseCompleted
              ? now
              : null,
          updated_at: now,
        },
        {
          onConflict:
            'user_id,course_id',
        }
      )

    if (progressError) {
      console.error(
        'Course progress update error:',
        progressError
      )

      return NextResponse.json(
        {
          error:
            'Lesson completed but course progress could not be updated',
        },
        { status: 500 }
      )
    }

    // =========================================================
    // 13. Success response
    // =========================================================

    return NextResponse.json({
      success: true,

      completion: {
        lesson_id: completion.lesson_id,
        completed_at:
          completion.completed_at,
      },

      courseProgress: {
        progress,
        completedCount,
        totalLessons,
        completed: courseCompleted,
      },

      nextLesson: nextLesson
        ? {
            id: nextLesson.id,
          }
        : null,
    })
  } catch (error) {
    console.error(
      'Complete lesson API error:',
      error
    )

    return NextResponse.json(
      {
        error:
          'Failed to complete lesson',
      },
      { status: 500 }
    )
  }
}