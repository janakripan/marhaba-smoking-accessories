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
           <div className="flex flex-col items-start pointer-events-auto">
             {/* Top Badge */}
             <div 
               className="flex items-center justify-center rounded-full mb-6"
               style={{
                 gap: '8px',
                 padding: '8px 24px',
                 background: '#FFFFFF0D',
                 border: '1px solid #D4A01766',
               }}
             >
               <span className="font-hanken font-normal text-[11px] leading-[16.5px] tracking-[2.75px] uppercase text-white">
                 100% GENUINE HOOKAH PRODUCTS & ACCESSORIES
               </span>
             </div>

             {/* Heading */}
             <h1 
               className="font-hanken mb-4 text-left font-[800] text-[40px] md:text-[48px] lg:text-[64px] leading-[1.1] lg:leading-none text-white tracking-normal"
             >
               Experience<br />
               <span style={{
                 background: 'linear-gradient(90deg, #D4A017 0%, #F4D06F 50%, #D4A017 100%)',
                 WebkitBackgroundClip: 'text',
                 WebkitTextFillColor: 'transparent',
                 backgroundClip: 'text',
                 color: 'transparent'
               }}>
                 Marhaba
               </span> Premium<br />
               Vapes &amp; Sheesha<br />
               Hookas
             </h1>

             {/* Description */}
             <p 
               className="font-inter mb-8 lg:mb-10 text-left font-normal text-[15px] lg:text-[18px] leading-[24px] lg:leading-[28px] text-white/70 w-full max-w-[600px] tracking-normal"
             >
               Discover luxury hookahs, authentic flavour's, and premium smoking accessories crafted for unforgettable moments of indulgence and timeless tradition.
             </p>

             {/* Bottom Badge (Button) */}
             <button 
               className="flex items-center justify-center rounded-full transition-colors hover:bg-white/10 mb-[60px] cursor-pointer group"
               style={{
                 gap: '10.47px',
                 padding: '16px 24px',
                 background: '#FFFFFF0D',
                 border: '1px solid #FFFFFF33',
                 backdropFilter: 'blur(12px)',
                 WebkitBackdropFilter: 'blur(12px)'
               }}
             >
               <span className="font-blinker font-normal text-[14px] tracking-[2.4px] uppercase text-[#DDDDDD]">
                 EXPLORE CATEGORIES
               </span>
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DDDDDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                 <circle cx="12" cy="12" r="10"></circle>
                 <polyline points="12 16 16 12 12 8"></polyline>
                 <line x1="8" y1="12" x2="16" y2="12"></line>
               </svg>
             </button>

             {/* Stat Section */}
             <div className="flex flex-wrap gap-4 lg:gap-8 mt-4 items-center">
                <div className="flex flex-col text-left">
                   <span className="font-hanken font-normal text-[30px] leading-[36px] text-[#D4A017]">15K+</span>
                   <span className="font-hanken font-normal text-[11px] leading-[16.5px] tracking-[2.2px] uppercase text-white/50">HAPPY CLIENTS</span>
                </div>
                
                <div style={{ width: '1px', height: '40px', backgroundColor: '#FFFFFF', opacity: 0.2 }}></div>
                
                <div className="flex flex-col text-left">
                   <span className="font-hanken font-normal text-[30px] leading-[36px] text-[#D4A017]">200+</span>
                   <span className="font-hanken font-normal text-[11px] leading-[16.5px] tracking-[2.2px] uppercase text-white/50">PREMIUM PRODUCTS</span>
                </div>

                <div style={{ width: '1px', height: '40px', backgroundColor: '#FFFFFF', opacity: 0.2 }}></div>

                <div className="flex flex-col text-left">
                   <span className="font-hanken font-normal text-[30px] leading-[36px] text-[#D4A017]">12</span>
                   <span className="font-hanken font-normal text-[11px] leading-[16.5px] tracking-[2.2px] uppercase text-white/50">ELITE BRANDS</span>
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
