import React from "react";
import { MdDevices } from "react-icons/md";
import FadeInEffect from "./FadeInEffect";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <FadeInEffect delay={0.2}>
      <div className="flex flex-col gap-6 ">
        <p className="font-satoshi-bold text-4xl">Experience</p>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border rounded-3xl bg-[#121212] border-[#1f1f1f] p-10 xl:w-[900px]"
        >
          <div className="flex flex-col xl:flex-row items-start justify-start  gap-10">
            <motion.div
              initial={{ x: -2, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className=""
            >
              <MdDevices style={{ fontSize: "2rem" }} className="" />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 1, 0.8, 1] }}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col ">
                <p className="font-satoshi-bold text-xl">
                  Software Developer Intern
                </p>
                <p className="text-sm">June 2024 - September 2024</p>
              </div>
              <div className="flex flex-col ">
                <ul className="list-disc">
                  <li>
                    Built a full-featured task management app with real-time
                    updates and scheduling features using React.js, Laravel, and
                    MySQL.
                  </li>
                  <li>
                    Managed both admin and user portals with role-based logic
                    and scheduling.
                  </li>
                  <li>
                    Collaborated in Agile teams, contributing to code reviews,
                    sprint planning, and product testing cycles.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border rounded-3xl bg-[#121212] border-[#1f1f1f] p-10 xl:w-[900px]"
        >
          <div className="flex flex-col xl:flex-row  items-start justify-start  gap-10">
            <motion.div
              initial={{ x: -2, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className=""
            >
              <MdDevices style={{ fontSize: "2rem" }} className="" />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col ">
                <p className="font-satoshi-bold text-xl">
                  Freelance Developer & Personal Projects
                </p>
                <p className="text-sm">October 2022 - Present</p>
              </div>
              <div className="flex flex-col ">
                <ul className="list-disc">
                  <li>
                    Designed and deployed a responsive website for a local
                    family business using React.js and Tailwind CSS.
                  </li>
                  <li>
                    Refactored and improved the UI/UX of a community-driven
                    music playlist app built with SvelteKit.
                  </li>
                  <li>
                    Developed a rental agency web app with Spring Boot and
                    MySQL, improving listing management workflows.
                  </li>
                </ul>
                <p></p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </FadeInEffect>
  );
};

export default Experience;
