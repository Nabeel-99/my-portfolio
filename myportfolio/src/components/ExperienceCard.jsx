import React from "react";
import { motion } from "motion/react";
import { MdDevices } from "react-icons/md";
const ExperienceCard = ({ delay, title, date, description }) => {
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
      transition={{ duration: 0.8, delay: 0.4 }}
      className="border rounded-3xl backdrop-blur-md  bg-[#121212] border-[#1f1f1f] p-10 xl:w-[900px]"
    >
      <div className="flex flex-col xl:flex-row items-start justify-start  gap-10">
        <motion.div
          initial={{ x: -2, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=""
        >
          <MdDevices style={{ fontSize: "2rem" }} className="" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col ">
            <p className="font-satoshi-bold text-xl">{title}</p>
            <p className="text-sm">{date}</p>
          </div>
          <div className="flex flex-col ">
            <ul className="list-disc">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
