import React from "react";

export default function BannerSection({ imageSrc, altText }) {
  return (
    <section className="w-full py-8 bg-white">
      <div className="w-full max-w-[1434px] h-[637px] mx-auto overflow-hidden group cursor-pointer">
        <img 
          src={imageSrc} 
          alt={altText} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </section>
  );
}
