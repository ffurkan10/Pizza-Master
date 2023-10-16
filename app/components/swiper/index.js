"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
import Styles from "./styles.module.scss";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// SwiperCore.use([Autoplay]);

const SwiperComp = ({ datatop, databottom, title }) => {
  return (
    <div className="container">
      <div className={Styles.swiperContainer}>
        <h3>{title}</h3>
        <Swiper
          loop
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          speed={5000}
          grabCursor
          //   modules={[Autoplay]}
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={30}
          allowTouchMove={false}
          className={Styles.swipper}
        >
          {datatop?.map((item) => {
            return (
              <SwiperSlide key={item?.id}>
                <div className={Styles.itemName}>
                  <span>{item.name}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          dir="rtl"
          loop
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          speed={5000}
          grabCursor
          //   modules={[Autoplay]}
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={30}
          allowTouchMove={false}
          className={Styles.swipper}
        >
          {databottom?.map((item) => {
            return (
              <SwiperSlide key={item?.id}>
                <div className={Styles.itemName}>
                  <span>{item.name}</span>
                </div>{" "}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComp;
