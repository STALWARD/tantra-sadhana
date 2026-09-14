'use client';
import { FC, useRef } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
  recaptchaToken: string; // Added to schema
};

const Mailer: FC = () => {
  // 1. Create a reference for the reCAPTCHA component
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
  const { register, handleSubmit, setValue } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    // 2. Fetch the verification token from the reCAPTCHA widget
    const token = recaptchaRef.current?.getValue();
    
    if (!token) {
      alert('Please complete the reCAPTCHA verification.');
      return;
    }

    // 3. Append the token to the form submission payload
    const finalData = {
      ...data,
      recaptchaToken: token,
    };

    try {
      await sendEmail(finalData);
      
      // 4. Reset reCAPTCHA widget after successful execution
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error("Submission failed", error);
    }
  }

  return (
    <main>
      <h1 className="text-xl text-center text-black justify-center font-semibold mt-5 mb-10">Contact Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-5'>
          <label htmlFor='name' className='mb-3 block text-base font-medium text-black'>
            Name
          </label>
          <input
            type='text'
            placeholder='Full Name'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            {...register('name', { required: true })}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='phone' className='mb-3 block text-base font-medium text-black'>
            Phone
          </label>
          <input
            type='text'
            placeholder='Telephone Number with Country code'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            {...register('phone', { required: true })} // Fixed typo: registered 'phone' instead of duplicate 'name'
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='mb-3 block text-base font-medium text-black'>
            Email Address
          </label>
          <input
            type='email'
            placeholder='example@domain.com'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            {...register('email', { required: true })}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='message' className='mb-3 block text-base font-medium text-black'>
            Message
          </label>
          <textarea
            placeholder='Your message here...'
            rows={4}
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            {...register('message', { required: true })}
          />
        </div>

        {/* 5. Google reCAPTCHA component placement */}
        <div className="mb-5 flex justify-center">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          />
        </div>

        <div>
          <button className='w-full rounded-md bg-purple-600 py-3 px-8 text-base font-semibold text-white outline-none hover:bg-purple-700 transition duration-200'>
            Submit Form
          </button>
        </div>
      </form>
    </main>
  );
};

export default Mailer;
