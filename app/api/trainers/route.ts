import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    const searchParams = request.nextUrl.searchParams

    // Get query parameters for filtering and pagination
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')
    const specialty = searchParams.get('specialty')
    const search = searchParams.get('search')
    const sort = searchParams.get('sort') || 'created_at'

    let query = supabase
      .from('trainer_profiles')
      .select(
        `
   id,
first_name,
last_name,
bio,
profile_image_url,
expertise,
expertise_text,
qualification,
years_of_experience,
hourly_rate,
created_at,
status
      `,
        { count: 'exact' }
      )
    
      .eq('status', 'approved')

    // Apply specialty filter
if (specialty?.trim()) {
  query = query.ilike(
    'expertise_text',
    `%${specialty.trim()}%`
  )
}

    // Apply search filter
if (search?.trim()) {
  const searchTerm = search.trim()

  query = query.or(
    `first_name.ilike.%${searchTerm}%,last_name.ilike.%${searchTerm}%,bio.ilike.%${searchTerm}%,qualification.ilike.%${searchTerm}%,expertise_text.ilike.%${searchTerm}%`
  )
}

    // Apply sorting
    if (sort === 'experience') {
      query = query.order('years_of_experience', { ascending: false })
    } else if (sort === 'rate_low') {
      query = query.order('hourly_rate', { ascending: true })
    } else if (sort === 'rate_high') {
      query = query.order('hourly_rate', { ascending: false })
    } else {
      query = query.order('created_at', { ascending: false })
    }

    // Apply pagination
    const from = (page - 1) * limit
    const to = from + limit - 1
    query = query.range(from, to)

    const { data, error, count } = await query

    if (error) {
  console.log(error)

  return NextResponse.json(
    {
      data: [],
      pagination: {
        page: 1,
        limit: 12,
        total: 0,
        pages: 0,
      },
      error: error.message,
    },
    { status: 400 }
  )
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
    console.error('Error fetching trainers:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
