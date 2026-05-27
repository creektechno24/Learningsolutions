import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { status } = body

    if (!['approved', 'rejected'].includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('trainer_profiles')
      .update({
        status,
        is_verified: status === 'approved',
        verification_date: new Date().toISOString(),
      })
      .eq('id', params.id)
      .select()

    if (error) throw error

    return NextResponse.json(data?.[0])
  } catch (error: any) {
    console.error('Error updating trainer:', error.message)
    return NextResponse.json(
      { error: 'Failed to update trainer' },
      { status: 500 }
    )
  }
}
