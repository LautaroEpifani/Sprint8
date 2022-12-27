import React, { useState } from "react";
import BtnSlidesDos from "./BtnSlidesDos";
import BtnSlides from "./BtnSlides";
import "./slidesStyle.css";
import dataAndor from "./dataAndor";
import dataNew from "./dataNew";
import dataAndorRes from "./dataAndorRes";
import dataNewRes from "./dataNewRes";

const MiniSlides = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [slideIndexDos, setSlideIndexDos] = useState(1);
  const [slideIndexRes, setSlideIndexRes] = useState(1);
  const [slideIndexNew, setSlideIndexNew] = useState(1);

  const slides = dataAndor;
  const slidesDos = dataAndor;
  const slidesRes = dataAndorRes;
  const slidesNew = dataNewRes;

  const nextSlide = () => {
    if (slideIndex !== slides.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slides.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(slides.length);
    }
  };

  const nextSlideDos = () => {
    if (slideIndexDos !== slidesDos.length) {
      setSlideIndexDos(slideIndexDos + 1);
    } else if (slideIndexDos === slidesDos.length) {
      setSlideIndexDos(1);
    }
  };

  const prevSlideDos = () => {
    if (slideIndexDos !== 1) {
      setSlideIndexDos(slideIndexDos - 1);
    } else if (slideIndexDos === 1) {
      setSlideIndexDos(slidesDos.length);
    }
  };

  const nextSlideRes = () => {
    if (slideIndexRes !== slidesRes.length) {
      setSlideIndexRes(slideIndexRes + 1);
    } else if (slideIndexRes === slidesRes.length) {
      setSlideIndexRes(1);
    }
  };

  const prevSlideRes = () => {
    if (slideIndexRes !== 1) {
      setSlideIndexRes(slideIndexRes - 1);
    } else if (slideIndexRes === 1) {
      setSlideIndexRes(slidesRes.length);
    }
  };

  const nextSlideNew = () => {
    if (slideIndexNew !== slidesNew.length) {
      setSlideIndexNew(slideIndexNew + 1);
    } else if (slideIndexNew === slidesNew.length) {
      setSlideIndexNew(1);
    }
  };

  const prevSlideNew = () => {
    if (slideIndexNew !== 1) {
      setSlideIndexNew(slideIndexNew - 1);
    } else if (slideIndexNew === 1) {
      setSlideIndexNew(slidesNew.length);
    }
  };

  return (
    <>
      <div className="container-slides">
        {slides.map((item, index) => {
          return (
            
              <div
                key={index}
                className={
                  slideIndex === index + 1 ? "slides active-anim" : "slides"
                }
              >
                <div className="border-b-2 mt-20 text-white mx-auto w-11/12 mb-10 font-semibold text-3xl text-left">
                  Catch up on Andor Season 1
                </div>

                <div className="w-full h-64 lg:hidden ml-8">
                  {slidesRes.map((item, index) => (
                    
                      <div key={index}
                        className={
                          slideIndexRes === index + 1
                            ? "res active-res "
                            : "res"
                        }
                      >
                        <img
                          className=""
                          src={`imgMiniRes/${index + 1}.jpg`}
                          alt="Album"
                        />
                        <div className="bg-neutral-900   h-44 p-4 text-white text-xl text-left rounded-b-lg">
                          <div className="flex gap-2">
                            <div className="border-b-2 w-10 mb-4"></div>
                            <div className="border-b-2 w-2 mb-4"></div>
                          </div>
                          <h2 className="title">{dataAndorRes[index].title}</h2>
                        </div>
                      </div>
                    
                  ))}
                </div>

                <div className="hidden lg:flex justify-center px-20 mb-20 gap-10 ">
                  <div className="w-1/3 h-64">
                    <img
                      className=""
                      src={`imgMini/${index + 1}/${index + 1}.jpg`}
                      alt="Album"
                    />

                    <div className="bg-neutral-900   h-44 p-4 text-white text-xl text-left rounded-b-lg">
                      <div className="flex gap-2">
                        <div className="border-b-2 w-10 mb-4"></div>
                        <div className="border-b-2 w-2 mb-4"></div>
                      </div>
                      <h2 className="title">{dataAndor[index].one}</h2>
                    </div>
                  </div>
                  <div className=" w-1/3 h-64">
                    <img
                      className=""
                      src={`imgMini/${index + 1}/${index + 2}.jpg`}
                      alt="Album"
                    />
                    <div className="bg-neutral-900  h-44 p-4 text-white text-xl text-left rounded-b-lg">
                      <div className="flex gap-2">
                        <div className="border-b-2 w-10 mb-4"></div>
                        <div className="border-b-2 w-2 mb-4"></div>
                      </div>
                      <h2 className="title">{dataAndor[index].two}</h2>
                    </div>
                  </div>
                  <div className="w-1/3 h-64">
                    <img
                      className=""
                      src={`imgMini/${index + 1}/${index + 3}.jpg`}
                      alt="Album"
                    />
                    <div className="bg-neutral-900  h-44 p-4 text-white text-xl text-left rounded-b-lg">
                      <div className="flex gap-2">
                        <div className="border-b-2 w-10 mb-4"></div>
                        <div className="border-b-2 w-2 mb-4"></div>
                      </div>
                      <h2 className="title">{dataAndor[index].three}</h2>
                    </div>
                  </div>
                </div>
              </div>
          
          );
        })}

        <BtnSlides
          moveSlide={nextSlide}
          moveRes={nextSlideRes}
          direction={"next"}
        />
        <BtnSlides
          moveSlide={prevSlide}
          moveRes={prevSlideRes}
          direction={"prev"}
        />
      </div>

      <div className="container-slides">
        {slidesDos.map((item, index) => {
          return (
            <div
              key={index}
              className={
                slideIndexDos === index + 1 ? "slides active-anim" : "slides"
              }
            >
              <div className="border-b-2 mt-20 text-white mx-auto w-11/12 mb-10 font-semibold text-3xl text-left">
                Explore More
              </div>
               <div className="w-full h-64 lg:hidden ml-8">
                  {slidesNew.map((item, index) => (
                      <div key={index}
                        className={
                          slideIndexNew === index + 1
                            ? "res active-res "
                            : "res"
                        }
                      >
                        <img
                          className=""
                          src={`imgNew/${index + 1}.jpg`}
                          alt="Album"
                        />
                        <div className="bg-neutral-900   h-44 p-4 text-white text-xl text-left rounded-b-lg">
                          <div className="flex gap-2">
                            <div className="border-b-2 w-10 mb-4"></div>
                            <div className="border-b-2 w-2 mb-4"></div>
                          </div>
                          <h2 className="title">{dataNewRes[index].title}</h2>
                        </div>
                      </div>
                    
                  ))}
                </div>
              <div className="hidden lg:flex justify-center px-20 mb-20 gap-10">
                <div className="w-1/3 h-64">
                  <img
                    className=""
                    src={`imgMiniDos/${index + 1}/${index + 1}.jpg`}
                    alt="Album"
                  />

                  <div className="bg-neutral-900   h-44 p-4 text-white text-xl text-left rounded-b-lg">
                    <div className="flex gap-2">
                      <div className="border-b-2 w-10 mb-4"></div>
                      <div className="border-b-2 w-2 mb-4"></div>
                    </div>
                    <h2 className="title">{dataNew[index].one}</h2>
                  </div>
                </div>
                <div className=" w-1/3 h-64">
                  <img
                    className=""
                    src={`imgMiniDos/${index + 1}/${index + 2}.jpg`}
                    alt="Album"
                  />
                  <div className="bg-neutral-900  h-44 p-4 text-white text-xl text-left rounded-b-lg">
                    <div className="flex gap-2">
                      <div className="border-b-2 w-10 mb-4"></div>
                      <div className="border-b-2 w-2 mb-4"></div>
                    </div>
                    <h2 className="title">{dataNew[index].two}</h2>
                  </div>
                </div>
                <div className="w-1/3 h-64">
                  <img
                    className=""
                    src={`imgMiniDos/${index + 1}/${index + 3}.jpg`}
                    alt="Album"
                  />
                  <div className="bg-neutral-900  h-44 p-4 text-white text-xl text-left rounded-b-lg">
                    <div className="flex gap-2">
                      <div className="border-b-2 w-10 mb-4"></div>
                      <div className="border-b-2 w-2 mb-4"></div>
                    </div>
                    <h2 className="title">{dataNew[index].three}</h2>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <BtnSlidesDos moveSlide={nextSlideDos} moveNew={nextSlideNew} direction={"next"} />
        <BtnSlidesDos moveSlide={prevSlideDos} moveNew={prevSlideNew} direction={"prev"} />
      </div>
    </>
  );
};

export default MiniSlides;
