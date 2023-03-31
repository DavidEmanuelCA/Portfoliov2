import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 items-center flex py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-pink">About</p>
          <h2 className="py-4 text-darkslate">Who I Am</h2>
          <p className="py-2 text-slate"></p>
          <p className="py-2 text-slate"></p>
          <p className="py-2 text-darkslate underline cursor-pointer">
            Check out some of my latest projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/assets/profpic.svg"
            alt="/"
            width="348"
            height="348"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
