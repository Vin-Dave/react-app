import React from "react";
import Photo from "../img/portfolio.jpg";

export function AboutMe() {
  return (
    <div name="about" className="w-full h-screen bg-[#1e2b3e] text-white">
      <div className="flex justify-center items-center flex-col w-full h-full">
        <div className="grid-cols-1 gap-7 max-w-[1000px] w-full grid sm:grid-cols-2">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#f17921]">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="grid w-full max-w-[1000px] sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Dawid, nice to meet you.</p>
          </div>
          <div>
            <p>
              I started my adventure with frontend development in January 2023,
              and since then I have been constantly consumed by this fascinating
              field of programming. My determination and desire for continuous
              development are immense. I am committed to creating websites that
              not only look attractive, but also provide an exceptional user
              experience. I constantly strive to improve my skills. I'm ready
              for more challenges
            </p>
            <div className="mt-4">
              <button className="text-white px-4 py-2 rounded-md border-2 hover:bg-[#ea580c] hover:border-[#ea580c]">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
