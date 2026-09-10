export const dynamic = 'force-dynamic'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { supabaseAdmin } from '@/lib/supabase/admin'
import StartCourseButton from '@/components/my-courses/start-course-button'

export default async function MyCoursesPage() {
  const supabase = await createClient()

  // 1. Logged-in user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login?redirect=/my-courses')
  }

  // 2. Get public user
  const {
    data: publicUser,
    error: userError,
  } = await supabaseAdmin
    .from('users')
    .select('id, name, email')
    .eq('auth_user_id', user.id)
    .single()

  if (userError || !publicUser) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h1 className="text-2xl font-bold text-slate-900">
              My Courses
            </h1>

            <p className="mt-3 text-slate-600">
              Unable to load your profile.
            </p>
          </div>
        </div>
      </main>
    )
  }

  // 3. Get only paid purchases
  const {
    data: purchases,
    error: purchaseError,
  } = await supabaseAdmin
    .from('course_purchases')
    .select(`
      id,
      user_id,
      course_id,
      amount,
      currency,
      status,
      purchased_at,
      created_at,
      courses (
        id,
        title,
        slug,
        description,
        price,
        thumbnail
      )
    `)
    .eq('user_id', user.id)
    .eq('status', 'paid')
    .order('created_at', { ascending: false })

  if (purchaseError) {
    console.error('My Courses purchase error:', purchaseError)

    return (
      <main className="min-h-screen bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h1 className="text-2xl font-bold text-slate-900">
              My Courses
            </h1>

            <p className="mt-3 text-red-600">
              Unable to load your courses.
            </p>
          </div>
        </div>
      </main>
    )
  }

  const courseIds =
    purchases?.map((purchase: any) => purchase.course_id) || []

  // 4. Get progress for purchased courses
  let progressList: any[] = []

  if (courseIds.length > 0) {
    const {
      data: progressData,
      error: progressError,
    } = await supabaseAdmin
      .from('course_progress')
      .select(`
        id,
        user_id,
        course_id,
        started_at,
        progress,
        last_lesson_id,
        completed_at,
        created_at,
        updated_at
      `)
      .eq('user_id', user.id)
      .in('course_id', courseIds)

    if (progressError) {
      console.error(
        'My Courses progress error:',
        progressError
      )
    }

    progressList = progressData || []
  }


    // 5. Get current published lessons
  let lessonProgressMap: Record<
    string,
    {
      total: number
      completed: number
    }
  > = {}

  if (courseIds.length > 0) {
    const {
  data: modulesData,
  error: modulesError,
} = await supabaseAdmin
  .from('course_modules')
  .select(`
    course_id,
    course_lessons (
      id
    )
  `)
  .in('course_id', courseIds)

if (modulesError) {
  console.error(
    'My Courses modules error:',
    modulesError
  )
}

const lessonsData =
  (modulesData || []).flatMap(
    (module: any) =>
      (module.course_lessons || []).map(
        (lesson: any) => ({
          id: lesson.id,
          course_id: module.course_id,
        })
      )
  )
  

    const {
  data: completedLessonsData,
  error: completedLessonsError,
} = await supabaseAdmin
  .from('course_lesson_progress')
  .select('course_id, lesson_id')
  .eq('user_id', user.id)
  .in('course_id', courseIds)

if (completedLessonsError) {
  console.error(
    'My Courses lesson progress error:',
    completedLessonsError
  )
}

 
   
  for (const courseId of courseIds) {
  const courseLessons =
    lessonsData?.filter(
      (lesson: any) =>
        lesson.course_id === courseId
    ) || []

  const completedLessonIds = new Set(
    (completedLessonsData || [])
      .filter(
        (item: any) =>
          item.course_id === courseId
      )
      .map(
        (item: any) =>
          item.lesson_id
      )
  )

  const completedCount =
    courseLessons.filter(
      (lesson: any) =>
        completedLessonIds.has(
          lesson.id
        )
    ).length

  lessonProgressMap[courseId] = {
    total: courseLessons.length,
    completed: completedCount,
  }
}
  }


  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
     {/* Premium Header */}
