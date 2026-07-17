import React from "react";
import { Sparkles, ArrowDown } from "lucide-react";
import { motion } from "motion/react";

const VIDEO_BG_URL = "https://res.cloudinary.com/wgodrxfg/video/upload/v1784319789/Samurai_looking_down_up_202607171615_1_vleloa.mp4";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen bg-black flex flex-col justify-between overflow-hidden pt-28 md:pt-36 pb-12 px-6 md:px-12 select-none">
      
      {/* Background video - occupying full screen behind elements */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100"
        >
          <source src={VIDEO_BG_URL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Grid container to align content exactly as reference */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start z-20 my-auto pt-6">
        
        {/* Left Column: Exact Typographical Staggered Stack (DIGI TAL KEN SEI) */}
        <div className="lg:col-span-8 flex flex-col justify-start relative">
          
          <div className="relative flex flex-col">
            
            {/* ROW 1: DIGI */}
            <div className="relative">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-display font-extrabold text-7xl sm:text-8xl md:text-[130px] lg:text-[145px] leading-none tracking-tight text-white uppercase"
              >
                DIGI
              </motion.h1>
              
              {/* Under DIGI on the left: Japanese side-label */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.5 }}
                className="absolute left-1 top-[102%] font-jp text-[10px] md:text-xs text-white/80 tracking-widest leading-normal uppercase max-w-[150px]"
              >
                サイバー時代の<br />サムライ道
              </motion.div>
            </div>

            {/* ROW 2: TAL (Shifted right) */}
            <div className="relative flex justify-start pl-16 sm:pl-32 md:pl-48">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="font-display font-extrabold text-7xl sm:text-8xl md:text-[130px] lg:text-[145px] leading-none tracking-tight text-white uppercase -mt-2 sm:-mt-4 md:-mt-6"
              >
                TAL
              </motion.h1>
            </div>

            {/* ROW 3 & 4: KEN SEI (Red colors, aligned with left columns) */}
            <div className="relative flex flex-col -mt-2 sm:-mt-4 md:-mt-8">
              
              {/* KEN */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-display font-extrabold text-7xl sm:text-8xl md:text-[130px] lg:text-[145px] leading-none tracking-tight text-brand-red uppercase"
              >
                KEN
              </motion.h1>

              {/* SEI + Barcode/Description Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 -mt-2 sm:-mt-4 md:-mt-8">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.45 }}
                  className="font-display font-extrabold text-7xl sm:text-8xl md:text-[130px] lg:text-[145px] leading-none tracking-tight text-brand-red uppercase"
                >
                  SEI
                </motion.h1>

                {/* Vertical Barcode element and small description next to KEN/SEI */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex items-start gap-4 max-w-[280px] self-end md:self-center mb-4 md:mb-0 md:mr-12"
                >
                  {/* Barcode/graphic stripes element */}
                  <div className="flex gap-[3px] h-10 items-center opacity-75 shrink-0">
                    <div className="w-[3px] h-8 bg-white"></div>
                    <div className="w-[3px] h-8 bg-white"></div>
                    <div className="w-[1.5px] h-8 bg-white"></div>
                    <div className="w-[1.5px] h-8 bg-white"></div>
                    <div className="w-[2px] h-8 bg-white/40"></div>
                    <div className="w-[5px] h-8 bg-white"></div>
                    <div className="w-[2px] h-8 bg-brand-red"></div>
                    <div className="w-[2px] h-8 bg-brand-red"></div>
                  </div>
                  <p className="font-sans text-[11px] md:text-xs text-white/70 leading-relaxed font-light">
                    A unique NFT collection inspired by the Bushido code and the world of the future.
                  </p>
                </motion.div>
              </div>

            </div>

            {/* Bottom: Unique NFT Collection bullet badge */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-2 mt-8 md:mt-12"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
              </span>
              <span className="font-mono text-xs text-brand-red tracking-[0.25em] uppercase font-semibold">
                Unique NFT Collection
              </span>
            </motion.div>

          </div>
        </div>

        {/* Right Column: Large Japanese 'サムライ' on Top + Exclusivity card */}
        <div className="lg:col-span-4 flex flex-col items-end justify-between lg:h-[450px] mt-12 lg:mt-0 relative">
          
          {/* Top-Right: Giant elegant Japanese "サムライ" */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 0.9, x: 0 }}
            transition={{ duration: 1 }}
            className="hidden lg:block font-jp text-5xl md:text-6xl text-white font-medium tracking-[0.3em] select-none text-right pr-4"
          >
            サムライ
          </motion.div>

          {/* Bottom-Right: Exclusivity Glass Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-[320px] p-8 rounded-2xl glass-panel border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] animate-float-slow self-end translate-y-20 sm:translate-y-24 lg:translate-y-32 translate-x-4 md:translate-x-6 lg:translate-x-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red">
                <Sparkles className="w-5 h-5 animate-spin-slow" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-sm tracking-widest uppercase">
                  Exclusivity
                </h3>
              </div>
            </div>
            <p className="font-sans text-xs text-white/80 leading-relaxed font-light mb-4">
              Only 500 warriors. Not one more. Each digital soul is unique and will never be created again.
            </p>
          </motion.div>

        </div>

      </div>

      {/* Downward scroll indicator */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center z-20 text-white/40 mt-8">
        <span className="font-mono text-[10px] tracking-widest uppercase">
          [ 01 // SCROLL FOR DESTINY ]
        </span>
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 cursor-pointer hover:text-white hover:border-white/30 transition-colors"
          onClick={() => {
            document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </div>

    </section>
  );
}
