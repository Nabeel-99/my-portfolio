import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "motion/react";

const Socials = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative rounded-[40px] flex flex-col items-center overflow-hidden gap-10 
      glass-card
      dark:bg-[#121212] dark:border dark:border-[#3c3c3c]/60 dark:[backdrop-filter:none] dark:shadow-none
      p-10 w-full md:w-80 xl:min-w-80">
      {" "}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 1, 0.8, 1] }}
        className="flex items-center gap-3">
        <div className="relative w-3 h-3 bg-green-500 rounded-full">
          <div className="absolute h-full w-full animate-pulse bg-green-500 blur-lg rounded-full"></div>
          <div className="absolute w-full animate-pulse h-full before:absolute before:content-[''] before:w-full before:h-full before:bg-blue-300 before:blur-md before:opacity-50 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2" />
        </div>
        Available for work
      </motion.div>
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 1, 0.8, 1] }}
        className="flex items-center gap-4">
        {[
          {
            href: "https://github.com/Nabeel-99",
            label: "github",
            icon: <FaGithub className="text-3xl" />,
            hover: "hover:bg-purple-500 dark:hover:bg-purple-700",
          },
          {
            href: "https://x.com/ndev_99",
            label: "twitter",
            icon: <FaTwitter className="text-3xl" />,
            hover: "hover:bg-blue-500 dark:hover:bg-blue-700",
          },
          {
            href: "https://www.linkedin.com/in/farouk-nabil-8883b5302/",
            label: "linkedin",
            icon: <FaLinkedin className="text-3xl" />,
            hover: "hover:bg-orange-500 dark:hover:bg-orange-700",
          },
        ].map(({ href, label, icon, hover }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            aria-label={label}
            className={`
              cursor-pointer rounded-[2.5rem] p-2 hover:text-white transition-all duration-200
              glass-card
              dark:bg-[#191919] dark:border dark:border-[#3c3c3c] dark:text-white
              ${hover}
            `}
            initial={{ rotate: 0 }}
            animate={{ rotate: 0 }}
            whileHover={{
              scale: 1.15,
              rotate: [0, -12, 12, -12, 12, -12, 12, 0],
              transition: { duration: 2, ease: "easeInOut", repeat: 0 },
            }}>
            {icon}
          </motion.a>
        ))}
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        href="https://flowcv.com/resume/k77pbn4j6t"
        target="_blank"
        aria-label="download cv"
        className="
        w-full p-2 cursor-pointer flex items-center transition-all duration-300
        justify-center rounded-[2.5rem] glass-card btn-download-cv
        dark:bg-[#1f1f1f] dark:border dark:border-[#3c3c3c] dark:text-white 
        dark:hover:bg-[#57d039] dark:hover:text-black dark:hover:border-[#57d039]
      ">
        View Resume
      </motion.a>
    </motion.div>
  );
};

export default Socials;
