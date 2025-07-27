"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { IEditorialImageCarouselProps } from "@/types/types";
import "swiper/css";
import Image from "next/image";

export default function EditorialImageCarousel({
  images,
}: IEditorialImageCarouselProps) {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-[164px] py-6">
      <h2 className="text-center mb-[40px]">Trusted by 80% of the Fast Growing Industries</h2>
      <Swiper
        modules={[Autoplay]}
        // autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={1000}
        spaceBetween={24}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 4 },
        }}
        className="justify-center" // Optional
      >
        {images.map((img, idx) => (
          <SwiperSlide
            key={idx}
            className="!h-[140px] !flex !items-center !justify-center"
          >
            <Image
              src={img.url}
              alt={img.alt ?? `carousel image ${idx + 1}`}
              width={img.width}
              height={img.height}
              quality={100}
              className="object-contain"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
