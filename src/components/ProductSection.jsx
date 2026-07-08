import React from "react";
import ProductCard from "./ProductCard";
import PlaceholderProductCard from "./PlaceholderProductCard";

export default function ProductSection({ data }) {
  // If it's a placeholder section, we simulate 5 dummy products
  const products = data.isPlaceholder ? Array.from({ length: 5 }) : data.products;
  const colCount = products.length === 4 ? 4 : 5;
  const gridClass = colCount === 4 ? "md:grid-cols-4" : "md:grid-cols-5";

  return (
    <section className="w-full flex flex-col py-8">
      <div className="w-full max-w-screen-xl mx-auto px-4 text-left mb-[40px]">
        <h2 className="font-hanken font-[900] text-[36px] leading-[40px] text-[#0D0D0D]">
          {data.category}
        </h2>
      </div>

      <div className="w-full max-w-screen-xl mx-auto px-4">
        {/* Grid with 30px gap */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 ${gridClass} gap-[30px] border border-transparent`}
        >
          {data.isPlaceholder 
            ? products.map((_, i) => <PlaceholderProductCard key={i} index={i} />)
            : products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </div>
    </section>
  );
}
