import React from "react";
import Review1 from "../../img/review-1.jpg";
import Review2 from "../../img/review-2.jpg";
import Review3 from "../../img/review-3.jpg";
import Review4 from "../../img/review-4.jpg";
import Leaf4 from "../../img/leaf-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Review() {
  const reviewData = [
    {
      img: Review1,
    },
    {
      img: Review2,
    },
    {
      img: Review3,
    },
    {
      img: Review4,
    },
  ];
  return (
    <div className="bg-green-950 lg:h-screen py-20 mb-20 " id="review">
      <div className="relative">
        <div className="absolute top-0 -left-12 opacity-50">
          <img src={Leaf4} alt="leaf image" className="w-40 lg:w-52 xl:w-60 " />
        </div>
        <div className="flex flex-col items-center gap-3 text-center mb-40 ">
          <h2 className="text-yellow-500 font-Lobster text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Customer Review
          </h2>
          <p className="max-w-2xl">Follow instruction for more</p>
        </div>
      </div>

      <div className="container">
        <Swiper
          modules={[Pagination, Autoplay]}
          grabCursor={true}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: {
              spaceBetween: 30,
              slidesPerView: 1,
            },
            720: {
              spaceBetween: 30,
              slidesPerView: 2,
            },
            1024: {
              spaceBetween: 30,
              slidesPerView: 3,
            },
          }}
        >
          {reviewData.map((value, index) => {
            return (
              <SwiperSlide key={index}>
                <div>
                  <div className="mx-auto my-5 py-5 px-[14px] bg-green-900 h-48 ">
                    <p className="text-sm text-gray-300 mb-10 mx-auto">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ducimus officiis nam laudantium impedit, cupiditate itaque
                      ipsum nulla.
                    </p>
                    <div className="flex flex-row  gap-3">
                      <div>
                        <img
                          className="w-12 h-12 rounded-full"
                          src={value.img}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="uppercase text-yellow-500 font-bold">
                          john dio
                        </p>
                        <p className="capitalization text-sm text-gray-300">
                          designer
                        </p>
                      </div>
                      <div className="ml-auto">
                        <i className="ri-double-quotes-r text-yellow-500 text-4xl"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Review;
