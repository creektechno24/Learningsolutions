import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { supabaseAdmin } from '@/lib/supabase/admin'

export async function POST(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      courseId: string
    }>
  }
) {
  try {
    const { courseId } = await params

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

    // Verify purchased course
    const {
      data: purchase,
      error: purchaseError,
    } = await supabaseAdmin
      .from('course_purchases')
      .select('id, status')
      .eq('user_id', user.id)
      .eq('course_id', courseId)
      .eq('status', 'paid')
      .maybeSingle()

    if (purchaseError) {
      console.error(
        'Purchase check error:',
        purchaseError
      )

      return NextResponse.json(
        { error: 'Unable to verify course purchase' },
        { status: 500 }
      )
    }

    if (!purchase) {
      return NextResponse.json(
        { error: 'You have not purchased this course' },
        { status: 403 }
      )
    }

    // Check existing progress
    const {
      data: existingProgress,
      error: progressError,
    } = await supabaseAdmin
      .from('course_progress')
      .select('*')
      .eq('user_id', user.id)
      .eq('course_id', courseId)
      .maybeSingle()

    if (progressError) {
      console.error(
        'Progress fetch error:',
        progressError
      )

      return NextResponse.json(
        { error: 'Unable to load course progress' },
        { status: 500 }
      )
    }

    // Already started
    if (existingProgress?.started_at) {
      return NextResponse.json({
        success: true,
        started: true,
        progress: existingProgress,
      })
    }

    // First time start
    const {
      data: progress,
      error: createError,
    } = await supabaseAdmin
      .from('course_progress')
      .insert({
        user_id: user.id,
        course_id: courseId,
        started_at: new Date().toISOString(),
        progress: 0,
      })
      .select()
      .single()

    if (createError) {
      console.error(
        'Course start error:',
        createError
      )

      return NextResponse.json(
        { error: createError.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      started: true,
      progress,
    })

  } catch (error) {
    console.error(
      'Start course API error:',
      error
    )

    return NextResponse.json(
      { error: 'Failed to start course' },
      { status: 500 }
    )
  }
}