import React from "react";
import "./slidesStyle.css";
import left from "./icons/left.png";
import right from "./icons/right.png";

const BtnSlidesDos = ({ direction, moveSlide, moveNew}) => {
  return (
    <button
      onClick={() => { moveSlide(); moveNew();}}
      className={direction === "next" ? "btn-slides next" : "btn-slides prev"}
    >
      <img src={direction === "next" ? right: left} alt="" />
    </button>
  );
};

export default BtnSlidesDos;