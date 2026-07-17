import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If scrolling down and past 80px, hide the navbar. Otherwise, show it.
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 md:py-6 transition-all duration-300 transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - NEXON Style */}
        <div className="flex items-center gap-3 select-none group cursor-pointer">
          <div className="relative w-8 h-8 flex items-center justify-center">
            {/* High-fidelity custom Nexon-style geometric star/cross SVG */}
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full text-white transition-transform duration-700 ease-out group-hover:rotate-90" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="7" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {/* Top Left Prong */}
              <path d="M 38 38 L 18 18 M 18 18 L 38 18 M 18 18 L 18 38" />
              {/* Top Right Prong */}
              <path d="M 62 38 L 82 18 M 82 18 L 62 18 M 82 18 L 82 38" />
              {/* Bottom Left Prong */}
              <path d="M 38 62 L 18 82 M 18 82 L 38 82 M 18 82 L 18 62" />
              {/* Bottom Right Prong */}
              <path d="M 62 62 L 82 82 M 82 82 L 62 82 M 82 82 L 82 62" />
              {/* Core central dot */}
              <circle cx="50" cy="50" r="8" fill="#ff003c" stroke="none" />
            </svg>
          </div>
          <span className="font-display font-extrabold tracking-[0.3em] text-white text-lg transition-colors duration-300 group-hover:text-brand-red">
            NEXON
          </span>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#collection"
            className="px-5 py-2 rounded-full border border-white/20 text-white font-display text-xs font-medium tracking-wider hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-1.5 group"
          >
            EXPLORE COLLECTION
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-5 py-2 rounded-full border border-white/20 text-white font-display text-xs font-medium tracking-wider hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
          >
            <span>MENU</span>
            <span className="flex gap-1">
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span className="w-1 h-1 bg-white rounded-full"></span>
            </span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Drawer Menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
            />
            {/* Drawer content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[300px] max-w-[85vw] glass-panel z-50 p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-12">
                  <span className="font-display font-bold tracking-wider text-white">NAVIGATION</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-white/10 text-white transition-all duration-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <ul className="space-y-6">
                  {["Hero", "Collection Details", "Rarity & Stats", "Exclusivity"].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                        onClick={() => setIsOpen(false)}
                        className="font-display text-xl text-white/60 hover:text-brand-red transition-all duration-300 flex items-center gap-2 group"
                      >
                        <span className="font-mono text-xs text-brand-red">0{index + 1}.</span>
                        <span className="group-hover:translate-x-2 transition-transform duration-300">{item}</span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="font-mono text-[10px] text-white/40 mb-4 uppercase tracking-widest">
                  Connect Wallet
                </p>
                <button className="w-full py-3 bg-brand-red hover:bg-brand-red-dark text-white rounded-lg font-display text-xs font-semibold tracking-wider transition-colors duration-300 flex items-center justify-center gap-2">
                  <span>LAUNCH APP</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
