import React from "react";

function Service() {
  const data = [
    { icon: "ri-truck-line", title1: "fast ", title2: "delivery" },
    {
      icon: "ri-customer-service-line",
      title1: "greate customer ",
      title2: "service",
    },
    { icon: "ri-plant-line", title1: "original ", title2: "plants" },
    {
      icon: "ri-money-dollar-circle-line",
      title1: "affordiable ",
      title2: "price ",
    },
  ];
  return (
    <div id="service" className="bg-white text-green-950 py-20">
      <div className="container">
        <div className="gap-8 space-y-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((items, index) => {
            return (
              <div
                className="flex flex-col w-full border border-green-950 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300"
                key={index}
              >
                <div className="flex items-center gap-5">
                  <i
                    className={`${items.icon} text-3xl md:text-4xl xl:text-5xl`}
                  ></i>
                  <h2 className="capitalize md:text-lg font-bold">
                    {items.title1}
                    <br />
                    {items.title2}
                  </h2>
                </div>
                <p className="font-Lobster">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  explicabo dolores at.
                </p>
                <div className=""></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Service;
