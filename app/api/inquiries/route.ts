import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { resend } from "@/lib/resend";
import InquiryNotification from "@/emails/inquiry-notification";

export async function POST(request: NextRequest) {
  try {
    console.log("API HIT");

    const supabase = supabaseAdmin;

    const body = await request.json();

    console.log("BODY:", body);

    const {
      company_name,
      contact_person,
      email,
      phone,
      course,
      training_mode,
      participants,
      message,
    } = body;

    const { data, error } = await supabase
      .from("training_inquiries")
      .insert([
        {
          company_name,
          contact_person,
          email,
          phone,
          course,
          training_mode,
          participants,
          message,
        },
      ])
      .select();

    console.log("DATA:", data);
    console.log("ERROR:", error);

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 500 }
      );
    }

    try {
  await resend.emails.send({
    from: "Creek Learning Solutions <onboarding@resend.dev>",
    to: process.env.ADMIN_EMAIL!,
    subject: "New Training Inquiry Received",
    react: InquiryNotification({
      company_name,
      contact_person,
      email,
      phone,
      course,
      training_mode,
      participants,
      message,
    }),
  });
} catch (emailError) {
  console.error("Email Error:", emailError);
}

    return NextResponse.json({
      success: true,
      message: "Inquiry submitted successfully.",
    });
  } catch (error) {
    console.error("CATCH ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}