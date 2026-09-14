'use client';

import { FC, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
  captchaToken: string;
};

const Mailer: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const onSubmit = (data: FormData) => {
    if (!captchaToken) {
      alert('Please complete the reCAPTCHA checkbox verification.');
      return;
    }

    // Append the token to the payload going to sendEmail
    const payload = {
      ...data,
      captchaToken: captchaToken,
    };

    sendEmail(payload);

    // Reset both form states and widget upon processing execution
    reset();
    recaptchaRef.current?.reset();
    setCaptchaToken(null);
  };

  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-xl text-center text-black font-semibold mt-5 mb-10">
        Contact Form
      </h1>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Input */}
        <div className="mb-5">
          <label htmlFor="name" className="mb-3 block text-base font-medium text-black">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Full Name"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register('name', { required: true })}
          />
        </div>

        {/* Phone Input */}
        <div className="mb-5">
          <label htmlFor="phone" className="mb-3 block text-base font-medium text-black">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Telephone Number with Country code"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register('phone', { required: true })}
          />
        </div>

        {/* Email Input */}
        <div className="mb-5">
          <label htmlFor="email" className="mb-3 block text-base font-medium text-black">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@domain.com"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register('email', { required: true })}
          />
        </div>

        {/* Message Input */}
        <div className="mb-5">
          <label htmlFor="message" className="mb-3 block text-base font-medium text-black">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Type your message"
            className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register('message', { required: true })}
          />
          <label htmlFor="default-checkbox" className="flex max-w-lg cursor-pointer select-none pl-5 mt-3 mb-5 text-sm text-gray-600">
            By clicking Submit button, you consent data usage in “Form” 
            And also consent cookie usage in browser.
          </label>
        </div>

        {/* reCAPTCHA Checkbox Element */}
        <div className="mb-5">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={handleCaptchaChange}
          />
        </div>

        <div>
          <button type="submit" className="hover:shadow-form rounded-md bg-purple-500 hover:bg-black py-3 px-8 text-base font-semibold text-white outline-none transition-colors">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default Mailer;
