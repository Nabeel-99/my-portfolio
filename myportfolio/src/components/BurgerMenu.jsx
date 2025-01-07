import React from "react";
import { motion } from "motion/react";
import { useNavigate, useLocation } from "react-router-dom";

const BurgerMenu = ({ closeMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (section) => {
    closeMenu();
    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  return (
    <div className="flex fixed top-16 h-screen z-50 pt-4 px-6 w-full flex-col bg-[#0d0d0d]">
      <ul className="text-lg">
        {["home", "project", "stack", "experience", "contact"].map(
          (section, index) => (
            <motion.li
              key={section}
              initial={{ x: index % 2 === 0 ? 10 : -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              className="pb-8"
            >
              <span onClick={() => handleClick(section)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            </motion.li>
          )
        )}
      </ul>
    </div>
  );
};

export default BurgerMenu;
