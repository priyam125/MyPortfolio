"use client";

import { SectionWrapper } from "@/hoc";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function Experience() {
  const [selected, setSelected] = useState(0);
  const underlineRef = useRef(null);

  useEffect(() => {
    if (underlineRef.current) {
      underlineRef.current.style.top = `${selected * 2.5}rem`;
    }
  }, [selected]);

  const experiences = [
    {
      name: "Cinco Debt Management Services",
      role: "Software Engineer",
      url: "",
      start: "August 2023",
      end: "Present",
      shortDescription: [
        {
          title: "Credit Card and Loans Application Workflow",
          description:
            "Developed the frontend for credit card browsing, application forms,review, and payment using Nextjs, Typescript and Tailwnd css.",
        },
        {
          title: "KYC Verification and Homepage Enhancements",
          description:
            "Implemented a secure KYC verification flow for user onboarding and collaborated on homepage updates to reflect feature changes and promotions",
        },
        {
          title: "Administration Portal Development",
          description:
            "Worked on the administration portal for managing loan approvals, transactions, and other backend tasks.",
        },
      ],
    },
    {
      name: "Moneyhop",
      role: "Frontend Developer",
      url: "https://www.moneyhop.co/",
      start: "February 2022",
      end: "May 2023",
      shortDescription: [
        {
          title: "Revamped UI and codebase",
          description:
            "Led a successful overhaul of two existing fintech platforms, resulting in a 25% increase in user satisfaction and 60% reduction in support tickets.",
        },
        {
          title: "Implemented security enhancements",
          description:
            "Implemented enhanced security measures by integrating encryption protocols into request and response handling, leveraging interceptors for improved data protection.",
        },
        {
          title: "Managed end-to-end development",
          description:
            "Managed end-to-end development and deployment of four production-level systems with a focus on timely delivery of high-quality software solutions.",
        },
      ],
    },
    {
      name: "ShortCast",
      role: "Frontend Developer",
      url: "",
      start: "September 2021",
      end: "January 2022",
      shortDescription: [
        {
          title: "Rapid development",
          description:
            "Completed two website versions from scratch within a 6-week deadline, demonstrating strong problem-solving and time management skills.",
        },
      ],
    },
  ];

  return (
    <div className="mt-28 py-20">
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
                <span className="flex font-fira-code text-sm text-ellipsis whitespace-nowrap overflow-hidden ">
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
                    <span className="before:content-['▹'] before:absolute before:left-[-20px] before:top-1 before:text-yellow-300 mr-1.5 underline">
                      {`${description.title}:`}
                    </span>
                    <span>{description.description}</span>
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

export default SectionWrapper(Experience, "experience");
