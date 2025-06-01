import React from "react";
import IconCard from "./IconCard";
import ReactIcon from "../assets/images/react.svg";
import FramerIcon from "../assets/images/framer.png";
import TailwindIcon from "../assets/images/tailwind.svg";
import MongoIcon from "../assets/images/mongodb.png";
import NextIcon from "../assets/images/nextjs.png";
import NodeIcon from "../assets/images/nodejs.png";
import GithubIcon from "../assets/images/github.png";
import PrismaIcon from "../assets/images/prisma.png";
import ShadCNIcon from "../assets/images/shadcn.png";
import FadeInEffect from "./FadeInEffect";
import { motion } from "motion/react";

const Stack = () => {
  return (
    <FadeInEffect>
      <div className="flex flex-col gap-5">
        <div className="text-4xl font-satoshi-bold">Tech Stack</div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 items-center gap-10"
        >
          <IconCard
            header={"Next JS"}
            description={"Frontend / Fullstack Development"}
            image={NextIcon}
            bgColor={"bg-[#1e1e1e]"}
            borderColor={"border-[#1e1e1e]"}
            delay={0.4}
          />
          <IconCard
            header={"React JS"}
            description={"Frontend Development"}
            image={ReactIcon}
            bgColor={"bg-[#08090a]"}
            borderColor={"border-[#0d2d4a]"}
            delay={0.4}
          />
          <IconCard
            header={"Framer Motion"}
            description={"Smooth Animations"}
            image={FramerIcon}
            borderColor={"border-[#f1ff2a]"}
            delay={0.6}
          />
          <IconCard
            header={"Tailwind CSS"}
            description={"Styling"}
            image={TailwindIcon}
            bgColor={"bg-[#06171e]"}
            borderColor={"border-[#143340]"}
            delay={0.8}
          />
          <IconCard
            header={"Node JS"}
            description={"Backend Development"}
            image={NodeIcon}
            bgColor={"bg-white"}
            borderColor={"border-[#0d2d4a]"}
            delay={1}
          />
          <IconCard
            header={"Mongo DB"}
            description={"Database"}
            image={MongoIcon}
            bgColor={"bg-[#11300a]"}
            borderColor={"border-[#19490e]"}
            delay={1.2}
          />
          <IconCard
            header={"Prisma"}
            description={"Database"}
            image={PrismaIcon}
            bgColor={"bg-white"}
            borderColor={"border-[#0d2d4a]"}
            delay={1.2}
          />
          <IconCard
            header={"Github"}
            description={"Collaboration"}
            image={GithubIcon}
            bgColor={"bg-[#d7d7d7]"}
            borderColor={"border-[#0d2d4a]"}
            delay={1.4}
          />
          <IconCard
            header={"ShadCN/UI"}
            description={"UI Components"}
            image={ShadCNIcon}
            bgColor={"bg-[#d7d7d7]"}
            borderColor={"border-[#1a1a1a]"}
            delay={1.4}
          />
        </motion.div>
      </div>
    </FadeInEffect>
  );
};

export default Stack;
