import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 items-center flex py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 py-24">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-pink">About</p>
          <h2 className="py-4 text-darkslate">Who I Am</h2>
          <p className="py-2 text-slate">
            Hello! My name is David Emanuel Candelario Anaya, and I am a
            Front-End Developer from Hyrum, Utah. I have spent 3+ years learning
            coding languages, libraries, and frameworks. I completed a 900-hour
            Web Development certificate at Bridgerland Technical College. As a
            student there, I attained proficiency in HTML, CSS, JavaScript,
            Bootstrap, and React.js by creating several mock apps utilizing
            custom styles, hooks, and managing states.
          </p>
          <p className="py-2 text-slate">
            Reach out to me for my resume and references list. I welcome the
            opportunity to work and speak with you.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-darkslate underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-slate rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
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
