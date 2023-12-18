import Image from "next/image";
import React from "react";
import { Metadata } from "next";
import { aboutMeData } from "@/constants";

export const metadata:Metadata = {
	title: "About Us",
	description: `Here are our details.`,
};

const About = () => {
	return (

		<div className="flex flex-col w-11/12 content-center m-auto mt-10">
			<div className="flexCenter max-container relative" >
        		<Image
          			src='/yoga.webp'
          			alt='yoga'  
          			width={500}
          			height={500}
          			className="w-screen h-auto object-cover object-center 2xl:rounded-s-xl"
        		/>
        		<h1 className="absolute text-4xl text-center text-black justify-center font-bold mb-60 pageHeader">About</h1>
				<h2 className="absolute text-xl text-center text-black justify-center font-bold mt-60 p-20 pageHeader">We are experienced team of Experts in Tantra & Astrology. We offer spiritual guidance and education to those seeking to deepen their understanding of Tantric teachings. </h2>
			</div>
			<section className='flex-row md:flex mx-auto items-center w-full'>
				<div className='sm:w-1/2 sm:ml-10 sm:mr-10 w-full flex justify-center mt-12'>
					<Image
						priority={false}
						width={940}
						height={960}
						aria-label={"image of Kaulbhaskar"}
						alt={"guru ji image"}
						src={"/KAULBHASKAR.jpg"}
						className='profileImage'
					/>
				</div>
				<div className=' sm:mt-0  sm:w-2/3 w-full mt-6 ml-0 p-10'>
					<h2 className='pb-20 text-2xl md:text-4xl text-bold text-center justify-center'> {aboutMeData.title}</h2>
					<p className='text-lg text-simple text-justify '>Guru Ji, popularly known as <strong>KAULBHASKAR</strong>, is from the lineage of Sri <strong>Matsyendra Nath</strong> (also known as Machendra Nath) ji. A direct disciple of esteemed KAUL of Prayag, Sri <strong>KULBHUSHANANAND NATH</strong>, Guru Ji is basically an Urdhvamanayee Upasaka of MAHATRIPURSUNDARI. Sri Kaulbhaskar Ji, has spent more than 30 years painstakingly perfecting his practice of SRI VIDYA UPASANA of highly mysterious <strong>DAKSHINAMURTI SAMPRADAYA</strong>.</p>
				</div>
			</section>
			<section className='w-full bg-black text-white p-10 h-full mt-5'>
				<p> {aboutMeData.highlightedBody}</p>
			</section>
			<section className='w-full text-black text-4xl text-bold text-center justify-center p-10 h-full mt-5'>
				<p> {aboutMeData.body2}</p>
			</section>
			<section className='flex flex-col mx-auto w-auto h-auto px-4 lg:px-8'>
				<div className='flex lg:flex-row flex-col w-auto h-auto gap-5 mx-auto justify-center '>
					<Image
						priority={false}
						width={350}
						height={250}
						aria-label={"image of S.BAKSHI"}
						alt={"S.BAKSHI"}
						src={"/about/S.BAKSHI.webp"}
						className="w-auto h-auto"/>
					<Image
						priority={false}
						width={350}
						height={250}
						aria-label={"image of PRATIK"}
						alt={"PRATIK"}
						src={"/about/PRATIK.webp"}
						className="w-auto h-auto"/>
					<Image
						priority={false}
						width={350}
						height={250}
						aria-label={"image of SUBHAS"}
						alt={"SUBHAS"}
						src={"/about/SUBHAS.webp"}
					className="w-auto h-auto"/>
				</div>
			</section>
		</div>
	);
};

export default About;
