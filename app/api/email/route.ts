import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  // 1. Destructure the gRecaptchaToken along with form fields
  const { email, name, message, gRecaptchaToken } = await request.json();

  // 2. Validate that the token exists
  if (!gRecaptchaToken) {
    return NextResponse.json({ error: 'Missing reCAPTCHA token.' }, { status: 400 });
  }

  try {
    // 3. Verify the token with Google's siteverify API
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verifyUrl = `https://google.com{secretKey}&response=${gRecaptchaToken}`;

    const captchaResponse = await fetch(verifyUrl, { method: 'POST' });
    const captchaData = await captchaResponse.json();

    // 4. Return an error early if verification fails
    if (!captchaData.success) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed.' }, { status: 400 });
    }

    // 5. If reCAPTCHA succeeds, proceed with your existing Nodemailer transport logic
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
      subject: `Message from ${name} (${email})`,
      text: message,
    };

    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve('Thanks! Email received. We shall contact you soon.');
          } else {
            reject(err.message);
          }
        });
      });

    await sendMailPromise();
    return NextResponse.json({ message: 'Thanks! Email received. We shall contact you soon.' });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || err }, { status: 500 });
  }
}
