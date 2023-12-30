import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

export function Experience() {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-white ">
      <div className="w-full h-full max-w-[1000px] mx-auto p-4 flex justify-center flex-col pt-32 sm:pt-0">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#f17921] ">
            Experience
          </p>
          <p className="py-4">What I am Expert In</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <FontAwesomeIcon className="w-32 mx-auto text-4xl" icon={faHtml5} />{" "}
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <FontAwesomeIcon className="w-20 mx-auto text-4xl" icon={faHtml5} />

            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <FontAwesomeIcon className="w-20 mx-auto text-4xl" icon={faHtml5} />{" "}
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <FontAwesomeIcon className="w-20 mx-auto text-4xl" icon={faHtml5} />{" "}
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <FontAwesomeIcon className="w-20 mx-auto text-4xl" icon={faHtml5} />{" "}
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <FontAwesomeIcon className="w-20 mx-auto text-4xl" icon={faHtml5} />{" "}
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <FontAwesomeIcon className="w-20 mx-auto text-4xl" icon={faHtml5} />{" "}
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <FontAwesomeIcon className="w-20 mx-auto text-4xl" icon={faHtml5} />{" "}
            <p className="my-4">TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
}
