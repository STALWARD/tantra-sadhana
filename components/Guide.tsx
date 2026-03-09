import { guideMeText } from '@/constants'
import Image from 'next/image'
import React from 'react'

// Optimized Inlined Meter SVG (No extra HTTP request)
const MeterIcon = ({ className }: { className?: string }) => (
  <svg 
    width="16" 
    height="158" 
    viewBox="0 0 16 158" 
    fill="none" 
    xmlns="http://www.w3.org" 
    className={className}
  >
    <path d="M8 0V158" stroke="#FF0000" strokeWidth="2" strokeDasharray="5 5" />
    <circle cx="8" cy="8" r="8" fill="#FF0000" />
    <circle cx="8" cy="150" r="8" fill="#000" />
  </svg>
);

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        {/* Logo: unoptimized for small static assets to reduce server overhead */}
        <Image 
          src="/assets/logo/logo.png" 
          alt="Company logo" 
          width={50} 
          height={50} 
          priority
          unoptimized
        />
        <p className="uppercase -mt-1 mb-3 text-red bold-16">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-97.5">
            Guide You to Easy Path
          </h2>
          <p className="regular-20 text-justify text-black xl:max-w-130">
            {guideMeText?.body}
          </p>
        </div>
      </div>

      {/* Container restricted to 721px to match displayed dimensions */}
      <div className="flexCenter max-container relative w-full ">
        <Image 
          src="/hath-yoga.webp"
          alt="boat"
          width={1920}
          height={1080}
          className="object-cover object-center 2xl:rounded-5xl"
          priority // Critical for LCP
          sizes="(max-width: 768px) 100vw, 721px" // Prevents downloading 3840px image
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          {/* Inlined SVG component */}
          <MeterIcon className="h-full w-auto" />
          
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="bold-16 text-red">
                  Learn Sri Vidya, Kaul Tantra etc.
                </p>
              </div>
              <p className="bold-20 mt-2">By Kaulbhaskar Guru Ji</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="bold-20 text-red">Tantra Puja & Rituals</p>
              <h3 className="bold-20 mt-2 whitespace-nowrap">By Real Masters</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
