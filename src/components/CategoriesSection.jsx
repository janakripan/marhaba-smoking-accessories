"use client";

import React from "react";
import { Link } from "react-router-dom";
import { CATEGORY_SECTION_DATA } from "@/constants";

export default function CategoriesSection() {
  return (
    <section
      className="w-full bg-[#f8f8f8] py-14 md:py-20"
      aria-labelledby="categories-heading"
    >
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2
              id="categories-heading"
              className="font-inter font-extrabold text-[28px] md:text-[32px] md:text-[40px] text-[#0D0D0D] tracking-tight"
            >
              Shop by Category
            </h2>
          </div>
        </div>
        
        {/* Static Grid Layout matching the requested shapes (circular) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-12">
          {CATEGORY_SECTION_DATA.map((category, index) => (
            <Link 
              key={index} 
              to={category.link} 
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="relative w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] md:w-[160px] md:h-[160px] rounded-full overflow-hidden mb-5 bg-gray-50 shadow-sm transition-all duration-400 group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] group-hover:-translate-y-2 border-2 border-transparent group-hover:border-[#D4A017]">
                {category.image ? (
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400 text-xs font-hanken">No Image</span>
                  </div>
                )}
                
                {/* Subtle overlay for depth on hover */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full border border-black/5"></div>
              </div>
              
              <span className="text-[#0D0D0D] font-hanken font-[700] text-[15px] md:text-[16px] text-center tracking-wide group-hover:text-[#D4A017] transition-colors duration-300">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
