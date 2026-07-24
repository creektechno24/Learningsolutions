import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

// GET - Fetch trainer's courses
export async function GET(request: Request) {
  try {
    const supabase = await createClient()

    // Get current user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Fetch trainer's courses
  const { data: courses, error } = await supabase
  .from('courses')
  .select(`
    id,
    title,
    description,
    duration_hours,
    level,
    is_published,
    slug,
    course_categories (
      id,
      name,
      slug
    )
  `)
  .eq('is_published', true)
  .order('created_at', { ascending: false })
    if (error) {
      console.error('[v0] Error fetching courses:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(courses)
  } catch (err) {
    console.error('[v0] Unexpected error in GET:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST - Create a new course
export async function POST(request: Request) {
  try {
    const supabase = await createClient()

    // Get current user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

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
    

    // Validate required fields
    if (!title || !description || !category_id) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create slug from title
    const slug =
  title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '') +
  '-' +
  Date.now()

    // Insert course
    const { data: course, error } = await supabase
      .from('courses')
     .insert({
  title,
  course_code,
  slug,
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
})
      .select()
      .single()

    if (error) {
      console.error('[v0] Error creating course:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(course, { status: 201 })
  } catch (err) {
    console.error('[v0] Unexpected error in POST:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
