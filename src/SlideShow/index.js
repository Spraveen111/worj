// SlideShow.js

import React, { useState } from "react";
import "./index.css";

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://opencart.templatemela.com/OPC10/OPC100247/OPC4/image/cache/catalog/Main-Banner-2-1903x700.jpg",
    "https://opencart.templatemela.com/OPC10/OPC100247/OPC5/image/cache/catalog/Main-Banner-2-1903x680.jpg",
    "https://opencart.templatemela.com/OPC10/OPC100247/OPC4/image/cache/catalog/Main-Banner-2-1903x700.jpg",
  ];

  const totalSlides = images.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="slide-show-container">
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />

      <button className="arrow-button prev" onClick={prevSlide}>
        {"<"}
      </button>

      <button className="arrow-button next" onClick={nextSlide}>
        {">"}
      </button>
    </div>
  );
};

export default SlideShow;