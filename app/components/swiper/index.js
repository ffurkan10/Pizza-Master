"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Styles from "./styles.module.scss";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper";

SwiperCore.use([Autoplay]);

const SwiperComp = ({ datatop, databottom, title }) => {
  return (
    <div className="container">
      <div className={Styles.swiperContainer}>
        <h3>{title}</h3>
        <Swiper
          loop={true}
          autoplay={{
            delay: 5000, // Örneğin, 5 saniye
            disableOnInteraction: false,
          }}
          speed={500} // Örneğin, 0.5 saniye
          grabCursor
          //   modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={30}
          allowTouchMove={true}
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
          loop={true}
          autoplay={{
            delay: 5000, // Örneğin, 5 saniye
            disableOnInteraction: false,
          }}
          speed={500} // Örneğin, 0.5 saniye
          grabCursor
          //   modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={30}
          allowTouchMove={true}
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
