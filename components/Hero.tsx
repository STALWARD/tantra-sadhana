import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-5 pb-32 md:gap-28 lg:py-10 lg:flex-row">
      <div className="flexCenter max-container absolute object-cover" >
        <Image
          src='/hero-bg.gif'
          alt='sriyantra'  
          width={600}
          height={600}
          priority
          className="h-screen w-screen object-center mr-5"
        />
      </div>
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 ml-5 ">
       
        <h1 className="bold-40 md:bold-52 lg:bold-88 text-white">TANTRA SADHANA</h1>
        <p className="regular-16 mt-6 text-white xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of meeting with hidden masters of Tantra & Astrology. We can help you on an adventure around the world of Tantra in just a simple way.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>
            <p className="bold-16 lg:bold-20 text-white">
            100+
            <span className="regular-16 lg:regular-20 ml-1 white">Excellent Reviews</span>
            </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row ">
          <Link
            href="https://www.kaulbhaskar.com/profile"
            className=" bg-white px-8 py-4 rounded-xl text-black transition-all hover:bg-gold hover:text-black"
            >
            KNOW <strong>KAULBHASKAR</strong> GURU JI
          </Link>
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[320px] flex-col gap-4 rounded-3xl bg-gold px-4 py-4">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-black">Our Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-red">Patna, Bihar (IN)</p>
          </div>

          <div className="flex flex-col">
            <p className="regular-16 block text-black">Whats App</p>
            <p className="bold-20 text-red">9934418459</p>
            <p className="regular-16 block text-black">E-mail:</p>
            <p className="bold-16 text-red">kaultantra@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
