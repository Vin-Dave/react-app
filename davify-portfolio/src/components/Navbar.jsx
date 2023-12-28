import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import Logo from "../icon/logo.svg";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export function Navbar() {
  const [showNav, setshowNav] = useState(false);

  const handleClickNav = () => {
    setshowNav((p) => !p);
  };
  console.log(showNav);
  return (
    <div className="fixed w-full h-[85px]  flex justify-between items-center px-4 bg-[#292f53] text-gray-300">
      <div>
        <img src={Logo} alt="Logo DavyFi " style={{ width: "200px" }} />
      </div>
      {/* Menu-desktop */}
      <ul className="hidden md:flex ">
        <li>Home</li>
        <li>About Me</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      {/* Nav-mobile */}
      <div
        onClick={handleClickNav}
        className="md:hidden z-30 cursor-pointer px-3 text-3xl"
      >
        {showNav ? (
          <FontAwesomeIcon icon={faX} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
      {/* Menu-mobile */}

      <ul
        className={
          showNav
            ? " absolute top-0 left-0 w-full h-screen bg-[#292f53] flex flex-col justify-center items-center "
            : "hidden"
        }
      >
        <li className="py-5 text-3xl">Home</li>
        <li className="py-5 text-3xl">About Me</li>
        <li className="py-5 text-3xl">Skills</li>
        <li className="py-5 text-3xl">Projects</li>
        <li className="py-5 text-3xl">Contact</li>
      </ul>
      {/* Icons */}
      <div className="hidden lg:flex fixed flex-col left-0 top-[40%]">
        <ul>
          <li className=" flex justify-between w-[165px] h-[65px]  items-center ml-[-100px] hover:ml-[-10px]  bg-[#333333] duration-300">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/"
            >
              Github
              <FontAwesomeIcon icon={faGithub} className="text-xl" />
            </a>
          </li>
          <li className="flex justify-between w-[165px] h-[65px]  items-center ml-[-100px] hover:ml-[-10px]  bg-[#333333] duration-300">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/"
            >
              Facebook
              <FontAwesomeIcon icon={faFacebook} className="text-xl" />
            </a>
          </li>
          <li className="flex justify-between w-[165px] h-[65px]  items-center ml-[-100px] hover:ml-[-10px]  bg-[#333333] duration-300">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/"
            >
              LinkedIn
              <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
