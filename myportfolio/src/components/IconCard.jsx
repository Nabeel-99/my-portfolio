import React from "react";
import { motion } from "motion/react";

const IconCard = ({
  header,
  description,
  image,
  bgColor,
  borderColor,
  delay,
  descriptionStyle,
  titleStyle,
  className,
  rounded = "rounded-full",
}) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{ duration: 0.8, delay: delay }}
      className="flex items-center  gap-10"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <div
            className={`h-16 w-16 lg:h-20 lg:w-20  text-[#aabac7] overflow-hidden shadow-md border  ${rounded} flex items-center justify-center ${bgColor} ${borderColor}`}
          >
            <img className={className} alt="" src={image} />
          </div>
          <div className="flex flex-col gap-2">
            <p className={`${titleStyle}`}>{header}</p>
            <p className={`${descriptionStyle}`}>{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IconCard;
