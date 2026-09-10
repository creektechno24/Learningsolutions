import { NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'

import { createClient } from '@/lib/supabase/server'
import { supabaseAdmin } from '@/lib/supabase/admin'

cloudinary.config({
  cloud_name:
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key:
    process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret:
    process.env.CLOUDINARY_API_SECRET,
})

export async function POST(request: Request) {
  try {
    // Check logged-in user
    const supabase = await createClient()

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json(
        {
          error: 'Unauthorized',
        },
        { status: 401 }
      )
    }

    // Check ADMIN role
    const {
      data: publicUser,
      error: userError,
    } = await supabaseAdmin
      .from('users')
      .select('id, role')
      .eq('auth_user_id', user.id)
      .maybeSingle()

    if (userError || !publicUser) {
      return NextResponse.json(
        {
          error: 'User profile not found',
        },
        { status: 404 }
      )
    }

    if (publicUser.role !== 'ADMIN') {
      return NextResponse.json(
        {
          error: 'Admin access required',
        },
        { status: 403 }
      )
    }

    const body = await request.json()

    const {
      paramsToSign,
    } = body

    if (!paramsToSign) {
      return NextResponse.json(
        {
          error:
            'Missing parameters to sign',
        },
        { status: 400 }
      )
    }

    const apiSecret =
      process.env.CLOUDINARY_API_SECRET

    if (!apiSecret) {
      console.error(
        'Cloudinary API secret is missing'
      )

      return NextResponse.json(
        {
          error:
            'Cloudinary configuration is missing',
        },
        { status: 500 }
      )
    }

    const signature =
      cloudinary.utils.api_sign_request(
        paramsToSign,
        apiSecret
      )

    return NextResponse.json({
      signature,
    })
  } catch (error) {
    console.error(
      'Cloudinary signature error:',
      error
    )

    return NextResponse.json(
      {
        error:
          'Failed to generate Cloudinary signature',
      },
      { status: 500 }
    )
  }
}