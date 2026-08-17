import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { resend } from "@/lib/resend";
import ContactNotification from "@/emails/contact-notification";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      company,
      subject,
      message,
    } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Save message to Supabase
    const { error: dbError } = await supabase
      .from("contact_messages")
      .insert({
        name,
        email,
        phone: phone || null,
        company: company || null,
        subject,
        message,
      });

    if (dbError) {
      console.error("Supabase Error:", dbError);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to save your message.",
        },
        { status: 500 }
      );
    }

    // Send notification email
    try {
      const { error: emailError } = await resend.emails.send({
        from: "Creek Learning Solutions <noreply@creeklearningsolutions.com>",
        to: "info@creeklearningsolutions.com",
        subject: "New Contact Message Received",
        react: ContactNotification({
          name,
          email,
          phone,
          company,
          subject,
          message,
        }),
      });

      if (emailError) {
        console.error("Resend Error:", emailError);
      }
    } catch (emailError) {
      console.error("Email Exception:", emailError);
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you for contacting Creek Learning Solutions. We will get back to you shortly.",
    });
  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}