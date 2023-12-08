"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import  ModalVideo  from 'react-modal-video';


const Video = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="relative bg-yellow-400 z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="GALLERY"
          paragraph="A youtube video made by Guru Ji."
          center
          mb="20px"
        />
        <div className="relative flex item-center justify-center mb-20 ">
          <Link
            href="https://www.youtube.com/@kaulbhaskar/videos"target="_blank" rel="noopener noreferrer"
            className=" bg-green-50 px-8 py-4 rounded-md text-white transition-all hover:bg-black"
            >
            Click for <strong>More Videos</strong>
          </Link>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/video.jpg" alt="video image" fill />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="KJn2Leu8yVo"
        onClose={() => setOpen(false)}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full "></div>
    </section>
  );
};

export default Video;
