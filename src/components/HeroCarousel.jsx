"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { HERO_SLIDES as images } from "@/constants";

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
  
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative w-full flex-1 overflow-hidden bg-black group">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, index) => (
            <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
              <img
                src={src}
                alt={`Hero Slide ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Static Overlay Content */}
      <div 
        className="absolute inset-0 flex flex-col z-20 pointer-events-none px-6 pt-[120px] pb-10 lg:pt-[160px] lg:pb-[80px] lg:px-[80px]"
        style={{
          background: 'linear-gradient(269.58deg, rgba(0, 0, 0, 0) 45.62%, #000000 97.91%)',
        }}
      >
         <div 
           className="w-full flex flex-col items-start justify-center h-full mx-auto gap-8 lg:gap-[56px]"
           style={{
             maxWidth: '1440px',
           }}
         >
           <div className="flex flex-col items-start pointer-events-auto mt-20">
             {/* Top Badge */}
             <div 
               className="inline-flex items-center rounded-full mb-6"
               style={{
                 gap: '8px',
                 padding: '6px 20px',
                 background: '#00000066',
                 border: '1px solid #D4A01744',
                 backdropFilter: 'blur(4px)'
               }}
             >
               <span className="font-hanken font-medium text-[10px] md:text-[11px] tracking-[2px] md:tracking-[3px] uppercase text-[#cfcfcf]">
                 100% GENUINE HOOKAH PRODUCTS & ACCESSORIES
               </span>
             </div>

             {/* Heading */}
             <h1 
               className="font-inter mb-5 text-left font-[700] text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1] text-white tracking-tight"
             >
               Enjoy <span style={{ color: '#D4A017' }}>Marhaba</span> Premium<br />
               Vapes &amp; Sheesha
             </h1>

             {/* Description */}
             <p 
               className="font-inter mb-10 text-left font-normal text-[15px] lg:text-[17px] leading-[26px] text-[#b3b3b3] w-full max-w-[650px]"
             >
               Discover luxury hookahs, authentic flavour's, and premium smoking accessories crafted for unforgettable moments of indulgence and timeless tradition.
             </p>

             {/* Bottom Badge (CTA Button) */}
             <button 
               className="inline-flex items-center justify-center rounded-[8px] transition-all duration-300 mb-12 cursor-pointer group hover:bg-[#D4A017] hover:shadow-[0_0_20px_rgba(212,160,23,0.4)] hover:-translate-y-1"
               style={{
                 gap: '12px',
                 padding: '12px 24px',
                 background: 'transparent',
                 border: '1px solid #D4A017',
               }}
             >
               <span className="font-inter font-medium text-[15px] text-[#D4A017] transition-colors duration-300 group-hover:text-shadow-[#D4A017] tracking-wide">
                 Make a Puff
               </span>
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4A017] transition-all duration-300 group-hover:text-shadow-[#D4A017] group-hover:translate-x-1 group-hover:-translate-y-1">
                 <line x1="7" y1="17" x2="17" y2="7"></line>
                 <polyline points="7 7 17 7 17 17"></polyline>
               </svg>
             </button>

             {/* Stat Section */}
             <div className="flex flex-wrap gap-6 lg:gap-10 mt-2 items-center">
                <div className="flex flex-col text-left">
                   <span className="font-inter font-normal text-[28px] lg:text-[34px] leading-tight text-[#D4A017] mb-1">15K+</span>
                   <span className="font-inter font-normal text-[10px] lg:text-[11px] tracking-[1.5px] uppercase text-[#888888]">HAPPY CLIENTS</span>
                </div>
                
                <div style={{ width: '1px', height: '40px', backgroundColor: '#FFFFFF', opacity: 0.15 }}></div>
                
                <div className="flex flex-col text-left">
                   <span className="font-inter font-normal text-[28px] lg:text-[34px] leading-tight text-[#D4A017] mb-1">200+</span>
                   <span className="font-inter font-normal text-[10px] lg:text-[11px] tracking-[1.5px] uppercase text-[#888888]">PREMIUM PRODUCTS</span>
                </div>

                <div style={{ width: '1px', height: '40px', backgroundColor: '#FFFFFF', opacity: 0.15 }}></div>

                <div className="flex flex-col text-left">
                   <span className="font-inter font-normal text-[28px] lg:text-[34px] leading-tight text-[#D4A017] mb-1">12</span>
                   <span className="font-inter font-normal text-[10px] lg:text-[11px] tracking-[1.5px] uppercase text-[#888888]">ELITE BRANDS</span>
                </div>
             </div>
           </div>
         </div>
      </div>

      {/* Carousel Controls */}
      <button 
        onClick={scrollPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-black/20 text-white hover:bg-black/40 transition-colors z-30 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={scrollNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-black/20 text-white hover:bg-black/40 transition-colors z-30 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={24} />
      </button>

      {/* Carousel Pagination Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center space-x-3 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`flex items-center justify-center transition-all ${
              selectedIndex === index ? "w-8 h-8" : "w-3 h-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {selectedIndex === index ? (
              <div className="w-4 h-4 rounded-full border-2 border-[#D4A017] flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#D4A017] rounded-full"></div>
              </div>
            ) : (
              <div className="w-2 h-2 bg-white/50 hover:bg-white rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
