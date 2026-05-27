import React from "react";
import Plant1 from "../../img/plant-1.png";
import Plant2 from "../../img/plant-2.png";
import Leaf3 from "../../img/leaf-3.png";

function About() {
  const title = [
    {
      img: Plant1,
      dataTit1le1: "Make your",
      dataTit1le2: "organic",
      dataTit1le3: "garden",
      class: "lg:flex-row",
    },
    {
      img: Plant2,
      dataTit1le1: "Come with us",
      dataTit1le2: "grow up",
      dataTit1le3: "your plant",
      class: "lg:flex-row-reverse",
    },
  ];
  return (
    <div className="py-20" id="about">
      <div className="overflow-hidden relative ">
        <div className="absolute top-0 -right-12 opacity-50">
            <img src={Leaf3} alt="leaf image" className="w-40 lg:w-52 xl:w-60" />
        </div>
        <div className="flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
          <h2 className="text-yellow-500 font-Lobster text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            About Us
          </h2>
          <p className="max-w-2xl">Follow instruction for more</p>
        </div>
        {title.map((value, index) => {
          return (
            <div className="container space-y-10 xl:space-y-0" key={index}>
              <div
                className={`flex items-center gap-5 flex-col ${value.class} `}
              >
                <div className="w-full lg:w-1/2 ">
                  <img
                    src={value.img}
                    alt=""
                    className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto hover:-translate-y-1"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="space-y-5">
                    <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
                      {value.dataTit1le1}{" "}
                      <span className="text-yellow-500">
                        {value.dataTit1le2}
                      </span>
                      <br />
                      {value.dataTit1le3}
                    </h3>
                    <p className="font-Lobster text-slate-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis neque, quasi aspernatur ipsam minima error, aut,
                      architecto officia recusandae sunt ullam a dicta aliquid
                      perferendis ratione nemo! Esse, illum placeat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
