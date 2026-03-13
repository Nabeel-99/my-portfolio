import React, { useState } from "react";
import { motion } from "motion/react";
import { projects } from "../projects";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/project-details/${project.id}`)}
      className="group cursor-pointer relative rounded-[2.5rem] overflow-hidden border
        border-[#dadada] glass-card glass-flat project-card 
        dark:border-[#3c3c3c]/60 dark:bg-[#111111] dark:hover:border-[#57d039]
        transition-all duration-500 h-full">
      {project.wip && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-[#57d039]/10 border border-[#57d039]/30 text-[#57d039] text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#57d039] animate-pulse" />
          In Progress
        </div>
      )}

      <div className="relative overflow-hidden h-52 sm:h-64">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 dark:from-[#111111] via-transparent to-transparent" />
      </div>

      <div className="p-5 flex flex-col gap-3">
        {/* <span className="text-[10px] uppercase tracking-widest text-[#555] dark:text-[#555] font-semibold">
          {project.app}
        </span> */}

        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[#0a0a0a] dark:text-white font-satoshi-bold text-lg leading-tight group-hover:text-[#3a9e20] dark:group-hover:text-[#57d039] transition-colors duration-200">
            {project.title}
          </h3>
          <div className="shrink-0 w-7 h-7 rounded-full border border-[#ddd] dark:border-[#2a2a2a] flex items-center justify-center group-hover:border-[#57d039] group-hover:bg-[#57d039]/10 transition-all duration-200">
            <ArrowUpRight
              size={13}
              className="text-[#999] dark:text-[#555] group-hover:text-[#57d039]"
            />
          </div>
        </div>

        <p className="text-[#777] dark:text-[#555] text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center gap-2 flex-wrap pt-1">
          {project.stack.map((tech, i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-[2.5rem] overflow-hidden border border-[#e0e0e0] dark:border-[#2a2a2a] flex items-center justify-center glass-card dark:bg-[#1a1a1a]">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-4 h-4 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [isLast, setIsLast] = useState(false);

  return (
    <motion.section
      id="project"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full pb-10">
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-[#3a9e20] dark:text-[#57d039] text-xs uppercase tracking-widest font-bold">
            Work
          </span>
          <h2 className="font-satoshi-bold text-3xl sm:text-4xl mt-1 text-[#0a0a0a] dark:text-white">
            Projects
          </h2>
        </div>
        <div className="flex items-center gap-1 text-[#303030] dark:text-[#9b9b9b] text-xs">
          <span>{projects.length} projects</span>
        </div>
      </div>

      <Carousel
        opts={{ align: "start", loop: false }}
        className="w-full"
        setApi={(api) => {
          if (!api) return;
          setIsLast(!api.canScrollNext());
          api.on("select", () => {
            setIsLast(!api.canScrollNext());
          });
        }}>
        {/* mask only on this div, not the buttons */}
        <div
          className={
            isLast
              ? "mask-marquee-projects-left"
              : "mask-marquee-projects-right"
          }>
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem
                key={project.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full">
                  <ProjectCard project={project} />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>

        {/* buttons outside the mask */}
        <div className="flex items-center gap-3 mt-6">
          <CarouselPrevious className="static translate-y-0 glass-card dark:border-[#2a2a2a] dark:bg-[#111] dark:hover:bg-[#1a1a1a] dark:text-white hover:border-[#57d039] hover:text-[#57d039] transition-all duration-200 rounded-[2.5rem] w-10 h-10" />
          <CarouselNext className="static translate-y-0 glass-card dark:border-[#2a2a2a] dark:bg-[#111] dark:hover:bg-[#1a1a1a] dark:text-white hover:border-[#57d039] hover:text-[#57d039] transition-all duration-200 rounded-[2.5rem] w-10 h-10" />
        </div>
      </Carousel>
    </motion.section>
  );
};

export default Projects;
