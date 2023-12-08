import Image from "next/image";
import React from "react";
import Mailer from "@/components/mailer";
import { contactMeText } from "@/constants";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Contact Us",
  description: `Here are our contact-details.`,
};

export default function Contact() {
  return (
    <div className="flex flex-col w-11/12 content-center m-auto mt-10">
      <div className="flexCenter max-container relative w-full" >
      <Image
          src='/phone-image.jpeg'
          alt='telephone'  
          width={1440}
          height={580}
          className="w-auto h-auto object-cover object-center 2xl:rounded-s-xl"
        />
        <h1 className="absolute text-4xl text-center text-black justify-center font-bold mb-30 pageHeader">Contact Us</h1>
      </div>
      <div className=" flex-row md:flex w-full content-center m-auto bg-grey-light p-10 gap-10">
        <div className="flex flex-col sm:w-1/2 w-full">
          <h2 className="text-2xl font-semibold mb-10">{contactMeText.title}</h2>
          <p className="text-xl font-normal mb-2" >{contactMeText.body}</p>
          <Image
          	src='/contact-form-image.png'
          	alt='contact-image'  
          	width={1440}
          	height={580}
          	className="w-auto h-auto object-cover object-center 2xl:rounded-s-xl"
        	/>
        </div>
        <div className="flex flex-col sm:w-1/2 w-full" >
          <Mailer />
        </div>
      </div>
    </div>
  );
}