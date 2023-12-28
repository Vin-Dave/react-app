import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Logo from "../public/icon/logo.svg";

import "./App.css";

import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [showNav, setshowNav] = useState(false);

  const handleClickNav = () => {
    setshowNav((p) => !p);
  };
  console.log(showNav);
  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#292f53] text-gray-300">
        <div>
          <img src={Logo} alt="Logo " style={{ width: "200px" }} />
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
        <div className="md:hidden z-30">
          <FontAwesomeIcon
            onClick={handleClickNav}
            className="cursor-pointer px-3"
            icon={faBars}
          />{" "}
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
        <div className="hidden"></div>
      </div>
    </>
  );
}

export default App;
