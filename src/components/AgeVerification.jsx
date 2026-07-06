"use client";

import React, { useState, useEffect } from "react";

export default function AgeVerification() {
  const [showModal, setShowModal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const verified = localStorage.getItem("ageVerified");
    if (!verified) {
      setShowModal(true);
      // Disable scrolling when modal is open
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem("ageVerified", "true");
    setShowModal(false);
    document.body.style.overflow = "unset";
  };

  const handleExit = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "https://www.google.com"; // Fallback if no history
    }
  };

  if (!isMounted || !showModal) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      {/* Modal Box */}
      <div className="bg-[#e5e5e5] w-full max-w-[550px] flex flex-col items-center justify-center py-12 px-8 shadow-2xl text-center">
        
        <h2 className="text-[32px] md:text-[38px] text-[#222] font-laila font-normal mb-2">
          Are you at least 18 years old?
        </h2>
        
        <div className="w-[200px] h-[1px] bg-[#333] mb-6"></div>
        
        <p className="text-[15px] md:text-[16px] text-[#555] font-akatab leading-relaxed mb-10 max-w-[450px]">
          The content of this website cannot be shown unless you verify your age. Please verify that you are over 18 to see this page
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <button 
            onClick={handleVerify}
            className="w-full sm:w-[180px] py-3 bg-[#d49a21] hover:bg-[#b8851c] text-white font-laila font-normal text-[15px] tracking-wider uppercase transition-colors"
          >
            I&apos;M OVER 18
          </button>
          
          <button 
            onClick={handleExit}
            className="w-full sm:w-[180px] py-3 border border-[#d49a21] text-[#d49a21] hover:bg-[#d49a21]/10 font-laila font-normal text-[15px] tracking-wider uppercase transition-colors"
          >
            EXIT
          </button>
        </div>
        
      </div>
    </div>
  );
}
