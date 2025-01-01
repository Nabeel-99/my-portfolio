import React from "react";
import { motion } from "motion/react";

const MarqueeEffect = () => {
  return (
    <div className="flex mask-marquee gap-6 overflow-x-hidden">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 120, ease: "linear", repeat: Infinity }}
        className="flex flex-shrink-0 gap-6 overflow-hidden   "
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="text-[3rem] xl:text-[6rem] tracking-tight font-satoshi-bold"
          >
            Let's Connect
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 120, ease: "linear", repeat: Infinity }}
        className="flex flex-shrink-0 gap-6 overflow-hidden "
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="text-[3rem] xl:text-[6rem] tracking-tight font-satoshi-bold"
          >
            Let's Connect
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeEffect;
