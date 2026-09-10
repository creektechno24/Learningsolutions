import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { supabaseAdmin } from '@/lib/supabase/admin'

export async function POST(request: Request) {
  try {
    // -------------------------------------------------------
    // 1. Verify logged-in user
    // -------------------------------------------------------
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

// Verify ADMIN role
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
    

    // -------------------------------------------------------
    // 2. Verify PDF file
    // -------------------------------------------------------

    const formData = await request.formData()
    const file = formData.get('file')

    if (!(file instanceof File)) {
      return NextResponse.json(
        {
          error: 'PDF file is required',
        },
        { status: 400 }
      )
    }

    if (file.type !== 'application/pdf') {
      return NextResponse.json(
        {
          error: 'Please upload a valid PDF file',
        },
        { status: 400 }
      )
    }

    // -------------------------------------------------------
    // 3. PDF size limit
    // -------------------------------------------------------

    const maxSize = 50 * 1024 * 1024

    if (file.size > maxSize) {
      return NextResponse.json(
        {
          error:
            'PDF file must be smaller than 50 MB',
        },
        { status: 400 }
      )
    }

    // -------------------------------------------------------
    // 4. Cloudinary configuration
    // -------------------------------------------------------

    const cloudName =
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

    const apiKey =
      process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY

    const apiSecret =
      process.env.CLOUDINARY_API_SECRET

    if (!cloudName || !apiKey || !apiSecret) {
      return NextResponse.json(
        {
          error:
            'Cloudinary configuration is missing',
        },
        { status: 500 }
      )
    }

    // -------------------------------------------------------
    // 5. Get signed upload parameters
    // -------------------------------------------------------

    const timestamp = Math.floor(
      Date.now() / 1000
    )

    const folder =
      'learning-solutions/pdfs'

    const signResponse = await fetch(
  new URL(
    '/api/cloudinary/sign',
    request.url
  ),
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      cookie: request.headers.get('cookie') || '',
    },
    body: JSON.stringify({
      paramsToSign: {
        timestamp,
        folder,
      },
    }),
  }
)

    const signData = await signResponse.json()

    if (!signResponse.ok) {
      return NextResponse.json(
        {
          error:
            signData.error ||
            'Failed to prepare PDF upload',
        },
        { status: signResponse.status }
      )
    }

    // -------------------------------------------------------
    // 6. Upload PDF to Cloudinary
    // -------------------------------------------------------

    const uploadFormData = new FormData()

    uploadFormData.append('file', file)
    uploadFormData.append(
      'api_key',
      apiKey
    )
    uploadFormData.append(
      'timestamp',
      String(timestamp)
    )
    uploadFormData.append(
      'folder',
      folder
    )
    uploadFormData.append(
      'signature',
      signData.signature
    )

    const uploadResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`,
      {
        method: 'POST',
        body: uploadFormData,
      }
    )

    const uploadData =
      await uploadResponse.json()

    if (!uploadResponse.ok) {
      console.error(
        'Cloudinary PDF upload error:',
        uploadData
      )

      return NextResponse.json(
        {
          error:
            uploadData.error?.message ||
            'PDF upload failed',
        },
        { status: 500 }
      )
    }

    // -------------------------------------------------------
    // 7. Return uploaded PDF URL
    // -------------------------------------------------------

    return NextResponse.json({
      url: uploadData.secure_url,
    })
  } catch (error) {
    console.error(
      'PDF upload error:',
      error
    )

    return NextResponse.json(
      {
        error: 'Unable to upload PDF',
      },
      { status: 500 }
    )
  }
}