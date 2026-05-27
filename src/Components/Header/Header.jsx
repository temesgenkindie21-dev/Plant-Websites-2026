import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import Leaf1 from "../../img/Leaf1.png";
import Leaf2 from "../../img/leaf2.png";

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  return (
    <div
      className={` bg-green-950 fixed top-0 left-0 z-50 w-full `}
      id="#header"
    >
      <div
        className={`container flex items-center justify-between h-16 sm:h-20`}
      >
        <div className="font-Lobster sm:text-2xl text-white">
          <h1 className="">IndorPlants</h1>
        </div>
        <div
          className={` absolute top-0 left-[-100%] min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm flex items-center justify-center font-Jost text-white duration-300 overflow-hidden ${open ? "left-[0]" : "left-100"} lg:left-0 lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}
        >
          <ul className={`flex flex-col lg:flex-row gap-8 font-bold text-lg `}>
            <li
              onClick={() => {
                setOpen(false);
                setActive("home");
              }}
              className={`${open ? "block" : "hidden md:block"} ${active === "home" ? "text-yellow-500" : "text-white"} cursor-pointer`}
            >
              <a href="#home" className="hover:text-yellow-500">
                Home
              </a>
            </li>
            <li
              onClick={() => {
                setOpen(false);
                setActive("about");
              }}
              className={`${open ? "block" : "hidden md:block"} ${active === "about" ? "text-yellow-500" : "text-white"} cursor-pointer`}
            >
              <a href="#about" className="hover:text-yellow-500 md:block">
                About
              </a>
            </li>
            <li
              onClick={() => {
                setOpen(false);
                setActive("popular");
              }}
              className={`${open ? "block" : "hidden md:block"} ${active === "popular" ? "text-yellow-500" : "text-white"} cursor-pointer`}
            >
              <a href="#popular" className="hover:text-yellow-500">
                Popular
              </a>
            </li>
            <li
              onClick={() => {
                setOpen(false);
                setActive("review");
              }}
              className={`${open ? "block" : "hidden md:block"} ${active === "review" ? "text-yellow-500" : "text-white"} cursor-pointer`}
            >
              <a href="#review" className="hover:text-yellow-500">
                Review
              </a>
            </li>
          </ul>
          <div className="absolute bottom-0 -right-10 opacity-90 lg:hidden">
            <img src={Leaf1} alt="" className="w-32" />
          </div>
          <div className="absolute -top-5 left-0 rotate-90 opacity-90 lg:hidden">
            <img src={Leaf2} alt="" className="w-32" />
          </div>
        </div>
        <div className=" absolute top-4 right-4 text-3xl text-white lg:hidden z-50">
          <div
            onClick={() => setOpen(true)}
            className={`${open ? "hidden" : "block"} cursor-pointer`}
          >
            <i className="ri-menu-line"></i>
          </div>
          <div
            onClick={() => setOpen(false)}
            className={`${open ? "block" : "hidden"} cursor-pointer`}
          >
            <i className="ri-close-line"></i>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Header;
