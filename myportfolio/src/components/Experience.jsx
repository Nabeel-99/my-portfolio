import React from "react";
import { MdDevices } from "react-icons/md";

const Experience = () => {
  return (
    <div className="flex flex-col gap-6 ">
      <p className="font-satoshi-bold text-4xl">Experience</p>
      <div className="border rounded-3xl bg-[#121212] border-[#1f1f1f] p-10 xl:w-[900px]">
        <div className="flex flex-col xl:flex-row items-start justify-start  gap-10">
          <div className="">
            <MdDevices style={{ fontSize: "2rem" }} className="" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col ">
              <p className="font-satoshi-bold text-xl">
                Software Developer Intern
              </p>
              <p className="text-sm">June 2024 - September 2024</p>
            </div>
            <div className="flex flex-col ">
              <ul>
                <li>
                  {" "}
                  Developed a task management app with scheduling and group Q&A
                  features.
                </li>
                <li>
                  {" "}
                  Worked on all aspects of the project using{" "}
                  <span>PHP Laravel,</span> <span>MySQL,</span> and{" "}
                  <span>React JS.</span>
                </li>
                <li>
                  {" "}
                  Delivered the solution effectively using Scrum methodologies.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-3xl bg-[#121212] border-[#1f1f1f] p-10 xl:w-[900px]">
        <div className="flex flex-col xl:flex-row  items-start justify-start  gap-10">
          <div className="">
            <MdDevices style={{ fontSize: "2rem" }} className="" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col ">
              <p className="font-satoshi-bold text-xl">Side Projects</p>
              <p className="text-sm">October 2022 - June 2023</p>
            </div>
            <div className="flex flex-col ">
              <ul>
                <li>
                  {" "}
                  Designed a website for a family business using React.js and
                  Tailwind CSS.
                </li>
                <li>
                  {" "}
                  Collaborated to fix bugs in a Music Playlist app using
                  SvelteKit.
                </li>
                <li>
                  Developed key features for a Rental Agency app using Java
                  Spring Boot.
                </li>
              </ul>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
