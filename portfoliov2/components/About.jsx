import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 items-center flex py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-pink">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-dark"></p>
          <p className="py-2 text-dark"></p>
          <p className="py-2 text-dark underline cursor-pointer">
            Check out some of my latest projects
          </p>
        </div>
        <div>
          <Image
            src="../public/assets/home.svg"
            alt="/"
            width="150"
            height="150"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
