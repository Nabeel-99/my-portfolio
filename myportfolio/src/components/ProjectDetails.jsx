import React, { useEffect, useState } from "react";
import IconCard from "./IconCard";
import LandingPage from "../assets/images/chronicle.png";
import { Link, useParams } from "react-router-dom";
import { projects } from "../projects";
import ScrollToTop from "./ScrollToTop";

const ProjectDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const fetchProjectDetails = () => {
    const project = projects.find((p) => p.id === id);
    setDetails(project);
    console.log(project);
  };
  useEffect(() => {
    fetchProjectDetails();
    if (details && details.radialGradient) {
      document.querySelector(".star-background").style.background =
        details.radialGradient;
    }
    return () => {
      document.querySelector(".star-background").style.background =
        "radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, rgba(8, 8, 8, 0.6) 50%, rgba(0, 0, 0, 1) 100%)";
    };
  }, [id, details]);

  return (
    <div className="flex flex-col  relative  items-center gap-10 lg:px-44   w-full">
      <ScrollToTop />
      <Link
        to={"/"}
        className="absolute top-0 border px-4 py-2 rounded-xl text-lg"
      >
        Home
      </Link>
      <div className="flex flex-col gap-10 w-full pt-32">
        <div className="flex flex-col   gap-4 lg:flex-row justify-between lg:items-center">
          <IconCard
            header={details.title}
            titleStyle={"text-2xl lg:text-3xl font-satoshi-bold"}
            description={details.app}
            descriptionStyle={"text-2xl"}
            rounded="rounded-xl"
            borderColor={"border-[#19191916]"}
          />
          <Link
            to={details.link}
            target="_blank"
            className={` p-3 lg:p-4 text-2xl ${details.bgLink} ${details.bgHover}  transition  duration-300 px-10 text-center rounded-2xl`}
          >
            Website
          </Link>
        </div>

        <div className="w-full h-[300px] md:h-[500px] xl:h-[800px]  rounded-xl">
          <img
            src={details.image}
            alt=""
            className="h-full w-full object-cover border border-[#222222]  rounded-xl"
          />
        </div>
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="w-full h-full border card-bg backdrop-blur-md border-[#2929295e] p-6 lg:p-8 rounded-2xl flex flex-col gap-4">
            <div className="pb-3 border-b border-b-[#3e3e3e] text-2xl lg:text-5xl font-satoshi-bold">
              Overview
            </div>
            <div className="text-xl lg:text-2xl">{details?.overview}</div>
          </div>
          <div className="lg:w-full xl:w-2/3 h-full border card-bg backdrop-blur-md border-[#2929295e] p-6 lg:p-8 rounded-2xl flex flex-col gap-4">
            <div className="pb-3 border-b border-b-[#3e3e3e] text-2xl lg:text-5xl font-satoshi-bold">
              Stack Used
            </div>
            <div className="flex flex-col gap-4">
              {details?.stack?.map((s, index) => (
                <IconCard
                  key={index}
                  header={s}
                  titleStyle={"text-xl lg:text-3xl font-satoshi-bold"}
                  rounded="rounded-xl"
                  borderColor={"border-[#19191916]"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
