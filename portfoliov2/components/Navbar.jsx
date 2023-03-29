import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/cherryblossom.png"
          alt="/"
          width="60"
          height="30"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className=" ml-10 text-sm uppercase hover:border-b text-darkslate">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className=" ml-10 text-sm uppercase hover:border-b text-darkslate">
                About
              </li>
            </Link>
            <Link href="/">
              <li className=" ml-10 text-sm uppercase hover:border-b text-darkslate">
                Skills
              </li>
            </Link>
            <Link href="/">
              <li className=" ml-10 text-sm uppercase hover:border-b text-darkslate">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className=" ml-10 text-sm uppercase hover:border-b text-darkslate">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className=" md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-dark/40" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-light p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/cherryblossom.png"
                alt="/"
                width="75"
                height="30"
              />
              <div
                onClick={handleNav}
                className=" rounded-full shadow-lg shadow-gray p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-slate my-4">
              <p className=" w-[85%] md:w-[90%] py-4 text-darkslate">
                Let's create great things together
              </p>
            </div>
          </div>
          <div className=" py-4 flex flex-col">
            <ul className="uppercase text-darkslate">
              <Link href="/">
                <li className=" py-4 text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className=" py-4 text-sm">About</li>
              </Link>
              <Link href="/">
                <li className=" py-4 text-sm">Skills</li>
              </Link>
              <Link href="/">
                <li className=" py-4 text-sm">Projects</li>
              </Link>
              <Link href="/">
                <li className=" py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className=" pt-32 ">
              <p className=" uppercase tracking-widest text-pink">
                Let's Connect
              </p>
              <div className=" flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-md shadow-slate p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-md shadow-slate p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-md shadow-slate p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-md shadow-slate p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
