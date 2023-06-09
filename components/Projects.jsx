import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";

import graveImg from "../public/assets/projects/gravesite.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto px-2 py-24">
        <p className="text-xl tracking-widest uppercase text-pink">Projects</p>
        <h2 className="py-4 text-darkslate">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Grave Site"
            backgroundImg={graveImg}
            projectUrl="https://beginner-grave-site.web.app/"
            codeUrl="https://github.com/DavidEmanuelCA/gravesitefinal"
            tech="HTML CSS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
