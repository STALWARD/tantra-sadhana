"use client";

import React, { useState, useEffect } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Testimonial Data
const postData = [
  { name: "J. Kartikeyan", profession: "Entrepreneur", comment: "I am a huge fan of GURU Ji. I have found whole team to be incredibly intuitive overall. Would definitely recommend this website if you are looking for a source of learning tantra that bit easier.", },
  { name: "N. Ramaswami", profession: "MD, Tech Infra", comment: "This website has been pivotal for helping me on tantra rituals. I would definitely recommend this website if you would like to performing any tantra rituals.", },
  { name: "C. Mathew", profession: "Bureaucrat", comment: "I absolutely love the services provided by KAULBHASKAR Guru Ji and his team members. It really helped streamline my workflows. I would definitely recommend.", },
  { name: "Maheshwer Kumar", profession: "Lawyer", comment: "I am utterly grateful that KAULBHASKAR Ji imparts the high teaching of tantra, specially of hidden KAUL MARGA. He gives personal attention to each knowledge seekers. My life has been changed since I have been learning from him.", },
  { name: "Dr. Rupinder Singh", profession: "Doctor", comment: "I have always wanted to learn authentic SRI VIDYA but unfortunately, it is extremely difficult to find genuine practitioner. Thanks to the Goddess that my desire finally found its fulfillment in KAULBHASKAR GURU Ji. His command over the intricacies is unparalleled.", },
];

const Testimonials: React.FC = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setSlidesToShow(width >= 1200 ? 3 : width >= 800 ? 2 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false, infinite: true, slidesToShow, slidesToScroll: 1,
    arrows: false, autoplay: true, speed: 500, cssEase: "linear",
  };

  return (
    <div className="bg-linear-to-r from-green-400 via-blue-500 to-purple-600 pt-20 pb-10 sm:py-32" id="testimonial">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-4xl md:text-6xl text-black text-center md:text-start font-semibold mb-10">
          What Our Lovely <br className="hidden md:block" /> Client Says?
        </h2>
        <Slider {...settings} key={slidesToShow}>
          {postData.map((item, i) => (
            <div key={i} className="p-2">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform min-h-[300px] flex flex-col justify-between">
                <p className="text-base text-justify text-black mb-4 italic">"{item.comment}"</p>
                <div>
                  <hr className="mb-4" />
                  <div className="flex justify-between items-end">
                    <div>
                      <h4 className="text-lg font-bold text-slate-800">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.profession}</p>
                    </div>
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, j) => <StarIcon key={j} className="w-4 h-4" />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
