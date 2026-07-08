import React from "react";
import DirhamIcon from "@/custom icons/DirhamIcon";
import { Eye, Droplet, Trash2, Atom, Leaf } from "lucide-react";

export default function ProductCard({ product }) {
  // Extract puffs from category name (e.g., "ARABISK AR 1600 PUFFS 50MG" -> "1600")
  const puffsMatch = product.category.match(/(\d+)\s*PUFFS/i);
  const puffs = puffsMatch ? puffsMatch[1] : "";

  // The background watermark text
  const watermark = puffs || product.brand;

  const nicotine = product.specs?.nicotine || "50 MG";
  const liquid = product.specs?.liquid || "6 ML";
  const battery = product.specs?.battery || "500 MAH";

  const renderSpec = (text) => {
    const match = text.match(/([\d.]+)\s*([A-Za-z]+)/);
    if (match) {
      return (
        <>
          {match[1]}<sup className="text-[7px] ml-[1px]">{match[2]}</sup>
        </>
      );
    }
    return text;
  };

  return (
    <div className="relative group flex flex-col items-center text-center p-0 min-h-[480px] bg-white overflow-hidden cursor-pointer transition-all duration-300 shadow-none hover:shadow-lg border border-transparent">
      {/* Product Image Area */}
      <div className="relative w-full aspect-[4/5] z-10 bg-white flex items-center justify-center p-6">
        
        
        {/* Top Left Puffs & Flavor */}
        <div className="absolute top-4 left-4 flex flex-col items-start z-20">
          <div className="flex items-end text-black font-bold text-[13px] leading-none">
            {puffs} 
            <span className="ml-0.5 text-[7px] uppercase font-bold leading-none mb-[1px]">
              PUFFS
            </span>
          </div>
          <div className="text-black text-[9px] font-medium capitalize mt-1 opacity-80">
            {product.flavor.toLowerCase()}
          </div>
        </div>

       
        {/* Actual Product Image */}
        <img 
          src={product.imageUrl} 
          alt={`${product.brand} ${product.flavor}`}
          loading="lazy"
          className="relative z-10 w-full h-full object-contain scale-[1.15] transition-transform duration-500 group-hover:scale-[1.2]"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>

      {/* Bottom Info - Title stays, only price fades out on hover */}
      <div className="w-full flex flex-col items-center z-10">
        {/* Brand */}
        <div className="font-aboreto uppercase tracking-widest text-center mb-1.5 font-normal text-[12px] leading-[18.7px] text-[#3B3B3B]">
          {product.brand || "MARHABA"}
        </div>
        
        {/* Title */}
        <div className="font-hanken uppercase flex items-start justify-center text-center mb-3 min-h-[36px] font-normal text-[13px] leading-[22.1px] text-black">
          {product.category} - {product.flavor}
        </div>
        
        {/* Dynamic Price / Add to Cart Area */}
        <div className="relative w-full h-[57px] overflow-hidden flex justify-center items-center">
          {/* Price (slides up and fades out on hover) */}
          <div className="absolute inset-0 flex items-center justify-start space-x-2 transition-all duration-300 transform translate-y-0 group-hover:-translate-y-full group-hover:opacity-0 pointer-events-none px-1">
            <div className="font-hanken flex items-center font-bold text-[24px] leading-none text-[#34C759]">
              <DirhamIcon size={18} className="mr-1.5" />
              {product.price.toFixed(2)}
            </div>
            <div className="font-hanken flex items-center line-through mt-1 font-normal text-[12px] leading-[12.87px] text-center text-[#888888]">
              <DirhamIcon size={12} className="mr-0.5" />
              {product.oldPrice.toFixed(2)}AED
            </div>
          </div>

          {/* Buttons (slides up and fades in on hover) */}
          <div className="absolute inset-0 flex items-center justify-center gap-2 lg:gap-[12px] transition-all duration-300 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 pointer-events-auto pt-[5px] px-2 lg:px-[24px] pb-[12px]">
            <button 
              className="font-hanken flex-1 lg:flex-none flex items-center justify-center transition-all hover:brightness-95 lg:w-[83px] h-[40px] gap-[4px] px-2 lg:px-[12px] py-[8px] rounded-[8px] border border-[#121212] bg-[#F1F1F1] font-normal text-[12px] lg:text-[14px] leading-none text-[#121212]"
              style={{ boxShadow: '0px 1px 1px 0px #0000001A, -2px 2px 3px 0px #00000017, -4px 5px 3px 0px #0000000D, -7px 8px 4px 0px #00000003, -10px 13px 5px 0px #00000000' }}
            >
              <span>View</span>
              <Eye className="w-[14px] h-[14px] lg:w-4 lg:h-4" strokeWidth={1.5} />
            </button>
            <button className="font-hanken flex-[2] lg:flex-none flex items-center justify-center transition-all hover:bg-black/90 lg:w-[209px] h-[40px] gap-2 lg:gap-[10px] px-2 lg:px-[12px] py-[8px] rounded-[8px] border border-[#FCCD56] bg-[#121212] font-bold text-[12px] lg:text-[14px] leading-none text-[#FCCD56] whitespace-nowrap">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
