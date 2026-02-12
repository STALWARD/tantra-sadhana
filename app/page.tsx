import Camp from "@/components/Camp";
import Features from "@/components/Features";
import CalendarComponent from "@components/CalendarComponent";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";
import Mentor from "@/components/Team";
import Testimonial from "@/components/Testimonial"
import Newsletter from "@/components/Subscribe";
import Mudra from "@/components/Mudra";
import Latest from "@/components/LatestPost";
import dynamic from "next/dynamic";
import { Metadata } from 'next';

const YouTubeFrame = dynamic(() => import("@/components/Video"));

 
export const metadata: Metadata = {
  title: 'KAUL TANTRA SADHANA # KAULBHASKAR',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
     <CalendarComponent />
      <YouTubeFrame />
      <Mudra />
      <Mentor />
      <Latest />
      <Faq />
      <Testimonial />     
      <Newsletter />
    </>
  )
}
