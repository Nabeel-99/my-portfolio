import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "motion/react";

const Socials = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="border relative rounded-[40px]  flex flex-col items-center overflow-hidden gap-10 backdrop-blur-md bg-[#121212] border-[#1f1f1f] p-10 w-full md:w-80 xl:min-w-80  "
    >
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 1, 0.8, 1] }}
        className="flex items-center gap-3"
      >
        <div className="relative w-3 h-3  bg-green-500 rounded-full">
          <div className="absolute h-full w-full animate-pulse bg-green-500 blur-lg rounded-full"></div>
          <div className="absolute  w-full animate-pulse  h-full before:absolute before:content-[''] before:w-full before:h-full before:bg-blue-300 before:blur-md before:opacity-50 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2" />
        </div>
        Available for work
      </motion.div>
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 1, 0.8, 1] }}
        className="flex items-center gap-4"
      >
        <motion.a
          href="https://github.com/Nabeel-99"
          target="_blank"
          aria-label="github"
          className="btn-social  hover:bg-purple-700 "
          initial={{ rotate: 0 }}
          animate={{ rotate: 0 }}
          whileHover={{
            scale: 1.15,
            rotate: [0, -12, 12, -12, 12, -12, 12, 0],
            transition: {
              duration: 2,
              ease: "easeInOut",
              repeat: 0,
            },
          }}
        >
          <FaGithub className="text-3xl" />
        </motion.a>
        <motion.a
          href="https://twitter.com/Nabeel_umarr"
          target="_blank"
          aria-label="twitter"
          className="btn-social hover:bg-blue-700 "
          initial={{ rotate: 0 }}
          animate={{ rotate: 0 }}
          whileHover={{
            scale: 1.15,
            rotate: [0, -12, 12, -12, 12, -12, 12, 0],
            transition: {
              duration: 2,
              ease: "easeInOut",
              repeat: 0,
            },
          }}
        >
          <FaTwitter className="text-3xl" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/farouk-nabil-8883b5302/"
          target="_blank"
          aria-label="linkedin"
          className=" hover:bg-orange-700  btn-social"
          initial={{ rotate: 0 }}
          animate={{ rotate: 0 }}
          whileHover={{
            scale: 1.15,
            rotate: [0, -12, 12, -12, 12, -12, 12, 0],
            transition: {
              duration: 2,
              ease: "easeInOut",
              repeat: 0,
            },
          }}
        >
          <FaLinkedin className="text-3xl" />
        </motion.a>
        {/* <motion.a
          href="mailto:farouknabil810@gmail.com"
          target="_blank"
          className="border border-[#262626] bg-[#191919] hover:bg-orange-700  cursor-pointer  rounded-lg p-2"
          initial={{ rotate: 0 }}
          animate={{ rotate: 0 }}
          whileHover={{
            scale: 1.15,
            rotate: [0, -12, 12, -12, 12, -12, 12, 0],
            transition: {
              duration: 2,
              ease: "easeInOut",
              repeat: 0,
            },
          }}
        >
          <FaEnvelope className="text-3xl" />
        </motion.a> */}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        href="https://flowcv.com/resume/k77pbn4j6t"
        target="_blank"
        aria-label="download cv"
        className="btn-download-cv "
      >
        Download CV
      </motion.a>
    </motion.div>
  );
};

export default Socials;
