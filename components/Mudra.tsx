"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";

// Styles (Ensure these are imported in your globals.css or here)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Data {
  imgSrc: string;
}

const data: Data[] = [
  { imgSrc: "/mudra/abagunthan.png" },
  { imgSrc: "/mudra/abhay.png" },
  { imgSrc: "/mudra/ankush.png" },
  { imgSrc: "/mudra/chakra.png" },
  { imgSrc: "/mudra/dhenu.png" },
  { imgSrc: "/mudra/galini.png" },
  { imgSrc: "/mudra/jwalini.png" },
  { imgSrc: "/mudra/kharga.png" },
  { imgSrc: "/mudra/kurma.png" },
  { imgSrc: "/mudra/lelihan.png" },
  { imgSrc: "/mudra/linga.png" },
  { imgSrc: "/mudra/matsya.png" },
  { imgSrc: "/mudra/munda.png" },
  { imgSrc: "/mudra/parmikaran.png" },
  { imgSrc: "/mudra/samhar.png" },
  { imgSrc: "/mudra/sannirodhini.png" },
  { imgSrc: "/mudra/tatva.png" },
  { imgSrc: "/mudra/yoni.png" },
];

const MultipleItems: React.FC = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlidesToShow(4);
      } else if (width >= 700) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1); // Mobile force
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
    <div className="text-center my-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-midnightblue text-4xl font-semibold mb-10">
          Mudra used in Puja
        </h2>
        {/* added overflow-hidden and min-w-0 to prevent width calculation bugs */}
        <div className="px-4 py-10 bg-black mt-6 w-full max-w-full overflow-hidden min-w-0">
          <Slider {...settings} key={slidesToShow}>
            {data.map((item, i) => (
              <div key={i} className="outline-none">
                <div className="flex justify-center">
                  <Image
                    src={item.imgSrc}
                    alt={`Mudra ${i}`}
                    width={250}
                    height={250}
                    className="h-64 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <hr className="mt-10" />
      </div>
    </div>
  );
};

export default MultipleItems;
