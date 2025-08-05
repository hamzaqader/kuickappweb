"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { IEditorialImageCarouselProps } from "@/types/types";
import "swiper/css";
import Image from "next/image";

// Define the interface for type safety
interface ImageItem {
  url: string;
  alt?: string;
  width: number;
  height: number;
}

interface IEditorialImageCarouselProps {
  images: ImageItem[];
}

export default function EditorialImageCarousel({
  images,
}: IEditorialImageCarouselProps) {
  // Fallback if images array is empty
  if (!images || images.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-[164px] py-6">
      <h2 className="text-center mb-[40px]">
        Trusted by 80% of the Fast Growing Industries
      </h2>
      <Swiper
        modules={[Autoplay]} // Register Autoplay module
        autoplay={{
          delay: 2000, // Delay between slides in ms
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        speed={1000} // Transition speed in ms
        spaceBetween={24} // Space between slides
        loop={true} // Enable infinite loop for continuous sliding
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 4 },
        }}
        className="justify-center"
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