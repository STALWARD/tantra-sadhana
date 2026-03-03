import Image from "next/image";
import Mailer from "@/components/mailer";
import { contactMeText } from "@/constants";
import { Metadata } from "next";
import Newsletter from "@/components/Newsletter";

export const metadata:Metadata = {
  title: 'Contact Kaulbhaskar | Tantra & Astrology Guidance',
  description: `Get in touch with Kaulbhaskar Guru Ji for Tantra and Astrology consultations.`,
  keywords: 'Contact Kaulbhaskar, Tantra Consultation, Astrology Guidance, Sri Vidya Upasana contact',
  alternates: {
    canonical: '/contact',
  }
};

export default function Contact() {
  const contactLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Tantra Sadhana",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C-40 Birla Colony, Phulwarisharif",
      "addressLocality": "Patna",
      "addressRegion": "Bihar",
      "addressCountry": "IN"
    },
    "telephone": "+91-9934418459",
    "email": "kaultantra@gmail.com",
    "openingHours": "Mo-Sa 10:00-20:00, Su 10:00-16:00"
  }
};

  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd) }}
    />
    <div className="flex flex-col w-11/12 content-center m-auto mt-10">
      <div className="flexCenter max-container relative w-full" >
      <Image
          src='/phone-image.jpeg'
          alt='telephone'  
          width={1440}
          height={580}
          priority
          className="w-screen h-screen object-cover object-center 2xl:rounded-s-xl"
        />
        <h1 className="absolute text-4xl text-center text-black justify-center font-bold mb-80 pageHeader">Contact Us</h1>
        <div className=" absolute flex-row lg:flex mx-10 mt-80 gap-24" >

          <div className="mt-5 md:mt-0 text-center" >
            <h2 className="text-xl font-bold text-black">Open Hours</h2>
            <p className="text-md md:text-lg font-semibold text-red">Mon-Sat: 10.00 AM - 08.00 PM</p>
            <p className="text-md md:text-lg font-semibold text-red">Sun: 10.00 AM - 04.00 PM</p>
          </div>
          <div className="mt-5 md:mt-0 text-center" >
            <h2 className="text-xl font-bold text-black">LOCATION</h2>
            <p className="text-md md:text-lg font-semibold text-red">Patna, Bihar(IN)</p>
          </div>
          <div className="mb-5 mt-5 md:mt-0 text-center" >
            <h2 className="text-xl font-bold text-black">Contact</h2>
            <p className="text-md md:text-lg font-semibold text-red">Email: kaultantra@gmail.com</p>
            <p className="text-md md:text-lg font-semibold text-red">Tel: +91-9934418459</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5">
        <p className="flex text-xl md:text-2xl lg:text-4xl text-black font-bold ">Our Location on Map</p>
      </div>
      <div className="flex mt-5">
        <iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=C-40%20Birla%20Colony,%20Phulwarisharif+(TANTRA%20SADHANA)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
      </div>
      <div className=" flex-row md:flex w-full content-center m-auto bg-grey-light p-10 gap-10">
        <div className="flex flex-col sm:w-1/2 w-full">
          <h2 className="text-2xl font-semibold mb-10">{contactMeText.title}</h2>
          <p className="text-xl font-normal mb-2" >{contactMeText.body}</p>
          <Image
          	src='/contact-form-image.webp'
          	alt='contact-image'  
          	width={500}
          	height={500}
          	className="w-auto h-auto object-cover object-center 2xl:rounded-s-xl"
        	/>
        </div>
        <div className="flex flex-col sm:w-1/2 w-full" >
          <Mailer />
        </div>
      </div>
    </div>
      <Newsletter />
    </>
  );
}





