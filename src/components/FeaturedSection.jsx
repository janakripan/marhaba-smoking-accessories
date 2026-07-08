"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProductCard from "./ProductCard";

export default function FeaturedSection({ title, description, products }) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  return (
    <section className="w-full flex flex-col py-12 bg-white">
      <div className="w-full max-w-screen-xl mx-auto px-4 flex flex-col items-start mb-8 gap-4">
        <h2 className="font-hanken font-[900] text-[36px] leading-[40px] text-[#0D0D0D]">
          {title}
        </h2>
        {description && (
          <p className="font-hanken font-normal text-[32px] leading-none text-[#333333] align-middle">
            {description}
          </p>
        )}
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
