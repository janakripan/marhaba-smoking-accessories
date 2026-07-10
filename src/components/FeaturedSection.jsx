"use client";

import { ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import ProductCard from "./ProductCard";

export default function FeaturedSection({ title, description, products }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  return (
    <section className="w-full flex flex-col py-12 bg-white group/section">
      <div className="w-full max-w-screen-xl mx-auto px-4 flex justify-between items-end mb-8 gap-4">
        <div className="flex flex-col items-start gap-2 lg:gap-4">
          <h2 
            className={`text-[36px] leading-[40px] tracking-normal align-middle text-[#0D0D0D] ${
              title === "Best sellers" 
                ? "font-playfair font-bold" 
                : "font-hanken font-[900]"
            }`}
          >
            {title}
          </h2>
          {description && (
            <p className="font-hanken font-normal text-[16px] md:text-[24px] lg:text-[32px] leading-snug lg:leading-none text-[#333333] align-middle">
              {description}
            </p>
          )}
        </div>
        <button 
          onClick={() => emblaApi && emblaApi.scrollNext()}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 shrink-0 shadow-sm opacity-0 group-hover/section:opacity-100 transition-all duration-300 pointer-events-none group-hover/section:pointer-events-auto"
          aria-label="Scroll next"
        >
          <ArrowRight size={20} className="text-black" />
        </button>
      </div>

      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-[30px] touch-pan-y select-none">
            {products?.map((product, i) => (
              <div 
                key={`${product.id}-${i}`} 
                className="flex-[0_0_280px] sm:flex-[0_0_300px] lg:flex-[0_0_330px] min-w-0"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-12">
        <button className="px-10 py-3 rounded-full border border-black text-black font-hanken text-[16px] font-semibold hover:bg-black hover:text-white transition-colors uppercase tracking-wider">
          View All
        </button>
      </div>
    </section>
  );
}
