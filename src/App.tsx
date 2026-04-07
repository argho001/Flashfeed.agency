/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy load all pages — they only parse/execute when first navigated to
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Work = lazy(() => import('./pages/Work'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Disable browser's scroll restoration so we always start at top
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Branded loading screen matching the navbar logo
const PageLoader = () => (
  <div className="fixed inset-0 z-[45] flex items-center justify-center bg-black">
    <div className="flex flex-col items-center gap-6">
      {/* Logo mark — matches navbar exactly */}
      <div className="relative">
        {/* Outer glow pulse */}
        <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl animate-pulse scale-150" />
        <div className="relative w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)]">
          {/* Lightning bolt SVG matching the Zap icon */}
          <svg className="w-9 h-9 text-black fill-black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
      </div>
      {/* Wordmark */}
      <span className="font-display font-bold text-xl tracking-tighter text-white">FLASHFEED</span>
      {/* Loading dots */}
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-blue-400"
            style={{ animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite` }}
          />
        ))}
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

