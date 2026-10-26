"use client";

import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

// Kept this explicit definition here so your utils/send-email.ts file won't break your typescript compiler
export type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
  gRecaptchaToken?: string;
};

export default function Mailer() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [formData, setFormData] = useState<Omit<FormData, 'gRecaptchaToken'>>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending message...");

    const token = recaptchaRef.current?.getValue();

    if (!token) {
      alert("Please check the 'I am not a robot' box before submitting.");
      setStatus(null);
      return;
    }

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          gRecaptchaToken: token,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "Thanks! Email received. We shall contact you soon.");
        setStatus("Thanks! Email received. We shall contact you soon.");
        setFormData({ name: "", phone: "", email: "", message: "" });
        recaptchaRef.current?.reset(); 
      } else {
        alert(data.error || "Verification failed. Please try again.");
        setStatus(data.error || "Verification failed. Please try again.");
        recaptchaRef.current?.reset();
      }
    } catch (error) {
      setStatus("A connection error occurred. Please try again.");
    }
  };

  return (
    <main>
      <h1 className="text-xl text-center text-black justify-center font-semibold mt-5 mb-10">Contact Form</h1>
      <form onSubmit={handleSubmit}>
        
        {/* Name Input */}
        <div className='mb-5'>
          <label htmlFor='name' className='mb-3 block text-base font-medium text-black'>
            Name
          </label>
          <input
            type='text'
            name='name'
            placeholder='Full Name'
            value={formData.name}
            onChange={handleChange}
            required
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          />
        </div>

        {/* Phone Input */}
        <div className='mb-5'>
          <label htmlFor='phone' className='mb-3 block text-base font-medium text-black'>
            Phone
          </label>
          <input
            type='tel'
            name='phone'
            placeholder='Telephone Number with Country code'
            value={formData.phone}
            onChange={handleChange}
            required
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          />
        </div>

        {/* Email Input */}
        <div className='mb-5'>
          <label htmlFor='email' className='mb-3 block text-base font-medium text-black'>
            Email Address
          </label>
          <input
            type='email'
            name='email'
            placeholder='example@domain.com'
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          />
        </div>

        {/* Message Input */}
        <div className='mb-5'>
          <label htmlFor='message' className='mb-3 block text-base font-medium text-black'>
            Message
          </label>
          <textarea
            rows={4}
            name='message'
            placeholder='Type your message'
            value={formData.message}
            onChange={handleChange}
            required
            className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          />
          <label htmlFor="default-checkbox" className="flex max-w-106.25 cursor-pointer select-none pl-5 mt-3 text-sm text-gray-600">
            By clicking Submit button, you consent data usage in “Form” 
            And also consent cookie usage in browser.
          </label>
        </div>

        {/* reCAPTCHA Checkbox */}
        <div className='mb-5 flex justify-start'>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
          />
        </div>

        <div>
          <button type="submit" className='hover:shadow-form rounded-md bg-purple-500 hover:bg-black py-3 px-8 text-base font-semibold text-white outline-none transition-colors'>
            Submit
          </button>
        </div>

        {status && <p className="text-sm font-semibold mt-4 text-purple-600">{status}</p>}
      </form>
    </main>
  );
}
