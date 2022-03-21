import React from "react";
import treat from "./Assets/black.jpg";

const Offer = () => {
  return (
    <div className=" bg-yellow-500 opacity-85 h-[100vh]">
      <h1 className="snap-start font-extrabold text-3xl text-white">
        We Offer
      </h1>

      <div className="flex  justify-around items-center p-2 w-full ">

        <div className="flex flex-col-reverse flex-end bg-white w-1/4 h-[60vh] mt-5 bg-braid bg-cover bg-top mr-2 shadow-md">
          <div className="text-purple-200 italic font-semibold text-lg ">
            Hair Braiding
          </div>
        </div>

        <div className="bg-white w-1/4 h-[60vh] mt-5 bg-treatment bg-cover bg-center mr-2 hover:drop-shadow-xl">
          <div className="text-gray-800 italic font-semibold text-lg ">
            <h3>Hair Treatment</h3>
          </div>
        </div>

        <div className="bg-white w-1/4 h-[60vh] mt-5 bg-haircut bg-cover bg-center mr-2 drop-shadow-xl">
          <h3 className="text-yellow-500 italic font-semibold text-lg ">
            Hair Cuts & Stylings
          </h3>
        </div>

        <div className="bg-white w-1/4 h-[60vh] mt-5 bg-color bg-cover bg-top mr-2">
          <h3 className="text-violet-300 italic font-semibold text-lg ">
            Color Correction
          </h3>
        </div>
      </div>

      <div className="flex justify-center m-2">
        <h6 className="font-semibold font-mono text-3xl text-white rounded-full">
          Enjoy the unique experience
        </h6>
      </div>
      <div className="flex  justify-center">
        <h2 className="w-1/3 bg-black my-2 py-2 px-3 text-2xl font-semibold text-white rounded-full cursor-pointer">
          Book appoint now
        </h2>
      </div>
    </div>
  );
};

export default Offer;
