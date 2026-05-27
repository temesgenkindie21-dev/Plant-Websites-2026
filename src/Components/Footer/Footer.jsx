import React from "react";
import Floral from "../../img/floral-1.png"

function Footer() {
  return (
    <div
      id="footer"
      className="bg-yellow-100 text-green-950 pt-20 pb-10 md:pt-28 relative"
    >
      <div className="container text-white bg-green-900 absolute top-0 left-0 right-0 -translate-y-1/2 ">
        <div className="bg-green-900 px-10 py-5 space-y-5 rounded-md ">
          <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold">
            <span className="text-yellow-500">Subscribe</span> to our newsletter
          </h3>
          <div className="flex flex-col items-center md:flex-row gap-1 ">
            <input
              type="email"
              name=""
              id=""
              className="bg-white text-black w-full px-5 py-3 rounded-md outline-none"
              placeholder="Your email address"
            />
            <button className="flex items-center justify-center gap-1 bg-green-950 px-5 py-3 rounded-md hover:opacity-80 cursor-pointer duration-300 ">
              <span>Subscribe</span>
              <i className="ri-send-plane-2-fill"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-16 mb-10">
        <div className="border-b border-green-500 relative">
          <div className="absolute top-0 transform -translate-y-1/2 left-0 right-0 mx-auto max-w-36">
            <div className="bg-yellow-100 text-lg text-center space-x-2">
              <i className="ri-facebook-fill hover:text-yellow-500 cursor-pointer duration-300"></i>
              <i className="ri-twitter-x-line hover:text-yellow-500 cursor-pointer duration-300 text-base"></i>
              <i className="ri-instagram-line hover:text-yellow-500 cursor-pointer duration-300"></i>
              <i className="ri-linkedin-fill hover:text-yellow-500 cursor-pointer duration-300"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center md:text-start">
        <div className="text-7xl text-center text-green-700 inline-block">
          <i className="ri-leaf-fill"></i>
          <p className="font-Lobster sm:text-2xl">IndorePlants.</p>
        </div>
        <div>
          <p className="mb-5 text-xl font-bold">Quick Link</p>
          <div className="flex flex-col gap-1">
            <a href="#">Plants</a>
            <a href="#">Flowers</a>
            <a href="#">Gerdening</a>
            <a href="#">Seeds</a>
            <a href="">Shiping</a>
          </div>
        </div>
        <div>
          <p className="mb-5 text-xl font-bold">Popular Services</p>
          <div className="flex flex-col gap-1">
            <a href="#">Tree Planting</a>
            <a href="#">Grass Cutting</a>
            <a href="#">Weeds Control</a>
            <a href="#">Project</a>
          </div>
        </div>
        <div>
          <p className="mb-5 text-xl font-bold">Contact Us</p>
          <div className="flex flex-col gap-1">
            <a href="tel:+251 985 908 943">+251 985 908 943</a>
            <a href="mailto:temesgenkindie21@gmail.com">temesgenkindie21@gmail.com</a>
            <br />
            <p>1234 Tailwind Ave, CSS City, AddisAbaba 1000, ETH</p>
          </div>
        </div>
      </div>
        <div className="container ">
            <div className=" opacity-50 bg-yellow-100 text-green-950 text-center mt-10">Copy right &copy; 2026 LightCode. All rights reserved. </div>
        </div>
        <div className="absolute bottom-0 left-0 opacity-20">
            <img src={Floral} alt="flora image" className="w-full lg:w-1/2"/>
        </div>
    </div>
  );
}

export default Footer;
