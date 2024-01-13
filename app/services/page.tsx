import React from 'react'
import Service from '@/components/Service'
import Faq from '@/components/Faq'
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: "Services",
  description: `Here are examples of our services.`,
};

const services = () => {
  return (
    <>
      <Service />
      <Faq />
    </>
  )
}

export default services
