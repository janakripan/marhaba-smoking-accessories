"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { HERO_SLIDES, HERO_STATS } from "@/constants";

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
          {HERO_SLIDES.map((slide, index) => (
            <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
              <img
                src={slide.image}
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
           <AnimatePresence mode="wait">
             <motion.div 
               key={selectedIndex}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.5 }}
               className="flex flex-col items-start pointer-events-auto mt-20"
             >
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
                   {HERO_SLIDES[selectedIndex].badge}
                 </span>
               </div>

               {/* Heading */}
               <h1 
                 className="font-inter mb-5 text-left font-[700] text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1] text-white tracking-tight"
                 style={{ whiteSpace: 'pre-line' }}
               >
                 {HERO_SLIDES[selectedIndex].heading.line1}
                 <span style={{ color: '#D4A017' }}>{HERO_SLIDES[selectedIndex].heading.highlight}</span>
                 {HERO_SLIDES[selectedIndex].heading.line2}
               </h1>

               {/* Description */}
               <p 
                 className="font-inter mb-10 text-left font-normal text-[15px] lg:text-[17px] leading-[26px] text-[#b3b3b3] w-full max-w-[650px]"
               >
                 {HERO_SLIDES[selectedIndex].description}
               </p>

               {/* Bottom Badge (CTA Button) */}
               <button 
                 className="inline-flex items-center justify-center rounded-[8px] transition-all duration-300 mb-12 cursor-pointer group hover:bg-[#D4A017] hover:shadow-[0_0_20px_rgba(212,160,23,0.4)] hover:-translate-y-1"
                 style={{
                   gap: '12px',
                   padding: '12px 24px',
                   background: '#D4A017',
                   border: '1px solid #D4A017',
                 }}
               >
                 <span className="font-inter font-medium text-[15px] text-black transition-colors duration-300 tracking-wide">
                   {HERO_SLIDES[selectedIndex].cta}
                 </span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                   <line x1="7" y1="17" x2="17" y2="7"></line>
                   <polyline points="7 7 17 7 17 17"></polyline>
                 </svg>
               </button>

               {/* Stat Section */}
               <div className="flex flex-wrap gap-6 lg:gap-10 mt-2 items-center">
                  {HERO_STATS.map((stat, index) => (
                    <React.Fragment key={index}>
                      <div className="flex flex-col text-left">
                         <span className="font-inter font-normal text-[28px] lg:text-[34px] leading-tight text-[#D4A017] mb-1">{stat.value}</span>
                         <span className="font-hanken font-normal text-[10px] lg:text-[11px] tracking-[1.5px] uppercase text-[#888888]">{stat.label}</span>
                      </div>
                      {index < HERO_STATS.length - 1 && (
                        <div style={{ width: '1px', height: '40px', backgroundColor: '#FFFFFF', opacity: 0.15 }}></div>
                      )}
                    </React.Fragment>
                  ))}
               </div>
             </motion.div>
           </AnimatePresence>

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
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className="flex items-center justify-center transition-all p-1"
            aria-label={`Go to slide ${index + 1}`}
          >
            {selectedIndex === index ? (
              <div className="w-2.5 h-2.5 bg-[#D4A017] rounded-full shadow-[0_0_8px_rgba(212,160,23,0.8)]"></div>
            ) : (
              <div className="w-2 h-2 bg-[#D4A017]/50 hover:bg-[#D4A017]/80 rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
