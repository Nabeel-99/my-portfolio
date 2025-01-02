import React from "react";
import { FaEnvelope, FaGithub, FaTwitter } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="flex flex-col xl:flex-row w-full gap-6 pb-44">
      <div className="border overflow-hidden rounded-[40px] flex flex-col gap-4 bg-[#121212] border-[#1f1f1f] p-10 w-full xl:w-[700px] ">
        <motion.div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2">
            <div className="w-16 h-16 -translate-x-2 lg:translate-x-0 border border-[#1f1f1f] flex items-center justify-center font-satoshi-bold text-2xl rounded-full">
              N
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-satoshi-bold">Nabeel</p>
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "Backend Developer",
                    "Full Stack Developer",
                    "Web Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 60,
                  cursor: "",
                }}
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href=""
              target="_blank"
              className="border border-[#262626] bg-[#191919] hover:scale-105 transition-all cursor-pointer duration-300 rounded-lg p-2"
            >
              <FaGithub />
            </a>
            <a
              href=""
              target="_blank"
              className="border border-[#262626] bg-[#191919] hover:scale-105 transition-all cursor-pointer duration-300 rounded-lg p-2"
            >
              <FaTwitter />
            </a>
            <a
              href=""
              target="_blank"
              className="border border-[#262626] bg-[#191919] hover:scale-105 transition-all cursor-pointer duration-300 rounded-lg p-2"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
        <div>
          <h1 className="text-3xl lg:text-5xl tracking-tight font-satoshi-bold">
            I turn <span>ideas</span> into <span>reality</span>
          </h1>
        </div>
        <div>
          <p className="text-lg lg:text-xl">
            Hey, I'm Nabeel. I love building beautiful and creative websites,
            transforming visions into reality.
          </p>
        </div>
      </div>
      <div className="border rounded-[40px] flex flex-col gap-4 bg-[#121212] border-[#1f1f1f] p-10 w-64  ">
        <a
          className="border p-2 cursor-pointer hover:bg-[#57d039] flex items-center transition-all duration-300 justify-center hover:text-black rounded-lg bg-[#1f1f1f] border-[#262626]"
          download
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Hero;
