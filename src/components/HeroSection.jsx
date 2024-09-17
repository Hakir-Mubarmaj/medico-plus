// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      id: 0,
      webImage: "https://i.ibb.co.com/LhMs0WB/369945915-610386717874203-1826832679122413814-n-ai-brush-removebg-uvwm52im.png",
      mobileImage: "https://i.ibb.co.com/L82TVpF/logo-removebg-preview.png",
      gradient: "bg-gradient-to-b from-[#8b3d9b] to-[#26022d]",
    },
    {
      id: 1,
      webImage: "https://i.ibb.co.com/LhMs0WB/369945915-610386717874203-1826832679122413814-n-ai-brush-removebg-uvwm52im.png",
      mobileImage:
        "https://i.ibb.co.com/L82TVpF/logo-removebg-preview.png",
      gradient: "bg-gradient-to-b from-[#273271] to-[#5abaa3]",
    },
    {
      id: 2,
      webImage: "https://i.ibb.co.com/LhMs0WB/369945915-610386717874203-1826832679122413814-n-ai-brush-removebg-uvwm52im.png",
      mobileImage: "https://i.ibb.co.com/L82TVpF/logo-removebg-preview.png",
      gradient: "bg-gradient-to-b from-[#643d90] to-[#207dc1]",
    },
    {
      id: 3,
      webImage: "https://i.ibb.co.com/LhMs0WB/369945915-610386717874203-1826832679122413814-n-ai-brush-removebg-uvwm52im.png",
      mobileImage: "https://i.ibb.co.com/L82TVpF/logo-removebg-preview.png",
      gradient: "bg-gradient-to-b from-[#6679ba] to-[#eb5d7e]",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Carousel Inner */}
      <div className="relative w-full h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${
              index === activeIndex ? "opacity-100" : "opacity-0"
            } absolute inset-0 transition-opacity duration-1000 ${slide.gradient} flex justify-center items-center`}
          >
            <center>
            <div className="container mx-auto">
              <img
                src={slide.webImage}
                className="hidden md:block img-fluid"
                alt={`Slide ${index}`}
              />
              <img
                src={slide.mobileImage}
                className="block md:hidden img-fluid w-full"
                alt={`Slide ${index}`}
              />
            </div>
            </center>
          </div>
        ))}
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Slide ${index}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
