import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { supabaseAdmin } from '@/lib/supabase/admin'

async function verifyAdmin() {
  const supabase = await createClient()

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return {
      error: NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      ),
    }
  }

  const {
    data: publicUser,
    error: userError,
  } = await supabaseAdmin
    .from('users')
    .select('id, role')
    .eq('auth_user_id', user.id)
    .maybeSingle()

  if (
    userError ||
    !publicUser
  ) {
    return {
      error: NextResponse.json(
        { error: 'User profile not found' },
        { status: 404 }
      ),
    }
  }

  if (publicUser.role !== 'ADMIN') {
    return {
      error: NextResponse.json(
        { error: 'Admin access required' },
        { status: 403 }
      ),
    }
  }

  return {
    user,
    publicUser,
  }
}

export async function POST(
  request: NextRequest,
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
    const { id: courseId, moduleId } =
      await params

    // =========================================================
    // 1. Verify admin
    // =========================================================

    const adminResult =
      await verifyAdmin()

    if (adminResult.error) {
      return adminResult.error
    }

    // =========================================================
    // 2. Read request body
    // =========================================================

    const body = await request.json()

    const {
      title,
      description,
      content,
      video_url,
      lesson_order,
      is_published,
    } = body

    // =========================================================
    // 3. Validate title
    // =========================================================

    if (
      !title ||
      typeof title !== 'string' ||
      !title.trim()
    ) {
      return NextResponse.json(
        {
          error:
            'Lesson title is required',
        },
        { status: 400 }
      )
    }

    // =========================================================
    // 4. Verify course exists
    // =========================================================

    const {
      data: course,
      error: courseError,
    } = await supabaseAdmin
      .from('courses')
      .select('id')
      .eq('id', courseId)
      .maybeSingle()

    if (courseError || !course) {
      return NextResponse.json(
        {
          error: 'Course not found',
        },
        { status: 404 }
      )
    }

    // =========================================================
    // 5. Verify module belongs to course
    // =========================================================

    const {
      data: module,
      error: moduleError,
    } = await supabaseAdmin
      .from('course_modules')
      .select('id, course_id')
      .eq('id', moduleId)
      .eq('course_id', courseId)
      .maybeSingle()

    if (
      moduleError ||
      !module
    ) {
      return NextResponse.json(
        {
          error:
            'Module not found for this course',
        },
        { status: 404 }
      )
    }

    // =========================================================
    // 6. Create lesson
    // =========================================================

    const {
      data: lesson,
      error: lessonError,
    } = await supabaseAdmin
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
        lesson_order:
          Number(lesson_order) || 1,
        is_published:
          Boolean(is_published),
      })
      .select()
      .single()

    if (
      lessonError ||
      !lesson
    ) {
      console.error(
        'Lesson creation error:',
        lessonError
      )

      return NextResponse.json(
        {
          error:
            lessonError?.message ||
            'Failed to create lesson',
        },
        { status: 500 }
      )
    }

    // =========================================================
    // 7. Success
    // =========================================================

    return NextResponse.json(
      {
        success: true,
        lesson,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error(
      'Create lesson API error:',
      error
    )

    return NextResponse.json(
      {
        error:
          'Failed to create lesson',
      },
      { status: 500 }
    )
  }
}

