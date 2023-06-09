import React from "react";
import Link from "next/link";

import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className=" w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-darkslate">
            Let's create great things together
          </p>
          <h1 className=" py-4 text-darkslate">
            Hi, I'm <span className=" text-pink">David</span>
          </h1>
          <h1 className=" py-2 text-darkslate">A Front-End Web Developer</h1>
          <p className="py-4 text-darkslate max-w-[70%] m-auto"></p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-md shadow-slate p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/demanuelca/"
              >
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-md shadow-slate p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link target="_blank" href="https://github.com/DavidEmanuelCA">
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-md shadow-slate p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="/#contact">
                <AiOutlineMail />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
