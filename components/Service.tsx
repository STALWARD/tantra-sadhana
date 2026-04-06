"use client";
import Slider from "react-slick";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid';

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface DataType {
    heading: string;
    heading2: string;
    imgSrc: string;
    name: string;
    price: number;
    rating: number;
}

const postData: DataType[] = [
    { heading: 'Know your Destiny', heading2: 'By ASTROLOGY', name: "Horoscope/Palm-Reading/Prasna", imgSrc: '/assets/services/horoscope.png', price: 5000, rating: 4.2 },
    { heading: 'MAHA VIPRITA PRATYANGIRA', heading2: 'A famous Prayoga', name: "Defensive and curative in abhicharas", imgSrc: '/assets/services/Pratyangira.png', price: 70000, rating: 4.8 },
    { heading: 'Maha Mrityunjaya', heading2: 'A very popular Prayoga', name: "For Longevity and Good Health", imgSrc: '/assets/services/mahamrityunjaya.png', price: 90000, rating: 4.7 },
    { heading: 'SHULINI DURGA PRAYOGA', heading2: 'As in SHARDA TILAKA', name: "Protection from evil planets", imgSrc: '/assets/services/shulini.webp', price: 40000, rating: 4.4 },
    { heading: 'BATUKA BHAIRAV PRAYOGA', heading2: 'A famous Prayoga', name: "Deliverance from all hurdle", imgSrc: '/assets/services/bhairav.webp', price: 50000, rating: 4.8 },
    { heading: 'BAGLAMUKHI', heading2: 'Famous Prayoga to abolish enemies!', name: "To win Elections,Litigations", imgSrc: '/assets/services/baglamukhi.png', price: 120000, rating: 4.6 },
    { heading: 'SHAT-CHANDI', heading2: 'By pure tantric method', name: "One of the Jack-of-all Prayoga", imgSrc: '/assets/services/Shatchandi.webp', price: 250000, rating: 4.8 },
    { heading: 'MAHAVIDYA PRAYOGA', heading2: 'As in MUNDMALA TANTRA', name: "For protection against evil eyes", imgSrc: '/assets/services/mahavidya.png', price: 40000, rating: 4.5 },
    { heading: 'LALITA SAHSTRANAMAVALI ARCHANAM', heading2: '', name: "For blessing of divine mother", imgSrc: '/assets/services/lalita_archanam.png', price: 50000, rating: 4.8 },
];

const MultipleItems: React.FC = () => {
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1200) {
                setSlidesToShow(3);
            } else if (width >= 800) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(1); // Solid 1-card view for mobile
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
        speed: 500, // Reduced from 5000 for smoother transition
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
    };

    return (
        <div id="courses">
            {/* Video Hero Section */}
            <div className="relative flex flex-col items-center justify-center w-full mt-10 overflow-hidden" >
                <video loop muted autoPlay playsInline className='h-screen w-screen object-cover'>
                    <source src="/service.mp4" />
                </video>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl text-center font-bold mb-6 pageHeader">Services</h1>
                    <h2 className="text-xl md:text-2xl text-center font-semibold mb-10 pageHeader max-w-2xl">Strategic Tantra advice and tailored solutions</h2>
                    <p className="text-lg text-center font-medium max-w-3xl pageHeader">
                        Through blog posts, videos and other resources, we provide an accessible platform for individuals to learn about Tantra and its various practices as well as for performing Tantric Rituals.
                    </p>
                </div>
            </div>

            {/* Slider Section */}
            <div className='mx-auto max-w-7xl bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-md sm:py-8 px-4 lg:px-8 mt-5'>
                <div className="sm:flex justify-between items-center py-6">
                    <h2 className="text-white text-shadow-blue-400 text-4xl lg:text-5xl font-semibold mb-5 sm:mb-0 ">Popular Services</h2>
                </div>

                <div className="w-full overflow-hidden min-w-0 pb-10">
                    <Slider {...settings} key={slidesToShow}>
                        {postData.map((items, i) => (
                            <div key={i} className="outline-none">
                                <div className='bg-white mx-2 px-3 pt-3 pb-8 my-10 shadow-courses rounded-2xl'>
                                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                                        <Image 
                                            src={items.imgSrc} 
                                            alt={items.heading} 
                                            width={396} 
                                            height={296} 
                                            priority={i < 3} 
                                            className="m-auto transition-transform duration-500 group-hover:scale-110" 
                                        />
                                        <div className="absolute right-3 bottom-3 bg-indigo-700 rounded-full p-4">
                                            <h3 className="text-white uppercase text-center text-[10px] font-bold leading-tight">best <br />wanted</h3>
                                        </div>
                                    </div>

                                    <div className="px-3">
                                        <h4 className='text-lg font-bold pt-6 text-black line-clamp-1'>{items.heading}</h4>
                                        <h4 className='text-sm font-semibold pt-1 text-gray-700'>{items.heading2}</h4>

                                        <h3 className='text-sm font-normal pt-4 text-gray-500 italic'>{items.name}</h3>

                                        <div className="flex justify-between items-center py-6">
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-indigo-600 font-bold">{items.rating}</h3>
                                                <div className="flex">
                                                    {[...Array(5)].map((_, i) => (
                                                        <StarIcon key={i} className={`h-4 w-4 ${i < Math.floor(items.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                                                    ))}
                                                </div>
                                            </div>
                                            <h3 className="text-lg font-bold text-black">₹{items.price.toLocaleString()}</h3>
                                        </div>
                                        <hr className="border-gray-100" />
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
