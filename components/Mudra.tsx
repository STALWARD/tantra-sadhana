"use client"
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    {
        imgSrc: "/mudra/abagunthan.png"
    },
    {
        imgSrc: "/mudra/abhay.png"
    },
    {
        imgSrc: "/mudra/ankush.png"
    },
    {
        imgSrc: "/mudra/chakra.png"
    },
    {
        imgSrc: "/mudra/dhenu.png"
    },
    {
        imgSrc: "/mudra/galini.png"
    },
    {
        imgSrc: "/mudra/jwalini.png"
    },
    {
        imgSrc: "/mudra/kharga.png"
    },
    {
        imgSrc: "/mudra/kurma.png"
    },
    {
        imgSrc: "/mudra/lelihan.png"
    },
    {
        imgSrc: "/mudra/linga.png"
    },
    {
        imgSrc: "/mudra/matsya.png"
    },
    {
        imgSrc: "/mudra/munda.png"
    },
    {
        imgSrc: "/mudra/parmikaran.png"
    },
    {
        imgSrc: "/mudra/samhar.png"
    },
    {
        imgSrc: "/mudra/sannirodhini.png"
    },
    {
        imgSrc: "/mudra/tatva.png"
    },
    {
        imgSrc: "/mudra/yoni.png"
    }
]


// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 5000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
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
            <div className='text-center my-10'>
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-midnightblue text-4xl font-semibold mb-10">Mudra used in Puja</h2>
                    <div className=" px-10 py-10 bg-black ">
                        <Slider {...settings}>
                            {data.map((item, i) =>
                            <div key={i}>
                                <Image src={item.imgSrc} alt={item.imgSrc} width={250} height={250} className="w-auto h-auto"/>
                            </div>
                             )}
                        </Slider>
                    </div>
                    <hr />
                </div>
            </div>
        )
    }
}
