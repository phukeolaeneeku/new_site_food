import React, { useState, useEffect } from "react";
import "./banner.css";
import delivery_banner from "../../img/delivery_banner.jpg";

const Banner = () => {
  const [background_image, set_background_image] = useState(null);
  const [slides, setSlides] = useState([background_image]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState("right");


  const handlePrevSlide = () => {
    setDirection("left");
    setActiveSlide(activeSlide === 0 ? slides.length - 1 : activeSlide - 1);
  };

  const handleNextSlide = () => {
    setDirection("right");
    setActiveSlide(activeSlide === slides.length - 1 ? 0 : activeSlide + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
      <div>
        <div className="slider_banner">
          <div className="slide_banner"  >
            <img src={delivery_banner} alt="" />
          </div>
          <div className="navigation_banner but1_banner">
            <div className="nav-btn_banner " onClick={handlePrevSlide}>&#8249;</div>
          </div>
          <div className="navigation_banner but2_banner">
            <div className="nav-btn_banner " onClick={handleNextSlide}>&#8250;</div>
          </div>
        </div>
      </div>

  );
};

export default Banner;