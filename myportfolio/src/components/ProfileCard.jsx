import React, { useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "motion/react";

const ProfileCard = () => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  const handleMouseLeave = () => setOpacity(0);
  const handleMouseEnter = () => setOpacity(1);
  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };
  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };
  return (
    <motion.div
      ref={divRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="border relative overflow-hidden rounded-[40px] flex flex-col gap-4 bg-[#121212] border-[#1f1f1f] p-10 w-full xl:w-[700px] "
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 1, 0.8, 1] }}
        className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="flex items-center gap-2">
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 360,
              transition: { duration: 0.5 },
              backgroundColor: "AppWorkspace",
              color: "black",
            }}
            className="w-16 h-16 -translate-x-2 lg:translate-x-0 border border-[#1f1f1f] flex items-center justify-center font-satoshi-bold text-2xl rounded-full"
          >
            N
          </motion.div>
          <div className="flex flex-col">
            <motion.p
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 1, 0.8, 1] }}
              className="text-xl font-satoshi-bold"
            >
              Nabeel
            </motion.p>
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "Backend Developer",
                  "Full Stack Developer",
                  "Web Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 60,
                cursor: "",
              }}
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 1, 0.8, 1], delay: 0.8 }}
      >
        <h1 className="text-3xl lg:text-5xl tracking-tight font-satoshi-bold">
          I turn <span>ideas</span> into <span>reality</span>
        </h1>
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 1, 0.8, 1], delay: 1 }}
      >
        <p className="text-lg lg:text-xl">
          Hey, I'm Nabeel. I love building beautiful and creative websites,
          transforming visions into reality.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ProfileCard;
