import React from "react";
import image from "./Assets/banner.jpg"

const Header = () => {
  return (
    <div className=" flex items-center justify-around sticky top-0 bg-red-600 ">
      <div className="flex text-white text-lg font-bold w-1/3">Menu Styles</div>
      <div className="flex text-white text-lg font-bold w-1/3"></div>
      <div className="flex justify-end">
        <div className="bg-yellow-400 my-2 py-2 px-3 font-light text-white rounded-full">
          Book appointment
        </div>
      </div>
    </div>
  );
};

export default Header;
