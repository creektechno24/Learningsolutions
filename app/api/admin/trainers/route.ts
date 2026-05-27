import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if user is admin (you'll need to implement this check)
    // For now, we'll fetch all trainers with pending status
    const { data: trainers, error } = await supabase
      .from('trainer_profiles')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json(trainers)
  } catch (error: any) {
    console.error('Error fetching trainers:', error.message)
    return NextResponse.json(
      { error: 'Failed to fetch trainers' },
      { status: 500 }
    )
  }
}
