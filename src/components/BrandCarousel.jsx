"use client";

import React, { useCallback } from "react";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const brands = [
  { name: "YUTO", src: "/POPULAR BRANDS LOGOS/yuto.png" },
  { name: "MY SHISHA", src: "/POPULAR BRANDS LOGOS/my-shisha.png" },
  { name: "PYNE POD", src: "/POPULAR BRANDS LOGOS/pine-pod.png" },
  { name: "POD SALT", src: "/POPULAR BRANDS LOGOS/pod-salt.png" },
  { name: "VEIIK", src: "/POPULAR BRANDS LOGOS/veiik.png" },
  { name: "HQD", src: "/POPULAR BRANDS LOGOS/hqd.png" },
  { name: "IGET", src: "/POPULAR BRANDS LOGOS/iget.png" },
];

export default function BrandCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      slidesToScroll: 1,
      loop: true,
      dragFree: true,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="w-full flex flex-col py-12 bg-zinc-50/50 group relative">
      <div className="w-full text-center mb-[40px]">
        <h2 className="text-black font-krona font-normal text-[24px] md:text-[30px] leading-[36px] tracking-normal uppercase">
          POPULAR BRANDS
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-[1600px] mx-auto px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-[30px]">
            {/* Duplicate array to ensure enough slides for infinite looping */}
            {[...brands, ...brands, ...brands].map((brand, i) => (
              <div
                key={i}
                className="flex-[0_0_180px] md:flex-[0_0_220px] min-w-0 h-[120px] relative flex items-center justify-center p-6 bg-white border border-gray-100 shadow-sm"
              >
                <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-300">
                  <img
                    src={brand.src}
                    alt={brand.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-contain"
                    sizes="220px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons (visible on hover of the section) */}
        <button
          onClick={scrollPrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hover:bg-gray-50 rounded-full text-gray-500 hover:text-black"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hover:bg-gray-50 rounded-full text-gray-500 hover:text-black"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
