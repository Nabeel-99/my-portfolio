import React from "react";
import MarqueeEffect from "./MarqueeEffect";
import ContactForm from "./ContactForm";
import FadeInEffect from "./FadeInEffect";

const Contact = () => {
  return (
    <FadeInEffect delay={0.2}>
      <div className="flex   flex-col h-full w-full  gap-6  overflow-x-hidden ">
        <MarqueeEffect />
        <ContactForm />
      </div>
    </FadeInEffect>
  );
};

export default Contact;
