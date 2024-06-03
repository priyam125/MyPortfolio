// "use client";

// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// function Experience() {
//   const [selected, setSelected] = useState(0);

//   useEffect(() => {
//     const transformSelected = () => {
//       const underline = document.querySelector(".underline");
//       if (underline) {
//         underline.style.top = `${selected * 2.5}rem`;
//       }
//     };
//     transformSelected();
//   }, [selected]);

//   const experiences = [
//     {
//       name: "Rapidops",
//       role: "Full Stack Developer",
//       url: "https://www.rapidops.com",
//       start: "January 2021",
//       end: "Present",
//       shortDescription: [
//         "I had experience working on a large codebase utilizing Kibana and Elasticsearch.",
//         "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, TypeScript, Node.js, Hapi, and Elasticsearch, among others.",
//         "I've also managed a small team that includes Frontend Developers, Backend Developers, and UI/UX Developers.",
//         "Additionally, I've represented the company in client meetings, communicating effectively on their behalf.",
//       ],
//     },
//     {
//       name: "Youtube",
//       role: "Content Creator",
//       url: "https://www.youtube.com/kishansheth21",
//       start: "April 2021",
//       end: "Present",
//       shortDescription: [
//         "Upon graduating in 2021, I began creating content on YouTube, with the aim of enhancing my skills and working with the latest technologies, specifically React and Node.",
//         "Over time, I have developed and shared over 50 projects using React on my channel.",
//         "As a result, my channel has gained a substantial following, with over 11,000 subscribers to date. I have also had the pleasure of collaborating with various brands throughout my journey.",
//       ],
//     },
//     {
//       name: "ACES",
//       role: "President",
//       url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
//       start: "November 2019",
//       end: "November 2020",
//       shortDescription: [
//         "As the elected President of the ACES Departmental Club, I successfully led a team of board members and executive committee members to organize and execute multiple events throughout the year.",
//         "Additionally, I secured sponsorships from reputable brands to support our events.",
//         "Overall, it was a rewarding experience that allowed me to develop my leadership skills while contributing positively to the growth of the organization.",
//       ],
//     },
//     {
//       name: "ISTE",
//       role: "Web Developer",
//       url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
//       start: "November 2019",
//       end: "November 2020",
//       shortDescription: [
//         "Write modern, performant, maintainable code for a diverse array of client and internal projects",
//         "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
//         "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
//       ],
//     },
//     {
//       name: "Shashaan",
//       role: "Founder",
//       url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
//       start: "November 2018",
//       end: "November 2021",
//       shortDescription: [
//         "While still a student, I founded a web hosting company that offered affordable hosting services.",
//         "With over 300 customers, the business thrived until I graduated and sold it to another company.",
//       ],
//     },
//   ];

//   return (
//     <div className="experience" id="experience">
//       <div className="title">
//         <h2>Where I&apos;ve Worked</h2>
//       </div>
//       <div className="container">
//         <ul className="exp-slider">
//           <div className="underline"></div>
//           {experiences.map((experience, index) => (
//             <li
//               className={`exp-slider-item ${
//                 index === selected ? "exp-slider-item-selected" : ""
//               }`}
//               onClick={() => setSelected(index)}
//               key={experience.name}
//             >
//               <span>{experience.name}</span>
//             </li>
//           ))}
//         </ul>
//         <div className="exp-details">
//           <div className="exp-details-position">
//             <h3>
//               <span>{experiences[selected].role}</span>
//               <span className="exp-details-position-company">
//                 &nbsp;@&nbsp;
//                 <Link href={experiences[selected].url} className="link">
//                   {experiences[selected].name}
//                 </Link>
//               </span>
//             </h3>
//             <p className="exp-details-range">
//               {experiences[selected].start} - {experiences[selected].end}
//             </p>
//             <ul className="exp-details-list">
//               {experiences[selected].shortDescription.map(
//                 (description, index) => (
//                   <li key={index} className="exp-details-list-item">
//                     {description}
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Experience;

// "use client";

// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// function Experience() {
//   const [selected, setSelected] = useState(0);

