import React from "react";
import IconCard from "./IconCard";

const StackCard = ({ details }) => {
  return (
    <div className="flex flex-col gap-6 h-full w-full xl:w-2/3 ">
      <div className="lg:w-full  h-full border card-bg backdrop-blur-md border-[#2929295e] p-6 lg:p-8 rounded-2xl flex flex-col gap-4">
        <div className="pb-3 border-b border-b-[#3e3e3e]   text-2xl lg:text-5xl font-satoshi-bold">
          Stack Used
        </div>
        <div className="flex flex-col gap-4">
          {details?.stack?.map((s, index) => (
            <IconCard
              key={index}
              image={s.icon}
              header={s.name}
              titleStyle={"text-xl lg:text-3xl font-satoshi-bold"}
              rounded="rounded-2xl"
              borderColor={"border-[#1b1b1b]"}
              bgColor={s.bg}
            />
          ))}
        </div>
      </div>
      <div className="w-full relative backdrop-blur-lg h-full border gradient-bg border-[#2929295e] p-6 lg:p-8 rounded-2xl flex flex-col gap-4">
        {" "}
        <img
          src={details?.images?.image1}
          className="object-cover w-full h-full "
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default StackCard;
