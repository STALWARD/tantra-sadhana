import React from 'react'
import Service from '@/components/Service'
import Faq from '@/components/Faq'
import { Metadata } from 'next';
import Newsletter from "@/components/Subscribe";

export const metadata:Metadata = {
  title: "Services",
  description: `Here are examples of our services.`,
};

const services = () => {
  return (
    <>
      <Service />
      <Faq />
      <Newsletter />
    </>
  )
}

export default services

