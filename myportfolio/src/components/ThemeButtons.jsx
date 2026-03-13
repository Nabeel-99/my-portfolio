import { useEffect, useState } from "react";
import { TbDeviceDesktop } from "react-icons/tb";
import { CiBrightnessDown } from "react-icons/ci";
import { LuMoonStar } from "react-icons/lu";
import { setTheme } from "../theme";

const ThemeButtons = () => {
  const [active, setActive] = useState("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme") || "system";
    setActive(stored);
  }, []);

  const handleTheme = (theme) => {
    setTheme(theme);
    setActive(theme);
  };

  return (
    <div
      className="fixed left-6 bottom-8 z-50 flex items-center gap-1 
      border rounded-[2.5rem] themebtns px-1 py-1 shadow-lg
      glass-card
      dark:border-[#2a2a2a] dark:bg-[#111111]/80 dark:backdrop-blur-md">
      {[
        { id: "system", icon: <TbDeviceDesktop size={15} />, label: "System" },
        { id: "light", icon: <CiBrightnessDown size={15} />, label: "Light" },
        { id: "dark", icon: <LuMoonStar size={15} />, label: "Dark" },
      ].map(({ id, icon, label }) => (
        <button
          key={id}
          title={label}
          onClick={() => handleTheme(id)}
          className={`p-2 rounded-lg transition-all duration-200 text-sm
            ${
              active === id
                ? "bg-[#57d039] text-black"
                : "text-[#888] hover:text-[#1a1a1a] dark:hover:text-white hover:bg-white/60 dark:hover:bg-[#1f1f1f]"
            }`}>
          {icon}
        </button>
      ))}
    </div>
  );
};

export default ThemeButtons;
