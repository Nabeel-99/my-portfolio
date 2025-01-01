import React, { useRef } from "react";
import SmartMeal from "../assets/images/smartmeal.png";
import { motion, useScroll, useTransform } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({ i, range, targetScale, progress, project }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <>
      <div className="sticky top-32 ">
        <motion.div
          style={{ top: `calc(-10% + ${i * 25}px)`, scale }}
          className="border cursor pointer relative border-[#121313] bg-gradient-to-r p-1 from-[#020211] from-40% via-[#061b30] to-[#064dd1] rounded-3xl w-full xl:h-[600px] xl:max-h-[600px] 2xl:h-[700px] 2xl:max-h-[700px] overflow-hidden group"
        >
          <img
            src={project.image}
            alt="project picture"
            className="xl:h-[600px] 2xl:h-[700px] w-full  shadow-xl drop-shadow-lg object-cover  rounded-3xl  transition-transform duration-700 group-hover:scale-125 "
          />

          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black from-40% to-transparent opacity-80 p-3 right-0">
            <div className="px-4 py-2">
              <div className="font-satoshi-bold flex items-center gap-2">
                {project.title}{" "}
                <a
                  href={project.link}
                  target="_blank"
                  className="border text-white rounded-2xl transition-transform group-hover:rotate-0 rotate-45 duration-700 group-hover:opacity-100 opacity-0 border-[#232323] bg-[#303030] p-2 cursor-pointer hover:bg-[#222222]"
                >
                  <FiArrowUpRight className="" />
                </a>
              </div>

              <div className="text-gray-400 text-">{project.description}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectCard;
