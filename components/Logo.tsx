"use client"

import Link from "next/link";

import { motion } from "framer-motion";

// Ensure motion(Link) is defined outside the component for performance
const MotionLink = motion.create(Link);

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink 
                href="/"
                className='w-20 h-20 bg-black text-white flex items-center justify-center rounded-full text-xl font-bold'            
                whileHover={{
                    // Background color animation cycle
                    backgroundColor: [
                        "#121212", 
                        "rgba(131,58,180,1)", 
                        "rgba(253,29,29,1)", 
                        "rgba(252,176,69,1)", 
                        "rgba(131,58,180,1)", 
                        "#121212"
                    ],
                    scale: 1.2, // Increased scale (1.4 is often too large for navbars)
                    transition: { duration: 1, repeat: Infinity },
                }}
            >
                TANTRA
            </MotionLink>
        </div>
    )
}

export default Logo;
