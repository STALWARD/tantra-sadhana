import React from 'react'
import Service from '@/components/Service'
import Faq from '@/components/Faq'
import Latest from "@/components/LatestPost";
import Newsletter from "@/components/Subscribe";
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
      <Latest />
      <Newsletter />
    </>
  )
}

export default services


