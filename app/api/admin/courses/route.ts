import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data: courses, error } = await supabase
      .from('courses')
      .select(`
        *,
        trainer:trainers(first_name, last_name, email),
        category:course_categories(name)
      `)
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json(courses)
  } catch (error: any) {
    console.error('Error fetching courses:', error.message)
    return NextResponse.json(
      { error: 'Failed to fetch courses' },
      { status: 500 }
    )
  }
}
