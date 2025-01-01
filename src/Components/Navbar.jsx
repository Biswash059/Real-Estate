import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [Nav, setNav] = useState(false);

  useEffect(()=>{
    if(Nav){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
    return()=>{
      document.body.style.overflow = 'auto'
    };
  },[Nav])

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-7 mx-auto text-white">
            <a href="#Header" className="cursor-pointer hover:text-gray-400">
              Home
            </a>

            <a href="#About" className="cursor-pointer hover:text-gray-400">
              About
            </a>

            <a href="#Projects" className="cursor-pointer hover:text-gray-400">
              Projects
            </a>

            <a
              href="#Testimonials"className="cursor-pointer hover:text-gray-400">
              Testimonials
            </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>
        <div className="flex justify-end">
          <img
            src={assets.menu_icon}
            onClick={() => setNav(true)}
            className="md:hidden w-7 cursor-pointer"
            alt=""
          />
        </div>
      </div>
      {/* ----------mobile screen--------- */}
      <div
        className={`md:hidden ${
          Nav ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden text-white transition-all `}
        style={{ backgroundImage: "url('/src/assets/header_img.png')" }}
      >
        <div className="flex justify-end p-6">
          <img
            src={assets.cross_icon}
            onClick={() => setNav(false)}
            className="w-6 bg-white rounded-full overflow-hidden cursor-pointer transition-all"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <li>
            <a
              onClick={() => setNav(false)}
              href="#Header"
              className="px-4 py-2 rounded-full inline-block"
            >
              Header
            </a>
          </li>
          <li>
            <a
              onClick={() => setNav(false)}
              href="#Header"
              className="px-4 py-2 rounded-full inline-block"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => setNav(false)}
              href="#Header"
              className="px-4 py-2 rounded-full inline-block"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => setNav(false)}
              href="#Header"
              className="px-4 py-2 rounded-full inline-block"
            >
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
