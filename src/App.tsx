/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import StatsSection from "./components/StatsSection";
import { ArrowUpRight, Github, Twitter, MessageSquare, Disc, Globe } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-red selection:text-white font-sans scroll-smooth">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section Component */}
      <HeroSection />

      {/* Features Section Component (White Rounded Panel) */}
      <FeaturesSection />

      {/* Stats Section Component */}
      <StatsSection />

      {/* Footer */}
      <footer className="bg-black py-12 md:py-20 border-t border-white/5 px-6 md:px-12 select-none">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-white/50">
          
          {/* Left: Nexon Brand copyright & Japanese subtitle */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3 select-none group cursor-pointer">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <svg 
                  viewBox="0 0 100 100" 
                  className="w-full h-full text-white transition-transform duration-700 ease-out group-hover:rotate-90" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="8" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M 38 38 L 18 18 M 18 18 L 38 18 M 18 18 L 18 38" />
                  <path d="M 62 38 L 82 18 M 82 18 L 62 18 M 82 18 L 82 38" />
                  <path d="M 38 62 L 18 82 M 18 82 L 38 82 M 18 82 L 18 62" />
                  <path d="M 62 62 L 82 82 M 82 82 L 62 82 M 82 82 L 82 62" />
                  <circle cx="50" cy="50" r="8" fill="#ff003c" stroke="none" />
                </svg>
              </div>
              <span className="font-display font-extrabold tracking-[0.3em] text-white text-base transition-colors duration-300 group-hover:text-brand-red">
                NEXON
              </span>
            </div>
            <p className="font-jp text-[10px] tracking-widest text-white/40 mt-1 uppercase">
              サイバー時代のサムライ道 // WAY OF THE CYBER SHOGUN
            </p>
          </div>

          {/* Center: Social links with glowing custom circles */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              title="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              title="Discord"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              title="Global"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Disclaimer and legal links */}
          <div className="flex flex-col items-center md:items-end gap-1.5 text-right font-mono text-[10px] tracking-wider uppercase">
            <span>© 2026 DIGITAL KENSEI. ALL RIGHTS RESERVED.</span>
            <div className="flex gap-4 text-white/30">
              <a href="#" className="hover:text-white transition-colors">TERMS OF USE</a>
              <span className="text-white/10">•</span>
              <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
