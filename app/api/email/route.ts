import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, phone, message, gRecaptchaToken } = body;

    if (!gRecaptchaToken) {
      return NextResponse.json({ error: 'Missing reCAPTCHA token.' }, { status: 400 });
    }

    // 1. Clean the key to remove extra spaces/quotes
    let secretKey = process.env.RECAPTCHA_SECRET_KEY || '';
    secretKey = secretKey.replace(/['"]+/g, '').trim(); 

    if (!secretKey) {
      return NextResponse.json({ error: 'Server misconfiguration: Secret key is completely blank.' }, { status: 500 });
    }

    // 2. Use the fallback alternative reCAPTCHA endpoint (safer routing path)
    const verifyUrl = 'https://recaptcha.google.com/recaptcha/api/siteverify';
    
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

    if (!captchaResponse.ok) {
      // Log the exact error code to your terminal so you can see why it dropped
      console.error(`NETWORK ERROR CODE FROM GOOGLE: ${captchaResponse.status}`);
      return NextResponse.json({ error: `Google server responded with error code: ${captchaResponse.status}` }, { status: 502 });
    }

    const captchaData = await captchaResponse.json();
    console.log("GOOGLE RESPONSE DATA:", captchaData);

    if (!captchaData.success) {
      // If the keys are swapped, Google returns success: false with an error-codes array
      const errorCodes = captchaData['error-codes'] ? captchaData['error-codes'].join(', ') : 'unknown';
      return NextResponse.json({ error: `reCAPTCHA failed. Reason: ${errorCodes}` }, { status: 400 });
    }

    // 3. Nodemailer SMTP Execution
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
            resolve('Email sent.');
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
      { error: `Internal connection issue: ${err?.message || 'timeout'}` },
      { status: 500 }
    );
  }
}
