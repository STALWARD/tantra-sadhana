'use client'
import Image from 'next/image';
import { useRef } from 'react';
import SectionTitle from './SectionTitle';
import Link from 'next/link';

export default function YouTubeFrame() {
  const divRef1 = useRef<HTMLDivElement | null>(null);
  const divRef2 = useRef<HTMLDivElement | null>(null);

  const createIframe = (videoId: string) => {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    iframe.style.width = "640px";
    iframe.style.height = "390px";
    iframe.src = `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=1&autoplay=1`;
    return iframe;
  };

  const onClick = () => {
    if (divRef1.current) {
      divRef1.current.innerHTML = "";
      divRef1.current.appendChild(createIframe("KJn2Leu8yVo"));
    }
  };

  const onClick1 = () => {
    if (divRef2.current) {
      divRef2.current.innerHTML = "";
      divRef2.current.appendChild(createIframe("WhknjROROXM"));
    }
  };

  return (
    <section className="relative bg-yellow-300 z-10 py-16 md:py-20 lg:py-28">
      <div className="items-center">
        <SectionTitle
          title="GALLERY"
          paragraph="Youtube videos of Guru Ji."
          center
          mb="20px"
        />
        <div className="relative flex items-center justify-center mb-20">
          <Link
            href="https://www.youtube.com/@kaulbhaskar/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black px-8 py-4 rounded-md text-white transition-all hover:bg-yellow-400 hover:text-black"
          >
            Click for <strong>More Videos</strong>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row w-auto h-auto gap-10 mx-10 justify-center">
          {/* First video */}
          <div ref={divRef1} className="flex items-center justify-center relative">
            <button
              aria-label="video play button"
              onClick={onClick}
              className="absolute flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
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
            <Image
              onClick={onClick}
              loading="lazy"
              src="/images/video.webp"
              alt="video image Thumbnail"
              width={500}
              height={390}
              className="shadow"
            />
          </div>

          {/* Second video */}
          <div ref={divRef2} className="flex items-center justify-center relative">
            <button
              aria-label="video play button"
              onClick={onClick1}
              className="absolute flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
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
            <Image
              onClick={onClick1}
              loading="lazy"
              src="/images/sriyantra.webp"
              alt="video image Thumbnail"
              width={500}
              height={390}
              className="shadow"
            />
          </div>
        </div>

        {/* Your image galleries remain unchanged */}
        <div className='flex lg:flex-row flex-col items-center justify-center mx-5 gap-5 mt-5 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
					<Image
						priority={false}
						width={400}
						height={400}
						aria-label={"image of KAULBHASKAR"}
						alt={"KAULBHASKAR"}
						src={"/images/bkn1.webp"}
					/>
					<Image
						priority={false}
						width={400}
						height={400}
						aria-label={"image of KAULBHASKAR"}
						alt={"KAULBHASKAR"}
						src={"/images/bkn2.webp"}
					/>
					<Image
						priority={false}
						width={400}
						height={400}
						aria-label={"image of KAULBHASKAR"}
						alt={"KAULBHASKAR"}
						src={"/img-2.webp"}
					/>
				</div>
				<div className='flex lg:flex-row flex-col items-center justify-center mx-5 gap-5 mt-5 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl '>
					<Image
						priority={false}
						width={400}
						height={400}
						aria-label={"image of KAULBHASKAR"}
						alt={"KAULBHASKAR"}
						src={"/images/Vindhyachal1.webp"}
					/>
					<Image
						priority={false}
						width={400}
						height={400}
						aria-label={"image of KAULBHASKAR"}
						alt={"KAULBHASKAR"}
						src={"/images/Vindhyachal2.webp"}
					/>
					<Image
						priority={false}
						width={400}
						height={400}
						aria-label={"image of KAULBHASKAR"}
						alt={"KAULBHASKAR"}
						src={"/images/Vindhyachal3.webp"}
					/>
				</div>
				<div className='flex lg:flex-row flex-col items-center justify-center mx-5 gap-5 mt-5 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl '>
					<Image
						priority={false}
						width={400}
						height={400}
						aria-label={"image of KAULBHASKAR"}
						alt={"KAULBHASKAR"}
						src={"/images/mahakal.webp"}
					/>
					<Image
						priority={false}
						width={400}
						height={400}
						aria-label={"image of KAULBHASKAR"}
						alt={"KAULBHASKAR"}
						src={"/images/Vindhyachal4.webp"}
					/>
					<Image
						priority={false}
						width={400}
						height={400}
						aria-label={"image of KAULBHASKAR"}
						alt={"KAULBHASKAR"}
						src={"/images/bagla.webp"}
					/>
				</div>
      </div>
    </section>
  );
}

