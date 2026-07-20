import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { deleteCloudinaryFile } from "@/lib/cloudinary/delete-file";
import { v2 as cloudinary } from "cloudinary";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);


cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// GET SINGLE RESOURCE

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { data, error } = await supabase
      .from("resources")
      .select("*")
      .eq("id", id)
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

// UPDATE RESOURCE

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

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


// Get existing resource
const { data: existingResource, error: fetchError } =
  await supabase
    .from("resources")
    .select(
      "thumbnail_public_id, file_public_id"
    )
    .eq("id", id)
    .single();

if (fetchError) {
  return NextResponse.json(
    {
      success: false,
      message: fetchError.message,
    },
    {
      status: 500,
    }
  );
}

// Delete old thumbnail if changed
if (
  thumbnail_public_id &&
  existingResource.thumbnail_public_id &&
  thumbnail_public_id !==
    existingResource.thumbnail_public_id
) {
  await cloudinary.uploader.destroy(
    existingResource.thumbnail_public_id
  );
}

// Delete old resource file if changed
if (
  file_public_id &&
  existingResource.file_public_id &&
  file_public_id !==
    existingResource.file_public_id
) {
  await cloudinary.uploader.destroy(
    existingResource.file_public_id,
    {
      resource_type: "raw",
    }
  );
}

    const { data, error } = await supabase
      .from("resources")
      .update({
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

  updated_at: new Date().toISOString(),
})
      .eq("id", id)
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

 // DELETE RESOURCE

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Get resource first
    const { data: resource, error: fetchError } = await supabase
      .from("resources")
      .select("thumbnail_public_id, file_public_id")
      .eq("id", id)
      .single();

    if (fetchError) {
      return NextResponse.json(
        {
          success: false,
          message: fetchError.message,
        },
        {
          status: 500,
        }
      );
    }

    // Delete thumbnail from Cloudinary
    if (resource?.thumbnail_public_id) {
      await cloudinary.uploader.destroy(
        resource.thumbnail_public_id
      );
    }

    // Delete PDF / DOC / File from Cloudinary
    if (resource?.file_public_id) {
      await cloudinary.uploader.destroy(
        resource.file_public_id,
        {
          resource_type: "raw",
        }
      );
    }

    // Delete database record
    const { error } = await supabase
      .from("resources")
      .delete()
      .eq("id", id);

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