export async function PATCH(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      id: string
      moduleId: string
      lessonId: string
    }>
  }
) {
  try {
    const {
      id: courseId,
      moduleId,
      lessonId,
    } = await params

    // =========================================================
    // 1. Verify admin
    // =========================================================

    const adminResult = await verifyAdmin()

    if (adminResult.error) {
      return adminResult.error
    }

    // =========================================================
    // 2. Read request body
    // =========================================================

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

    // =========================================================
    // 3. Validate title
    // =========================================================

    if (
      !title ||
      typeof title !== 'string' ||
      !title.trim()
    ) {
      return NextResponse.json(
        {
          error: 'Lesson title is required',
        },
        { status: 400 }
      )
    }

    // =========================================================
    // 4. Verify module belongs to course
    // =========================================================

    const {
      data: module,
      error: moduleError,
    } = await supabaseAdmin
      .from('course_modules')
      .select('id, course_id')
      .eq('id', moduleId)
      .eq('course_id', courseId)
      .maybeSingle()

    if (
      moduleError ||
      !module
    ) {
      return NextResponse.json(
        {
          error:
            'Module not found for this course',
        },
        { status: 404 }
      )
    }

    // =========================================================
    // 5. Verify lesson belongs to module
    // =========================================================

    const {
      data: existingLesson,
      error: lessonFetchError,
    } = await supabaseAdmin
      .from('course_lessons')
      .select('id, module_id')
      .eq('id', lessonId)
      .eq('module_id', moduleId)
      .maybeSingle()

    if (
      lessonFetchError ||
      !existingLesson
    ) {
      return NextResponse.json(
        {
          error:
            'Lesson not found for this module',
        },
        { status: 404 }
      )
    }

    // =========================================================
    // 6. Update lesson
    // =========================================================

    const {
      data: lesson,
      error: lessonError,
    } = await supabaseAdmin
      .from('course_lessons')
      .update({
        title: title.trim(),

        description:
          typeof description === 'string' &&
          description.trim()
            ? description.trim()
            : null,

        content:
          typeof content === 'string' &&
          content.trim()
            ? content.trim()
            : null,

     

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

is_published:
  Boolean(is_published),
  
      })
      .eq('id', lessonId)
      .eq('module_id', moduleId)
      .select()
      .single()

    if (
      lessonError ||
      !lesson
    ) {
      console.error(
        'Lesson update error:',
        lessonError
      )

      return NextResponse.json(
        {
          error:
            lessonError?.message ||
            'Failed to update lesson',
        },
        { status: 500 }
      )
    }

    // =========================================================
    // 7. Success
    // =========================================================

    return NextResponse.json({
      success: true,
      lesson,
    })
  } catch (error) {
    console.error(
      'Update lesson API error:',
      error
    )

    return NextResponse.json(
      {
        error:
          'Failed to update lesson',
      },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      id: string
      moduleId: string
      lessonId: string
    }>
  }
) {
  try {
    const {
      id: courseId,
      moduleId,
      lessonId,
    } = await params

    // =========================================================
    // 1. Verify admin
    // =========================================================

    const adminResult = await verifyAdmin()

    if (adminResult.error) {
      return adminResult.error
    }

    // =========================================================
    // 2. Verify module belongs to course
    // =========================================================

    const {
      data: module,
      error: moduleError,
    } = await supabaseAdmin
      .from('course_modules')
      .select('id, course_id')
      .eq('id', moduleId)
      .eq('course_id', courseId)
      .maybeSingle()

    if (
      moduleError ||
      !module
    ) {
      return NextResponse.json(
        {
          error:
            'Module not found for this course',
        },
        { status: 404 }
      )
    }

    // =========================================================
    // 3. Verify lesson belongs to module
    // =========================================================

    const {
      data: lesson,
      error: lessonFetchError,
    } = await supabaseAdmin
      .from('course_lessons')
      .select('id, module_id')
      .eq('id', lessonId)
      .eq('module_id', moduleId)
      .maybeSingle()

    if (
      lessonFetchError ||
      !lesson
    ) {
      return NextResponse.json(
        {
          error:
            'Lesson not found for this module',
        },
        { status: 404 }
      )
    }

    // =========================================================
    // 4. Delete lesson
    // =========================================================

    const {
      error: deleteError,
    } = await supabaseAdmin
      .from('course_lessons')
      .delete()
      .eq('id', lessonId)
      .eq('module_id', moduleId)

    if (deleteError) {
      console.error(
        'Lesson delete error:',
        deleteError
      )

      return NextResponse.json(
        {
          error:
            deleteError.message ||
            'Failed to delete lesson',
        },
        { status: 500 }
      )
    }

    // =========================================================
    // 5. Success
    // =========================================================

    return NextResponse.json({
      success: true,
      message: 'Lesson deleted successfully',
    })
  } catch (error) {
    console.error(
      'Delete lesson API error:',
      error
    )

    return NextResponse.json(
      {
        error:
          'Failed to delete lesson',
      },
      { status: 500 }
    )
  }
}