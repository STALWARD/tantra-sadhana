"use client"
import { useState } from 'react';
import data from "../public/data.json";
import Layout from './Layout';

export default function Faq() {
  const [active, setActive] = useState([false, false, false, false, false]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive
      ? setActive([false, false, false, false,false])
      : setActive([true, true, true, true, true, true]);
  };

  return (
    <section className="flexCenter w-full flex-col pb-10">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Frequently Asked Questions!</h2>
          <p className="regular-16 text-gray-10">Who we are? What services we provide? Are our services chargable?- Answer to the such questions are here.</p>
        </div>

        <div className="flex flex-col w-full items-center justify-center">
        <Layout
          handleClick={handleClick}
          isSomeActive={isSomeActive}
          data={data}
          turn={active}
          setTurn={setActive}
        />
        </div>
      </div>
    </section>
  )
}
