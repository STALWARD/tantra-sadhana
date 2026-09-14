import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, phone, message, gRecaptchaToken } = body;

    // 1. Guard check
    if (!gRecaptchaToken) {
      return NextResponse.json({ error: 'Missing reCAPTCHA token.' }, { status: 400 });
    }

    // 2. Clean the Secret Key string to prevent trailing whitespace or quotes from breaking the fetch
    let secretKey = process.env.RECAPTCHA_SECRET_KEY || '';
    secretKey = secretKey.replace(/['"]+/g, '').trim(); 

    if (!secretKey) {
      return NextResponse.json({ error: 'Server misconfiguration: Secret key missing.' }, { status: 500 });
    }

    // 3. Fallback to passing parameters securely via clean URLSearchParams format
    const verifyUrl = 'https://google.com';
    
    const captchaResponse = await fetch(verifyUrl, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded' 
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: gRecaptchaToken,
      }).toString(),
    });

    // If Google responds with a bad connection layer, catch it here
    if (!captchaResponse.ok) {
      return NextResponse.json({ error: 'Google gateway connection timed out.' }, { status: 502 });
    }

    const captchaData = await captchaResponse.json();

    // 4. Verification Check
    if (!captchaData.success) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed. Please try again.' }, { status: 400 });
    }

    // 5. If human, execute your working Nodemailer block
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mailOptions: Mail.Options = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: `Tantra Sadhana: Message from ${name}`,
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
            resolve('Thanks! Email received.');
          } else {
            reject(err);
          }
        });
      });

    await sendMailPromise();
    return NextResponse.json({ message: 'Thanks! Email received. We shall contact you soon.' });

  } catch (err: any) {
    console.error("CRITICAL API RUNTIME ERROR:", err);
    return NextResponse.json(
      { error: err?.message || 'Network fetch connection dropped.' },
      { status: 500 }
    );
  }
}
