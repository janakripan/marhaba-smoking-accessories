import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ProductSection from "@/components/ProductSection";
import BrandCarousel from "@/components/BrandCarousel";
import { productData } from "@/data/products";

export default function Home() {
  const orderedSections = [
    "ARABISK AR 1600 PUFFS 50MG",
    "ARABISK GT 30000 PUFFS 50MG",
    "VAPESBARS GHOST 3500 PUFFS 20MG",
    "MY SHISHA XL 16500 PUFFS 3MG",
    "BECO SOFT MAX 12000 PUFFS 20MG"
  ];

  const orderedSectionsPart2 = [
    "AL FAKHER MEGAMAX 40000 PUFFS 6MG",
    "VOZOL STAR 40000 PUFFS 50MG",
    "AL FAKHER 6O000 PUFFS 6MG",
    "TUGBOAT T12000 PUFFS 50MG",
    "PYNE POD 8500 PUFFS 50MG",
    "HQD SLICK 6000 PUFFS 20&50MG"
  ];

  const getCategoryData = (catName) => {
    const found = productData.find(d => d.category === catName);
    return found || { category: catName, products: [], isPlaceholder: true };
  };

  return (
    <div className="flex flex-col min-h-screen font-acme">
      <Header />
      <main className="flex-grow flex flex-col bg-zinc-50/50">
        <HeroCarousel />
        
        {/* Render Part 1 */}
        <div className="w-full flex flex-col pt-8">
          {orderedSections.map(cat => (
            <ProductSection key={cat} data={getCategoryData(cat)} />
          ))}
        </div>

        {/* Brand Carousel */}
        <BrandCarousel />

        {/* Render Part 2 */}
        <div className="w-full flex flex-col">
          {orderedSectionsPart2.map(cat => (
            <ProductSection key={cat} data={getCategoryData(cat)} />
          ))}
        </div>
      </main>
    </div>
  );
}

