import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import cherryBlossom from "";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#fafafa");
  const [linkColor, setLinkColor] = useState("#171717");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src="/assets/cherryblossom.png"
            alt="/"
            width="60"
            height="30"
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className=" ml-10 text-sm uppercase hover:border-b text-pink">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className=" ml-10 text-sm uppercase hover:border-b text-pink">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className=" ml-10 text-sm uppercase hover:border-b text-pink">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className=" ml-10 text-sm uppercase hover:border-b text-pink">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className=" ml-10 text-sm uppercase hover:border-b text-pink">
                Contact
              </li>
            </Link>
          </ul>
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className=" md:hidden"
          >
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
              <Link href="/">
                <Image
                  src="/assets/cherryblossom.png"
                  alt="/"
                  width="75"
                  height="30"
                />
              </Link>
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
            <ul className="uppercase text-pink">
              <Link href="/">
                <li onClick={() => setNav(false)} className=" py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className=" py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className=" py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className=" py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className=" py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className=" pt-16 ">
              <p className=" uppercase tracking-widest text-pink">
                Let's Connect
              </p>
              <div className=" flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-md shadow-slate p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/demanuelca/"
                  >
                    <FaLinkedinIn />
                  </Link>
                </div>
                <div className="rounded-full shadow-md shadow-slate p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link
                    target="_blank"
                    href="https://github.com/DavidEmanuelCA"
                  >
                    <FaGithub />
                  </Link>
                </div>
                <div className="rounded-full shadow-md shadow-slate p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="/#contact" onClick={() => setNav(false)}>
                    <AiOutlineMail />
                  </Link>
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
