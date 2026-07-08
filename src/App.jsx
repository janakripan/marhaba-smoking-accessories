import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import SmoothScroll from '@/components/SmoothScroll';
import Footer from '@/components/Footer';
import AgeVerification from '@/components/AgeVerification';
import CookieConsent from '@/components/CookieConsent';
import Home from '@/app/page';

export default function App() {
  return (
    <Fragment>
      <AgeVerification />
      <SmoothScroll />
      <div className="flex-1 flex flex-col">
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
      <CookieConsent />
      <Footer />
    </Fragment>
  );
}
