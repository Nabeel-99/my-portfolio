import React from "react";
import IconCard from "./IconCard";
import ReactIcon from "../assets/images/react.svg";
import FramerIcon from "../assets/images/framer.png";
import TailwindIcon from "../assets/images/tailwind.svg";
import MongoIcon from "../assets/images/mongodb.png";
import NodeIcon from "../assets/images/nodejs.png";
import GithubIcon from "../assets/images/github.png";
const Stack = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-4xl font-satoshi-bold">Tech Stack</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
        <IconCard
          header={"React JS"}
          description={"Frontend Development"}
          image={ReactIcon}
          bgColor={"bg-[#08090a]"}
          borderColor={"border-[#0d2d4a]"}
        />
        <IconCard
          header={"Framer Motion"}
          description={"Smooth Animations"}
          image={FramerIcon}
          borderColor={"border-[#f1ff2a]"}
        />
        <IconCard
          header={"Tailwind CSS"}
          description={"Styling"}
          image={TailwindIcon}
          bgColor={"bg-[#06171e]"}
          borderColor={"border-[#143340]"}
        />
        <IconCard
          header={"Node JS"}
          description={"Backend Development"}
          image={NodeIcon}
          bgColor={"bg-white"}
          borderColor={"border-[#0d2d4a]"}
        />
        <IconCard
          header={"Mongo DB"}
          description={"Database"}
          image={MongoIcon}
          bgColor={"bg-[#11300a]"}
          borderColor={"border-[#19490e]"}
        />

        <IconCard
          header={"Github"}
          description={"Collaboration"}
          image={GithubIcon}
          bgColor={"bg-[#d7d7d7]"}
          borderColor={"[#0d2d4a]"}
        />
      </div>
    </div>
  );
};

export default Stack;
