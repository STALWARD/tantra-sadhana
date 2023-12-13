import Camp from "@/components/Camp";
import Features from "@/components/Features";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";
import Mentor from "@/components/Team";
import Testimonial from "@/components/Testimonial"
import Newsletter from "@/components/Subscribe";
import Mudra from "@/components/Mudra";
import dynamic from "next/dynamic";
import { Metadata } from 'next';

 
export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
   const YoutubeVideo = dynamic(() => import("@/components/Video"),
 );
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <YoutubeVideo />
      <Mudra />
      <Mentor />
      <Faq />
      <Testimonial />     
      <Newsletter />
    </>
  )
}
