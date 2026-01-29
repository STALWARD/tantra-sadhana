/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const Camp = () => {
  return (
    <section className="relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 max-w-7xl mx-auto">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <Image
          src="/img-4.webp"
          alt="yoga pose outdoors"
          width={1440}
          height={580}
          loading="lazy"
          className="h-full w-auto object-cover object-center flex-shrink-0 rounded-xl"
        />
        <Image
          src="/img-2.webp"
          alt="yoga meditation"
          width={1440}
          height={580}
          loading="lazy"
          className="h-full w-auto object-cover object-center flex-shrink-0 rounded-xl"
        />
      </div>

      <div className="flex justify-end mt-2 px-4 lg:-mt-60 lg:mr-6">
        <div className="bg-yellow-200 p-12 lg:max-w-[500px] xl:max-w-[734px] xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="text-2xl md:text-3xl 2xl:text-6xl capitalize text-black font-normal">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="text-sm xl:text-base mt-5 text-black text-justify">
            Starting from the anxiety of the common man when visiting a new challenge in life, the possibility of getting lost is very large. That's why we are here for those of you who want to be a winner. We shall enlighten your path so that you will never feel darkness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Camp;
