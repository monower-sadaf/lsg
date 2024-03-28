"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import Image from "next/image";
import { Grid, Pagination, Navigation, Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";
import { slider } from "@/v1";

const Slider = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    slider()
      .then((data) => {
        setSliders(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {sliders.length > 1 ? (
        <Swiper
          slidesPerView={1}
          loop={true}
          grid={{
            rows: 1,
          }}
          // spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation, Grid]}
          className=""
        >
          {sliders?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" duration-700 ease-in-out !w-full !h-[25vh] lg:!h-[72vh]">
                <img
                  className=""
                  src={item?.image_url}
                  alt="Slider Image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="w-full h-[18vh] lg:h-[60vh] bg-gray-400 animate-pulse"></div>
      )}
    </>
  );
};

export default Slider;
