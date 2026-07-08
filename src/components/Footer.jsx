import React from "react";
import { Link } from "react-router-dom";
import { FOOTER_COMPANY_LINKS } from "@/constants";

const FacebookIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  return (
    <footer 
      className="relative w-full flex justify-center mt-auto bg-black text-white bg-cover bg-center border-t border-white/20"
      style={{ backgroundImage: "url('/footer/footer-bg.jpg')", height: '422px' }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0 pointer-events-none"></div>

      {/* Main Footer Container */}
      <div 
        className="w-full flex flex-col relative z-10"
        style={{
          maxWidth: '1440px',
          height: '422px',
          paddingTop: '48px',
          paddingBottom: '48px',
          paddingLeft: '96px',
          paddingRight: '96px',
          gap: '10px'
        }}
      >
        {/* Inner Container */}
        <div className="flex flex-col w-full" style={{ maxWidth: '1248px', height: '326px', gap: '40px' }}>
          
          {/* Inner Top Container (3 columns) */}
          <div 
            className="flex flex-col lg:flex-row w-full justify-between items-start" 
            style={{ maxWidth: '1248px', height: '260px', gap: '51px' }}
          >
            {/* Column 1: Logo & Description */}
            <div className="flex flex-col items-start w-[280px]">
              <div className="w-[85px] h-[85px] rounded-2xl bg-black border border-gray-800 flex flex-col items-center justify-center mb-[16px] shadow-lg">
                <span className="font-serif text-[40px] leading-none text-[#D4A017] tracking-tighter">M</span>
                <span className="font-serif text-[9px] leading-none text-[#D4A017] mt-1">Marhaba</span>
              </div>
              <p 
                className="font-montserrat text-white"
                style={{
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#FFFFFF'
                }}
              >
                Stay updated with our latest arrivals, exclusive offers, and premium collections.
              </p>
            </div>

            {/* Column 2: Company Links */}
            <div className="flex flex-col items-start w-[200px]">
              <h3 
                className="font-blinker text-white mb-[20px]"
                style={{
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '28px',
                  color: '#FFFFFF'
                }}
              >
                Company
              </h3>
              <ul className="flex flex-col space-y-[12px]">
                {FOOTER_COMPANY_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.link} 
                      className="font-blinker text-white hover:text-[#D4A017] transition-colors"
                      style={{
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: '#FFFFFF'
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Newsletter & Socials */}
            <div className="flex flex-col items-start flex-1 max-w-[500px]">
              <h3 
                className="font-blinker text-white mb-[12px]"
                style={{
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '28px',
                  color: '#FFFFFF'
                }}
              >
                Newsletter
              </h3>
              <p 
                className="font-montserrat text-white mb-[24px]"
                style={{
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#FFFFFF'
                }}
              >
                Stay updated with our latest arrivals and offers.
              </p>
              
              <form className="flex w-full space-x-4 mb-[24px]">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-[#1A1A1A] text-white border border-[#333] rounded-[8px] px-4 py-3 font-montserrat text-[14px] outline-none focus:border-[#D4A017] transition-colors"
                />
                <button 
                  type="button"
                  className="bg-white text-black font-montserrat rounded-[8px] px-8 py-3 hover:bg-gray-200 transition-colors"
                  style={{
                    fontWeight: 500,
                    fontSize: '14px'
                  }}
                >
                  Subscribe
                </button>
              </form>

              <div className="flex items-center space-x-[20px] text-white">
                <a href="#" className="hover:text-white transition-colors"><FacebookIcon size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><InstagramIcon size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><TwitterIcon size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><LinkedinIcon size={20} /></a>
              </div>
            </div>
          </div>

          {/* Bottom Container: Copyright & Payment Methods */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full relative">
            {/* Divider line placed perfectly in the center of the 40px gap */}
            <div className="absolute top-[-20px] left-0 w-full h-[1px] bg-white/20"></div>

            <p 
              className="font-montserrat text-white"
              style={{
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#FFFFFF'
              }}
            >
              © 2026 Marhaba. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span 
                className="font-montserrat text-white mr-2"
                style={{
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#FFFFFF'
                }}
              >
                Payment Method :
              </span>
              
              {/* Fake Badges for Tabby, Tamara, COD */}
              <div className="flex items-center justify-center bg-white rounded border border-gray-300 px-2 py-1 h-[28px] min-w-[50px]">
                <span className="text-[#3EE1B2] font-bold text-[10px] tracking-wide">tabby</span>
              </div>
              <div className="flex items-center justify-center bg-gradient-to-r from-[#FFE5D9] to-[#FFCAD4] rounded border border-gray-300 px-2 py-1 h-[28px] min-w-[50px]">
                <span className="text-black font-bold text-[10px] tracking-wide">tamara</span>
              </div>
              <div className="flex items-center justify-center bg-white rounded border border-gray-300 px-2 py-1 h-[28px] min-w-[50px]">
                <span className="text-red-600 font-bold text-[10px] italic tracking-wide">COD</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
