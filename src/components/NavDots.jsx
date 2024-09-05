import React from "react";

import "./styles.css";

const NavDots = ({ currentSlide, totalSlides, goToSlide }) => {
  return (
    <nav id="nav-dots" className="nav-dots">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <span
          key={index}
          className={index === currentSlide ? "nav-dot-current" : ""}
          onClick={() => goToSlide(index)}></span>
      ))}
    </nav>
  );
};

export default NavDots;
