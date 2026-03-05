"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// Import slick-carousel css in your layout or here if needed
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

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

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 5000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024, // Laptop/Tablet
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 640, // Mobile
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        };

        return (
            <div className="py-10 sm:py-24 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" id="mentor">
                <div className='mx-auto max-w-7xl px-4 lg:px-8 relative'>
                    
                    <h2 className="text-4xl md:text-6xl text-white text-center md:text-start font-semibold mb-10 leading-tight">
                        Meet with our <br /> Experts
                    </h2>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="px-2"> {/* Added padding for gap between cards */}
                                <div className='bg-white/10 backdrop-blur-sm rounded-2xl py-10 my-4 text-center border border-white/20 shadow-xl'>
                                    <div className="relative mb-6 flex justify-center">
                                        <Image 
                                            src={items.imgSrc} 
                                            alt={items.name} 
                                            width={300} 
                                            height={300} 
                                            className="rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                    <div className="px-4">
                                        <h3 className='text-2xl font-bold text-white'>{items.name}</h3>
                                        <h4 className='text-lg font-medium text-white/80 mt-2 uppercase tracking-wide'>{items.profession}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
