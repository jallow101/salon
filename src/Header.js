import React from "react";
import image from "./Assets/banner.jpg";

const Header = () => {
  return (
    <header className="flex items-center justify-around fixed top-0 left-0 right-0 z-50 w-full bg-white opacity-75 ">
      <div className="flex text-black text-lg font-bold w-1/3">Menu </div>
      <div className="flex text-white text-lg font-bold w-1/3">
     
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-600 relative inline-block text-white">
          <span className="relative text-white font-light text-2xl ">
           DIVAS Salone
          </span>
        </span>
      </div>
      <div className="">
        <div className="bg-yellow-600 my-2 py-2 px-3 font-mono text-white rounded-full">
          Book appointment
        </div>
      </div>
    </header>
  );
};

export default Header;
