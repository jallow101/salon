import React from "react";
import tools from "./Assets/tool.jpg";

const Shop = () => {
  return (
    <div className="snap-start bg-slate-100 flex justify-center items-center h-[100vh] relative">
      <div className="w-4/5 bg-white rounded-xl h-[50vh] bg-tools bg-contain bg-no-repeat md:bg-right shadow-2xl">
        <div className="flex w-full h-full">
          <div className="flex flex-col justify-center items-center w-3/5 absolute md:relative bottom-1/4 mb-4 md:mb-0 md:bottom-0 h-30 md:h-100 bg-white skew-x-12  ml-10 md:ml-10">
            <div className="shop text-xl md:text-3xl text-black font-serif ">
              Explore the
              <span className="mx-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-sky-500 to-blue-500 relative inline-block text-white">
                <span className="relative text-white text-xl md:text-3xl">Diva's</span>
              </span>
              boutique to buy our best hair products
            </div>
            <button className="rounded-full px-5 py-1 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 text-white align-middle text-center  text-xl md:text-3xl font-semibold mt-5">
              Shop Now
            </button>
          </div>
          <div className="text"></div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
