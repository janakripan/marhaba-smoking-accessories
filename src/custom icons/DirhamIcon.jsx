import React from "react";
import Image from "next/image";

export default function DirhamIcon({ className = "", size = 24 }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <img 
        src="/dirham.svg" 
        alt="Dirham" 
        width={size} 
        height={size} 
        className="object-contain"
      />
    </div>
  );
}
