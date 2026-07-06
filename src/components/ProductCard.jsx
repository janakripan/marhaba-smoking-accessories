import React from "react";
import Image from "next/image";
import DirhamIcon from "@/custom icons/DirhamIcon";
import { Eye, Droplet, Battery, Zap, Atom } from "lucide-react";

export default function ProductCard({ product }) {
  // Extract puffs from category name (e.g., "ARABISK AR 1600 PUFFS 50MG" -> "1600")
  const puffsMatch = product.category.match(/(\d+)\s*PUFFS/i);
  const puffs = puffsMatch ? puffsMatch[1] : "";

  // The background watermark text
  const watermark = puffs || product.brand;

  return (
    <div className="relative group flex flex-col items-center text-center p-0 min-h-[350px] md:min-h-[480px] bg-zinc-50/30 overflow-hidden cursor-pointer font-acme transition-colors border-r border-b border-transparent">
      {/* Product Image (Takes full width, baked-in graphics) */}
      <div className="relative w-full aspect-[4/5] z-10 bg-white">
        <Image 
          src={product.imageUrl} 
          alt={`${product.brand} ${product.flavor}`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>

      {/* Bottom Info - Title stays, only price fades out on hover */}
      <div className="w-full flex flex-col items-center z-10">
        <div className="text-[#3B3B3B] font-acme font-normal text-[11px] leading-[18.7px] tracking-normal text-center align-middle mb-1">
          {product.brand}
        </div>
        <div className="font-normal text-[13px] uppercase line-clamp-2 leading-[22.1px] tracking-wide min-h-[30px]">
          {product.category} - {product.flavor}
        </div>
        
        {/* Dynamic Price / Add to Cart Area */}
        <div className="relative w-full h-[40px] mt-0 overflow-hidden flex justify-center items-center">
          {/* Price (slides up and fades out on hover) */}
          <div className="absolute inset-0 flex items-center justify-center space-x-3 transition-all duration-300 transform translate-y-0 group-hover:-translate-y-full group-hover:opacity-0 pointer-events-none">
            <div className="flex flex-col items-start justify-end">
              <DirhamIcon size={12} className="text-[#3B3B3B] mb-1" />
              <div className="text-[#3B3B3B] font-acme font-normal text-[13px] leading-[12.87px] tracking-normal text-center align-middle line-through">
                {product.oldPrice.toFixed(2)}AED
              </div>
            </div>
            <div className="flex flex-col items-start justify-end">
              <DirhamIcon size={16} className="text-black mb-1" />
              <div className="text-[#FF0000] font-acme font-normal text-[16px] leading-[16px] tracking-normal text-center align-middle">
                {product.price.toFixed(2)}AED
              </div>
            </div>
          </div>

          {/* Add to Cart (slides up and fades in on hover) */}
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 pointer-events-auto">
            <button className="text-black font-bold text-[13px] tracking-widest hover:underline uppercase">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      {/* Hover State Overlays */}
      <div className="absolute inset-0 pointer-events-none z-20 flex flex-col">
        {/* Eye icon appears on middle-left */}
        <div className="absolute top-[45%] left-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white rounded-full p-3 shadow-lg pointer-events-auto hover:bg-gray-100 transition-colors">
            <Eye size={20} className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
