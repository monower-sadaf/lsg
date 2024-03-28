"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Grid, Pagination, Navigation, Autoplay } from "swiper/modules";

type props = {
  items: any;
};
const MultiCarousel = ({ items }: props) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  return (
    <>
      <Swiper
        slidesPerView={4}
        loop={items?.length > 4 ? true : false}
        centeredSlides={items?.length > 4 ? true : false}
        spaceBetween={20}
        autoplay={
          items?.length > 4
            ? { delay: 2000, disableOnInteraction: false }
            : false
        }
        pagination={{
          clickable: false,
        }}
        modules={[Autoplay, Pagination, Navigation, Grid]}
        breakpoints={{
          425: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          375: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2.9,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        className="mySwiper h-[35vh] lg:h-[80vh]"
      >
        {items?.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="item bg-slate-50 border rounded-md group w-full">
              <a href={item?.link}>
                <div className="container flex justify-center items-center h-[165px]">
                  <div className="w-[100px]">
                    <img
                      className="h-[100px] group-hover:scale-150 transition-all duration-1000"
                      src={item?.image_url}
                      alt="images"
                    />
                  </div>
                </div>
                <div className="bg-primary flex justify-center items-center h-[70px] rounded-b-md">
                  <h3 className="text-slate-50 group-hover:scale-125 transition-all duration-1000">
                    {item?.title}
                  </h3>
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MultiCarousel;
