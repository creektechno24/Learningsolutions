import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

interface RouteParams {
  params: Promise<{
    id: string
  }>
}

/* =========================================
   GET SINGLE COURSE
========================================= */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    console.log('COURSE ID =>', id)

    const supabase = await createClient()

    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('id', id)
        .single()

    console.log('DATA =>', data)
    console.log('ERROR =>', error)

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: 'Failed to fetch course' },
      { status: 500 }
    )
  }
}
/* =========================================
   UPDATE COURSE
========================================= */
export async function PATCH(
  request: NextRequest,
  { params }: RouteParams
) {
  const { id } = await params

  try {
    const supabase = await createClient()

    const body = await request.json()

    const updateData: any = {
  title: body.title,
  course_code: body.course_code,
  category_id: body.category_id,
  description: body.description,
  long_description: body.long_description,

  duration: body.duration,
  level: body.level,
  delivery_mode: body.delivery_mode,

  learning_objectives: body.learning_objectives,
  modules_covered: body.modules_covered,
  prerequisites: body.prerequisites,
  assessment_method: body.assessment_method,

  price: body.price,

  seo_title: body.seo_title,
  seo_description: body.seo_description,
  seo_keywords: body.seo_keywords,
}

    // publish status update support
    if (body.is_published !== undefined) {
      updateData.is_published = body.is_published
    }

    const { data, error } = await supabase
      .from('courses')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: 'Failed to update course' },
      { status: 500 }
    )
  }
}

/* =========================================
   DELETE COURSE
========================================= */
export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
) {
  const { id } = await params
  try {
    const supabase = await createClient()

    const { error } = await supabase
      .from('courses')
      .delete()
      .eq('id', id)

    if (error) throw error

    return NextResponse.json({
      success: true,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: 'Failed to delete course' },
      { status: 500 }
    )
  }
}