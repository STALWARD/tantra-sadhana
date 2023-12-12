"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid';

// CAROUSEL DATA

interface DataType {
    heading: string;
    heading2: string;
    imgSrc: string;
    name: string;
    price: number;
    rating: number;
}

const postData: DataType[] = [
    {
        heading: 'Know your Destiny',
        heading2: 'By ASTROLOGY',
        name: "Horoscope/Palm-Reading/Prasna",
        imgSrc: '/assets/services/horoscope.png',
        price: 5000,
        rating: 4.2,
    },
    {
        heading: 'MAHA VIPRITA PRATYANGIRA',
        heading2: 'A famous Prayoga',
        name: "Defensive and curative in abhicharas",
        imgSrc: '/assets/services/Pratyangira.png',
        price: 55000,
        rating: 4.8,
    },
    {
        heading: 'Maha Mrityunjaya',
        heading2: 'A very popular Prayoga',
        name: "For Longevity and Good Health",
        imgSrc: '/assets/services/mahamrityunjaya.png',
        price: 80000,
        rating: 4.7,
    },
    {
        heading: 'BAGLAMUKHI',
        heading2: 'Famous Prayoga to abolish enemies!',
        name: "To win Elections,Litigations",
        imgSrc: '/assets/services/baglamukhi.png',
        price: 120000,
        rating: 4.6,
    },
    {
        heading: 'SHAT-CHANDI',
        heading2: 'By pure tantric method',
        name: "One of the Jack-of-all Prayoga",
        imgSrc: '/assets/services/Shatchandi.png',
        price: 200000,
        rating: 4.8,
    },
    {
        heading: 'MAHAVIDYA PRAYOGA',
        heading2: 'As in MUNDMALA TANTRA',
        name: "For protection against evil eyes",
        imgSrc: '/assets/services/mahavidya.png',
        price: 40000,
        rating: 4.5,
    },
    {
        heading: 'LALITA SAHSTRANAMAVALI ARCHANAM',
        heading2: '',
        name: "For blessing of divine mother",
        imgSrc: '/assets/services/lalita_archanam.png',
        price: 50000,
        rating: 4.8,
    },
]

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: true,
            dotsClass: "slick-dots",
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 5000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        };

        return (
            <div id="courses">
			<div className="flex max-container relative w-full mt-10" >
        		<Image
          			src='/Universe.webp'
          			alt='image'  
          			width={1440}
          			height={580}
          			className="w-auto h-screen object-cover object-center 2xl:rounded-s-xl"
        		/>
                <h1 className="absolute text-4xl text-center text-white justify-center font-bold mb-80 pageHeader">Services</h1>     		
                <h2 className="absolute text-2xl text-center text-gold justify-center font-semibold mb-40 pageHeader">Strategic Tantra advice and tailored solutions</h2>
				<p className="absolute text-xl text-center text-white justify-center font-simple mt-80 p-20 pageHeader">We offer spiritual guidance and education to those seeking to deepen their understanding of Tantric teachings. </p>
			</div>
                <div className='mx-auto max-w-7xl bg-gold rounded-md sm:py-8 px-4 lg:px-8 mt-5'>
                    <div className="sm:flex justify-between items-center">
                        <h2 className=" text-midnightblue text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0 ">Popular Services</h2>
                    </div>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>

                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-20 shadow-courses rounded-2xl'>
                                    <div className="relative rounded-3xl">
                                        <Image src={items.imgSrc} alt="gaby" width={396} height={296} priority={true} className="m-auto clipPath" />
                                        <div className="absolute right-5 -bottom-2 bg-ultramarine rounded-full p-6">
                                            <h3 className="text-white uppercase text-center text-sm font-medium">best <br />wanted</h3>
                                        </div>
                                    </div>

                                    <div className="px-3">
                                        <h4 className='text-lg md:text-xl font-bold pt-6 text-black'>{items.heading}</h4>
                                        <h4 className='text-sm md:text-lg font-semibold pt-1 text-black'>{items.heading2}</h4>

                                        <div>
                                            <h3 className='text-base font-normal pt-6 opacity-85'>{items.name}</h3>
                                        </div>

                                        <div className="flex-row md:flex justify-between items-center py-6">
                                            <div className="flex gap-4">
                                                <h3 className="text-red text-22xl font-medium">{items.rating}</h3>
                                                <div className="flex">
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className=" text-xl md:text-3xl font-medium">Rs.{items.price}/=</h3>
                                            </div>
                                        </div>

                                        <hr style={{ color: "#C4C4C4" }} />

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
