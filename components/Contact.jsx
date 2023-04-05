import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.svg";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] m-auto px-2 py-24 w-full ">
        <p className="text-xl tracking-widest uppercase text-pink">Contact</p>
        <h2 className="py-4 text-darkslate">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8 text-darkslate">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-slate rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2 text-pink">David Candelario</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 text-pink">Connect With Me</p>
                <div className="flex items-center py-4">
                  <div className="text-pink rounded-full shadow-lg shadow-slate p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/demanuelca/"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </div>

                  <div className=" text-pink rounded-full shadow-lg shadow-slate p-6 cursor-pointer hover:scale-110 ease-in duration-300 mx-4">
                    <Link
                      target="_blank"
                      href="https://github.com/DavidEmanuelCA"
                    >
                      <FaGithub />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-slate rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/9bf431e6-3f26-48c2-b6bf-47387b09d6ea"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-darkslate"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-darkslate"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-darkslate"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-darkslate"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-darkslate"
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-pink mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-slate p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-pink" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
