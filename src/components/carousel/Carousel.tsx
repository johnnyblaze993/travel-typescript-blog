import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css";

import styles from "./Carousel.module.scss";

type Destination = {
  id: number;
  photo: string;
  location: string;
};
const destinationImages: Destination[] = [
  {
    id: 1,
    photo:
      "https://images.unsplash.com/photo-1530538095376-a4936b35b5f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXJlbGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    location: "Ireland",
  },
  {
    id: 1,
    photo:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c291dGglMjBBZnJpY2F8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    location: "South Africa",
  },
  {
    id: 1,
    photo:
      "https://images.unsplash.com/photo-1626014903708-4140cb2bf055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d3VoYW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    location: "Japan",
  },
];

const Carousel = () => {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation={true}
        effect={"fade"}
        speed={800}
        slidesPerView={1}
        loop={true}
        className={styles.swiper}
      >
        {destinationImages.map((destination) => {
          return (
            <SwiperSlide className={styles.slide}>
              <img className={styles.photo} src={destination.photo} alt="" />

              <div className={styles.location}>{destination.location}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
