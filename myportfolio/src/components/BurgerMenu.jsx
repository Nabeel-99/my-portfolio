import React from "react";

const BurgerMenu = () => {
  return (
    <div className="flex fixed top-16 h-screen z-20 pt-4 px-4 w-full flex-col bg-[#0d0d0d]">
      <ul className="text-lg">
        <li className="pb-8">
          <a href="">Home</a>
        </li>
        <li className="pb-8">
          <a href=""> Projects</a>
        </li>
        <li className="pb-8">
          <a href="">Stack</a>{" "}
        </li>
        <li className="pb-8">
          <a href="">Experience</a>{" "}
        </li>
        <li className="pb-8">
          <a href="">Contact</a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