<div className="mb-10 overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-8 py-9 shadow-lg md:px-10 md:py-10">
  <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <div className="mb-3 inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur">
        Learning Dashboard
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        My Courses
      </h1>

      <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
        {publicUser.name
          ? `Welcome back, ${publicUser.name}. Continue your learning journey.`
          : 'Continue your learning journey.'}
      </p>
    </div>

    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-3xl shadow-inner ring-1 ring-white/10">
      🎓
    </div>
  </div>
</div>
      

        {/* No courses */}
        {!purchases || purchases.length === 0 ? (
          <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto max-w-md">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                <span className="text-2xl">📚</span>
              </div>

              <h2 className="mt-6 text-2xl font-bold text-slate-900">
                No Courses Found
              </h2>

              <p className="mt-3 text-slate-600">
                You have not purchased any courses yet.
              </p>

              <a
                href="/courses"
                className="mt-6 inline-flex h-12 items-center justify-center rounded-xl bg-slate-900 px-6 font-semibold text-white transition hover:bg-slate-800"
              >
                Browse Courses
              </a>
            </div>
          </div>
        ) : (
          <>
           
           {/* Course Summary */}
<div className="mb-6 flex items-center justify-between">
  <div>
    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
      Your Learning
    </p>

    <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
      Enrolled Courses
    </h2>
  </div>

  <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
    {purchases.length}{' '}
    {purchases.length === 1 ? 'Course' : 'Courses'}
  </div>
</div>

            {/* Course Grid */}
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {purchases.map((purchase: any) => {
                const course = purchase.courses

                if (!course) {
                  return null
                }

                const progressRecord =
                  progressList.find(
                    (item) =>
                      item.course_id === course.id
                  )
                     
                  const started =
  Boolean(
    progressRecord?.started_at
  )

const lessonStats =
  lessonProgressMap[course.id] || {
    total: 0,
    completed: 0,
  }

const progress =
  lessonStats.total > 0
    ? Math.round(
        (lessonStats.completed /
          lessonStats.total) *
          100
      )
    : 0

const completed =
  lessonStats.total > 0 &&
  lessonStats.completed === lessonStats.total



              

                

                return (
                <div
  key={purchase.id}
  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
>
  {/* Thumbnail */}
  <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
    {course.thumbnail ? (
      <img
        src={course.thumbnail}
        alt={course.title}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
    ) : (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700">
        <span className="text-6xl">📘</span>
      </div>
    )}

    {/* Thumbnail Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />

    {/* Purchased Badge */}
    <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/95 px-3.5 py-1.5 text-xs font-bold text-slate-800 shadow-lg backdrop-blur">
      <span className="text-green-600">✓</span>
      Purchased
    </div>
  </div>

  {/* Course Content */}
<div className="p-6 sm:p-7">
  {/* Course Title */}
  <div>
    <h2 className="line-clamp-2 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
      {course.title}
    </h2>

    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
      {course.description ||
        'Continue learning this course.'}
    </p>
  </div>

  {/* Progress Section */}
  <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4">
    <div className="mb-3 flex items-center justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Your Progress
        </p>

        <p className="mt-1 text-sm font-semibold text-slate-800">
          {lessonStats.completed} of {lessonStats.total} lessons completed
        </p>
      </div>

      <span className="text-lg font-bold text-slate-950">
        {progress}%
      </span>
    </div>

    <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
      <div
        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  </div>

  {/* Status */}
  <div className="mt-4 flex items-center justify-between">
    {completed ? (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700">
        <span>✓</span>
        Completed
      </span>
    ) : started ? (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
        In Progress
      </span>
    ) : (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600">
        <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
        Not Started
      </span>
    )}
  </div>

  {/* Start / Continue */}
  <div className="mt-5">
    <StartCourseButton
      courseId={course.id}
      courseSlug={course.slug}
      started={started}
      completed={completed}
    />
  </div>
</div>

             
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>
    </main>
  )
}