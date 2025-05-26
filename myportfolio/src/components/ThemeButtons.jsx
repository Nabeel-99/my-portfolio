import React, { useEffect, useState } from "react";
import { TbDeviceDesktop } from "react-icons/tb";
import { CiBrightnessDown } from "react-icons/ci";
import { LuMoonStar } from "react-icons/lu";
import { setTheme } from "../theme";

const ThemeButtons = () => {
  const [active, setActive] = useState("dark");
  useEffect(() => {
    const stored = localStorage.theme || "system";
    setActive(stored);
  }, []);

  const handleTheme = (theme) => {
    setTheme(theme);
    setActive(theme);
  };
  return (
    <div className="fixed left-10 bottom-10 z-50 flex items-center border rounded-xl border-[#dadada] dark:border-[#2929295e]">
      <button
        onClick={() => handleTheme("system")}
        className={`p-2 ${
          active === "system" && "bg-[#f0f0f0] dark:bg-[#191a1b]"
        }`}
      >
        <TbDeviceDesktop />
      </button>
      <button
        onClick={() => handleTheme("light")}
        className={`p-2 ${active === "light" && "bg-[#f0f0f0]"}`}
      >
        <CiBrightnessDown />
      </button>
      <button
        onClick={() => handleTheme("dark")}
        className={`p-2 ${active === "dark" && "bg-[#191a1b]"}`}
      >
        <LuMoonStar />
      </button>
    </div>
  );
};

export default ThemeButtons;
