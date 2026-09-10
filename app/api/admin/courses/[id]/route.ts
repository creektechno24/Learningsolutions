import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { supabaseAdmin } from '@/lib/supabase/admin'

interface RouteParams {
  params: Promise<{
    id: string
  }>
}

/* =========================================
   GET SINGLE COURSE
========================================= */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    console.log('COURSE ID =>', id)

    const supabase = await createClient()

    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('id', id)
        .single()

    console.log('DATA =>', data)
    console.log('ERROR =>', error)

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: 'Failed to fetch course' },
      { status: 500 }
    )
  }
}
/* =========================================
   UPDATE COURSE
========================================= */
export async function PATCH(
  request: NextRequest,
  { params }: RouteParams
) {
  const { id } = await params

  try {
    const supabase = await createClient()

    const body = await request.json()

    const updateData: any = {
  title: body.title,
  course_code: body.course_code,
  category_id: body.category_id,
  description: body.description,
  long_description: body.long_description,

  duration: body.duration,
  level: body.level,
  delivery_mode: body.delivery_mode,

  learning_objectives: body.learning_objectives,
  modules_covered: body.modules_covered,
  prerequisites: body.prerequisites,
  assessment_method: body.assessment_method,

  price: body.price,

  seo_title: body.seo_title,
  seo_description: body.seo_description,
  seo_keywords: body.seo_keywords,
}

    // publish status update support
    if (body.is_published !== undefined) {
      updateData.is_published = body.is_published
    }

    const { data, error } = await supabaseAdmin
      .from('courses')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: 'Failed to update course' },
      { status: 500 }
    )
  }
}

/* =========================================
   DELETE COURSE
========================================= */
export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = await params

    const supabase = await createClient()

    // Check logged-in user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Check ADMIN role
    const {
      data: publicUser,
      error: userError,
    } = await supabaseAdmin
      .from('users')
      .select('id, role')
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

    // Delete course using admin client
    const {
      data: deletedCourse,
      error: deleteError,
    } = await supabaseAdmin
      .from('courses')
      .delete()
      .eq('id', id)
      .select('id')
      .maybeSingle()

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

    if (!deletedCourse) {
      return NextResponse.json(
        {
          error: 'Course was not deleted',
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