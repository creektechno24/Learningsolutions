import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const supabase = await createClient()

    const { data, error } = await supabase
      .from('courses')
      .select(
        `
        id,
        title,
        slug,
        description,
        long_description,
        duration_hours,
        level,
        price,
        max_participants,
        thumbnail_url,
        course_image_url,
        rating,
        view_count,
        seo_title,
        seo_description,
        seo_keywords,
        is_published,
        created_at,
        trainers(id, first_name, last_name, bio, profile_image_url, hourly_rate),
        course_categories(id, name, slug)
      `
      )
      .eq('slug', slug)
      .eq('is_published', true)
      .single()

    if (error) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      )
    }

    // Increment view count
    await supabase
      .from('courses')
      .update({ view_count: (data.view_count || 0) + 1 })
      .eq('id', data.id)

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.error('Error fetching course:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
