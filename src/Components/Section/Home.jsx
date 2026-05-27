import React from "react";
import Home_img from "../../img/home.png";

function Home() {
  return (
    <div className="py-20 md:py-28 container relative" id="home">
      <div className="w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute right-0 bottom-0"></div>
      <div className="flex flex-col lg:flex-row items-center gap-5 ">
        <div className="w-full space-y-5 lg:basis-1/2">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold">
            <span className="text-yellow-500">Plant</span> make a<br />
            positive <span className="text-yellow-500">impact</span> on <br />
            your environment
          </h1>
          <p className="text-slate-300 font-Lobster">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            debitis veritatis, quam beatae ratione dicta error amet laudantium
            iste alias voluptatibus autem nam accusamus nisi, laboriosam nobis
            libero consequatur inventore.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4 lg:pt-5 xl:pt-10">
            <button className="bg-yellow-500 border border-yellow-500 px-5 py-3 rounded-md cursor-pointer font-bold hover:opacity-90">
              <span>
                Shop Now <i className="ri-leaf-line"></i>
              </span>
            </button>
            <button className="hover:bg-yellow-500 border border-yellow-500 px-5 py-3 rounded-md cursor-pointer font-bold hover:opacity-90 bg-transparent">
              <span>
                Know More <i className="ri-leaf-line"></i>
              </span>
            </button>
          </div>
          <p className="font-Lobster text-xs text-slate-300">
            you will get 30-days free trial.
          </p>
          <div className="flex items-center gap-5 lg:pt-10">
            <i className="ri-facebook-fill cursor-pointer duration-300 text-slate-300 hover:text-yellow-500"></i>
            <i className="ri-twitter-fill cursor-pointer duration-300 text-slate-300 hover:text-yellow-500"></i>
            <i className="ri-instagram-fill cursor-pointer duration-300 text-slate-300 hover:text-yellow-500"></i>
            <i className="ri-linkedin-fill cursor-pointer duration-300 text-slate-300 hover:text-yellow-500"></i>
          </div>
        </div>
        <div className="w-full relative lg:basis-1/2">
          <img src={Home_img} alt="Plant image" />
          <div className="absolute -top-5 right-0 opacity-30 animate-movingY">
            <i className="ri-leaf-line text-6xl  text-yellow-500"></i>
          </div>
          <div className="absolute bottom-0 left-0 opacity-30 animate-rotating">
            <i className="ri-flower-line text-6xl  text-yellow-500"></i>
          </div>
          <div className="hidden lg:block absolute -top-5 -left-5 opacity-30 animate-scalingUp">
            <i className="ri-plant-line text-6xl  text-yellow-500"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
