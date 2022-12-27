import React from "react";
import BadBatch from "../BadBatch/BadBatch";
import MiniSlides from "../MiniSlides/MiniSlides";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <BadBatch />
      <MiniSlides />
    </div>
  );
};

export default Home;
