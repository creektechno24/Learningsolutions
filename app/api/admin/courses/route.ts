import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { supabaseAdmin } from '@/lib/supabase/admin'


export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
const { data: courses, error } = await supabaseAdmin
  .from('courses')
  .select(`
    *,
    course_categories (
      id,
      name,
      slug
    )
  `)
  .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json(courses)
  } catch (error: any) {
    console.error(error)

    return NextResponse.json(
      { error: 'Failed to fetch courses' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    // Normal authenticated client
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

    // Check application role
    const {
      data: publicUser,
      error: userError,
    } = await supabaseAdmin
      .from('users')
      .select('id, role')
      .eq('auth_user_id', user.id)
      .single()

    if (userError || !publicUser) {
      console.error(
        'Admin user lookup error:',
        userError
      )

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

    // Request body
    const body = await request.json()

    const {
      title,
      course_code,
      description,
      long_description,
      category_id,
      duration,
      level,
      delivery_mode,
      learning_objectives,
      modules_covered,
      prerequisites,
      assessment_method,
      price,
      seo_title,
      seo_description,
      seo_keywords,
    } = body

    if (!title?.trim()) {
      return NextResponse.json(
        { error: 'Course title is required' },
        { status: 400 }
      )
    }

    if (!category_id) {
      return NextResponse.json(
        { error: 'Category is required' },
        { status: 400 }
      )
    }

    if (!course_code?.trim()) {
      return NextResponse.json(
        { error: 'Course code is required' },
        { status: 400 }
      )
    }

    // Create unique slug
    const slug = `${title
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')}-${Date.now()}`

    // Admin-only insert using service role
    const {
      data: course,
      error: courseError,
    } = await supabaseAdmin
      .from('courses')
      .insert({
        title: title.trim(),
        slug,
        course_code: course_code.trim(),

        description:
          description?.trim() || null,

        long_description:
          long_description?.trim() || null,

        category_id,

        duration:
          duration?.trim() || null,

        level:
          level || 'beginner',

        delivery_mode:
          delivery_mode || 'online',

        learning_objectives:
          learning_objectives?.trim() || null,

        modules_covered:
          modules_covered?.trim() || null,

        prerequisites:
          prerequisites?.trim() || null,

        assessment_method:
          assessment_method?.trim() || null,

        price:
          price !== '' && price != null
            ? Number(price)
            : null,

        seo_title:
          seo_title?.trim() || null,

        seo_description:
          seo_description?.trim() || null,

        seo_keywords:
          seo_keywords?.trim() || null,

        is_published: false,
      })
      .select()
      .single()

    if (courseError) {
      console.error(
        'Error creating course:',
        courseError
      )

      return NextResponse.json(
        { error: courseError.message },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        course,
      },
      { status: 201 }
    )

  } catch (error) {
    console.error(
      'Admin course POST error:',
      error
    )

    return NextResponse.json(
      { error: 'Failed to create course' },
      { status: 500 }
    )
  }
}



export async function PATCH(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{ id: string }>
  }
) {
  try {
    const { id } = await params

    const supabase = await createClient()

    // Check login
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
    } = await supabaseAdmin
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

    const body = await request.json()

    const { is_published } = body

    if (typeof is_published !== 'boolean') {
      return NextResponse.json(
        { error: 'is_published must be boolean' },
        { status: 400 }
      )
    }

    const {
      data: course,
      error: courseError,
    } = await supabaseAdmin
      .from('courses')
      .update({
        is_published,
      })
      .eq('id', id)
      .select()
      .single()

    if (courseError) {
      console.error(
        'Course publish update error:',
        courseError
      )

      return NextResponse.json(
        { error: courseError.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      course,
    })

  } catch (error) {
    console.error(
      'Course PATCH error:',
      error
    )

    return NextResponse.json(
      { error: 'Failed to update course' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{ id: string }>
  }
) {
  try {
    const { id } = await params

    const supabase = await createClient()

    // Check login
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
    } = await supabaseAdmin
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

    // Check course exists
    const {
      data: course,
      error: courseError,
    } = await supabaseAdmin
      .from('courses')
      .select('id, title')
      .eq('id', id)
      .maybeSingle()

    if (courseError) {
      console.error(
        'Course lookup error:',
        courseError
      )

      return NextResponse.json(
        { error: 'Failed to find course' },
        { status: 500 }
      )
    }

    if (!course) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      )
    }

    // Do not delete courses with purchase history
    const {
      count: purchaseCount,
      error: purchaseError,
    } = await supabaseAdmin
      .from('course_purchases')
      .select('id', {
        count: 'exact',
        head: true,
      })
      .eq('course_id', id)

    if (purchaseError) {
      console.error(
        'Purchase lookup error:',
        purchaseError
      )

      return NextResponse.json(
        {
          error:
            'Unable to verify course purchase history',
        },
        { status: 500 }
      )
    }

    if ((purchaseCount || 0) > 0) {
      return NextResponse.json(
        {
          error:
            'This course cannot be deleted because it has purchase history. Unpublish the course instead.',
        },
        { status: 409 }
      )
    }

    // Delete course
    // Related modules, lessons, progress, enrollments,
    // orders and other cascade data will be handled by DB.
    const {
      error: deleteError,
    } = await supabaseAdmin
      .from('courses')
      .delete()
      .eq('id', id)

    if (deleteError) {
      console.error(
        'Course delete error:',
        deleteError
      )

      return NextResponse.json(
        {
          error: deleteError.message,
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Course deleted successfully',
    })
  } catch (error) {
    console.error(
      'Course DELETE error:',
      error
    )

    return NextResponse.json(
      { error: 'Failed to delete course' },
      { status: 500 }
    )
  }
}