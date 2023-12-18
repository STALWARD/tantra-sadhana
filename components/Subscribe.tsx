'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email'

export type FormData = {
  email: string;
  name: string;
  phone: string;
  message: string;
};

const Subscribe: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  function onSubmit(data: FormData) {
    sendEmail(data);
  }
  return (
    <>
      {/* <div className="mx-auto max-w-2xl md:max-w-7xl sm:rounded-3xl testimonialbg"> */}
      <div className="mx-auto max-w-2xl md:max-w-7xl sm:rounded-3xl">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">
          <div className="col-span-12 bg-imagee">
            <div className="mb-10 mt-24 lg:mx-64 lg:my-24">
              <h3 className="text-5xl md:text-55xl text-center font-bold text-white mb-3">Newsletter.</h3>
              <h3 className="text-base font-normal opacity-75 text-white text-center mb-8">
                Subscrible our newsletter for <br /> latest Events and News.
              </h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-5'>
                  <label
                    htmlFor='email'
                    className='mb-3 block text-base font-medium text-white'
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
                <div>
                  <button className='hover:bg-black hover:text-white rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-black outline-none'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Subscribe;
