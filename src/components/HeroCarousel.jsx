"use client";

import { useState, useEffect, useCallback } from "react";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "/hero/hero-1.webp",
  "/hero/hero-2.webp",
  "/hero/hero-3.webp",
  "/hero/hero-4.webp",
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className="relative w-full overflow-hidden bg-gray-900 group">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div className="flex-[0_0_100%] min-w-0 relative" key={index}>
              <img
                src={src}
                alt={`Hero Slide ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
                className="w-full h-auto object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Pagination Controls */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`flex items-center justify-center transition-all ${
              selectedIndex === index ? "w-6 h-6" : "w-3 h-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {selectedIndex === index ? (
              <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            ) : (
              <div className="w-2 h-2 bg-white/70 hover:bg-white rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
