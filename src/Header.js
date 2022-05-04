import React from "react";
import image from "./Assets/banner.jpg";

const Header = () => {
  return (
    <header className="flex items-center justify-around fixed top-0 left-0 right-0 z-50 w-screen bg-white opacity-75 ">
      <div className="flex text-black text-lg font-bold w-1/3"> </div>
      <div className="flex text-white font-bold w-1/3">
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-600 relative inline-block text-white">
          <span className="relative text-white font-war sm:text-sm  md:text-2xl">
            Divas Salon
          </span>
        </span>
      </div>
      <div className="">
        <div className="bg-yellow-600  py-1 md:my-2 md:py-2 md:px-3 font-mono sm:text-tiny text-white md:rounded-full cursor-pointer">
          Book appointment
        </div>
      </div>
    </header>
  );
};

export default Header;
