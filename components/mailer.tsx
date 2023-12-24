'use client';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const Mailer: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <main>
      <h1 className="text-xl text-center text-black justify-center font-semibold mt-5 mb-10">Contact Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-5'>
          <label
            htmlFor='name'
            className='mb-3 block text-base font-medium text-black'
            >
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
          <label
            htmlFor='phone'
            className='mb-3 block text-base font-medium text-black'
            >
            Phone
          </label>
          <input
            type='tel'
            placeholder='Telephone Number with Country code'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            {...register('name', { required: true })}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='email'
            className='mb-3 block text-base font-medium text-black'
            >
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
          <label
            htmlFor='message'
            className='mb-3 block text-base font-medium text-black'
            >
            Message
          </label>
          <textarea
            rows={4}
            placeholder='Type your message'
            className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            {...register('message', { required: true })}
            >
          </textarea>
          <label
            htmlFor="default-checkbox"
            className="flex max-w-[425px] cursor-pointer select-none pl-5"
            >
            By clicking Submit button, you consent data usage in “Form” 
            And also consent cookie usage in browser.
          </label>

        </div>

        <div>
          <button className='hover:shadow-form rounded-md bg-purple-500 hover:bg-black py-3 px-8 text-base font-semibold text-white outline-none'>
            Submit
          </button>
        </div>

      </form>

    </main>
  );
};

export default Mailer;
