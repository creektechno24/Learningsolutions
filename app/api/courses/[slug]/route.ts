import { createClient } from '@/lib/supabase/server'
import { supabaseAdmin } from '@/lib/supabase/admin'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params

    const supabase = await createClient()

    // =========================================================
    // 1. Get logged-in user
    // =========================================================

    const {
      data: { user },
    } = await supabase.auth.getUser()

    // =========================================================
    // 2. Get published course
    // =========================================================

    const { data, error } = await supabase
      .from('courses')
      .select(`
        *,
        course_categories (
          id,
          name,
          slug
        )
      `)
      .eq('slug', slug)
      .eq('is_published', true)
      .single()

    if (error || !data) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      )
    }

    // =========================================================
    // 3. Check whether logged-in user purchased this course
    // =========================================================

    let isPurchased = false

    if (user) {
      const { data: purchase, error: purchaseError } =
        await supabaseAdmin
          .from('course_purchases')
          .select('id')
          .eq('user_id', user.id)
          .eq('course_id', data.id)
          .eq('status', 'paid')
          .maybeSingle()

      if (purchaseError) {
        console.error(
          'Course purchase check error:',
          purchaseError
        )

        return NextResponse.json(
          { error: 'Unable to verify course purchase' },
          { status: 500 }
        )
      }

      isPurchased = !!purchase
    }

    // =========================================================
    // 4. Return course + purchase status
    // =========================================================

    return NextResponse.json({
      ...data,
      is_purchased: isPurchased,
    })
  } catch (error) {
    console.error('Error fetching course:', error)

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}