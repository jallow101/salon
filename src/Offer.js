import React from "react";
import treat from "./Assets/black.jpg";

const Offer = () => {
  return (
    <div className="snap-center bg-white opacity-85 h-[100vh]">
      <h1 className="font-extrabold text-3xl text-grey-700 mt-5">
        We Offer
      </h1>

      <div className="flex  justify-around items-center p-2 w-full ">

        <div className="flex flex-col-reverse flex-end bg-white w-1/4 h-[60vh] mt-5 bg-braid bg-cover bg-top mr-2 shadow-md hover:shadow-xl hover:shadow-white-500/50">
          <div className="text-purple-200 italic font-semibold text-lg ">
            Hair Braiding
          </div>
        </div>

        <div className="bg-white w-1/4 h-[60vh] mt-5 bg-treatment bg-cover bg-center mr-2 hover:drop-shadow-xl">
          <div className="text-gray-800 italic font-semibold text-lg ">
            <h3>Hair Treatment</h3>
          </div>
        </div>

        <div className="bg-white w-1/4 h-[60vh] mt-5 bg-haircut bg-cover bg-center mr-2 drop-shadow-xl hover:shadow-xl hover:shadow-black-500/50">
          <h3 className="text-yellow-500 italic font-semibold text-lg ">
            Hair Cuts & Stylings
          </h3>
        </div>

        <div className="bg-white w-1/4 h-[60vh] mt-5 bg-color bg-cover bg-top mr-2 hover:shadow-xl hover:shadow-red-500/50">
          <h3 className="text-violet-300 italic font-semibold text-lg ">
            Color Correction
          </h3>
        </div>
      </div>

      <div className="flex justify-center m-2">
        <h6 className="font-light font-serif text-3xl text-grey-100 rounded-full">
          Enjoy the unique experience
        </h6>
      </div>
      <div className="flex  justify-center">
        <h2 className="w-1/4 bg-black my-1 py-1 px-1 text-xl font-semibold text-white rounded-full cursor-pointer">
          Book appoint now
        </h2>
      </div>
    </div>
  );
};

export default Offer;
