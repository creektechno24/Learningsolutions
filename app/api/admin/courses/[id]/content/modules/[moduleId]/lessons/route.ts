import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(
  request: Request,
  {
    params,
  }: {
    params: Promise<{
      id: string
      moduleId: string
    }>
  }
) {
  try {
    const { id, moduleId } = await params

    const body = await request.json()


  const {
  title,
  description,
  content,
  video_url,
  pdf_url,
  lesson_order,
  is_published,
} = body
   
    if (!title?.trim()) {
      return NextResponse.json(
        { error: 'Lesson title is required' },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    // Logged-in user
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Check admin
    const {
      data: publicUser,
      error: userError,
    } = await supabase
      .from('users')
      .select('role')
      .eq('auth_user_id', user.id)
      .single()

    if (userError || !publicUser) {
      return NextResponse.json(
        { error: 'User profile not found' },
        { status: 404 }
      )
    }

    if (publicUser.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Admin access required' },
        { status: 403 }
      )
    }

    // Check module belongs to this course
   const {
  data: module,
  error: moduleError,
} = await supabase
  .from('course_modules')
  .select('id, course_id, title')
  .eq('id', moduleId)
  .maybeSingle()

if (moduleError) {
  console.error('Module fetch error:', moduleError)

  return NextResponse.json(
    {
      error: 'Unable to verify module',
      details: moduleError.message,
    },
    { status: 500 }
  )
}

if (!module) {
  return NextResponse.json(
    { error: 'Module not found' },
    { status: 404 }
  )
}

if (module.course_id !== id) {
  return NextResponse.json(
    { error: 'Module does not belong to this course' },
    { status: 400 }
  )
}

    // Create lesson
    const {
      data: lesson,
      error: lessonError,
    } = await supabase
      .from('course_lessons')
      .insert({
  module_id: moduleId,
  title: title.trim(),
  description:
    description?.trim() || null,
  content:
    content?.trim() || null,
  video_url:
  typeof video_url === 'string' &&
  video_url.trim()
    ? video_url.trim()
    : null,

pdf_url:
  typeof pdf_url === 'string' &&
  pdf_url.trim()
    ? pdf_url.trim()
    : null,

lesson_order:
  Number(lesson_order) || 1,
  is_published: Boolean(is_published),
})
     
      .select()
      .single()

    if (lessonError || !lesson) {
      console.error(
        'Lesson creation error:',
        lessonError
      )

      return NextResponse.json(
        {
          error:
            lessonError?.message ||
            'Unable to create lesson',
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      lesson,
    })

  } catch (error) {
    console.error(
      'Lesson API error:',
      error
    )

    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}