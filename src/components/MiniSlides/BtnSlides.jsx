import React from "react";
import "./slidesStyle.css";
import left from "./icons/left.png";
import right from "./icons/right.png";

const BtnSlides = ({ direction, moveSlide, moveRes }) => {
  return (
    <button
      onClick={() => { moveSlide(); moveRes();}}
      className={direction === "next" ? "btn-slides next" : "btn-slides prev"}
    >
      <img src={direction === "next" ? right : left} alt="" />
    </button>
  );
};

export default BtnSlides;
