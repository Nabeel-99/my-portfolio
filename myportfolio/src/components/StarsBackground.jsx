import React from "react";

const StarsBackground = () => {
  return (
    <section className="star-background">
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>

      {Array.from({ length: 20 }).map((_, i) => {
        const top = Math.random() * 50;
        const left = Math.random() * 100;
        const delay = Math.random() * 2 + "s";
        return (
          <span
            className="static-star"
            key={i}
            style={{
              top: `${top}%`,
              left: `${left}%`,
              animationDelay: delay,
            }}
          />
        );
      })}
    </section>
  );
};

export default StarsBackground;
