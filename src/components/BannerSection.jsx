import React from "react";

export default function BannerSection({ imageSrc, altText }) {
  return (
    <section className="w-full bg-white">
      <div className="w-full overflow-hidden group cursor-pointer flex">
        <img 
          src={imageSrc} 
          alt={altText} 
          className="w-full h-auto block transition-transform duration-500 group-hover:scale-105 origin-center"
        />
      </div>
    </section>
  );
}
