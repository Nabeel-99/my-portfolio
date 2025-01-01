import React from "react";
import { Link } from "react-scroll";

const SideBar = () => {
  return (
    <div className="hidden xl:flex z-50  bg-gradient-to-r from-[#0a0a0aff]  from-60% to-transparent left-0 top-0 flex-col text-xl h-full fixed items-center w-64 gap-4">
      <ul className="pt-24 w-44 ">
        <li className="py-2 w-full">
          <Link
            to="home"
            className="cursor-pointer"
            smooth={true}
            duration={500}
            offset={-120}
            spy={true}
            activeClass="active-link"
          >
            Home
          </Link>
        </li>
        <li className="py-2 w-full">
          <Link
            to="project"
            className="cursor-pointer"
            smooth={true}
            duration={500}
            offset={-120}
            spy={true}
            activeClass="active-link"
          >
            Projects
          </Link>
        </li>
        <li className="py-2 w-full">
          {" "}
          <Link
            to="stack"
            className="cursor-pointer"
            smooth={true}
            duration={500}
            offset={-120}
            spy={true}
            activeClass="active-link"
          >
            Stack
          </Link>
        </li>
        <li className="py-2 w-full">
          {" "}
          <Link
            to="experience"
            className="cursor-pointer"
            smooth={true}
            duration={500}
            offset={-120}
            spy={true}
            activeClass="active-link"
          >
            Experience
          </Link>
        </li>
        <li className="py-2 w-full">
          {" "}
          <Link
            to="contact"
            className="cursor-pointer"
            smooth={true}
            duration={500}
            offset={-120}
            spy={true}
            activeClass="active-link"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