//   useEffect(() => {
//     const transformSelected = () => {
//       const underline = document.querySelector(".underline");
//       if (underline) {
//         underline.style.top = `${selected * 2.5}rem`;
//       }
//     };
//     transformSelected();
//   }, [selected]);

//   const experiences = [
//     {
//       name: "Rapidops",
//       role: "Full Stack Developer",
//       url: "https://www.rapidops.com",
//       start: "January 2021",
//       end: "Present",
//       shortDescription: [
//         "I had experience working on a large codebase utilizing Kibana and Elasticsearch.",
//         "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, TypeScript, Node.js, Hapi, and Elasticsearch, among others.",
//         "I've also managed a small team that includes Frontend Developers, Backend Developers, and UI/UX Developers.",
//         "Additionally, I've represented the company in client meetings, communicating effectively on their behalf.",
//       ],
//     },
//     {
//       name: "Youtube",
//       role: "Content Creator",
//       url: "https://www.youtube.com/kishansheth21",
//       start: "April 2021",
//       end: "Present",
//       shortDescription: [
//         "Upon graduating in 2021, I began creating content on YouTube, with the aim of enhancing my skills and working with the latest technologies, specifically React and Node.",
//         "Over time, I have developed and shared over 50 projects using React on my channel.",
//         "As a result, my channel has gained a substantial following, with over 11,000 subscribers to date. I have also had the pleasure of collaborating with various brands throughout my journey.",
//       ],
//     },
//     {
//       name: "ACES",
//       role: "President",
//       url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
//       start: "November 2019",
//       end: "November 2020",
//       shortDescription: [
//         "As the elected President of the ACES Departmental Club, I successfully led a team of board members and executive committee members to organize and execute multiple events throughout the year.",
//         "Additionally, I secured sponsorships from reputable brands to support our events.",
//         "Overall, it was a rewarding experience that allowed me to develop my leadership skills while contributing positively to the growth of the organization.",
//       ],
//     },
//     {
//       name: "ISTE",
//       role: "Web Developer",
//       url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
//       start: "November 2019",
//       end: "November 2020",
//       shortDescription: [
//         "Write modern, performant, maintainable code for a diverse array of client and internal projects",
//         "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
//         "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
//       ],
//     },
//     {
//       name: "Shashaan",
//       role: "Founder",
//       url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
//       start: "November 2018",
//       end: "November 2021",
//       shortDescription: [
//         "While still a student, I founded a web hosting company that offered affordable hosting services.",
//         "With over 300 customers, the business thrived until I graduated and sold it to another company.",
//       ],
//     },
//   ];

//   return (
//     <div className="experience mx-auto max-w-lg my-36" id="experience">
//       <div className="title text-lightest-slate relative font-raleway">
//         <h2 className="mb-8 text-4xl font-bold">
//           Where I&apos;ve Worked
//           <span className="before:content-['01.'] before:mr-2 before:text-theme-color-1 after:block after:absolute after:top-5 after:w-72 after:h-0.5 after:ml-96 after:bg-lightest-navy" />
//         </h2>
//       </div>
//       <div className="container grid grid-cols-1 md:grid-cols-[20%,80%] gap-4">
//         <ul className="exp-slider list-none relative">
//           <div className="underline bg-theme-color-1 absolute left-0 top-0 h-10 w-0.5 transition-transform duration-300 ease-in-out"></div>
//           <div className="before:absolute before:left-0 before:content-[''] before:h-full before:w-0.5 before:bg-lightest-navy"></div>
//           {experiences.map((experience, index) => (
//             <li
//               className={`exp-slider-item h-10 px-6 flex items-center cursor-pointer w-full ${
//                 index === selected ? "bg-light-navy text-theme-color-1" : "text-slate1"
//               }`}
//               onClick={() => setSelected(index)}
//               key={experience.name}
//             >
//               <span className="flex justify-center items-center font-fira-code text-sm">
//                 {experience.name}
//               </span>
//             </li>
//           ))}
//         </ul>
//         <div className="exp-details h-40 font-raleway">
//           <div className="exp-details-position text-lightest-slate">
//             <h3 className="text-lg font-bold">
//               <span>{experiences[selected].role}</span>
//               <span className="exp-details-position-company text-theme-color-1">
//                 &nbsp;@&nbsp;
//                 <Link href={experiences[selected].url} className="link">
//                   {experiences[selected].name}
//                 </Link>
//               </span>
//             </h3>
//             <p className="exp-details-range text-light-slate">
//               {experiences[selected].start} - {experiences[selected].end}
//             </p>
//             <ul className="exp-details-list list-none flex flex-col gap-4 mt-4 pl-5">
//               {experiences[selected].shortDescription.map(
//                 (description, index) => (
//                   <li key={index} className="exp-details-list-item relative text-slate1 font-medium">
//                     <span className="before:content-['▹'] before:absolute before:left-[-20px] before:top-1 before:text-theme-color-1">
//                       {description}
//                     </span>
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Experience;

