/* eslint-disable react/jsx-key */
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flexCenter bg-slate-200 pt-10 mt-10 mb-10">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/assets/logo/logo.png" alt="logo" width={50} height={50}/>
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <Link
                  href="/about"
                  className=" text-black "
                  >
                  About
                </Link>
                <Link
                  href="/services"
                  className=" text-black "
                  >
                  Services
                </Link>
                <Link
                  href="/blog"
                  className=" text-black "
                  >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className=" text-black "
                  >
                  Contact
                </Link>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
            {FOOTER_CONTACT_INFO.map((columns) => (
              <FooterColumn title={columns.title}>
                <Link
                  href="https://wa.me/+919934418459"
                  target="_blank" rel="noopener noreferrer"
                  className=" text-black "
                  >
                  WhatsApp
                </Link>
                <Link
                  href="mailto:kaultantra@gmail.com"
                  target="_blank" rel="noopener noreferrer"
                  className=" text-black "
                  >
                  Email:admin
                </Link>
                <Link
                  href="tel:+919934418459"
                  target="_blank" rel="noopener noreferrer"
                  className=" text-black "
                  >
                  Call Us
                </Link>
              </FooterColumn>
            ))}
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  <Link href="https://www.facebook.com/KAULBHASKAR" target="_blank" rel="noopener noreferrer">
                    <Image src={'/facebook.svg'} alt="logo" width={24} height={24} />
                  </Link>
                  <Link href="https://twitter.com/KAULMARGA" target="_blank" rel="noopener noreferrer">
                    <Image src={'/twitter.svg'} alt="logo" width={24} height={24} />
                  </Link>
                  <Link href="https://www.youtube.com/@kaulbhaskar/videos" target="_blank" rel="noopener noreferrer">
                    <Image src={'/youtube.webp'} alt="logo" width={24} height={24} />
                  </Link>
                  <Link href="https://www.linkedin.com/in/kaul-bhaskar-006a12234/" target="_blank" rel="noopener noreferrer">
                    <Image src={'/Linkedin.svg'} alt="logo" width={24} height={24} />
                  </Link>
                  <Link href="https://t.me/Tantrasadhana" target="_blank" rel="noopener noreferrer">
                    <Image src={'/telegram.svg'} alt="logo" width={24} height={24} />
                  </Link>   
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className="border bg-gray-20" />
        <p className=" w-full text-center regular-18 text-black pb-5">2025 TANTRA SADHANA | All rights reserved</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer
