import React from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const FacebookIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full flex flex-col mt-auto bg-[#9c9c9c] text-black">
      {/* Main Footer Content */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Locations Inside & Sign Up */}
        <div className="flex flex-col">
          <h3 className="font-krona text-[13px] uppercase tracking-wider mb-6">LOCATIONS - INSIDE ABU DHABI</h3>
          <ul className="flex flex-col space-y-3 font-acme text-[13px]">
            <li className="hover:text-white transition-colors cursor-pointer uppercase">DEFENSE ROAD MAIN BRANCH</li>
            <li className="hover:text-white transition-colors cursor-pointer uppercase">AL WAHDA MALL</li>
            <li className="hover:text-white transition-colors cursor-pointer uppercase">HAMDAN STREET</li>
            <li className="hover:text-white transition-colors cursor-pointer uppercase">KHALIDIYA</li>
            <li className="hover:text-white transition-colors cursor-pointer uppercase">TOURIST CLUB</li>
            <li className="hover:text-white transition-colors cursor-pointer uppercase">AL ROWDHAT</li>
          </ul>

          <h3 className="font-krona text-[13px] uppercase tracking-wider mt-12 mb-4">SIGN UP</h3>
          <p className="font-acme text-[13px] leading-relaxed mb-6 max-w-[250px]">
            Subscribe to get special offers and new arrivals notifications.
          </p>
          
          <div className="flex items-center border-b-2 border-white/70 pb-2 w-full max-w-[280px]">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-transparent border-none outline-none flex-1 font-acme text-[14px] text-white placeholder:text-white/70"
            />
            <button aria-label="Subscribe" className="text-white hover:text-black transition-colors ml-2">
              <Mail size={18} />
            </button>
          </div>
        </div>

        {/* Column 2: Locations Outside */}
        <div className="flex flex-col">
          <h3 className="font-krona text-[13px] uppercase tracking-wider mb-6">LOCATIONS - OUTSIDE ABU DHABI</h3>
          <ul className="flex flex-col space-y-3 font-acme text-[13px]">
            <li className="hover:text-white transition-colors cursor-pointer uppercase">AL FORSAN MALL</li>
            <li className="hover:text-white transition-colors cursor-pointer uppercase">KHALIFA CITY A</li>
            <li className="hover:text-white transition-colors cursor-pointer uppercase">AL FALAH NEW V4</li>
            <li className="hover:text-white transition-colors cursor-pointer uppercase">AL FALHA OLD V3</li>
            <li className="hover:text-white transition-colors cursor-pointer uppercase">SHAKHBUUT CITY</li>
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div className="flex flex-col">
          <h3 className="font-krona text-[13px] uppercase tracking-wider mb-6">CONTACT US</h3>
          <div className="flex flex-col space-y-4 font-acme text-[13px]">
            <p>AR Arabisk Vape supplies Smoking - Sole<br/>Proprietorship L.L.C.</p>
            <p>Al Nahyan , Abu Dhabi ,</p>
            <p>Email : <a href="mailto:support@vapearabisk.com" className="hover:text-white transition-colors">support@vapearabisk.com</a></p>
            <p>Phone <a href="tel:+971568133272" className="hover:text-white transition-colors">(+971) 568133272</a></p>
            
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-white hover:text-black transition-colors" aria-label="Facebook">
                <FacebookIcon size={18} />
              </a>
              <a href="#" className="text-white hover:text-black transition-colors" aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Column 4: Information */}
        <div className="flex flex-col">
          <h3 className="font-krona text-[13px] uppercase tracking-wider mb-6">INFORMATION</h3>
          <ul className="flex flex-col space-y-3 font-acme text-[13px]">
            <li><Link to="#" className="hover:text-white transition-colors">Search</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Delivery Information</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">KSA Shipping Policy</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Refund policy</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">About Us</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Black Bar */}
      <div className="w-full h-4 bg-black"></div>
    </footer>
  );
}
