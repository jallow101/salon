import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="snap-start flex justify-center bg-black width-full opacity-75 h-[30vh]">
      <div className="address text-white font-mono text-xl w-1/3 mt-2">
        Address
      </div>
      <div className="business_hrs text-white font-bold text-xl w-1/3 mt-2">
        Open Hours
        <h6 className="font-semibold underline">Monday - Friday</h6>
        <h5 className="font-extralight">11am : 17:00 pm</h5>
        <h6 className="font-serif underline">Saturday - Sunday</h6>
        <h5 className="font-light">10am : 18:00 pm</h5>
      </div>
      <div className="contact text-white font-mono text-xl w-1/3 mt-2">
        Socials
        <div className="insta">
          <div className="flex justify-center">
            <FaInstagram className="m-2" />
            <FaFacebook className="m-2" />
            <FaTwitter className="m-2" />
          </div>
        </div>
        <div className="email font-semibold underline text-red-400">Email</div>
        <div className="email">atlantadivas@gmail.com</div>
        <div className="text-yellow-400">
          <a className="text-yellow-400" href="tel:689-205-6XX">689-205-6X</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
