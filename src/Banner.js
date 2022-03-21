import React from "react";

const Banner = () => {
  return (
    <div className="snap-start bg-fixed bg-no-repeat bg-cover bg-center  bg-model-photo pt-15">
      <div className="bg-gray-900 bg-opacity-25 w-full h-[90vh]">
        <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="relative text-white text-3xl ">Yaay Salon</span>
          </span>
        </blockquote>
        

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl text-pink-400 text-center mt-20">
            Welcome to Yaay Salon
          </h2>
          <p className="text-md text-blue-300 text-center">The hands of perfection laced with a twist of heaven</p>
         
        </div>
      </div>
    </div>
  );
};

export default Banner;
