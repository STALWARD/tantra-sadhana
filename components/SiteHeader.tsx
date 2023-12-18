'use client'
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false);
  const show = () => setIsOpen(true);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <div className='absolute left-[50%] top-5 translate-x-[-50%]'>
        <Logo />
      </div>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
        <Link href={link.href} key={link.key} className="regular-18 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
        {link.label}
        </Link>
        ))}
      </ul>
      <div
        onClick={toggle}
        className="cursor-pointer pr-4 z-10 text-gray-500 lg:hidden"
      >
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {isOpen && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full bg-gradient-to-b from-red to-black text-white">
          {NAV_LINKS.map(nav => (
            <li key={nav.label}>
              <a href={nav.href} onClick={toggle}>
                {nav.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      <div className="lg:flexCenter hidden">
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
          <Link href="https://wa.me/+919934418459" target="_blank" rel="noopener noreferrer">
            <Image src={'/whatsapp.svg'} alt="logo" width={24} height={24} />
          </Link>
          <Link href="mailto:kaultantra@gmail.com" target="_blank" rel="noopener noreferrer">
            <Image src={'/email.svg'} alt="logo" width={24} height={24} />
          </Link>      
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
