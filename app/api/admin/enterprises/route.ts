import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data: enterprises, error } = await supabase
      .from('enterprise_profiles')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json(enterprises)
  } catch (error: any) {
    console.error('Error fetching enterprises:', error.message)
    return NextResponse.json(
      { error: 'Failed to fetch enterprises' },
      { status: 500 }
    )
  }
}
