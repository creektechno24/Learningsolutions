import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

// GET - Fetch a specific course
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const supabase = await createClient()
    const { id } = await params

    // Get current user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Fetch course - ensure it belongs to the trainer
    const { data: course, error } = await supabase
  .from('courses')
  .select(`
    *,
    course_categories (
      id,
      name,
      slug
    )
  `)
  .eq('id', id)
  .eq('is_published', true)
  .single()
    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: 'Course not found' }, { status: 404 })
      }
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(course)
  } catch (err) {
    console.error('[v0] Error in GET:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

