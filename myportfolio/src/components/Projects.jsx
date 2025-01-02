import React, { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { projects } from "../projects";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const container = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.5,
  });
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const progressWidth = useTransform(scrollYProgress, [0, 1], [1, 250]);
  const progressHeight = useTransform(scrollYProgress, [0, 1], [1, 300]);
  const barOpacity = useTransform(scrollYProgress, [0.5, 1], [0.5, 1]);
  const activeIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, projects.length - 1]
  );

  useMotionValueEvent(activeIndex, "change", (latest) => {
    setCurrentIndex(Math.round(latest));
  });

  return (
    <div
      id="project"
      ref={projectsRef}
      className="flex flex-col  lg:flex-row 2xl:justify-between gap-10"
    >
      {/* project cards */}
      <div
        ref={container}
        className="flex flex-col gap-[700px] h-full w-full  lg:w-[1000px] 2xl:w-full"
      >
        {projects.map((project, index) => {
          const targetScale = 1 - (3 - index) * 0.05;
          return (
            <ProjectCard
              key={index}
              project={project}
              i={index}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>

      {/* larger screen */}
      <div className="lg:sticky top-[150px] hidden lg:flex flex-col gap-2 items-center h-[500px]">
        <motion.span
          style={{ opacity: barOpacity }}
          className="border border-[#262626] text-black bg-[#ffc107] px-2 rounded-lg "
        >
          {currentIndex + 1}
        </motion.span>
        <motion.div
          style={{ opacity: barOpacity }}
          className=" border border-[#262626] text-black  rounded-full h-[302px] w-2 flex  justify-center"
        >
          <motion.div
            style={{ height: progressHeight }}
            transition={{ duration: 20 }}
            className="w-1 rounded-full bg-[#ffc107]"
          ></motion.div>
        </motion.div>
        <motion.span
          className="border border-[#262626] text-black bg-[#ffc107] px-2 rounded-lg "
          style={{ opacity: barOpacity }}
        >
          {projects.length}
        </motion.span>
      </div>
    </div>
  );
};

export default Projects;
