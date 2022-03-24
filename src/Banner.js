import React from "react";

const Banner = () => {
  return (
    <div className="snap-start bg-fixed bg-no-repeat bg-cover bg-center  bg-model-photo pt-15">
      <div className="bg-gray-900 bg-opacity-25 w-full h-[90vh]">
        <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="relative text-white text-3xl ">Diva's Salon</span>
          </span>
        </blockquote>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-pink-400 text-center mt-20 mb-4">
            Welcome to Yaay Salon
          </h2>
          <p className="text-lg text-blue-300 text-center">
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block text-white">
              <span className="relative text-white text-3xl ">
                The hands of perfection
              </span>
            </span>

            <span className="before:block before:absolute before:-inset-1 before:-skew-x-12 before:bg-blue-300 relative inline-block text-white">
              <span className="relative text-white text-3xl before:-skew-x-6 ">
               laced with a twist from heaven
              </span>
            </span>

          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
