"use client"

import React, { useEffect, useState } from "react";
// import Slider2 from "./Slider/Slider2/Slider2";
// import Slider1 from "./Slider/Slider1/Slider1";
import Image from "next/image";
import ProjectImg1 from "@/public/ProjectImg1.png";
import ProjectImg2 from "@/public/ProjectImg2.png";
import ProjectImg3 from "@/public/ProjectImg3.png";
import ProjectImg4 from "@/public/ProjectImg4.png";
import ProjectImg5 from "@/public/ProjectImg5.png";
import ProjectImg6 from "@/public/ProjectImg6.png";
import AdditionalImg1 from "@/public/AdditionalImg1.png"; // Example additional images
import AdditionalImg2 from "@/public/AdditionalImg2.png";
import AdditionalImg3 from "@/public/AdditionalImg3.png";
import AdditionalImg4 from "@/public/AdditionalImg4.png";
import AdditionalImg5 from "@/public/AdditionalImg5.png";
import AdditionalImg6 from "@/public/AdditionalImg6.png";
import AdditionalImg8 from "@/public/AdditionalImg8.png";
import { SectionWrapper } from "@/hoc";
import { IoGlobe } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const projectImages = [
  {
    src: ProjectImg6,
    alt: "Project 6",
    additionalSrc: AdditionalImg6,
    additionalAlt: "Additional 6",
    title: "Pixify-Ai",
    description:
      "A full-stack SaaS application for AI-powered image restoration, transformation, object removal, and recoloring.",
    githubLink: "https://github.com/priyam125/PixifyAI",
    hostedLink: "https://pixify-ai.netlify.app",
    techStack: [
      "Nextjs",
      "Shadcn UI",
      "MongoDB",
      "Mongoose",
      "Stripe",
      "Zod",
      "Cloudinary API",
    ],
  },
  {
    src: ProjectImg1,
    alt: "Project 1",
    additionalSrc: AdditionalImg1,
    additionalAlt: "Additional 1",
    title: "Portfolio",
    description:
      "An interactive portfolio to highlight my web development expertise, featuring responsive design and smooth navigation.",
    githubLink: "https://github.com/priyam125/MyPortfolio",
    hostedLink: "https://my-portfolio-beryl-nine-16.vercel.app/",
    techStack: ["Nextjs", "Threejs", "Tailwind", "Framer Motion"],
  },
  {
    src: ProjectImg2,
    alt: "Project 2",
    additionalSrc: AdditionalImg2,
    additionalAlt: "Additional 2",
    title: "Atlantis",
    description:
      "A modern e-commerce site with responsive design, user login, and integrated payment gateway for secure transactions.",
    githubLink: "https://github.com/priyam125/Atlantis-FE",
    hostedLink: "https://atlantis-fe.vercel.app/",
    techStack: ["Reactjs", "Redux", "OAuth", "Stripe"],
  },
  {
    src: ProjectImg3,
    alt: "Project 3",
    additionalSrc: AdditionalImg3,
    additionalAlt: "Additional 3",
    title: "Foodverse",
    description:
      "A user-friendly app for discovering and browsing a wide variety of delicious recipes.",
    githubLink: "https://github.com/priyam125/foodverse",
    hostedLink: "https://foodverse-pi.vercel.app/",
    techStack: ["Nextjs", "Tailwind"],
  },
  {
    src: ProjectImg4,
    alt: "Project 4",
    additionalSrc: AdditionalImg4,
    additionalAlt: "Additional 4",
    title: "Lights out",
    description:
      "A brain-teasing puzzle game requiring you to turn off all lights by strategically clicking cells.",
    githubLink: "https://github.com/priyam125/lights-out",
    hostedLink: "https://lights-out-alpha.vercel.app/",
    techStack: ["Reactjs", "MaterialUI"],
  },
  // {
  //   src: ProjectImg5,
  //   alt: "Project 5",
  //   additionalSrc: AdditionalImg5,
  //   additionalAlt: "Additional 5",
  //   title: "TodoMatic",
  //   description:
  //     "A comprehensive todo app with data persistence to help you manage tasks efficiently",
  //   githubLink: "https://github.com/priyam125/TodoMatic",
  //   hostedLink: "https://todo-matic-three.vercel.app/",
  //   techStack: ["Reactjs", "Redux Persist"],
  // },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if(hoveredIndex) {
      console.log("true");
    } else console.log("false");
    
    
  })

  return (
    <div className="py-20 mt-20">
      <h1 className="text-white text-3xl font-bold">Projects</h1>
      {/* <Slider1 /> */}
      {/* <div className="flex flex-col md:flex-row gap-4 py-8">
        {projectImages.map((project, index) => (
          <div
            key={index}
            className={`h-96 bg-slate-700 rounded-md transition-all cursor-pointer duration-300 flex-1 p-1 ${
              hoveredIndex === index ? "flex-[3]" : "flex-[1]"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`h-full flex relative group`}>
              {hoveredIndex === index && (
                <div className="absolute h-[20%] w-full px-2 py-1 text-gray-950">
                  <div className="font-semibold flex items-center justify-between">
                    <div>{project.title}</div>
                    <div className="flex gap-2">
                      <Link target="_blank" href={project.githubLink}>
                        <FaGithub />
                      </Link>
                      <Link target="_blank" href={project.hostedLink}>
                        <IoGlobe />
                      </Link>
                    </div>
                  </div>
                  <div className="text-sm">{project.description}</div>
                  <div className="flex items-center text-sm">
                    <div>
                      Tech Stack:{" "}
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="text-gray-400">
                          {tech}
                          {i < project.techStack.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {hoveredIndex === index ? (
                <div
                  id="projectImage"
                  className="absolute -bottom-3 w-full h-[75%] flex justify-center bg-opacity-50 transform translate-y-1"
                >
                  <Image
                    className="group-hover:scale-100"
                    src={project.additionalSrc}
                    height={300}
                    width={"auto"}
                    alt={project.additionalAlt}
                  />
                </div>
              ) : (
                <div className="w-full h-full mx-auto flex flex-col">
                  <div className="w-full h-[80%] flex justify-center mt-[1.5rem]">
                    <Image src={project.src} height={300} alt={project.alt} />
                  </div>
                  <div className="h-full w-full py-2 text-center text-lg flex items-center justify-center">
                    {project.title}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div> */}

      <div className="flex flex-col md:flex-row gap-4 py-8">
        {projectImages.map((project, index) => (
          <div
            key={index}
            className={`h-96 bg-slate-700 rounded-md transition-all cursor-pointer duration-300 flex-1 ${hoveredIndex !== null ? 'p-0' : 'p-1'} ${
              hoveredIndex === index ? "flex-[3]" : "flex-[1]"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`h-full flex flex-col w-full group`}>
              {hoveredIndex === index ? (
                <div className="h-full flex flex-col space-y-2 p-1">
                  <div className="h-[40%] p-1 flex flex-col">
                  <div className="font-semibold flex items-center justify-between">
                    <div>{project.title}</div>
                    <div className="flex gap-2">
                      <Link target="_blank" href={project.githubLink}>
                        <FaGithub />
                      </Link>
                      <Link target="_blank" href={project.hostedLink}>
                        <IoGlobe />
                      </Link>
                    </div>
                  </div>
                  <div className="text-sm">{project.description}</div>
                  <div className="flex items-center text-sm">
                    <div>
                      Tech Stack:{" "}
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="text-gray-400">
                          {tech}
                          {i < project.techStack.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                  </div>
                  <div className="h-[60%] p-1 flex flex-col justify-end">
                    <div className=""><Image className="scale-105" src={project.additionalSrc} alt={project.additionalAlt}/></div>
                  </div>

                </div>
              ) : (
                <div className={`h-full flex flex-col ${hoveredIndex !== null ? 'p-0' : 'p-1'} space-y-2`}>
                  <div className={` h-[85%] ${hoveredIndex !== null ? 'pl-2 pt-10 pb-2' : 'pl-4 pt-4'} relative flex items-center justify-center md:items-start md:justify-start`}>
                    <Image className="" src={project.src} alt={project.alt} />
                  </div>
                  <div className=" h-[15%] flex items-center justify-center text-lg">{project.title}</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
