"use client";

import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Truck, Phone, Mail, ChevronDown, ShoppingBag, X } from "lucide-react";

export default function Header() {
  const [showBanner, setShowBanner] = useState(true);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full flex flex-col font-sans">
      {/* Top Yellow Banner */}
      <div 
        className={`bg-[#ffcc00] text-black text-xs font-bold overflow-hidden whitespace-nowrap flex items-center relative group transition-all duration-500 ease-in-out ${
          showBanner ? "max-h-[40px] py-1 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="animate-marquee flex space-x-8 w-full">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center space-x-1">
              <Truck size={14} className="text-red-600" />
              <span>FREE UAE SHIPPING: ORDERS &gt; AED299 &amp; ABOVE</span>
            </span>
          ))}
        </div>

        <button 
          onClick={() => setShowBanner(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-black/10 hover:bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
          aria-label="Close banner"
        >
          <X size={14} className="text-black" />
        </button>
      </div>

      {/* Middle Contact Bar */}
      <div className="bg-white text-[#333] text-xs py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
          <div className="flex items-center space-x-2">
            <div className="bg-green-500 rounded-full p-1">
              <Phone size={12} className="text-white" />
            </div>
            <span className="font-acme font-normal text-[14px] md:text-[16px] leading-tight tracking-normal align-middle text-[#00CF03]">+971 569 930 801 / +971 568 133 272</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={14} className="text-red-600" />
            <span className="font-acme font-normal text-[12px] leading-tight tracking-normal align-middle text-[#FF0000]">support@vapearabisk.com</span>
          </div>
        </div>
        <div className="flex items-center cursor-pointer font-bold mt-1 md:mt-0">
          AED <ChevronDown size={14} className="ml-1" />
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white py-2 px-4 md:px-8 flex justify-between items-center shadow-sm z-50 relative">
        {/* Mobile Menu Button */}
        <button 
          className="xl:hidden p-2 -ml-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>

        {/* Logo */}
        <Link to="/" className="flex-shrink-0 mx-auto xl:mx-0">
          <img
            src="/logo.jpg"
            alt="Marhaba Logo"
            style={{ width: 80, height: 80 }}
            className="object-contain w-[60px] h-[60px] xl:w-[80px] xl:h-[80px]"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-black flex-1 px-8 font-acme font-normal text-[12px] leading-[20.4px] tracking-[2px] align-middle uppercase">
          <Link to="/" className="hover:text-red-600 transition-colors">HOME</Link>
          <div className="flex items-center cursor-pointer hover:text-red-600 transition-colors">ARABISK <ChevronDown size={12} className="ml-1" /></div>
          <div className="flex items-center cursor-pointer hover:text-red-600 transition-colors">DISPOSABLES <ChevronDown size={12} className="ml-1" /></div>
          <div className="flex items-center cursor-pointer hover:text-red-600 transition-colors">NEW ARRIVALS <ChevronDown size={12} className="ml-1" /></div>
          <Link to="/" className="hover:text-red-600 transition-colors">BEST SELLERS</Link>
          <div className="flex items-center cursor-pointer hover:text-red-600 transition-colors">DISCOUNTS % <ChevronDown size={12} className="ml-1" /></div>
          <div className="flex items-center cursor-pointer hover:text-red-600 transition-colors">LESS NICOTINE <ChevronDown size={12} className="ml-1" /></div>
          <div className="flex items-center cursor-pointer hover:text-red-600 transition-colors">CHOOSE YOUR FLAVORS <ChevronDown size={12} className="ml-1" /></div>
          <div className="flex items-center cursor-pointer hover:text-red-600 transition-colors">30000 PUFFS &amp; MORE <ChevronDown size={12} className="ml-1" /></div>
          <div className="flex items-center cursor-pointer hover:text-red-600 transition-colors">E-LIQUID &amp; SALTNIC <ChevronDown size={12} className="ml-1" /></div>
          <div className="flex items-center cursor-pointer hover:text-red-600 transition-colors">NICOTINE POUCHES <ChevronDown size={12} className="ml-1" /></div>
          <div className="flex items-center cursor-pointer hover:text-red-600 transition-colors">SHISHA MOLASSES <ChevronDown size={12} className="ml-1" /></div>
        </nav>

        {/* Cart Icon */}
        <div className="flex-shrink-0 flex items-center justify-end w-12 xl:w-16">
          <div className="relative cursor-pointer">
            <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
              0
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <nav className="xl:hidden flex flex-col bg-white border-t border-gray-100 font-acme text-[13px] uppercase tracking-[1px] absolute w-full z-40 shadow-lg top-[100%]">
          <Link to="/" className="p-4 border-b border-gray-100 hover:bg-gray-50">HOME</Link>
          <div className="p-4 border-b border-gray-100 hover:bg-gray-50 flex justify-between">ARABISK <ChevronDown size={16} /></div>
          <div className="p-4 border-b border-gray-100 hover:bg-gray-50 flex justify-between">DISPOSABLES <ChevronDown size={16} /></div>
          <div className="p-4 border-b border-gray-100 hover:bg-gray-50 flex justify-between">NEW ARRIVALS <ChevronDown size={16} /></div>
          <Link to="/" className="p-4 border-b border-gray-100 hover:bg-gray-50">BEST SELLERS</Link>
          <div className="p-4 border-b border-gray-100 hover:bg-gray-50 flex justify-between">DISCOUNTS % <ChevronDown size={16} /></div>
          <div className="p-4 border-b border-gray-100 hover:bg-gray-50 flex justify-between">LESS NICOTINE <ChevronDown size={16} /></div>
          <div className="p-4 border-b border-gray-100 hover:bg-gray-50 flex justify-between">CHOOSE YOUR FLAVORS <ChevronDown size={16} /></div>
          <div className="p-4 border-b border-gray-100 hover:bg-gray-50 flex justify-between">30000 PUFFS &amp; MORE <ChevronDown size={16} /></div>
          <div className="p-4 border-b border-gray-100 hover:bg-gray-50 flex justify-between">E-LIQUID &amp; SALTNIC <ChevronDown size={16} /></div>
          <div className="p-4 border-b border-gray-100 hover:bg-gray-50 flex justify-between">NICOTINE POUCHES <ChevronDown size={16} /></div>
          <div className="p-4 border-b border-gray-100 hover:bg-gray-50 flex justify-between">SHISHA MOLASSES <ChevronDown size={16} /></div>
        </nav>
      )}
    </header>
  );
}
