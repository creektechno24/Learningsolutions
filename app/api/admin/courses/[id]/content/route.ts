import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ id: string }>
  }
) {
  try {
    const { id } = await params

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

    // Check admin role
     const {
  data: publicUser,
  error: userError,
} = await supabase
  .from('users')
  .select('role')
  .eq('auth_user_id', user.id)
  .maybeSingle()

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

    // Get course
    const {
      data: course,
      error: courseError,
    } = await supabase
      .from('courses')
      .select('id, title')
      .eq('id', id)
      .single()

    if (courseError || !course) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      )
    }

    // Get modules
   const {
  data: modules,
  error: modulesError,
} = await supabase
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
  .eq('course_id', id)
  .order('module_order', {
    ascending: true,
  })

    if (modulesError) {
      console.error(
        'Modules fetch error:',
        modulesError
      )

      return NextResponse.json(
        { error: 'Unable to fetch modules' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      course,
      modules: modules || [],
    })

  } catch (error) {
    console.error(
      'Course content GET error:',
      error
    )

    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}