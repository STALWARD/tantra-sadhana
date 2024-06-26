/* eslint-disable react/no-unescaped-entities */
import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-green-50 p-4">
          <Image
            src="/folded-map.svg"
            alt="map"
            width={28}
            height={28}
            />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="bold-20 text-gold">{title}</h2>
          <p className="bold-14 text-gold">{subtitle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
            <Image 
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div>
     </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Chandi Yag"
          subtitle="Trivandrum, Kerala"
          peopleJoined="200+ Joined"
        />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          title="Yoga Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="20+ Joined"
        />
      </div>

      <div className="flexEnd mt-2 px-4 lg:-mt-60 lg:mr-6">
        <div className="bg-yellow-200 p-12 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-black">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-black">
            Starting from the anxiety of the common man when visiting a new challenge in life, the possibility of getting lost is very large. That's why we are here for those of you who want to be a winner. We shall enlighten your path so that you will never feel darkness.
          </p>

        </div>
      </div>
    </section>
  )
}

export default Camp
