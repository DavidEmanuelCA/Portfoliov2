import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl, codeUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-slate rounded-xl group hover:bg-gradient-to-r from-light to-pink text-darkslate">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl tracking-wider text-center">{title}</h3>
        <p className="pb-4 pt-2 text-center">{tech}</p>
        <Link target="_blank" href={projectUrl}>
          <p className="text-center mt-2 py-3 rounded-lg bg-light/50  font-bold text-lg cursor-pointer">
            Demo
          </p>
        </Link>
        <Link target="_blank" href={codeUrl}>
          <p className="text-center mt-2 py-3 rounded-lg bg-light/50  font-bold text-lg cursor-pointer">
            Code
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
