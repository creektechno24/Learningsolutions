import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()

    const { data, error } = await supabase
      .from('trainers')
      .select(
        `
        id,
        first_name,
        last_name,
        bio,
        profile_image_url,
        expertise,
        qualification,
        years_of_experience,
        hourly_rate,
        is_verified,
        email,
        phone,
        courses(id, title, slug, description, thumbnail_url, price)
      `
      )
      .eq('id', id)
      .eq('is_verified', true)
      .eq('status', 'approved')
      .single()

    if (error) {
      return NextResponse.json(
        { error: 'Trainer not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.error('Error fetching trainer:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
