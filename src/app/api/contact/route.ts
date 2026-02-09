import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Submit to Formspree (to receive message on your email)
    const formspreeResponse = await fetch("https://formspree.io/f/mjgekjbl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (!formspreeResponse.ok) {
      throw new Error("Failed to submit to Formspree");
    }

    // Send confirmation email to user via Resend
    await resend.emails.send({
      from: "CCC Kolkata <contact@ccckolkata.in>",
      to: email,
      subject: "Thanks for reaching out to CCC Kolkata! 🚀",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #ffffff; font-size: 28px; margin: 0; font-weight: 700;">CCC KOLKATA</h1>
            <p style="color: #888; font-size: 12px; margin-top: 5px; letter-spacing: 2px;">MARKETING AGENCY</p>
          </div>
          
          <div style="background: rgba(255,255,255,0.05); border-radius: 16px; padding: 30px; border: 1px solid rgba(255,255,255,0.1);">
            <p style="font-size: 18px; color: #ffffff; margin-bottom: 20px;">Hey ${name}! 👋</p>
            
            <p style="font-size: 15px; color: #cccccc; line-height: 1.8; margin-bottom: 15px;">
              Thanks for reaching out to <strong style="color: #ffffff;">CCC Kolkata</strong>.
            </p>
            
            <p style="font-size: 15px; color: #cccccc; line-height: 1.8; margin-bottom: 15px;">
              Your message has been received, and one of our marketing experts will connect with you soon.
            </p>
            
            <p style="font-size: 15px; color: #cccccc; line-height: 1.8; margin-bottom: 25px;">
              <strong style="color: #25D366;">Excited to explore how we can grow your brand.</strong> 🌱
            </p>
            
            <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; margin-top: 20px;">
              <p style="font-size: 13px; color: #888;">Your message:</p>
              <p style="font-size: 14px; color: #aaa; font-style: italic; background: rgba(255,255,255,0.03); padding: 15px; border-radius: 8px; border-left: 3px solid #25D366;">"${message}"</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
            <p style="font-size: 12px; color: #666;">
              Follow us on 
              <a href="https://www.instagram.com/ccc.kolkata/" style="color: #25D366; text-decoration: none;">Instagram</a>
            </p>
            <p style="font-size: 11px; color: #555; margin-top: 10px;">© 2025 CCC Kolkata. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
