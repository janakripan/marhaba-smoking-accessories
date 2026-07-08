"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Heart, ShoppingCart, User, X } from "lucide-react";

import { MOBILE_MENU_ITEMS, HEADER_LINKS } from "@/constants";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent text-white pt-8 pb-4 flex justify-center transition-all duration-300">
      <div className="max-w-[1400px] w-full px-6 md:px-12 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button 
          className="xl:hidden p-2 -ml-2 text-white hover:text-gray-300"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>

        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center justify-center">
          {/* Placeholder for the dark circular logo with gold M if logo.jpg doesn't match */}
          <div className="w-14 h-14 rounded-full bg-[#111] border border-gray-700 flex flex-col items-center justify-center overflow-hidden shadow-lg">
            <span className="font-serif text-[26px] leading-none text-[#D4A017] tracking-tighter">M</span>
            <span className="font-serif text-[6px] leading-none text-[#D4A017] mt-0.5">Marhaba</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="font-hanken hidden xl:flex flex-wrap justify-center items-center gap-x-10 gap-y-2 flex-1 px-8 text-white font-normal text-[15px] leading-none tracking-[0.5px]">
          {HEADER_LINKS.map((link) => (
            <Link key={link.name} to={link.link} className="flex items-center cursor-pointer hover:text-[#D4A017] transition-colors group">
              {link.name} <ChevronDown size={14} className="ml-1.5 opacity-70 group-hover:opacity-100" />
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="font-hanken flex items-center text-white shrink-0 font-normal text-[14px] gap-4 h-[35.24px]">
          {/* User Account */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="flex items-center hover:text-[#D4A017] transition-colors">
              <User size={18} className="mr-1.5" strokeWidth={1.5} />
              Register
            </Link>
            <Link to="/" className="hover:text-[#D4A017] transition-colors">
              Sign In
            </Link>
          </div>

          {/* Divider */}
          <div style={{ width: '1px', height: '35.24px', backgroundColor: '#FFFFFF', opacity: 0.5 }}></div>

          {/* Wishlist */}
          <button className="hover:text-[#D4A017] transition-colors">
            <Heart size={22} strokeWidth={1.5} />
          </button>

          {/* Divider */}
          <div style={{ width: '1px', height: '35.24px', backgroundColor: '#FFFFFF', opacity: 0.5 }}></div>

          {/* Cart */}
          <button className="relative hover:text-[#D4A017] transition-colors flex items-center">
            <ShoppingCart size={22} strokeWidth={1.5} />
            {/* Badge */}
            <div className="absolute -top-2 -right-2.5 bg-white text-black text-[10px] font-bold w-[18px] h-[18px] flex items-center justify-center rounded-full border-2 border-transparent">
              0
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Modal (Kept simple) */}
      <div 
        className={`fixed inset-0 z-[100] bg-[#111] text-white flex flex-col xl:hidden h-[100dvh] overflow-hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-800 bg-[#111]">
          <div className="w-10 h-10 rounded-full bg-black border border-gray-700 flex flex-col items-center justify-center">
            <span className="font-serif text-[18px] leading-none text-[#D4A017]">M</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
            <X size={24} className="text-white" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto flex flex-col w-full p-6 space-y-6 text-lg font-medium tracking-wide uppercase">
           {MOBILE_MENU_ITEMS.map((item, index) => (
              <Link key={index} to={item.link} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#D4A017] transition-colors border-b border-gray-800 pb-2">
                 {item.name}
              </Link>
           ))}
        </div>
      </div>
    </header>
  );
}
