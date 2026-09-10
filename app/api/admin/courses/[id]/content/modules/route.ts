import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ id: string }>
  }
) {
  try {
    const { id } = await params

    const body = await request.json()

    const {
      title,
      description,
      module_order,
    } = body

    if (!title?.trim()) {
      return NextResponse.json(
        { error: 'Module title is required' },
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

    // Make sure course exists
    const {
      data: course,
      error: courseError,
    } = await supabase
      .from('courses')
      .select('id')
      .eq('id', id)
      .single()

    if (courseError || !course) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      )
    }

    // Create module
    const {
      data: module,
      error: moduleError,
    } = await supabase
      .from('course_modules')
      .insert({
        course_id: id,
        title: title.trim(),
        description:
          description?.trim() || null,
        module_order:
          Number(module_order) || 1,
      })
      .select()
      .single()

    if (moduleError || !module) {
      console.error(
        'Module creation error:',
        moduleError
      )

      return NextResponse.json(
        {
          error:
            moduleError?.message ||
            'Unable to create module',
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      module,
    })

  } catch (error) {
    console.error(
      'Course module POST error:',
      error
    )

    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}