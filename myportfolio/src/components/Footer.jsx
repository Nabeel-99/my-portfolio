import React from "react";

const Footer = ({ showComponent }) => {
  return (
    <div
      className={`flex items-center  justify-center ${
        showComponent ? "xl:justify-start " : "justify-center"
      } `}
    >
      <p className="pt-2 text-xs lg:text-sm">
        &copy; Copyright 2024 . All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
