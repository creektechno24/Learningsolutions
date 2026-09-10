import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/admin'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const normalizedEmail = email.trim().toLowerCase()

    const { data: user, error } = await supabaseAdmin
      .from('users')
      .select('id, auth_user_id, email')
      .eq('email', normalizedEmail)
      .maybeSingle()

    if (error) {
      console.error('User check error:', error)

      return NextResponse.json(
        { error: 'Unable to check user' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      exists: !!user,
    })
  } catch (error) {
    console.error('Check user API error:', error)

    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}