import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// GET ALL RESOURCES

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("resources")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      resources: data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}

// CREATE RESOURCE

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

   const {
  title,
  slug,
  description,
  category,
  type,

  thumbnail,
  thumbnail_public_id,

  file_url,
  file_public_id,

  featured,
  published,
  display_order,
} = body;


if (
  !title ||
  !slug ||
  !description ||
  !category ||
  !type
) {
  return NextResponse.json(
    {
      success: false,
      message: "Please fill all required fields.",
    },
    {
      status: 400,
    }
  );
}


const { data: existingResource } = await supabase
  .from("resources")
  .select("id")
  .eq("slug", slug)
  .maybeSingle();

if (existingResource) {
  return NextResponse.json(
    {
      success: false,
      message: "A resource with this slug already exists.",
    },
    {
      status: 400,
    }
  );
}

    const { data, error } = await supabase
      .from("resources")
      .insert({
  title,
  slug,
  description,
  category,
  type,

  thumbnail,
  thumbnail_public_id,

  file_url,
  file_public_id,

  featured,
  published,
  display_order,
})
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      resource: data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}