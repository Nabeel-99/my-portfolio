import React from "react";
import { Link } from "react-scroll";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
const BurgerMenu = ({ closeMenu }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    closeMenu();
    navigate("/");
  };
  return (
    <div className="flex fixed top-16 h-screen z-50 pt-4 px-6 w-full flex-col bg-[#0d0d0d]">
      <ul className="text-lg">
        <motion.li
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="pb-8"
        >
          <Link
            to="home"
            onClick={handleClick}
            smooth={true}
            duration={500}
            offset={-120}
            spy={true}
          >
            Home
          </Link>
        </motion.li>
        <motion.li
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="pb-8"
        >
          <Link
            to="project"
            onClick={handleClick}
            smooth={true}
            duration={500}
            offset={-120}
            spy={true}
          >
            Projects
          </Link>
        </motion.li>
        <motion.li
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="pb-8"
        >
          <Link
            to="stack"
            onClick={handleClick}
            smooth={true}
            duration={500}
            offset={-120}
            spy={true}
          >
            Stack
          </Link>
        </motion.li>
        <motion.li
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          className="pb-8"
        >
          <Link
            to="experience"
            onClick={handleClick}
            smooth={true}
            duration={500}
            offset={-120}
            spy={true}
          >
            Experience
          </Link>
        </motion.li>
        <motion.li
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          className="pb-8"
        >
          <Link
            to="contact"
            onClick={handleClick}
            smooth={true}
            duration={500}
            offset={-120}
            spy={true}
          >
            Contact
          </Link>
        </motion.li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
