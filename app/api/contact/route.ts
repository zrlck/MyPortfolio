import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Ensure the recipient email is set via environment variable
    const recipientEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL

    if (!recipientEmail) {
      console.error("NEXT_PUBLIC_CONTACT_EMAIL environment variable is not set.")
      return NextResponse.json({ message: "Server configuration error: Recipient email not set." }, { status: 500 })
    }

    // Create a Nodemailer transporter using your SMTP details from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: Number(process.env.EMAIL_SERVER_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    })

    // Verify transporter configuration (optional, but good for debugging)
    await transporter.verify()
    console.log("Transporter is ready to send messages")

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_SERVER_USER, // Sender address (your email)
      to: recipientEmail, // Recipient address (your email)
      subject: `New Contact Form Submission from ${name}`, // Subject line
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `, // HTML body
    })

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ message: "Failed to send email." }, { status: 500 })
  }
}
