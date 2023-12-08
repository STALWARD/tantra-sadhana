import React from 'react'
import Service from '@/components/Service'
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: "Services",
  description: `Here are examples of our services.`,
};

const services = () => {
  return (
    <>
      <Service />
    </>
  )
}

export default services