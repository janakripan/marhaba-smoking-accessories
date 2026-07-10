"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Heart, ShoppingBasket, CircleUser, X } from "lucide-react";

import { MOBILE_MENU_ITEMS, HEADER_LINKS } from "@/constants";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  // Handle smart scroll behavior and theme toggling
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Theme toggling (past 1/3 of viewport height)
      if (currentScrollY > window.innerHeight / 3) {
        setIsScrolledPastHero(true);
      } else {
        setIsScrolledPastHero(false);
      }
      
      // Show header if scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } 
      // Hide header if scrolling down and past the threshold
      else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 pt-8 pb-4 flex justify-center transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolledPastHero ? 'text-black shadow-sm' : 'text-white'}`}
      style={{
        backdropFilter: isScrolledPastHero ? 'none' : 'blur(12px)',
        WebkitBackdropFilter: isScrolledPastHero ? 'none' : 'blur(12px)',
        background: isScrolledPastHero ? '#FFFFFF' : '#0000008C',
        borderBottom: isScrolledPastHero ? '1px solid #EAEAEA' : '1px solid #7A7A7A',
      }}
    >
      <div className="max-w-[1400px] w-full px-6 md:px-12 flex justify-between items-center gap-6">
        {/* Mobile Menu Button */}
        <button 
          className={`xl:hidden p-2 -ml-2 hover:text-[#D4A017] transition-colors ${isScrolledPastHero ? 'text-black' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>

        {/* Logo and Separator */}
        <div className="flex items-center gap-6 xl:gap-8 flex-shrink-0">
          <Link to="/" className="flex items-center justify-center">
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden transition-transform hover:scale-105 border border-[#D4A017]/30">
              <img src="/logo.jpg" alt="Marhaba Logo" className="w-full h-full object-cover" />
            </div>
          </Link>
          <div className={`hidden xl:block w-[1px] h-[60px] transition-colors duration-300 ${isScrolledPastHero ? 'bg-black/10' : 'bg-white/20'}`}></div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="font-hanken hidden xl:flex flex-wrap items-center gap-x-2 gap-y-3 flex-1 max-w-[800px] font-normal text-[11px] leading-none tracking-[0.5px]">
          {HEADER_LINKS.map((link) => (
            <Link 
              key={link.name} 
              to={link.link} 
              className={`flex items-center px-4 py-2 rounded-full border cursor-pointer hover:border-[#D4A017] hover:text-[#D4A017] transition-colors group bg-transparent ${isScrolledPastHero ? 'border-black/10' : 'border-white/20'}`}
            >
              {link.name} <ChevronDown size={12} className="ml-1.5 opacity-70 group-hover:opacity-100" />
            </Link>
          ))}
        </nav>

        {/* Right Actions and Separator */}
        <div className="flex items-center shrink-0 h-[60px] gap-6 xl:gap-8">
          <div className={`hidden xl:block w-[1px] h-full transition-colors duration-300 ${isScrolledPastHero ? 'bg-black/10' : 'bg-white/20'}`}></div>
          
          <div className="flex items-center gap-4 xl:gap-5">
            {/* Wishlist */}
            <button className="hover:text-[#D4A017] transition-colors">
              <Heart size={20} strokeWidth={1.5} />
            </button>

            <div className={`w-[1px] h-[20px] mx-1 transition-colors duration-300 ${isScrolledPastHero ? 'bg-black/10' : 'bg-white/20'}`}></div>

            {/* Cart */}
            <button className="relative hover:text-[#D4A017] transition-colors flex items-center">
              <ShoppingBasket size={20} strokeWidth={1.5} />
              {/* Badge */}
              <div className="absolute -top-2 -right-2 bg-white text-black text-[10px] font-bold w-[16px] h-[16px] flex items-center justify-center rounded-full">
                1
              </div>
            </button>

            <div className="hidden md:block w-[1px] h-[20px] bg-white/20 mx-1"></div>

            {/* User Account */}
            <Link to="/" className="hidden md:flex items-center text-[#D4A017] hover:text-white transition-colors gap-2">
              <CircleUser size={20} strokeWidth={1.5} />
              <span className="text-[13px] font-normal font-hanken tracking-wide">Log in</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      <div 
        className={`fixed inset-0 z-[100] bg-[#1c1c1e] text-white flex flex-col xl:hidden h-[100dvh] overflow-hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-800 bg-[#111]">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-[#D4A017]/30">
            <img src="/logo.jpg" alt="Marhaba Logo" className="w-full h-full object-cover" />
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
            <X size={24} className="text-white" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 pt-8 sm:pt-10 overflow-x-hidden">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-8 sm:gap-y-10 gap-x-2 sm:gap-x-4">
             {MOBILE_MENU_ITEMS.map((item, index) => (
                <Link key={index} to={item.link} onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col items-center group cursor-pointer gap-2 sm:gap-3">
                   <div className="w-full max-w-[75px] sm:max-w-[100px] aspect-square rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#D4A017] transition-all flex items-center justify-center bg-[#2a2a2c] shadow-lg relative">
                     <img src={item.image} alt={item.name} className="w-[80%] h-[80%] object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-110" />
                   </div>
                   <span className="text-center text-[11px] sm:text-[13px] font-bold tracking-wide text-white transition-colors group-hover:text-[#D4A017] capitalize leading-tight">
                     {item.name.toLowerCase()}
                   </span>
                </Link>
             ))}
          </div>
        </div>
        
        {/* Mobile Login / Register Footer */}
        <div className="p-4 border-t border-gray-800 bg-[#111] flex flex-col gap-3">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 bg-[#D4A017] hover:bg-[#b8851c] text-white text-center font-bold text-[14px] tracking-wide rounded-[8px] transition-colors shadow-lg">
            Sign In
          </Link>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 border border-gray-600 hover:bg-gray-800 text-white text-center font-bold text-[14px] tracking-wide rounded-[8px] transition-colors">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
