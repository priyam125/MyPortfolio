// import React from "react";
// import Slider2 from "./Slider/Slider2/Slider2";
// import Slider1 from "./Slider/Slider1/Slider1";
// import Image from "next/image";
// import ProjectImg1 from "@/public/ProjectImg1.png";
// import ProjectImg2 from "@/public/ProjectImg2.png";
// import ProjectImg3 from "@/public/ProjectImg3.png";
// import ProjectImg4 from "@/public/ProjectImg4.png";
// import ProjectImg5 from "@/public/ProjectImg5.png";

// const projectImages = [
//   { src: ProjectImg1, alt: "Project 1" },
//   { src: ProjectImg2, alt: "Project 2" },
//   { src: ProjectImg3, alt: "Project 3" },
//   { src: ProjectImg4, alt: "Project 4" },
//   { src: ProjectImg5, alt: "Project 5" },
// ];

// const Projects = () => {
//   return (
//     <div>
//       <h1 className="text-white text-3xl font-bold">Projects</h1>
//       {/* <Slider1 /> */}
//       <div className="grid grid-cols-5 gap-4 py-8">
//         {projectImages.map((project, index) => (
//           <div key={index} className="h-96 bg-slate-700 rounded-md">
//             <div id="project" className="h-4/5 items-center flex justify-center">
//               <Image src={project.src} height={300} alt={project.alt} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;
"use client";

// import React, { useState } from "react";
// import Slider2 from "./Slider/Slider2/Slider2";
// import Slider1 from "./Slider/Slider1/Slider1";
// import Image from "next/image";
// import ProjectImg1 from "@/public/ProjectImg1.png";
// import ProjectImg2 from "@/public/ProjectImg2.png";
// import ProjectImg3 from "@/public/ProjectImg3.png";
// import ProjectImg4 from "@/public/ProjectImg4.png";
// import ProjectImg5 from "@/public/ProjectImg5.png";

// const projectImages = [
//   { src: ProjectImg1, alt: "Project 1" },
//   { src: ProjectImg2, alt: "Project 2" },
//   { src: ProjectImg3, alt: "Project 3" },
//   { src: ProjectImg4, alt: "Project 4" },
//   { src: ProjectImg5, alt: "Project 5" },
// ];

// const Projects = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div>
//       <h1 className="text-white text-3xl font-bold">Projects</h1>
//       {/* <Slider1 /> */}
//       <div className="grid grid-cols-5 gap-4 py-8">
//         {projectImages.map((project, index) => (
//           <div
//             key={index}
//             className={`h-96 bg-slate-700 rounded-md transition-all duration-300 ${
//               hoveredIndex === index ? "col-span-3" : "col-span-1"
//             }`}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <div
//               id="project"
//               className="h-4/5 items-center flex justify-center"
//             >
//               <Image src={project.src} height={300} alt={project.alt} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

// import React, { useState } from "react";
// import Slider2 from "./Slider/Slider2/Slider2";
// import Slider1 from "./Slider/Slider1/Slider1";
// import Image from "next/image";
// import ProjectImg1 from "@/public/ProjectImg1.png";
// import ProjectImg2 from "@/public/ProjectImg2.png";
// import ProjectImg3 from "@/public/ProjectImg3.png";
// import ProjectImg4 from "@/public/ProjectImg4.png";
// import ProjectImg5 from "@/public/ProjectImg5.png";

// const projectImages = [
//   { src: ProjectImg1, alt: "Project 1" },
//   { src: ProjectImg2, alt: "Project 2" },
//   { src: ProjectImg3, alt: "Project 3" },
//   { src: ProjectImg4, alt: "Project 4" },
//   { src: ProjectImg5, alt: "Project 5" },
// ];

// const Projects = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div>
//       <h1 className="text-white text-3xl font-bold">Projects</h1>
//       {/* <Slider1 /> */}
//       <div className="flex gap-4 py-8">
//         {projectImages.map((project, index) => (
//           <div
//             key={index}
//             className={`h-96 bg-slate-700 rounded-md transition-all cursor-pointer duration-300 flex-1 ${
//               hoveredIndex === index ? "flex-[3]" : "flex-[1]"
//             }`}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <div id="project" className="h-full flex items-center justify-center">
//               <Image src={project.src} height={300} alt={project.alt} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React, { useState } from "react";
import Slider2 from "./Slider/Slider2/Slider2";
import Slider1 from "./Slider/Slider1/Slider1";
import Image from "next/image";
import ProjectImg1 from "@/public/ProjectImg1.png";
import ProjectImg2 from "@/public/ProjectImg2.png";
import ProjectImg3 from "@/public/ProjectImg3.png";
import ProjectImg4 from "@/public/ProjectImg4.png";
import ProjectImg5 from "@/public/ProjectImg5.png";
import AdditionalImg1 from "@/public/AdditionalImg1.png"; // Example additional images
import AdditionalImg2 from "@/public/AdditionalImg2.png";
import AdditionalImg3 from "@/public/AdditionalImg3.png";
import AdditionalImg4 from "@/public/AdditionalImg4.png";
import AdditionalImg5 from "@/public/AdditionalImg5.png";
import { SectionWrapper } from "@/hoc";

const projectImages = [
  {
    src: ProjectImg1,
    alt: "Project 1",
    additionalSrc: AdditionalImg1,
    additionalAlt: "Additional 1",
  },
  {
    src: ProjectImg2,
    alt: "Project 2",
    additionalSrc: AdditionalImg2,
    additionalAlt: "Additional 2",
  },
  {
    src: ProjectImg3,
    alt: "Project 3",
    additionalSrc: AdditionalImg3,
    additionalAlt: "Additional 3",
  },
  {
    src: ProjectImg4,
    alt: "Project 4",
    additionalSrc: AdditionalImg4,
    additionalAlt: "Additional 4",
  },
  {
    src: ProjectImg5,
    alt: "Project 5",
    additionalSrc: AdditionalImg5,
    additionalAlt: "Additional 5",
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="py-20">
      <h1 className="text-white text-3xl font-bold">Projects</h1>
      {/* <Slider1 /> */}
      <div className="flex flex-col md:flex-row gap-4 py-8">
        {projectImages.map((project, index) => (
          <div
            key={index}
            className={`h-96 bg-slate-700 rounded-md transition-all cursor-pointer duration-300 flex-1 p-1 ${
              hoveredIndex === index ? "flex-[3]" : "flex-[1]"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div id="project" className={`h-full flex relative group`}>
              {hoveredIndex === index && (
                <div className="absolute h-[20%] w-full px-2 py-1 text-gray-950">
                  <div className="font-semibold">Description</div>
                  <div className="text-sm">
                    This is a short description about the current project
                    consistting of not more than 1-2 lines.
                  </div>
                </div>
              )}
              {hoveredIndex === index ? (
                <div
                  id="projectImage"
                  className="absolute -bottom-3 w-full h-[75%] flex justify-center bg-opacity-50"
                >
                  <Image
                    className="group-hover:scale-110"
                    src={project.additionalSrc}
                    height={300}
                    alt={project.additionalAlt}
                  />
                </div>
              ) : (
                <div className="w-full h-full mx-auto flex flex-col">
                  <div className="w-full h-[80%] flex justify-center">
                    <Image src={project.src} height={300} alt={project.alt} />
                  </div>
                  <div className="h-full w-full py-2 text-center text-lg flex items-center justify-center">
                    #1 . Foodverse
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "Projects");
