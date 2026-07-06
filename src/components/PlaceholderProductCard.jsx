import React from "react";
import { Glasses, Watch, Lightbulb, Box, Crown } from "lucide-react";

export default function PlaceholderProductCard({ index }) {
  const icons = [
    <Box key="1" size={64} strokeWidth={1} />,
    <Glasses key="2" size={64} strokeWidth={1} />,
    <Crown key="3" size={64} strokeWidth={1} />,
    <Watch key="4" size={64} strokeWidth={1} />,
    <Lightbulb key="5" size={64} strokeWidth={1} />
  ];

  return (
    <div className="flex flex-col items-center text-center p-0 min-h-[350px] font-acme transition-colors bg-zinc-50/50">
      {/* Product Image (Gray Box) */}
      <div className="relative w-full aspect-square z-10 bg-[#e5e5e5] flex items-center justify-center text-gray-500 mb-4">
        {icons[index % icons.length]}
      </div>

      {/* Bottom Info */}
      <div className="w-full flex flex-col items-center z-10">
        <div className="text-black font-acme font-bold text-[12px] leading-tight tracking-normal text-center align-middle mb-2">
          Example Product Title
        </div>
        
        <div className="flex items-center justify-center space-x-2">
          <div className="flex items-center text-black font-acme font-bold text-[11px] leading-tight tracking-normal text-center align-middle">
            $19.99
          </div>
          <div className="flex items-center text-[#999999] font-acme font-bold text-[11px] leading-tight tracking-normal text-center align-middle line-through">
            $29.99
          </div>
        </div>
      </div>
    </div>
  );
}
