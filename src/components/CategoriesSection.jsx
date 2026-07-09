"use client";

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const CATEGORY_SECTION_DATA = [
  {
    name: "New Arrivals",
    subtitle: "Fresh drops, latest releases",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Neon_Open_Sign.jpg",
    link: "/",
    accent: "#10b981",     // emerald
    featured: true,
  },
  {
    name: "On Sale",
    subtitle: "Premium deals & offers",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop",
    link: "/",
    accent: "#f59e0b",     // gold
    featured: false,
  },
  {
    name: "E-Juice",
    subtitle: "Curated liquid flavours",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Electronic_Cigarette_and_USB_Charger_%2814939561277%29_%28retouched%29.jpg",
    link: "/",
    accent: "#3b82f6",     // electric blue
    featured: false,
  },
  {
    name: "SNUS",
    subtitle: "Smokeless, seamless",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Portioned_snus.jpg",
    link: "/",
    accent: "#a78bfa",     // royal purple
    featured: false,
  },
  {
    name: "Pod System",
    subtitle: "Compact. Powerful. Precise.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/IQOS_01.jpg",
    link: "/",
    accent: "#10b981",     // emerald
    featured: false,
  },
];

/* ─── animation variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Featured (large) card ─── */
function FeaturedCard({ category }) {
  return (
    <motion.div variants={itemVariants} className="col-span-2 row-span-2">
      <Link
        to={category.link}
        aria-label={`Browse ${category.name}`}
        className="group relative block h-full min-h-[420px] overflow-hidden rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
      >
        {/* image */}
        <img
          src={category.image}
          alt={category.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
        />

        {/* dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* accent glow on hover */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `radial-gradient(ellipse at 30% 80%, ${category.accent}22 0%, transparent 70%)` }}
        />

        {/* border glow */}
        <div
          className="absolute inset-0 rounded-3xl border border-white/10 transition-all duration-500 group-hover:border-opacity-0"
          style={{ boxShadow: `0 0 0 0px ${category.accent}` }}
        />
        <div
          className="absolute inset-0 rounded-3xl border border-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"
          style={{ boxShadow: `0 0 30px 0px ${category.accent}55, inset 0 0 0 1px ${category.accent}44` }}
        />

        {/* floating accent badge */}
        <div
          className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-widest uppercase backdrop-blur-md"
          style={{
            background: `${category.accent}22`,
            border: `1px solid ${category.accent}55`,
            color: category.accent,
          }}
        >
          <Sparkles size={10} />
          Featured
        </div>

        {/* content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <p
            className="mb-2 text-xs font-semibold tracking-[0.25em] uppercase"
            style={{ color: category.accent }}
          >
            {category.subtitle}
          </p>
          <h3 className="mb-5 font-hanken text-4xl font-black leading-none tracking-tight text-white">
            {category.name}
          </h3>
          {/* CTA */}
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 group-hover:gap-3"
              style={{
                background: `linear-gradient(135deg, ${category.accent}cc, ${category.accent}88)`,
                boxShadow: `0 4px 24px ${category.accent}44`,
              }}
            >
              Explore
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Compact card ─── */
function CompactCard({ category, tall = false }) {
  return (
    <motion.div variants={itemVariants} className={tall ? "row-span-2" : "row-span-1"}>
      <Link
        to={category.link}
        aria-label={`Browse ${category.name}`}
        className={`group relative block w-full overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${tall ? "h-full min-h-[210px]" : "h-[200px]"}`}
      >
        {/* image */}
        <img
          src={category.image}
          alt={category.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-108"
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5" />

        {/* accent hover glow */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `radial-gradient(ellipse at 50% 100%, ${category.accent}33 0%, transparent 65%)` }}
        />

        {/* border glow */}
        <div
          className="absolute inset-0 rounded-2xl border border-white/8 opacity-100 transition-all duration-500 group-hover:opacity-0"
        />
        <div
          className="absolute inset-0 rounded-2xl border border-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"
          style={{ boxShadow: `0 0 20px 0px ${category.accent}44, inset 0 0 0 1px ${category.accent}55` }}
        />

        {/* glass pill — accent tag */}
        <div
          className="absolute left-4 top-4 h-1.5 w-1.5 rounded-full transition-all duration-300 group-hover:scale-125"
          style={{ background: category.accent, boxShadow: `0 0 8px ${category.accent}` }}
        />

        {/* content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p
            className="mb-1 text-[10px] font-medium tracking-[0.2em] uppercase opacity-0 transition-all duration-400 group-hover:opacity-100"
            style={{ color: category.accent }}
          >
            {category.subtitle}
          </p>
          <div className="flex items-end justify-between">
            <h3 className="font-hanken text-[17px] font-black tracking-tight text-white leading-tight">
              {category.name}
            </h3>
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2"
              style={{
                background: `${category.accent}22`,
                border: `1px solid ${category.accent}66`,
              }}
            >
              <ArrowUpRight size={13} style={{ color: category.accent }} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Main Section ─── */
export default function CategoriesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [featured, ...rest] = CATEGORY_SECTION_DATA;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-20"
      aria-labelledby="categories-heading"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      {/* subtle noise texture via SVG filter */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.03] pointer-events-none" aria-hidden="true">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      {/* floating ambient orbs */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/4 blur-[90px]" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-4 md:px-8">

        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-2 text-xs font-semibold tracking-[0.3em] uppercase text-emerald-400/80">
              Collections
            </p>
            <h2
              id="categories-heading"
              className="font-hanken text-4xl font-black leading-tight tracking-tight text-white md:text-5xl"
            >
              Shop by Category
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/40 md:text-right">
            Curated for precision.<br />Crafted for connoisseurs.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gridAutoRows: "minmax(200px, auto)" }}
        >
          {/* Featured — takes 2 cols × 2 rows on large screens */}
          <FeaturedCard category={featured} />

          {/* Remaining 4 as compact cards */}
          {rest.map((cat, i) => (
            <CompactCard key={cat.name} category={cat} tall={false} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
