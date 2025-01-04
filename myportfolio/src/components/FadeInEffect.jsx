import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";

const FadeInEffect = ({ delay, children }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: "some" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={sectionRef}
      variants={{
        hidden: { opacity: 0, translateY: 90 },
        visible: { opacity: 1, translateY: 0 },
      }}
      transition={{
        duration: 1,
        damping: 8,
        delay: delay,
        stiffness: 100,
      }}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default FadeInEffect;
