import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  try {
    // 1. Safely parse payload data fields
    const body = await request.json();
    const { email, name, phone, message, gRecaptchaToken } = body;

    // 2. Validate token presence before making external requests
    if (!gRecaptchaToken) {
      return NextResponse.json({ error: 'Missing reCAPTCHA token validation data.' }, { status: 400 });
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      console.error("CRITICAL CONFIGURATION ERROR: RECAPTCHA_SECRET_KEY environment variable is not defined!");
      return NextResponse.json({ error: 'Server environment misconfiguration error.' }, { status: 500 });
    }

    // 3. Robust verification using URLSearchParams (Google's native preferred payload format)
    const verifyUrl = 'https://google.com';
    
    const captchaResponse = await fetch(verifyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: secretKey,
        response: gRecaptchaToken,
      }).toString(),
    });

    if (!captchaResponse.ok) {
      return NextResponse.json({ error: 'Failed communicating with Google authorization servers.' }, { status: 502 });
    }

    const captchaData = await captchaResponse.json();

    // 4. Reject submissions from malicious scripts/failed tokens
    if (!captchaData.success) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed. Please try again.' }, { status: 400 });
    }

    // 5. Proceed with Nodemailer initialization
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD, // Must be an App Password if using 2FA!
      },
    });

    const mailOptions: Mail.Options = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: `Tantra Sadhana: New Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `,
    };

    // 6. Wrap SMTP execution cleanly inside a promise
    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve('Thanks! Email received. We shall contact you soon.');
          } else {
            reject(err);
          }
        });
      });

    await sendMailPromise();
    return NextResponse.json({ message: 'Thanks! Email received. We shall contact you soon.' });

  } catch (err: any) {
    console.error("API ROUTE EXCEPTION TRACE:", err);
    return NextResponse.json(
      { error: err?.message || 'An unexpected server connectivity issue occurred.' },
      { status: 500 }
    );
  }
}
