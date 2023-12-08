"use client"

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link)

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink href="/"
            className='w-20 h-20 bg-dark text-yellow-400 flex items-center justify-center rounded-full
            round-full text-xl font-bold
            '            
            whileHover={{
                backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
                transition: {duration:1, repeat:Infinity}, scale: 1.4,
            }}
            >TANTRA</MotionLink>
        </div>
    )
}
export default Logo
