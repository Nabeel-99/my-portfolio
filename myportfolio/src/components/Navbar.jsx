import React, { useEffect, useState } from "react";
import { HiMiniBars2 } from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";
import BurgerMenu from "./BurgerMenu";
const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const openMenu = () => setBurgerMenu(!burgerMenu);

  useEffect(() => {
    if (burgerMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [burgerMenu]);

  return (
    <div
      className={`xl:hidden fixed top-0  w-full flex justify-between items-center backdrop-blur-md pb-2  pt-5 z-50 right-0 ${
        burgerMenu ? "bg-[#0d0d0d]" : ""
      }`}
    >
      <div className="flex flex-col ml-4 text-sm ">
        <div className="font-satoshi-bold"> Nabeel Dev</div>{" "}
        {/* <Typewriter
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
        /> */}
      </div>
      <button
        onClick={openMenu}
        className="border px-2 py-2 mr-4  border-[#202020] rounded-xl bg-[#121212]"
      >
        {burgerMenu ? (
          <HiXMark style={{ fontSize: "1.5rem" }} className="" />
        ) : (
          <HiMiniBars2 style={{ fontSize: "1.5rem" }} className="" />
        )}
      </button>
      {burgerMenu && <BurgerMenu />}
    </div>
  );
};

export default Navbar;