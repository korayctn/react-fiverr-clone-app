import React from "react";
import "./InspiringWork.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import data from "../../../public/data/InspiringWork";

export const InspiringWork = () => {
  return (
    <div className="inspiringWork">
      <div className="inspiringWorkHeader">
        <h2>Inspiring work made on Fiverr</h2>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        navigation={true}
        modules={[Navigation]}
      >
        {data.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <Link to="/gig/123">
                <img src={slide.img} alt={slide.by} />
                <div className="inspiringSlideTextContainer">
                  <div className="inspiringSlideImg">
                    <img src={slide.pp} alt={slide.by} />
                  </div>
                  <div className="inspiringSlideText">
                    <h4>{slide.title}</h4>
                    <p>by {slide.by}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
