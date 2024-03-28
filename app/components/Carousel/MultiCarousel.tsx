"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

import "./style.css";

// import required modules
import { Pagination, Navigation, Autoplay, FreeMode } from "swiper/modules";

type props = {
  items: any;
};
const MultiCarousel = ({ items }: props) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  return (
    <>
      {items?.length > 0 ? (
        <>
          <Swiper
            slidesPerView={4}
            loop={true}
            grid={{
              rows: 1,
            }}
            spaceBetween={10}
            freeMode={true}
            // centeredSlides={items?.length < 5 ? false : true}

            // autoplay={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: items?.length < 5 ? false : true,
            }}
            navigation={items?.length < 5 ? false : true}
            modules={
              items?.length < 5 ? [FreeMode] : [Autoplay, Navigation, FreeMode]
            }
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              "@2.00": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              "@2.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className=" h-[35vh] lg:h-[80vh] w-[160px]"
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
      ) : (
        <>
          <div className="">
            <div className="flex flex-col lg:flex-row">
              <div
                role="status"
                className="w-full  md:w-[22%]  m-2 lg:m-4 p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
              >
                <div className="flex items-center justify-center h-20  mt-5 mb-2 bg-gray-300 rounded dark:bg-gray-700"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2 mt-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-full mb-2.5"></div>
              </div>

              <div
                role="status"
                className="w-full hidden lg:block  md:w-[22%]  m-2 lg:m-4 p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
              >
                <div className="flex items-center justify-center h-20  mt-5 mb-2 bg-gray-300 rounded dark:bg-gray-700"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2 mt-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-full mb-2.5"></div>
              </div>

              <div
                role="status"
                className="w-full hidden lg:block  md:w-[22%]  m-2 lg:m-4 p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
              >
                <div className="flex items-center justify-center h-20  mt-5 mb-2 bg-gray-300 rounded dark:bg-gray-700"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2 mt-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-full mb-2.5"></div>
              </div>

              <div
                role="status"
                className="w-full hidden lg:block  md:w-[22%]  m-2 lg:m-4 p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
              >
                <div className="flex items-center justify-center h-20  mt-5 mb-2 bg-gray-300 rounded dark:bg-gray-700"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2 mt-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-full mb-2.5"></div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MultiCarousel;
