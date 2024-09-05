import React, { useState, useEffect } from "react";

import NavDots from "./NavDots";

import "./styles.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const slides = [
    {
      id: 1,
      backgroundClass: "bg-img-1",
      title: "A bene placito.",
      quote:
        "You have just dined, and however scrupulously the slaughterhouse is concealed...",
      cite: "Ralph Waldo Emerson",
    },
    {
      id: 2,
      backgroundClass: "bg-img-2",
      title: "Regula aurea.",
      quote:
        "Until he extends the circle of his compassion to all living things...",
      cite: "Albert Schweitzer",
    },
    {
      id: 3,
      backgroundClass: "bg-img-3",
      title: "Dum spiro, spero.",
      quote:
        "Thousands of people who say they 'love' animals sit down once or twice a day to enjoy...",
      cite: "Dame Jane Morris Goodall",
    },
    {
      id: 4,
      backgroundClass: "bg-img-4",
      title: "Donna nobis pacem.",
      quote:
        "The human body has no more need for cows' milk than it does for dogs' milk...",
      cite: "Michael Klaper M.D.",
    },
    {
      id: 5,
      backgroundClass: "bg-img-5",
      title: "Acta Non Verba.",
      quote:
        "I think if you want to eat more meat you should kill it yourself...",
      cite: "Margi Clarke",
    },
  ];

  const goToSlide = (index) => {
    if (!transitioning) {
      setTransitioning(true);
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    setTransitioning(false);
  }, [currentSlide]);

  return (
    <div id="slider" className="sl-slider-wrapper">
      <div className="sl-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`sl-slide ${index === currentSlide ? "active" : ""} ${
              transitioning ? "transitioning" : ""
            }`}
            data-orientation="horizontal">
            <div className="sl-slide-inner">
              <div className={`bg-img ${slide.backgroundClass}`}>
                {/* Slizes for the images */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <h2>{slide.title}</h2>
              <blockquote>
                <p>{slide.quote}</p>
                <cite>{slide.cite}</cite>
              </blockquote>
            </div>
          </div>
        ))}
      </div>
      <NavDots
        currentSlide={currentSlide}
        totalSlides={slides.length}
        goToSlide={goToSlide}
      />
    </div>
  );
};

export default Slider;
