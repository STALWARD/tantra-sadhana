'use client'
import React from "react"; 
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import YouTube from "react-youtube"; 

export default class YoutubeVideo 
extends React.Component { 
render() { 
	const opts = { 
	height: "390", 
	width: "640", 
	playerVars: { 
		autoplay: 1, 
	}, 
	}; 

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
				<div className= "flex items-center justify-center" > 
					<YouTube videoId="KJn2Leu8yVo"
					opts={opts} onReady={this._onReady} />		 
				</div> 
			</div>
		</section>
	); 
} 

_onReady(event:any) { 
	event.target.pauseVideo(); 
} 
} 
