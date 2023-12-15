'use client'
import Image from 'next/image';
import {useRef} from 'react';
import SectionTitle from './SectionTitle';
import Link from 'next/link';


export default function YouTubeFrame() {
    const divRef = useRef<HTMLDivElement|null>(null);

    const onClick = () => {
        const iframe = document.createElement( "iframe" );
        iframe.setAttribute( "frameborder", "0" );
        iframe.setAttribute( "allowfullscreen", "1");
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.style.width = "640";
        iframe.style.height = "390";
        iframe.setAttribute( "src", `https://www.youtube.com/embed/${"KJn2Leu8yVo"}?rel=0&showinfo=1&autoplay=1` );
        if (divRef.current) {
            divRef.current.innerHTML = "";
            divRef.current.appendChild(iframe);
        }
    }

	return ( 
    	<section className="relative bg-gold z-10 py-16 md:py-20 lg:py-28">
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
				<div ref={divRef} className="flex items-center justify-center">
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
            		<span onClick={onClick} className="ti-control-play position-absolute display-1 text-white" />
            		<Image onClick={onClick} loading="lazy" src="/images/video.jpg" alt="video image Thumbnail" width={640} height={390} className="shadow" />
        		</div>
			</div>
		</section>
	); 
} 

