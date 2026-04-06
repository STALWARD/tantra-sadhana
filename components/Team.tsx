"use client";
import Slider from "react-slick";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    { profession: 'Bala Siddha Upasaka', name: 'G. Vyas', imgSrc: '/assets/mentor/khunda.webp' },
    { profession: 'Vastu, Palm-reading Expert', name: 'Subhas Kaushik', imgSrc: '/assets/mentor/Subhas.webp' },
    { profession: 'Astro Guru', name: 'S. Bakshi', imgSrc: '/assets/mentor/S.Bakshi.webp' },
    { profession: 'Vajra Siddha', name: 'VAJRA YOGINI', imgSrc: '/assets/mentor/Aradhya.webp' },
    { profession: 'Yagyan Expert', name: 'Siddharth Maharaj', imgSrc: '/assets/mentor/Siddharth.webp' },
    { profession: 'Palmistry Researcher', name: 'KIRAN SHARMA', imgSrc: '/assets/mentor/Kiran-2.webp' },
    { profession: 'NADI ASTROLOGER', name: 'YATAN SHARMA', imgSrc: '/assets/mentor/YATAN.webp' },
];

const MultipleItems: React.FC = () => {
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1200) {
                setSlidesToShow(3);
            } else if (width >= 700) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(1); // Force 1 image on mobile
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear",
    };

    return (
        <div className="py-10 sm:py-24 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500" id="mentor">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 px-4 lg:px-8 relative'>
                <h2 className="text-4xl md:text-6xl text-midnightblue text-center md:text-start font-semibold mb-8">
                    Meet with our <br className="hidden md:block" /> Experts
                </h2>

                {/* Container fix for mobile width bugs */}
                <div className="w-full overflow-hidden min-w-0">
                    <Slider {...settings} key={slidesToShow}>
                        {postData.map((items, i) => (
                            <div key={i} className="outline-none">
                                <div className='mx-2 py-10 text-center'>
                                    <div className="relative flex justify-center">
                                        <Image 
                                            src={items.imgSrc} 
                                            alt={items.name} 
                                            width={306} 
                                            height={350} 
                                            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl object-cover" 
                                        />
                                    </div>
                                    <div className="mt-6">
                                        <h3 className='text-2xl font-semibold text-black'>{items.name}</h3>
                                        <h4 className='text-lg font-semibold text-black pt-2 opacity-80'>{items.profession}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default MultipleItems;
