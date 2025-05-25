import React from "react";
import { Link } from "react-scroll";
import { motion } from "motion/react";

const SideBar = () => {
  // bg-gradient-to-r from-[#0a0a0aff]  from-60% to-transparent

  return (
    <>
      <div className="hidden xl:flex z-50 dark:bg-gradient-to-r dark:from-[#0a0a0aff]  dark:from-60% dark:to-transparent   left-0 top-0 flex-col  text-xl h-full fixed items-center w-64 gap-10">
        <ul className="pt-24 w-44 ">
          <motion.li
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="py-4 w-full  "
          >
            <Link
              to="home"
              href="#home"
              aria-label="home"
              className="cursor-pointer hover:bg-[#f0f0f0]  dark:hover:bg-[#191a1b] rounded-xl transition-all duration-300 hover:px-4 hover:py-[0.6rem]"
              smooth={true}
              duration={500}
              offset={-120}
              spy={true}
              activeClass="active-link"
            >
              Home
            </Link>
          </motion.li>
          <motion.li
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="py-4 w-full"
          >
            <Link
              to="project"
              href="#project"
              aria-label="project"
              className="cursor-pointer hover:bg-[#f0f0f0]  dark:hover:bg-[#191a1b] rounded-xl transition-all duration-300 hover:px-4 hover:py-[0.6rem]"
              smooth={true}
              duration={500}
              offset={-120}
              spy={true}
              activeClass="active-link"
            >
              Projects
            </Link>
          </motion.li>
          <motion.li
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            className="py-4 w-full"
          >
            {" "}
            <Link
              to="stack"
              href="#stack"
              aria-label="stack"
              className="cursor-pointer hover:bg-[#f0f0f0]  dark:hover:bg-[#191a1b] rounded-xl transition-all duration-300 hover:px-4 hover:py-[0.6rem]"
              smooth={true}
              duration={500}
              offset={-120}
              spy={true}
              activeClass="active-link"
            >
              Stack
            </Link>
          </motion.li>
          <motion.li
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            className="py-4 w-full"
          >
            {" "}
            <Link
              to="experience"
              href="#experience"
              aria-label="experience"
              className="cursor-pointer hover:bg-[#f0f0f0]  dark:hover:bg-[#191a1b] rounded-xl transition-all duration-300 hover:px-4 hover:py-[0.6rem]"
              smooth={true}
              duration={500}
              offset={-120}
              spy={true}
              activeClass="active-link"
            >
              Experience
            </Link>
          </motion.li>
          <motion.li
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
            className="py-4 w-full"
          >
            {" "}
            <Link
              to="contact"
              href="#contact"
              aria-label="contact"
              className="cursor-pointer hover:bg-[#f0f0f0]  dark:hover:bg-[#191a1b] rounded-xl transition-all duration-300 hover:px-4 hover:py-[0.6rem] "
              smooth={true}
              duration={500}
              offset={-120}
              spy={true}
              activeClass="active-link"
            >
              Contact
            </Link>
          </motion.li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
