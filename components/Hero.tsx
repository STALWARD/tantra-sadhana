import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-5 md:gap-28 lg:py-10 lg:flex-row">
      
      {/* Background Video */}
      <div className="flexCenter max-container absolute object-cover" >
      <video loop muted autoPlay playsInline className='relative flex h-screen w-screen object-cover md:mr-5'>
      <source src="/hero-bg2.mp4" type="video/mp4" />
      </video>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 ml-5"> 
        <h1 className="bold-64 md:bold-64 lg:bold-88 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          TANTRA SADHANA
        </h1>

        <p className="regular-14 md:regular-14 lg:regular-16 mt-6 text-white text-justify xl:max-w-[520px]">
          देहोऽहमिति या बुद्धिर्विद्या सा प्रकीर्तिता।<br />
          नाहं देहश्चिदात्मेति बुद्धिर्विद्येति भण्यते।।<br />
          अविद्या संसृतेर्हेतु विद्या तस्या निवृत्तिका।<br />
          तस्माद् यत्न: सदाकार्यो विद्याभ्यासे मुमुक्षुभि:।।<br /><br />
          We want to be on each of your journeys seeking the satisfaction of meeting with hidden masters of Tantra & Astrology.<br />
          We can help you on an adventure around the world of Tantra in just a simple way.
        </p>

        {/* Reviews */}
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(0).map((_, index) => (
              <Image 
                key={index}
                src="/star.svg"
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>
          <p className="bold-16 lg:bold-20 text-white">
            100+
            <span className="regular-16 lg:regular-20 ml-1 text-white">
              Excellent Reviews
            </span>
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Link
            href="https://www.kaulbhaskar.com/profile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white px-8 py-4 rounded-xl text-black transition-all hover:bg-yellow-400 hover:text-black"
          >
            KNOW <strong>KAULBHASKAR</strong> GURU JI
          </Link>
        </div>
      </div>

      {/* Contact Card */}
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[320px] flex-col gap-4 rounded-3xl bg-yellow-400 px-4 py-4">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-black">Our Location</p>
              <Image src="/close.svg" alt="close icon" width={24} height={24} />
            </div>
            <p className="bold-20 text-black">Patna, Bihar (IN)</p>
          </div>

          <div className="flex flex-col">
            <p className="regular-16 text-black">WhatsApp</p>
            <p className="bold-20 text-black">9934418459</p>
            <p className="regular-16 text-black">E-mail:</p>
            <p className="bold-16 text-black">kaultantra@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
