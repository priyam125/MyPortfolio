"use client";

import { fadeIn, textVariant } from "@/constants/motion";
import Skills from "./Skills";
import { SectionWrapper } from "@/hoc";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex w-full flex-col">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-yellow-300 uppercase tracking-wider">
          Introduction
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview.
        </h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="text-[20px] mt-4 text-slate-300"
      >
        {/* Front End Developer with nearly 2 years of experience in React.js,
        Typescript, and Next.js, specializing in crafting fintech applications
        and driving major UI/UX revamps from scratch. */}
        Experienced React JS developer skilled in UI revamp, white-label
        solutions, and managing multiple production systems. Skilled in backend
        development using Node.js and Express.js, AWS integration, mentoring
        junior developers, and delivering quality results within tight
        deadlines. Committed to continuous learning and seeking new challenges
        in a supportive work environment.
      </motion.div>
      <div id="skills" className="flex flex-col mt-12">
        <div className="text-yellow-300 uppercase text-[18px]">Skills</div>
        <Skills />
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");

// export default About;
