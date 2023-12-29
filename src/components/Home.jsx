import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

export const Home = () => {
  return (
    <div name="home " className="bg-[#1e2b3e] w-full h-screen">
      <div className="flex flex-col justify-center  px-8  h-full  mx-auto max-w-[1000px]">
        <p className="text-[#f17921]">Hi, my name is</p>
        <h1 className="text-3xl sm:text-6xl font-bold text-[#c3cceb]">Dawid</h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#a4b0d3]">
          I'm a Frontend Developer.
        </h2>
        <p className="py-4 max-w-[700px] text-[#d6d3d1] ">
          I am a beginner frontend developer specializing in building and
          designing responsive web applications
        </p>
        <div className="flex flex-row flex-nowrap my-2">
          <button className="flex items-center my-2 px-6 py-3 text-white group border-2   hover:bg-[#ea580c] hover:border-[#ea580c]">
            View Work
          </button>
          <button className="border-2 text-white px-6  mx-4 rounded-full  text-xl hover:bg-[#ea580c] hover:border-[#ea580c] 	">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};
