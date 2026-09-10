import { redirect } from 'next/navigation'
import Link from 'next/link'

import { createClient } from '@/lib/supabase/server'
import { supabaseAdmin } from '@/lib/supabase/admin'
import LessonCompleteButton from '@/components/course-learning/lesson-complete-button'
import LessonVideo from '@/components/course-learning/lesson-video'


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

export default async function CourseLearningPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ lesson?: string }>
}) {
  const { slug } = await params
  const { lesson: lessonId } = await searchParams

  const supabase = await createClient()

  // =========================================================
  // 1. Logged-in user
  // =========================================================

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect(
      `/auth/login?redirect=/courses/${slug}/learn`
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
    .select(`
      id,
      title,
      slug,
      description,
      thumbnail
    `)
    .eq('slug', slug)
    .maybeSingle()

  if (courseError || !course) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">
            Course Not Found
          </h1>

          <p className="mt-3 text-slate-600">
            This course could not be found.
          </p>
        </div>
      </main>
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

  if (purchaseError || !purchase) {
    redirect(`/courses/${slug}`)
  }

  // =========================================================
  // 4. Get modules + published lessons
  // =========================================================

  const {
    data: modulesData,
    error: modulesError,
  } = await supabaseAdmin
    .from('course_modules')
    .select(`
      id,
      course_id,
      title,
      description,
      module_order,
      course_lessons (
        id,
        module_id,
        title,
        description,
        content,
        video_url,
        pdf_url,
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
      'Learning modules error:',
      modulesError
    )
  }

  const modules: Module[] =
    (modulesData || []).map(
      (module: any) => ({
        ...module,
        course_lessons: (
          module.course_lessons || []
        )
          .filter(
            (lesson: Lesson) =>
              lesson.is_published === true
          )
          .sort(
            (a: Lesson, b: Lesson) =>
              a.lesson_order -
              b.lesson_order
          ),
      })
    )

  // =========================================================
  // 5. All lessons
  // =========================================================

  const allLessons: Lesson[] =
    modules.flatMap(
      (module) =>
        module.course_lessons
    )

  // =========================================================
  // 6. Get course progress
  // =========================================================

  const {
    data: progress,
  } = await supabaseAdmin
    .from('course_progress')
    .select(`
      id,
      progress,
      started_at,
      last_lesson_id,
      completed_at
    `)
    .eq('user_id', user.id)
    .eq('course_id', course.id)
    .maybeSingle()


// =========================================================
// 7. Get completed lesson records
// =========================================================

const {
  data: completedLessonData,
  error: completedLessonError,
} = await supabaseAdmin
  .from('course_lesson_progress')
  .select('lesson_id')
  .eq('user_id', user.id)
  .eq('course_id', course.id)

if (completedLessonError) {
  console.error(
    'Completed lesson fetch error:',
    completedLessonError
  )
}

const completedLessonIds = new Set(
  (completedLessonData || []).map(
    (item: any) => item.lesson_id
  )
)


  
  



  // =========================================================
  // 8. Select lesson
  // Priority:
  // 1. URL lesson
  // 2. last_lesson_id
  // 3. first lesson
  // =========================================================

let selectedLesson: Lesson | null = null

// =========================================================
// 1. Lesson selected from URL
// =========================================================

if (lessonId) {
  selectedLesson =
    allLessons.find(
      (lesson) =>
        lesson.id === lessonId
    ) || null
}

// =========================================================
// 2. Continue Learning
// Open the first lesson that is not completed
// =========================================================

if (!selectedLesson) {
  selectedLesson =
    allLessons.find(
      (lesson) =>
        !completedLessonIds.has(
          lesson.id
        )
    ) || null
}

// =========================================================
// 3. If every lesson is completed,
// keep the last lesson open
// =========================================================

if (
  !selectedLesson &&
  allLessons.length > 0
) {
  selectedLesson =
    allLessons[
      allLessons.length - 1
    ]
}

// =========================================================
// 4. New learner fallback
// =========================================================

if (!selectedLesson) {
  selectedLesson =
    allLessons[0] || null
}


const selectedIndex =
  selectedLesson
    ? allLessons.findIndex(
        (lesson) =>
          lesson.id ===
          selectedLesson?.id
      )
    : -1

const previousLesson =
  selectedIndex > 0
    ? allLessons[selectedIndex - 1]
    : null

const nextLesson =
  selectedIndex >= 0 &&
  selectedIndex <
    allLessons.length - 1
    ? allLessons[selectedIndex + 1]
    : null
  // =========================================================
  // 9. Previous / Next lesson
  // =========================================================

  

  // =========================================================
  // 10. Render
  // =========================================================

  return (
    <main className="min-h-screen bg-slate-50">

     {/* =====================================================
    Premium Learning Header
===================================================== */}

<header className="border-b border-slate-800 bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white shadow-lg">
  <div className="mx-auto max-w-7xl px-6 py-6">
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

      {/* Course Info */}
      <div className="min-w-0">
        <Link
          href="/my-courses"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
        >
          <span className="text-lg">←</span>
          My Courses
        </Link>

        <div className="mt-3 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lg ring-1 ring-white/10">
            📚
          </div>

          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
              Learning Course
            </p>

            <h1 className="truncate text-2xl font-bold tracking-tight sm:text-3xl">
              {course.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm lg:w-[320px]">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-300">
              Course Progress
            </p>

            <p className="mt-1 text-sm font-medium text-white">
              {completedLessonIds.size} of {allLessons.length} lessons
            </p>
          </div>

          <span className="text-2xl font-bold text-white">
            {progress?.progress || 0}%
          </span>
        </div>

        <div className="h-2.5 overflow-hidden rounded-full bg-white/15">
          <div
            className="h-full rounded-full bg-white transition-all duration-500"
            style={{
              width: `${progress?.progress || 0}%`,
            }}
          />
        </div>
      </div>

    </div>
  </div>
</header>

      {progress?.progress === 100 && (
  <div className="border-b border-green-200 bg-green-50">
    <div className="mx-auto max-w-7xl px-6 py-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold text-green-800">
            ✓ Course Completed
          </p>

          <p className="text-sm text-green-700">
            You have completed all published lessons in this course.
          </p>
        </div>

        <div className="text-lg font-bold text-green-800">
          100%
        </div>
      </div>
    </div>
  </div>
)}

      {/* =====================================================
          Content
      ===================================================== */}

      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[320px_1fr]">

        {/* ===================================================
            Sidebar
        =================================================== */}

        <aside className="rounded-2xl bg-white p-5 shadow-sm lg:sticky lg:top-6 lg:h-fit">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Course Content
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {allLessons.length}{' '}
                {allLessons.length === 1
                  ? 'lesson'
                  : 'lessons'}
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-6">
            {modules.map(
              (
                module,
                moduleIndex
              ) => (
                <div
                  key={module.id}
                >
                  <div className="mb-3">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                      Module {moduleIndex + 1}
                    </p>

                    <p className="mt-1 font-semibold text-slate-900">
                      {module.title}
                    </p>
                  </div>

                  <div className="space-y-1">
                    {module.course_lessons.map(
                      (lesson) => {
                        const isActive =
                          selectedLesson?.id ===
                          lesson.id

                        const isCompleted =
                          completedLessonIds.has(
                            lesson.id
                          )

                        return (
                          <Link
                            key={lesson.id}
                            href={`/courses/${course.slug}/learn?lesson=${lesson.id}`}
                            className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition ${
                              isActive
                                ? 'bg-slate-900 text-white'
                                : 'text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                              {isCompleted
                                ? '✓'
                                : lesson.lesson_order}
                            </span>

                            <span className="line-clamp-2">
                              {lesson.title}
                            </span>
                          </Link>
                        )
                      }
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </aside>

        {/* ===================================================
            Main Lesson
        =================================================== */}

        <section className="min-w-0">
          {!selectedLesson ? (
            <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
              <div className="text-5xl">
                📚
              </div>

              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                No Lessons Available
              </h2>

              <p className="mt-3 text-slate-600">
                No published lessons are
                available for this course yet.
              </p>
            </div>
          ) : (
            <div className="space-y-6">

              {/* Lesson Header */}
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-slate-500">
                  Lesson {selectedLesson.lesson_order}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  {selectedLesson.title}
                </h2>

                {selectedLesson.description && (
                  <p className="mt-3 leading-7 text-slate-600">
                    {selectedLesson.description}
                  </p>
                )}
              </div>
                  

                  {/* Video */}
{selectedLesson.video_url && (
  <LessonVideo
    src={selectedLesson.video_url}
    slug={course.slug}
    lessonId={selectedLesson.id}
    completed={completedLessonIds.has(
      selectedLesson.id
    )}
  />
)}



        
              {/* Written Content */}
              {selectedLesson.content && (
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900">
                    Lesson Content
                  </h3>

                  <div className="mt-5 whitespace-pre-wrap leading-8 text-slate-700">
                    {selectedLesson.content}
                  </div>
                </div>
              )}

             {/* PDF */}
{selectedLesson.pdf_url && (
  <div className="rounded-2xl bg-white p-6 shadow-sm">
    <div className="flex items-center justify-between gap-4">
      <h3 className="text-xl font-bold text-slate-900">
        Lesson PDF
      </h3>

      <a
        href={selectedLesson.pdf_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-blue-600 hover:underline"
      >
        Open in New Tab
      </a>
    </div>

    <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
      <iframe
        src={selectedLesson.pdf_url}
        title={`${selectedLesson.title} PDF`}
        className="h-[700px] w-full"
      />
    </div>
  </div>
)}

              {/* Lesson Actions */}
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

               <LessonCompleteButton
  slug={course.slug}
  lessonId={
    selectedLesson.id
  }
  completed={completedLessonIds.has(
    selectedLesson.id
  )}
  nextLessonId={
    nextLesson?.id ||
    null
  }
  isLastLesson={
    !nextLesson
  }
  hasVideo={
    Boolean(
      selectedLesson.video_url
    )
  }
/>

                  <div className="text-sm text-slate-500">
                    {completedLessonIds.size}{' '}
                    of{' '}
                    {allLessons.length}{' '}
                    lessons completed
                  </div>
                </div>
              </div>

              {/* Previous / Next */}
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                {previousLesson ? (
                  <Link
                    href={`/courses/${course.slug}/learn?lesson=${previousLesson.id}`}
                    className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    ← Previous Lesson
                  </Link>
                ) : (
                  <div />
                )}

                {nextLesson && (
                  <Link
                    href={`/courses/${course.slug}/learn?lesson=${nextLesson.id}`}
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-slate-900 px-6 font-semibold text-white hover:bg-slate-800"
                  >
                    Next Lesson →
                  </Link>
                )}
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}