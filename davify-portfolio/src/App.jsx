import { useState } from "react";
import Logo from "../public/icon/logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#292f53] text-gray-300">
        <div>
          <img src={Logo} alt="Logo " style={{ width: "200px" }} />
        </div>
      </div>
    </>
  );
}

export default App;
