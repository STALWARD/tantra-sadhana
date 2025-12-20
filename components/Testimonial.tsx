"use client"

import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import Slider from "react-slick";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "J. Kartikeyan",
        profession: 'Entrepreneur',
        comment: 'I am a huge fan of GURU Ji. I have found whole team to be incredibly intuitive overall. Would definitely recommend this website if you are looking for a source of learning tantra that bit easier.',
    },
    {
        name: "N. Ramaswami",
        profession: 'MD, Tech Infra',
        comment: 'This website has been pivotal for helping me on tantra rituals. I would definitely recommend this website if you would like to performing any tantra rituals.',
    },
    {
        name: "C. Mathew",
        profession: 'Bureaucrat',
        comment: 'I absolutely love the services provided by KAULBHASKAR Guru Ji and his team members. It really helped streamline my workflows. I would definitely recommend.',
    },
    {
        name: "Maheshwer Kumar",
        profession: 'Lawyer',
        comment: 'I am utterly grateful  that KAULBHASKAR Ji imparts the high teaching of tantra, specially of hidden KAUL MARGA. He gives personal attention to each knowledge seekers. My life has been changed since I have been learning from him.',
    },
    {
        name: "Dr. Rupinder Singh",
        profession: 'Doctor',
        comment: 'I have always wanted to learn authentic SRI VIDYA but unfortunately, it is extremely difficult to find genuine practitioner. Thanks to the Goddess that my desire finally found its fulfillment in KAULBHASKAR GURU Ji. His command over the intricacies is unparalleled.',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            dotsClass: "slick-dots",
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 5000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className="bg-amber-300 pt-40 pb-10 sm:pb-32 lg:py-32 " id="testimonial">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>
                <h2 className="1h-82 text-6xl text-black md:text-55xl text-center md:text-start font-semibold"> What Our Lovely <br />Client Says ?</h2>
                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className={`bg-white m-4 p-5 my-40 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl  relative ${i % 2 ? 'middleDiv' : 'testimonial-shadow '}`}>
                                    <h3 className='text-base font-normal text-black my-4'>{items.comment}</h3>
                                    <hr style={{ color: "#D7D5D5" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h4 className='text-lg font-medium text-shadow-slate-400 pt-4 pb-2'>{items.name}</h4>
                                            <h4 className='text-sm font-normal text-black pb-2'>{items.profession}</h4>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="text-orange-300" />
                                            <StarIcon width={20} className="text-orange-300" />
                                            <StarIcon width={20} className="text-orange-300" />
                                            <StarIcon width={20} className="text-orange-300" />
                                            <StarIcon width={20} className="text-amber-500" />
                                        </div>
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

