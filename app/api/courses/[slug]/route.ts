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

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching course:', error)

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}