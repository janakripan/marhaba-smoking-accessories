import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import BrandCarousel from "@/components/BrandCarousel";
import BannerSection from "@/components/BannerSection";
import FeaturedSection from "@/components/FeaturedSection";
import CategoriesSection from "@/components/CategoriesSection";
import { T10000_PUFFS_1_DATA, T10000_PUFFS_2_DATA, T16000_PUFFS_DATA, BEST_SELLERS_DATA } from "@/constants";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-acme bg-black">
      <div className="relative flex flex-col h-[900px] w-full">
        <Header />
        <HeroCarousel />
      </div>
      <main className="flex-grow flex flex-col bg-white">
        
        {/* Brand Carousel - Placed immediately after Hero */}
        <BrandCarousel />

        {/* Best Sellers Section */}
        <FeaturedSection 
          title="Best sellers" 
          description="Discover our best-selling perfumes and new makeup drops" 
          products={BEST_SELLERS_DATA} 
        />

        {/* First Banner Section */}
        <BannerSection imageSrc="/hero/banner.png" altText="Banner 1" />

        {/* Featured Section */}
        <FeaturedSection 
          title="Marhaba T10000 PUFFS" 
          description="Explore the latest arrivals and customer favorites." 
          products={T10000_PUFFS_1_DATA} 
        />

        {/* Second Featured Section */}
        <FeaturedSection 
          title="Marhaba T10000 PUFFS" 
          description="Explore the latest arrivals and customer favorites." 
          products={T10000_PUFFS_2_DATA} 
        />

        {/* Second Banner Section */}
        <BannerSection imageSrc="/hero/banneer-2.png" altText="Banner 2" />

        {/* Categories Section */}
        <CategoriesSection />

        {/* T16000 PUFFS Featured Section */}
        <FeaturedSection 
          title="Marhaba T16000 PUFFS" 
          description="Explore the latest arrivals and customer favorites." 
          products={T16000_PUFFS_DATA} 
        />
      </main>
    </div>
  );
}
