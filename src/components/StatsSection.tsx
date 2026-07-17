import React, { useState } from "react";
import { TrendingUp, Award, Layers, Users, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

// Standard high-quality dark-themed profile images for our avatar pile
const AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
];

const SECONDARY_AVATARS = [
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
];

export default function StatsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="rarity-&-stats" className="relative bg-black text-white py-24 md:py-36 px-6 md:px-12 select-none">
      
      {/* Background neon elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Header Title Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24 pb-8 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
              <span className="font-mono text-xs tracking-[0.2em] text-white/50 uppercase">COLLECTION METRICS</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white">
              Stats defining <br /> the NFT collection
            </h2>
          </div>
          <div className="font-mono text-xs text-white/40 tracking-wider md:text-right uppercase">
            [ // Our successes ]
          </div>
        </div>

        {/* 4-Column Stat Bento Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Trade Volume with active custom SVG sparkline */}
          <motion.div
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative p-8 rounded-3xl glass-panel border border-white/10 hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between min-h-[240px] overflow-hidden"
            whileHover={{ y: -6 }}
          >
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
            
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs text-white/50 uppercase tracking-widest font-light">
                Trade Volume (ETH)
              </span>
              <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-brand-red">
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Sparkline Visual - Interactive wave */}
            <div className="h-16 w-full relative my-4 flex items-end">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ff003c" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#ff003c" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Area under the line */}
                <path
                  d="M 0 35 Q 20 28, 40 32 T 80 12 T 100 5 L 100 40 L 0 40 Z"
                  fill="url(#chartGradient)"
                />
                {/* Line itself */}
                <motion.path
                  d="M 0 35 Q 20 28, 40 32 T 80 12 T 100 5"
                  fill="none"
                  stroke="#ff003c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                {/* Flashing point */}
                <circle cx="100" cy="5" r="3" fill="#ff003c" className="animate-pulse" />
                <circle cx="100" cy="5" r="6" fill="none" stroke="#ff003c" strokeWidth="1" className="animate-ping" />
              </svg>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight">
                180+
              </span>
              <span className="font-mono text-xs text-emerald-400 font-medium">
                +14.2%
              </span>
            </div>
          </motion.div>

          {/* Card 2: Rarity System Tiers list */}
          <motion.div
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative p-8 rounded-3xl glass-panel border border-white/10 hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between min-h-[240px]"
            whileHover={{ y: -6 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs text-white/50 uppercase tracking-widest font-light">
                Rarity System
              </span>
              <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-brand-red">
                <Layers className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Rarity List Pills Stack */}
            <div className="flex flex-col gap-2 my-4 w-full">
              {/* Rare */}
              <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-[11px] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  <span>Rare</span>
                </div>
                <span className="text-white/45">65% Pool</span>
              </div>
              {/* Epic */}
              <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-[11px] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                  <span>Epic</span>
                </div>
                <span className="text-white/45">30% Pool</span>
              </div>
              {/* Mythic */}
              <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-brand-red/10 border border-brand-red/20 text-[11px] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping absolute"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red relative"></span>
                  <span className="text-brand-red font-semibold">Mythic</span>
                </div>
                <span className="text-brand-red text-[9px] uppercase tracking-wider font-extrabold animate-pulse">
                  NEW TODAY
                </span>
              </div>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight">
                3 Tiers
              </span>
            </div>
          </motion.div>

          {/* Card 3: Total Warriors with overlapping Avatar Pile */}
          <motion.div
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative p-8 rounded-3xl glass-panel border border-white/10 hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between min-h-[240px]"
            whileHover={{ y: -6 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs text-white/50 uppercase tracking-widest font-light">
                Total Warriors
              </span>
              <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-brand-red">
                <Award className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Avatar Pile Section */}
            <div className="my-6">
              <div className="flex items-center -space-x-3 overflow-hidden">
                {AVATARS.map((avatar, i) => (
                  <img
                    key={i}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-black object-cover hover:scale-110 hover:z-30 transition-transform duration-200"
                    src={avatar}
                    alt="Active warrior avatar"
                    referrerPolicy="no-referrer"
                  />
                ))}
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-red ring-2 ring-black font-mono text-[10px] font-bold text-white uppercase tracking-wider">
                  +1.2k
                </div>
              </div>
              <p className="font-sans text-[10px] text-white/40 uppercase tracking-widest mt-3">
                Live mint queue active
              </p>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight">
                500+
              </span>
              <span className="font-mono text-xs text-white/40 uppercase">LIMIT</span>
            </div>
          </motion.div>

          {/* Card 4: Unique Owners with Avatar Pile */}
          <motion.div
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative p-8 rounded-3xl glass-panel border border-white/10 hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between min-h-[240px]"
            whileHover={{ y: -6 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs text-white/50 uppercase tracking-widest font-light">
                Unique Owners
              </span>
              <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-brand-red">
                <Users className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Alternate Avatar Pile Section */}
            <div className="my-6">
              <div className="flex items-center -space-x-3 overflow-hidden">
                {SECONDARY_AVATARS.map((avatar, i) => (
                  <img
                    key={i}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-black object-cover hover:scale-110 hover:z-30 transition-transform duration-200"
                    src={avatar}
                    alt="Unique owner avatar"
                    referrerPolicy="no-referrer"
                  />
                ))}
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 ring-2 ring-black font-mono text-[10px] font-bold text-white/70 uppercase tracking-wider">
                  85%
                </div>
              </div>
              <p className="font-sans text-[10px] text-white/40 uppercase tracking-widest mt-3">
                Verified holders index
              </p>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight">
                200+
              </span>
              <span className="font-mono text-xs text-emerald-400 font-medium">98.2%</span>
            </div>
          </motion.div>

        </div>

        {/* Footer info banner */}
        <div className="mt-20 p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" />
            <p className="font-sans text-xs text-white/70 leading-relaxed font-light">
              All statistical records are synchronized with real-time smart contract state logs.
            </p>
          </div>
          <button 
            onClick={() => alert("Minting contract will launch soon! Stay tuned.")}
            className="px-6 py-2.5 bg-brand-red hover:bg-brand-red-dark text-white rounded-lg font-display text-xs font-semibold tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>JOIN DISCORD FOR PRE-MINT</span>
            <Sparkles className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
