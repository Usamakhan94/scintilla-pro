"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h5 className="text-h5 leading-none text-primary text-center font-semibold">
          Testimonials
        </h5>
        <h5 className="text-h2 text-center font-semibold leading-tight max-w-2xl mx-auto mb-4">
          {`What They’re Saying?`}
        </h5>
        <Swiper spaceBetween={50} slidesPerView={2}>
          <SwiperSlide>
            <div className="py-20 bg-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-20 bg-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-20 bg-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-20 bg-white"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
