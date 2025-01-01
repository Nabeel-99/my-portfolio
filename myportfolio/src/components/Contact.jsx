import React from "react";
import MarqueeEffect from "./MarqueeEffect";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="flex   flex-col h-full w-full  gap-6  overflow-x-hidden ">
      <MarqueeEffect />
      <ContactForm />
    </div>
  );
};

export default Contact;
