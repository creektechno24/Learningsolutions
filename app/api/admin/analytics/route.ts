import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Fetch all counts in parallel
    const [trainers, enterprises, courses, inquiries] = await Promise.all([
      supabase.from('trainer_profiles').select('id', { count: 'exact' }),
      supabase.from('enterprise_profiles').select('id', { count: 'exact' }),
      supabase.from('courses').select('id', { count: 'exact' }),
      supabase.from('training_inquiries').select('id', { count: 'exact' }),
    ])

    const pendingTrainers = await supabase
      .from('trainer_profiles')
      .select('id', { count: 'exact' })
      .eq('status', 'pending')

    const pendingEnterprises = await supabase
      .from('enterprise_profiles')
      .select('id', { count: 'exact' })
      .eq('status', 'pending')

    return NextResponse.json({
      totalTrainers: trainers.count || 0,
      totalEnterprises: enterprises.count || 0,
      totalCourses: courses.count || 0,
      totalInquiries: inquiries.count || 0,
      pendingTrainers: pendingTrainers.count || 0,
      pendingEnterprises: pendingEnterprises.count || 0,
    })
  } catch (error: any) {
    console.error('Error fetching analytics:', error.message)
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    )
  }
}
