import React from "react";
import Cart1 from "../../img/cart-1.png";
import Cart2 from "../../img/cart-2.png";
import Cart3 from "../../img/cart-3.png";
import Cart4 from "../../img/cart-4.png";

function Popular() {
  const CartData = [
    {
      cartTitle: "Boster Fern",
      cartIMG: Cart1,
      cartSubTitle: "Nephrolesis exaltata",
    },
    {
      cartTitle: "Rubber Plant",
      cartIMG: Cart2,
      cartSubTitle: "Ficus elastica",
    },
    {
      cartTitle: "Peace Lily",
      cartIMG: Cart3,
      cartSubTitle: "Spathiphyllum wallisii",
    },
    {
      cartTitle: "Desert Rose",
      cartIMG: Cart4,
      cartSubTitle: "Adenium obesum",
    },
  ];
  return (
    <div id="popular" className="bg-green-900 pt-20 pb-10">
      <div>
        <div className="flex flex-col items-center gap-3 text-center mb-40 ">
          <h2 className="text-yellow-500 font-Lobster text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Your Choice Plant
          </h2>
          <p className="max-w-2xl">Follow instruction for more</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-36">
        {CartData.map((value, index) => {
          return (
            <div className="container w-full" key={index}>
              <div className="bg-green-950 p-10 pt-24 rounded-md relative">
                <img
                  src={value.cartIMG}
                  alt="cart img"
                  className="w-56 absolute left-1/2 -top-5 transform -translate-x-1/2 -translate-y-1/2 hover:-top-8 duration-500"
                />
                <p className="italic">{value.cartSubTitle}</p>
                <h3 className="text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold">
                  {value.cartTitle}
                </h3>
                <div className="text-yellow-500 text-xs py-3">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-half-fill"></i>
                  <i className="ri-star-line text-gray-400"></i>
                  <i className="ri-star-line text-gray-400"></i>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xl">$5</p>
                  <button>
                    <i className="ri-shopping-cart-fill bg-yellow-500 px-2 py-1 rounded-sm cursor-pointer"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
