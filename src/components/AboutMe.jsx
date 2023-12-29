import React from "react";

import Photo from "../img/portfolio.jpg";

export function AboutMe() {
  return (
    <div name="about-me" className="w-full h-screen bg-[#0a192f] text-white">
      <div className="flex flex-col  w-full h-full items-center justify-center ">
        <div className="grid grid-cols-2  max-w-[1000px] w-full ">
          <div className=" sm:text-right pl-4 pb-8 my-5 ">
            <p className="text-4xl  font-bold inline border-b-2 border-[#f17921] ">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid  sm:grid-cols-2 items-center ">
          <img className="w-[80%] rounded-2xl" src={Photo} alt="me" />

          <div>
            <p>
              I started my adventure with frontend development in January 2023,
              and since then I have been constantly consumed by this fascinating
              field of programming. My determination and desire for continuous
              development are immense. I am committed to creating websites that
              not only look attractive, but also provide an exceptional user
              experience. I constantly strive to improve my skills. I'm ready
              for more challenges and I'm looking forward to the opportunity to
              work with you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
