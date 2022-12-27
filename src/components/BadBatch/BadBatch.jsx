import React from "react";
import YouTube from "react-youtube";

const BadBatch = () => {
  return (
    <div className="mt-20 bg-gradient-to-b ">
      
      <div className="bg-gradient-to-t from-yellow-700 to-orange-400 pt-20 pb-2">
        <img className="w-11/12 text-center mx-auto" src={`imgBad/bad.jpg`} alt="" />
        <div className=" inline-block xl:flex justify-center p-20 gap-10 ">
          <div className="flex items-center xl:w-1/2 mb-10 xl:mb-0">
            <img
              className="rounded-l-lg"
              src={`imgBad/little.jpg`}
              alt="Album"
              width={310}
            />

            <div className="bg-neutral-900 w-full h-44 p-4 text-white text-xs sm:text-md  lg:text-xl text-left rounded-r-lg">
              <div className="flex gap-2">
                <div className="border-b-2 w-10 mb-4"></div>
                <div className="border-b-2 w-2 mb-4"></div>
              </div>
              <h2 className="title">
                The Bad Batch Season 2 trailer and Key Art Revealed
              </h2>
            </div>
          </div>
          <div className="flex items-center xl:w-1/2">
            <img
              className="rounded-l-lg"
              src={`imgBad/banda.jpg`}
              alt="Album"
              width={310}
            />
            <div className="bg-neutral-900 w-full h-44 p-4 text-white text-xs sm:text-md lg:text-xl text-left rounded-r-lg">
              <div className="flex gap-2">
                <div className="border-b-2 w-10 mb-4"></div>
                <div className="border-b-2 w-2 mb-4"></div>
              </div>
              <h2 className="title">
                The Creators of Star Wars: The Bad Batch on Season 1’s Biggest
                Moments and What’s Next
              </h2>
            </div>
          </div>
        </div>
        <div className="flex items-center mb-20 w-full mx-auto px-20">
          
          <iframe
            width="1000"
            height="462"
            src={`vidBad/vidStar.mp4`}
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
      
          <div className="bg-neutral-900 w-full xl:w-1/2  p-4 text-white text-xl text-left rounded-r-lg">
            <div className="flex gap-2">
              <div className="border-b-2 w-10 mb-4"></div>
              <div className="border-b-2 w-2 mb-4"></div>
            </div>
            <h2 className="mb-11">
              Season 2 Trailer | Star Wars: The Bad Batch
            </h2>
            <h6 className="pb-24 sm:pb-44 md:pb-52 lg:pb-72 xl:pb-80  text-sm font-semibold text-slate-400">It is time for the new Era. Watch the trailer for the new season of Star Wars: The Bad Batch. Coming to Disney+ Jan 4.</h6>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadBatch;
