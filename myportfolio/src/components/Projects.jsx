import React from "react";
import { motion } from "motion/react";
import { projects } from "../projects";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
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
      className="group cursor-pointer relative rounded-2xl overflow-hidden border border-[#1a1a1a] bg-[#111111] hover:border-[#2a2a2a] transition-all duration-500 h-full">
      {/* WIP badge */}
      {project.wip && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-[#57d039]/10 border border-[#57d039]/30 text-[#57d039] text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#57d039] animate-pulse" />
          In Progress
        </div>
      )}

      {/* Image */}
      <div className="relative overflow-hidden h-52 sm:h-64">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* App type pill */}
        <span className="text-[10px] uppercase tracking-widest text-[#555] font-semibold">
          {project.app}
        </span>

        <div className="flex items-start justify-between gap-2">
          <h3 className="text-white font-satoshi-bold text-lg leading-tight group-hover:text-[#57d039] transition-colors duration-200">
            {project.title}
          </h3>
          <div className="shrink-0 w-7 h-7 rounded-full border border-[#2a2a2a] flex items-center justify-center group-hover:border-[#57d039] group-hover:bg-[#57d039]/10 transition-all duration-200">
            <ArrowUpRight
              size={13}
              className="text-[#555] group-hover:text-[#57d039]"
            />
          </div>
        </div>

        <p className="text-[#555] text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Stack icons */}
        <div className="flex items-center gap-2 flex-wrap pt-1">
          {project.stack.slice(0, 4).map((tech, i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-md overflow-hidden border border-[#2a2a2a] flex items-center justify-center bg-[#1a1a1a]">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-4 h-4 object-contain"
              />
            </div>
          ))}
          {project.stack.length > 4 && (
            <span className="text-[#444] text-xs">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <motion.section
      id="project"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full  pb-10">
      {/* Section header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-[#57d039] text-xs uppercase tracking-widest font-semibold">
            Work
          </span>
          <h2 className="text-white font-satoshi-bold text-3xl sm:text-4xl mt-1">
            Projects
          </h2>
        </div>

        <div className="flex items-center gap-1 text-[#555] text-xs">
          <span>{projects.length} projects</span>
        </div>
      </div>

      {/* Carousel */}
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full">
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

        {/* Custom nav arrows */}
        <div className="flex items-center gap-3 mt-6">
          <CarouselPrevious className="static translate-y-0 border-[#2a2a2a] bg-[#111] hover:bg-[#1a1a1a] hover:border-[#57d039] text-white hover:text-[#57d039] transition-all duration-200 rounded-xl w-10 h-10" />
          <CarouselNext className="static translate-y-0 border-[#2a2a2a] bg-[#111] hover:bg-[#1a1a1a] hover:border-[#57d039] text-white hover:text-[#57d039] transition-all duration-200 rounded-xl w-10 h-10" />
        </div>
      </Carousel>
    </motion.section>
  );
};

export default Projects;
