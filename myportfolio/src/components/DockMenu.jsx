import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, FolderKanban, Layers, Briefcase, Mail } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", section: "home", icon: Home },
  { label: "Projects", section: "project", icon: FolderKanban },
  { label: "Stack", section: "stack", icon: Layers },
  { label: "Experience", section: "experience", icon: Briefcase },
  { label: "Contact", section: "contact", icon: Mail },
];

const Dock = () => {
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      for (const item of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(item.section);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(item.section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (section) => {
    setActiveSection(section);
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

  if (location.pathname !== "/") return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
      className="fixed bottom-6 inset-x-0 flex justify-center z-50 hidden md:flex pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-0.5 px-2.5 py-2 rounded-2xl border border-white/[0.08] bg-[#0f0f0f]/85 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.section;

          return (
            <motion.button
              key={item.section}
              onClick={() => handleClick(item.section)}
              whileTap={{ scale: 0.93 }}
              className={`relative flex flex-col items-center justify-center gap-1.5 px-5 py-2 rounded-xl transition-colors duration-200 ${
                isActive ? "bg-white/10" : "hover:bg-white/5"
              }`}>
              <Icon
                size={19}
                strokeWidth={1.8}
                className={`transition-colors duration-200 ${
                  isActive ? "text-[#57d039]" : "text-[#4a4a4a]"
                }`}
              />
              <span
                className={`text-[11px] font-medium tracking-wide transition-colors duration-200 ${
                  isActive ? "text-white" : "text-[#4a4a4a]"
                }`}>
                {item.label}
              </span>

              {isActive && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute -bottom-0.5 w-1 h-1 rounded-full bg-[#57d039]"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Dock;
