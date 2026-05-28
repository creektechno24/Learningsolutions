import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function PATCH(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const supabase = await createClient()

    const trainerId = context.params.id

    const { data, error } = await supabase
      .from('trainer_profiles')
      .update({
        approved: false,
        status: 'rejected',
        updated_at: new Date().toISOString(),
      })
      .eq('id', trainerId)
      .select()
      .single()

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}