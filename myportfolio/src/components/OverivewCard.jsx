import React from "react";

const OverviewCard = ({ details }) => {
  return (
    <div className="flex flex-col gap-6  w-full">
      <div className="w-full h-full border bg-[#f0f0f026] card-bg backdrop-blur-md border-[#dadada] border-[#2929295e] p-6 lg:p-8 rounded-2xl flex flex-col gap-4">
        <div className="pb-3 border-b border-b-[#3e3e3e] text-2xl lg:text-5xl font-satoshi-bold">
          Overview
        </div>
        <div className="text-xl lg:text-2xl">{details?.overview}</div>
      </div>
      <div className="w-full relative backdrop-blur-lg h-full border gradient-bg border-[#2929295e] p-6 lg:p-8 rounded-2xl flex flex-col gap-4">
        {" "}
        <img
          src={details?.images?.image2}
          className="object-contain w-full h-full "
          loading="lazy"
          alt=""
        />
      </div>
    </div>
  );
};

export default OverviewCard;
