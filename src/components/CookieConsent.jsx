"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("cookieConsent", "agree");
    setShowBanner(false);
  };

  const handleNotAgree = () => {
    localStorage.setItem("cookieConsent", "not_agree");
    setShowBanner(false);
  };

  if (!isMounted || !showBanner) return null;

  return (
    <div className="sticky bottom-0 w-full bg-white shadow-[0_-5px_15px_rgba(0,0,0,0.1)] z-[990] flex flex-col md:flex-row items-center justify-between px-6 py-4 font-acme transition-all">
      
      {/* Left side text */}
      <div className="flex items-center text-[#333] text-[13px] md:text-[14px] leading-relaxed mb-4 md:mb-0 text-center md:text-left">
        <span>
          This website uses cookies to ensure you get the best experience on our website.{" "}
          <Link to="/privacy-policy" className="font-bold underline ml-1 hover:text-black">
            Privacy Policy
          </Link>
        </span>
      </div>

      {/* Right side actions */}
      <div className="flex items-center space-x-6">
        <button 
          onClick={handleNotAgree}
          className="text-[#333] font-normal text-[13px] md:text-[14px] hover:underline"
        >
          Not agree
        </button>
        
        <button 
          onClick={handleAgree}
          className="bg-black text-white px-8 py-2.5 font-normal text-[13px] md:text-[14px] hover:bg-gray-800 transition-colors"
        >
          Agree
        </button>
      </div>

    </div>
  );
}
