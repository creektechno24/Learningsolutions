import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    console.log('====================')
    console.log('API ID =>', id)
    console.log('====================')

    const supabase = await createClient()

    const { data, error } = await supabase
      .from('trainer_profiles')
      .select('*')
      .eq('id', id)
      .single()

    console.log('DATA =>', data)
    console.log('ERROR =>', error)

    if (error) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
          details: error,
        },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        data,
      },  
      { status: 200 }
    )
  } catch (error) {
    console.error('SERVER ERROR =>', error)

    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
      },
      { status: 500 }
    )
  }
}