import React from "react";
import { motion, useTransform } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProjectCard = ({ i, range, targetScale, progress, project }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <>
      <div className="sticky top-20 lg:top-12 ">
        <motion.div
          style={{ marginTop: `${i * 25}px`, scale }}
          className=" cursor pointer relative    rounded-3xl w-full xl:h-[600px] xl:max-h-[600px] 2xl:h-[700px] 2xl:max-h-[700px] overflow-hidden group"
        >
          <img
            src={project.image}
            alt="project picture"
            loading="lazy"
            width={1200}
            height={900}
            className="xl:h-[600px] 2xl:h-[700px] w-full  shadow-xl drop-shadow-lg object-cover  rounded-3xl  transition-transform duration-700 group-hover:scale-125 "
          />

          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black from-40% to-transparent opacity-80 p-3 right-0">
            <div className="px-4 py-2">
              <div className="font-satoshi-bold text-white flex items-center gap-2">
                {project.title}{" "}
                <Link
                  to={`/project-details/${project.id}`}
                  aria-label={`View details for ${project.title}`}
                  className="border rounded-2xl transition-transform group-hover:rotate-0 text-black rotate-45 duration-700 group-hover:opacity-100 opacity-0 border-[#232323] bg-[#ffffff] p-2 cursor-pointer hover:bg-[#cbcaca]"
                >
                  <FiArrowUpRight className="" />
                </Link>
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
