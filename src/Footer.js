import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Map from "./Map";

const Footer = () => {
  return (
    <>
      <Map />
      <div className="snap-start flex items-center justify-center bg-black w-full opacity-75 h-auto pb-5">
        <div className="address text-white font-bold text-xs md:text-xl w-1/3 mt-2">
          Address
          <h6 className="font-semibold underline">Altanta Georgia</h6>
          <h5 className="font-extralight">73 Quad Street</h5>
          <div className="email font-light text-xs m-1 md:text-xl md:hidden">atlantadivas@gmail.com</div>
          <h2 className="font-sans cursor-pointer  text-green-500 text-xs md:text-xl">
            <a href="https://www.google.com/maps/dir/?api=1&destination=33.736916,-84.386389">
              GET DIRECTIONS
            </a>
          </h2>
          <h1 className="font-mono italic">See you</h1>
        </div>
        <div className="business_hrs text-white font-bold text-xs md:text-xl w-1/3 mt-2">
          Open Hours
          <h6 className="font-semibold underline">Mon. - Fri.</h6>
          <h5 className="font-extralight">11am : 17:00 pm</h5>
          <h6 className="font-serif underline">Sat. - Sun.</h6>
          <h5 className="font-light">10am : 18:00 pm</h5>
        </div>
        <div className="contact text-white font-bold text-sm md:text-xl w-1/3 mt-2">
          Socials
          <div className="insta">
            <div className="flex justify-center">
              <FaInstagram className="m-2" />
              <FaFacebook className="m-2" />
              <FaTwitter className="m-2" />
            </div>
          </div>
          <div className="email font-semibold underline text-red-400 hidden md:block">
            Email
          </div>
          <div className="email text-xs md:text-xl hidden md:block">atlantadivas@gmail.com</div>
          <div className="email font-semibold underline text-red-400">
            Phone
          </div>
          <div className="text-yellow-400">
            <a className="text-yellow-400" href="tel:689-205-6XX">
              689-205-6X
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
