import React, { useState } from "react";
import "./sliderStyle.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      <div className="c bg-neutral-900 text-white p-4 border-t-2">
        ALL OF YOUR STAR WARS FAVORITES NOW STREAMIN ON DISNEY+
      </div>
      {dataSlider.map((item, index) => {
        return (
          <div
            key={index}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={`/imgSlider/im${index + 1}.jpg`} alt="" width="100" />

            <div className="absolute top-6  lg:top-24 left-1/4 w-1/2">
              <h2
                className={
                  slideIndex ===  1 || slideIndex ===  2  
                    ? "w-full lg:text-5xl pt-2 font-bold"
                    : "w-full lg:text-5xl pt-2 font-bold text-white mt-20"
                }
              >
                {item.title}
              </h2>
              <h3
                className={
                  slideIndex ===  1 || slideIndex ===  2
                    ? "w-full lg:text-2xl pt-2 font-bold"
                    : "w-full  lg:text-2xl pt-2 font-bold text-white"
                }
              >
                {item.subtitle}
              </h3>
              <button className="bg-yellow-300 py-2 px-6 lg:py-4 lg:px-12 rounded-full mt-10 lg:mt-20 font-semibold lg:text-lg">
                {item.but}
              </button>
            </div>
          </div>
        );
      })}

      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots gap-2 w-1/2  lg:w-full justify-center ">
        {dataSlider.map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={
              slideIndex === index + 1
                ? "dot active card w-44 bg-base-100 shadow-xl image-full "
                : "dot card w-40 bg-base-100 shadow-xl image-full"
            }
          >


            <div className="mx-auto  p-1 bg-opacity-50 lg:bg-opacity-0 bg-slate-400">
              <img
                className="opacity-60 hidden lg:flex "
                src={`/imgSlider/im${index + 1}.jpg`}
                alt="Shoes"
              />
              <h1 className="text-slate-200 w-32 text-sm pt-2 font-bold hidden lg:flex">
                {item.cardText}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
