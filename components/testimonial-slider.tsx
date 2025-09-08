"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { testimonialList } from "@/data";

export const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        pagination={{ dynamicBullets: true, clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
      >
        {testimonialList.map(({ text, name, image, position }) => (
          <SwiperSlide key={name}>
            <div className="relative p-8 lg:mt-8.5 before:content-quote">
              <p className="text-center lg:text-left">{text}</p>
              <div className="flex items-center gap-2 mt-5 mb-8">
                <Image
                  src={image}
                  alt={`${name} photo`}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h2 className="font-bold">{name}</h2>
                  <p className="text-sm text-gray">{position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