"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function Experience() {
  const [selected, setSelected] = useState(0);
  const underlineRef = useRef(null);

  useEffect(() => {
    console.log("selected", selected);
    console.log(underlineRef.current);
    if (underlineRef.current) {
      underlineRef.current.style.top = `${selected * 2.5}rem`;
    }
  }, [selected]);

  const experiences = [
    {
      name: "Moneyhop",
      role: "Frontend Developer",
      url: "https://www.moneyhop.co/",
      start: "February 2022",
      end: "May 2023",
      shortDescription: [
        "Successfully revamped the UI and code base of 2 existing platforms using Typescript and other modern frontend technologies.",
        "Implemented enhanced security measures by integrating encryption protocols into request and response handling, leveraging interceptors for improved data protection.",
        "Managed end-to-end development and deployment of four production-level systems with a focus on timely delivery of high-quality software solutions.",
      ],
    },
    {
      name: "ShortCast",
      role: "Frontend Developer",
      url: "",
      start: "September 2021",
      end: "January 2022",
      shortDescription: [
        "Completed two website versions from scratch within a short timeframe, launching the product with the first version and improving UI for better user experience in collaboration with a senior frontend developer.",
      ],
    },
  ];

  return (
    <div className="experience mx-auto max-w-3xl my-28" id="experience">
      <div className="title text-lightest-slate relative font-raleway">
        <h2 className="mb-8 text-4xl font-bold">
          Where I&apos;ve Worked
          {/* <span className="before:content-['01.'] before:mr-2 before:text-theme-color-1 after:block after:absolute after:top-5 after:w-72 after:h-0.5 after:ml-96 after:bg-lightest-navy" /> */}
        </h2>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-[20%,80%] gap-4">
        <ul className="exp-slider list-none relative">
          <div
            ref={underlineRef}
            className="underline bg-yellow-300 absolute -left-[0.5px] top-0 h-10 w-[3px] transition-transform duration-300 ease-in-out z-10"
          ></div>
          <div className="before:absolute before:left-0 before:content-[''] before:h-full before:w-0.5 before:bg-lightest-navy"></div>
          {experiences.map((experience, index) => {
            console.log(experience);
            console.log(index);
            console.log(selected);
            return (
              <li
                className={`exp-slider-item h-10 px-6 flex items-center cursor-pointer w-full ${
                  index === selected
                    ? "bg-light-navy text-yellow-300"
                    : "text-slate1"
                }`}
                onClick={() => setSelected(index)}
                key={experience.name}
              >
                <span className="flex justify-center items-center font-fira-code text-sm">
                  {experience.name}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details h-40 font-raleway">
          <div className="exp-details-position text-lightest-slate">
            <h3 className="text-lg font-bold">
              <span>{experiences[selected].role}</span>
              <span className="exp-details-position-company text-yellow-300">
                &nbsp;@&nbsp;
                <Link href={experiences[selected].url} className="link">
                  {experiences[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range text-light-slate">
              {experiences[selected].start} - {experiences[selected].end}
            </p>
            <ul className="exp-details-list list-none flex flex-col gap-4 mt-4 pl-5">
              {experiences[selected].shortDescription.map(
                (description, index) => (
                  <li
                    key={index}
                    className="exp-details-list-item relative text-slate1 font-medium"
                  >
                    <span className="before:content-['▹'] before:absolute before:left-[-20px] before:top-1 before:text-yellow-300">
                      {description}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
