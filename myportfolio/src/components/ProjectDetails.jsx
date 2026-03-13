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

  useEffect(() => {
    scrollTo(0, 0);
    const project = projects.find((p) => p.id === id);
    setDetails(project || {});
  }, [id]);

  useEffect(() => {
    if (!details?.id) return;
    const isDark = document.documentElement.classList.contains("dark");
    const starBg = document.querySelector(".star-background");

    if (starBg) {
      starBg.style.background = isDark
        ? details.radialGradientDark || ""
        : details.radialGradientLight || "";
    }

    if (details.imageGradient) {
      const gradientImages = document.querySelectorAll(".gradient-bg");
      gradientImages.forEach((image) => {
        image.style.background = details.imageGradient;
      });
    }

    // also re-run when theme changes
    const observer = new MutationObserver(() => {
      const nowDark = document.documentElement.classList.contains("dark");
      if (starBg) {
        starBg.style.background = nowDark
          ? details.radialGradientDark || ""
          : details.radialGradientLight || "";
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
      if (starBg) {
        const nowDark = document.documentElement.classList.contains("dark");
        starBg.style.background = nowDark
          ? "radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, rgba(8,8,8,0.6) 50%, rgba(0,0,0,1) 100%)"
          : "";
      }
    };
  }, [details]);

  return (
    <div className="flex flex-col relative items-center gap-10 mx-auto w-full">
      <ScrollToTop />

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.8, 1] }}
        href="/"
        className="absolute hidden xl:flex top-0 left-0 text-[#363636] dark:text-[#a4a4a4] hover:text-[#0a0a0a] dark:hover:text-white transition duration-200 rounded-xl font-satoshi-bold text-5xl">
        Return to Home
      </motion.a>

      <div className="flex flex-col gap-10 w-full xl:pt-32">
        <FadeInEffect>
          <div className="flex flex-col gap-4 lg:flex-row justify-between lg:items-center">
            <IconCard
              header={details.title}
              titleStyle={"text-2xl lg:text-3xl font-satoshi-bold"}
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
                className={`p-3 font-satoshi-bold font-semibold lg:p-4 text-2xl lg:text-3xl ${details.bgLink} ${details.bgHover} transition duration-300 px-10 text-center rounded-2xl text-white`}>
                View Website
              </Link>
            )}
          </div>
        </FadeInEffect>

        <FadeInEffect delay={0.4}>
          <div className="glass-card w-full h-[300px] md:h-[500px] xl:h-[800px] rounded-[2.5rem]">
            <img
              src={details.image}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover border border-[#e0e0e0] dark:border-[#222222] rounded-[2.5rem]"
            />
          </div>
        </FadeInEffect>

        <FadeInEffect delay={0.4}>
          <div className="flex flex-col xl:flex-row w-full gap-6">
            <OverviewCard details={details} />
            <StackCard details={details} />
          </div>
        </FadeInEffect>

        {details?.images?.image3 && (
          <FadeInEffect delay={0.4}>
            <div className="glass-card relative border border-[#e0e0e0] dark:border-[#2929295e] p-6 lg:p-8 rounded-[2.5rem] flex flex-col items-center justify-center overflow-hidden gap-4 gradient-bg dark:backdrop-blur-lg">
              <img
                src={details?.images?.image3}
                loading="lazy"
                className="object-cover w-full h-full"
                alt=""
              />
            </div>
          </FadeInEffect>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
