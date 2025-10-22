"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: 'Bala Siddha Upasaka',
        name: 'G. Vyas',
        imgSrc: '/assets/mentor/khunda.webp',
    },
    {
        profession: 'Vastu, Palm-reading Expert',
        name: 'Subhas Kaushik',
        imgSrc: '/assets/mentor/Subhas.webp',
    },
    {
        profession: 'Astro Guru',
        name: 'S. Bakshi',
        imgSrc: '/assets/mentor/S.Bakshi.webp',
    },
    {
        profession: 'Vajra Siddha',
        name: 'VAJRA YOGINI',
        imgSrc: '/assets/mentor/Aradhya.webp',
    },
    {
        profession: 'Yagyan Expert',
        name: 'Siddharth Maharaj',
        imgSrc: '/assets/mentor/Siddharth.webp',
    },
        {
        profession: 'Palmistry Researcher',
        name: 'KIRAN SHARMA',
        imgSrc: '/assets/mentor/Kiran-2.webp',
    },
]

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", position: 'absolute', alignItems: "center" , background: "#000000", padding: "28px", borderRadius: "30px", border: "2px solid #FFFFFF" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" , background: "#000000", padding: "28px", borderRadius: "30px", border: "2px solid #FFFFFF" }}
            onClick={onClick}
        />
    );
}

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
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
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
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 530,
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
            <div className="py-10 sm:py-24 bg-paleblue" id="mentor">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 px-4 lg:px-8 relative'>
                    <h2 className="1h-82 text-6xl text-midnightblue md:text-55xl text-center md:text-start font-semibold">Meet with our <br /> Experts</h2>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className='m-3 py-14 md:my-10 text-center'>
                                    <div className="relative">
                                        <Image src={items.imgSrc} alt="user-image" width={306} height={0} className="inline-block m-auto w-auto h-auto" />
                                    </div>
                                    <div className="-mt-0">
                                        <h3 className='text-2xl font-semibold text-lightblack'>{items.name}</h3>
                                        <h4 className='text-lg font-normal text-lightblack pt-2 opacity-70'>{items.profession}</h4>
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



