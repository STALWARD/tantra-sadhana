import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  try {
    // 1. Parse incoming payload variables
    const body = await request.json();
    const { email, name, phone, message, gRecaptchaToken } = body;

    // 2. Validate token presence before execution
    if (!gRecaptchaToken) {
      return NextResponse.json({ error: 'Missing reCAPTCHA token validation data.' }, { status: 400 });
    }

    // 3. Extract secret key (Declared ONLY once)
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      console.error("CRITICAL CONFIGURATION ERROR: RECAPTCHA_SECRET_KEY environment variable is not defined!");
      return NextResponse.json({ error: 'Server environment misconfiguration error.' }, { status: 500 });
    }

    // 4. Secure communication via direct URL interpolation parameters
    const verifyUrl = `https://google.com{secretKey}&response=${gRecaptchaToken}`;
    
    const captchaResponse = await fetch(verifyUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!captchaResponse.ok) {
      console.error(`Google API Response Error Status: ${captchaResponse.status}`);
      return NextResponse.json({ error: 'Failed communicating with Google authorization servers.' }, { status: 502 });
    }

    const captchaData = await captchaResponse.json();

    // 5. Enforce bot validation gate check
    if (!captchaData.success) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed. Please try again.' }, { status: 400 });
    }

    // 6. Connect your Nodemailer email delivery transport rules
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD, // Must be a 16-character Google App Password if 2FA is active
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
    console.error("API ROUTE ERROR EXCEPTION:", err);
    return NextResponse.json(
      { error: err?.message || 'An unexpected runtime server issue occurred.' },
      { status: 500 }
    );
  }
}
