import React from "react";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";

import { BEST_SELLERS_DATA as bestSellersData } from "@/constants";

export default function BestSellersSection() {
  return (
    <section className="w-full flex flex-col py-12 bg-white">
      <div className="w-full max-w-screen-xl mx-auto px-4 flex justify-between items-end mb-8">
        <div className="flex flex-col gap-[16px]">
          <h2 className="font-playfair font-bold text-[36px] leading-[40px] text-black">
            Best sellers
          </h2>
          <p className="font-roboto font-normal text-[18px] leading-[28px] text-[#4B5563]">
            Discover our best-selling perfumes and new makeup drops
          </p>
        </div>
        <button 
          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors mb-2"
          aria-label="View all best sellers"
        >
          <ArrowRight size={20} className="text-black" />
        </button>
      </div>

      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px]">
          {bestSellersData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
