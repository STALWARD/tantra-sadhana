import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  try {
    // 1. Extract the captchaToken along with form values
    const { email, name, message, captchaToken } = await request.json();

    // 2. Validate that the token exists
    if (!captchaToken) {
      return NextResponse.json(
        { error: 'Missing reCAPTCHA token.' },
        { status: 400 }
      );
    }

    // 3. Verify the token with Google APIs
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verifyUrl = `https://google.com{secretKey}&response=${captchaToken}`;

    const captchaResponse = await fetch(verifyUrl, { method: 'POST' });
    const captchaValidation = await captchaResponse.json();

    // 4. Block execution if Google reports verification failure
    if (!captchaValidation.success) {
      return NextResponse.json(
        { error: 'reCAPTCHA validation failed.' },
        { status: 400 }
      );
    }

    // 5. Setup your Nodemailer transporter if verification succeeds
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

    // 6. Promisify and send the mail
    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, (err) => {
          if (!err) {
            resolve('Thanks! Email received. We shall contact you soon.');
          } else {
            reject(err);
          }
        });
      });

    await sendMailPromise();
    
    return NextResponse.json({
      message: 'Thanks! Email received. We shall contact you soon.',
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
