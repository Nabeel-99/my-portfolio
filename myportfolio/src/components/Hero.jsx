import React from "react";
import ProfileCard from "./ProfileCard";
import Socials from "./Socials";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-6 pb-44">
      <ProfileCard />
      <Socials />
    </div>
  );
};

export default Hero;
