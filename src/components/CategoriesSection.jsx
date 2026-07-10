"use client";

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Package } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import { CATEGORY_SECTION_DATA } from "@/constants";

// ─── Animation variants ───────────────────────────────────────────────────────
const sectionHeaderVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Category Card ─────────────────────────────────────────────────────────────
// Fully self-contained. Handles: missing image, missing subtitle, missing count,
// long names, short names. Works perfectly at any count.
function CategoryCard({ category }) {
  const hasImage = Boolean(category.image);

  return (
    <motion.article variants={cardVariants} className="group">
      <Link
        to={category.link}
        aria-label={`Browse ${category.name}`}
        className="
          relative flex flex-col overflow-hidden rounded-[16px]
          bg-white border border-gray-100
          shadow-[0_2px_8px_rgba(0,0,0,0.06)]
          hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]
          hover:-translate-y-1.5
          transition-all duration-400 ease-out
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]
          cursor-pointer h-full
        "
      >
        {/* ── Image area ── */}
        <div className="relative w-full overflow-hidden bg-gray-50" style={{ aspectRatio: "4/3" }}>
          {hasImage ? (
            <img
              src={category.image}
              alt={category.name}
              loading="lazy"
              className="
                absolute inset-0 w-full h-full object-cover
                transition-transform duration-500 ease-out will-change-transform
                group-hover:scale-[1.06]
              "
            />
          ) : (
            // Graceful fallback when no image is provided
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
              <Package size={36} className="text-gray-300 mb-2" strokeWidth={1.5} />
              <span className="text-xs text-gray-400 font-hanken tracking-wide">No image</span>
            </div>
          )}

          {/* Subtle bottom gradient so the image blends into the card */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

          {/* Product count badge (top-right) — hidden if not available */}
          {category.count != null && (
            <div className="
              absolute top-3 right-3
              bg-white/90 backdrop-blur-sm
              text-[#0D0D0D] font-hanken font-semibold text-[11px]
              px-2.5 py-1 rounded-full
              border border-white/60
              shadow-sm
            ">
              {category.count} items
            </div>
          )}
        </div>

        {/* ── Card body ── */}
        <div className="flex flex-col flex-1 p-5">
          {/* Category name */}
          <h3
            className="
              font-hanken font-[800] text-[17px] leading-tight text-[#0D0D0D]
              mb-1.5 line-clamp-2
            "
          >
            {category.name}
          </h3>

          {/* Subtitle / description */}
          {category.subtitle && (
            <p className="font-hanken text-[13px] text-[#888888] leading-snug line-clamp-2 mb-4 flex-1">
              {category.subtitle}
            </p>
          )}

          {/* CTA row */}
          <div className="mt-auto flex items-center gap-1.5 text-[#D4A017] font-hanken font-semibold text-[13px] tracking-wide group/cta">
            <span className="group-hover:underline underline-offset-2 transition-all duration-200">
              Shop now
            </span>
            <ArrowRight
              size={14}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>

        {/* Hover border accent — gold bottom line */}
        <div
          className="
            absolute inset-x-0 bottom-0 h-[2px] bg-[#D4A017]
            scale-x-0 group-hover:scale-x-100
            transition-transform duration-400 ease-out origin-left
            rounded-b-[16px]
          "
        />
      </Link>
    </motion.article>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function CategoriesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });
  const [isExpanded, setIsExpanded] = useState(false);
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-14 md:py-20"
      aria-labelledby="categories-heading"
    >
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8">

        {/* ── Section header — mirrors FeaturedSection style ── */}
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-start mb-10 md:mb-14 gap-2 lg:gap-4"
        >
          <h2
            id="categories-heading"
            className="font-hanken font-[900] text-[28px] md:text-[32px] lg:text-[36px] leading-tight lg:leading-[40px] text-[#0D0D0D]"
          >
            Shop by Category
          </h2>
          <p className="font-hanken font-normal text-[16px] md:text-[20px] leading-snug text-[#555555]">
            Explore our full range of premium smoking accessories.
          </p>
        </motion.div>

        {/* ── Responsive layout: Carousel vs Grid ── */}
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            <motion.div
              key="carousel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full -mx-4 px-4 sm:mx-0 sm:px-0" // Allow slight bleed on mobile if needed, though padding is handled by container
            >
              <div className="overflow-hidden cursor-grab active:cursor-grabbing pb-8" ref={emblaRef}>
                <div className="flex gap-[20px] lg:gap-[30px] touch-pan-y select-none items-stretch">
                  {CATEGORY_SECTION_DATA.map((category) => (
                    <div 
                      key={category.name}
                      className="flex-[0_0_260px] sm:flex-[0_0_280px] lg:flex-[0_0_300px] min-w-0"
                    >
                      <CategoryCard category={category} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="
                grid gap-5
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
              "
              style={{
                gridAutoRows: "1fr",
              }}
            >
              {CATEGORY_SECTION_DATA.map((category) => (
                <div key={category.name} className="min-w-0">
                  <CategoryCard category={category} />
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Toggle button ── */}
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full flex justify-center mt-8 lg:mt-12"
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="
              px-10 py-3 rounded-full border border-black text-black
              font-hanken text-[16px] font-semibold
              hover:bg-black hover:text-white
              transition-colors duration-300
              uppercase tracking-wider
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]
            "
          >
            {isExpanded ? "Show Less" : "View All Categories"}
          </button>
        </motion.div>

      </div>
    </section>
  );
}
