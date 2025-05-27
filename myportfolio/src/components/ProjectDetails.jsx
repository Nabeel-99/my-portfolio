import React, { useEffect, useState } from "react";
import IconCard from "./IconCard";
import { Link, useParams } from "react-router-dom";
import { projects } from "../projects";
import ScrollToTop from "./ScrollToTop";
import OverviewCard from "./OverivewCard";
import StackCard from "./StackCard";
import { motion } from "motion/react";
import FadeInEffect from "./FadeInEffect";

const ProjectDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [theme, setTheme] = useState(
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );
  const fetchProjectDetails = () => {
    const project = projects.find((p) => p.id === id);
    setDetails(project);
  };
  useEffect(() => {
    scrollTo(0, 0);
    fetchProjectDetails();
  }, [id]);

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };
    const interval = setInterval(updateTheme, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    if (details) {
      const bg = isDark
        ? details.radialGradientDark
        : details.radialGradientLight;
      document.querySelector(".star-background").style.background = bg;
    }
    if (details && details.imageGradient) {
      const gradientImages = document.querySelectorAll(".gradient-bg");
      gradientImages.forEach((image) => {
        image.style.background = details.imageGradient;
      });
    }
    return () => {
      document.querySelector(".star-background").style.background =
        "radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, rgba(8, 8, 8, 0.6) 50%, rgba(0, 0, 0, 1) 100%)";
    };
  }, [details, theme]);

  return (
    <div className="flex flex-col  relative  items-center gap-10 lg:px-44   w-full">
      <ScrollToTop />

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.8, 1] }}
        href="/"
        className="absolute hidden lg: xl:flex top-0 left-40 text-black/60 hover:text-black dark:text-[#a4a4a4] dark:hover:text-white transition duration-200 px-6 py-3 rounded-xl font-satoshi-bold text-5xl"
      >
        Return to Home
      </motion.a>
      <div className="flex flex-col gap-10 w-full xl:pt-32">
        <FadeInEffect>
          <div className="flex flex-col bg gap-4 lg:flex-row justify-between lg:items-center">
            <IconCard
              header={details.title}
              titleStyle={"text-2xl lg:text-3xl  font-satoshi-bold"}
              description={details.app}
              descriptionStyle={"text-2xl"}
              image={details.appIcon}
              rounded="rounded-xl"
              borderColor={"border-[#19191916]"}
              bgColor={details.appBg}
              className={"xl:h-full"}
            />
            {details.link && (
              <Link
                to={details?.link}
                target="_blank"
                className={` p-3 text-white font-satoshi-bold font-semibold lg:p-4 text-2xl lg:text-3xl ${details.bgLink} ${details.bgHover}  transition  duration-300 px-10 text-center rounded-2xl`}
              >
                View Website
              </Link>
            )}
          </div>
        </FadeInEffect>
        <FadeInEffect delay={0.4}>
          <div className="w-full h-[300px] md:h-[500px] xl:h-[800px]  rounded-xl">
            <img
              src={details.image}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover border border-[#222222]  rounded-xl"
            />
          </div>
        </FadeInEffect>
        <FadeInEffect delay={0.4}>
          <div className="flex flex-col  xl:flex-row w-full gap-6">
            <OverviewCard details={details} />
            <StackCard details={details} />
          </div>
        </FadeInEffect>
        <FadeInEffect delay={0.4}>
          <div className="w-full relative backdrop-blur-lg  border gradient-bg dark:border-[#2929295e] p-6 lg:p-8 rounded-2xl flex flex-col items-center justify-center overflow-hidden gap-4">
            {" "}
            <img
              src={details?.images?.image3}
              loading="lazy"
              className="object-cover w-full h-full "
              alt=""
            />
          </div>
        </FadeInEffect>
      </div>
    </div>
  );
};

export default ProjectDetails;
