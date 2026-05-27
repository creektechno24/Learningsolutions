import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    const searchParams = request.nextUrl.searchParams

    // Get query parameters for filtering and pagination
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')
    const category = searchParams.get('category')
    const level = searchParams.get('level')
    const search = searchParams.get('search')
    const sort = searchParams.get('sort') || 'created_at'

    let query = supabase
      .from('courses')
      .select(
        `
        id,
        title,
        slug,
        description,
        duration_hours,
        level,
        price,
        thumbnail_url,
        rating,
        view_count,
        is_featured,
        trainers(id, first_name, last_name, profile_image_url),
        course_categories(id, name, slug)
      `,
        { count: 'exact' }
      )
      .eq('is_published', true)

    // Apply filters
    if (category) {
      query = query.eq('category_id', category)
    }

    if (level) {
      query = query.eq('level', level)
    }

    if (search) {
      query = query.or(
        `title.ilike.%${search}%,description.ilike.%${search}%`
      )
    }

    // Apply sorting
    if (sort === 'rating') {
      query = query.order('rating', { ascending: false })
    } else if (sort === 'price_low') {
      query = query.order('price', { ascending: true })
    } else if (sort === 'price_high') {
      query = query.order('price', { ascending: false })
    } else if (sort === 'popular') {
      query = query.order('view_count', { ascending: false })
    } else {
      query = query.order('created_at', { ascending: false })
    }

    // Apply pagination
    const from = (page - 1) * limit
    const to = from + limit - 1
    query = query.range(from, to)

    const { data, error, count } = await query

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json(
      {
        data,
        pagination: {
          page,
          limit,
          total: count,
          pages: Math.ceil((count || 0) / limit),
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching courses:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
