"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { IEditorialImageCarouselProps } from "@/types/types";
import "swiper/css";
import Image from "next/image";

export default function EditorialImageCarousel({
  images,
}: IEditorialImageCarouselProps) {
  // Fallback if images array is empty
  if (!images || images.length === 0) {
    return <p>No images available</p>;
  }

  // Duplicate images for smooth infinite loop
  const duplicatedImages = [...images, ...images];

  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-[164px] py-6">
      <h1 className="text-center mb-[40px]">
        Trusted by 80% of the Fast Growing Industries
      </h1>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 800,
          disableOnInteraction: false,
        }}
        speed={800}
        spaceBetween={24}
        loop={true}
        slidesPerView={4}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 24 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
          1280: { slidesPerView: 4, spaceBetween: 32 },
          1440: { slidesPerView: 4, spaceBetween: 40 },
          1920: { slidesPerView: 4, spaceBetween: 48 },
        }}
        className="w-full"
      >
        {duplicatedImages.map((img, idx) => (
          <SwiperSlide
            key={idx}
            className="!h-[140px] !flex !items-center !justify-center"
          >
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={img.url}
                alt={img.alt}
                width={img.width}
                height={img.height}
                quality={100}
                className="object-contain max-w-full max-h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}