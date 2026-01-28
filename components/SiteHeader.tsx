'use client'
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import dynamic from "next/dynamic";

const Logo = dynamic(() => import('./Logo'))

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      {/* Centered Logo */}
      <div className="absolute left-[50%] top-5 translate-x-[-50%]">
        <Logo />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="text-[20px] font-medium text-black flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div
        onClick={toggle}
        className="cursor-pointer pr-4 z-10 text-black lg:hidden"
      >
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full bg-gradient-to-b from-red-500 to-black text-white">
          {NAV_LINKS.map((nav) => (
            <li key={nav.key}>
              <Link href={nav.href} onClick={toggle}>
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Social Links */}
      <div className="hidden h-full gap-12 lg:flex">
        <ul className="regular-14 flex gap-4 text-black">
          <li>
            <Link href="https://www.facebook.com/KAULBHASKAR" target="_blank" rel="noopener noreferrer">
              <Image src="/facebook.svg" alt="facebook" width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/KAULMARGA" target="_blank" rel="noopener noreferrer">
              <Image src="/twitter.svg" alt="twitter" width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/@kaulbhaskar/videos" target="_blank" rel="noopener noreferrer">
              <Image src="/youtube.webp" alt="youtube" width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/kaul-bhaskar-006a12234/" target="_blank" rel="noopener noreferrer">
              <Image src="/Linkedin.svg" alt="linkedin" width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link href="https://t.me/Tantrasadhana" target="_blank" rel="noopener noreferrer">
              <Image src="/telegram.svg" alt="telegram" width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link href="https://wa.me/+919934418459" target="_blank" rel="noopener noreferrer">
              <Image src="/whatsapp.svg" alt="whatsapp" width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link href="mailto:kaultantra@gmail.com" target="_blank" rel="noopener noreferrer">
              <Image src="/email.svg" alt="email" width={24} height={24} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
