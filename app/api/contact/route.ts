import { NextRequest, NextResponse } from "next/server";
import type { ContactFormData } from "@/types/content";

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.serviceType || !body.message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the contact form submission to console
    console.log("=== Contact Form Submission ===");
    console.log("Name:", body.name);
    console.log("Email:", body.email);
    console.log("Phone:", body.phone);
    console.log("Service Type:", body.serviceType);
    console.log("Message:", body.message);
    console.log("Preferred Time:", body.preferredTime || "Not specified");
    console.log("Timestamp:", new Date().toISOString());
    console.log("===============================");

    // In the future, you can integrate with email services like Resend, SendGrid, etc.
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New Contact Form: ${body.serviceType}`,
    //   html: `<p>Name: ${body.name}</p>...`
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting us! We'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process your request" },
      { status: 500 }
    );
  }
}

