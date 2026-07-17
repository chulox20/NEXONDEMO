import React from "react";
import { motion } from "motion/react";

const VIDEO_BG_URL2 = "https://res.cloudinary.com/wgodrxfg/video/upload/v1784323431/Samurai_looking_down_up_202607171718_1_r1upq9.mp4";

export default function FeaturesSection() {
  // Simple pink petals array to animate falling over the section background
  const petals = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 90 + 5}%`,
    top: `${Math.random() * 40 - 20}%`,
    size: Math.random() * 8 + 4,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 6,
    rotate: Math.random() * 360,
  }));

  return (
    <section 
      id="collection" 
      className="relative py-24 md:py-36 px-6 md:px-12 z-30 overflow-hidden select-none min-h-screen flex items-center"
    >
      {/* Background Autoplay & Looping Video (Fill whole section, aspect ratio 16:9, no dimming overlay) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100"
        >
          <source src={VIDEO_BG_URL2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Sakura petals floating across the background */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {petals.map((petal) => (
          <motion.div
            key={petal.id}
            initial={{ y: petal.top, x: petal.left, opacity: 0, rotate: petal.rotate }}
            animate={{ 
              y: "110%", 
              x: `calc(${petal.left} + 60px)`, 
              opacity: [0, 0.7, 0.7, 0],
              rotate: petal.rotate + 220
            }}
            transition={{
              duration: petal.duration,
              repeat: Infinity,
              delay: petal.delay,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              width: petal.size,
              height: petal.size,
              background: "radial-gradient(circle, #fbcfe8 0%, #fda4af 100%)",
              borderRadius: "50% 10% 50% 50%",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto z-20 relative w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column Spacer (lg:col-span-6) - Keeps this area completely empty so the background video Samurai is beautifully visible */}
        <div className="hidden lg:block lg:col-span-6 h-[200px]" />

        {/* Right Column Content (lg:col-span-6) - Shifted to the right on PC, styled cleanly without background panel container */}
        <div 
          id="features-content-column" 
          className="col-span-1 lg:col-span-6 flex flex-col items-start text-left lg:pl-10 p-6 sm:p-10 lg:p-0 mx-2 sm:mx-4 lg:mx-0"
        >
          
          {/* Category Label */}
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-600 mb-6 font-semibold"
          >
            Digital Kensei
          </motion.span>

          {/* Main Typographical Title (Deep black and elegant charcoal/grey styling of reference mockup) */}
          <div className="relative w-full mb-8">
            
            {/* Elegant Red Bullet */}
            <div className="absolute -left-4 sm:-left-6 top-2">
              <span className="relative flex h-3 w-3 sm:h-3.5 sm:w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-brand-red"></span>
              </span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl leading-[1.15] tracking-tight text-neutral-950 pl-2 sm:pl-0">
              Digital Kensei - is an NFT <br className="hidden md:block" />
              collection of cyber{" "}
              
              {/* Inline Samurai helmet badge */}
              <span className="inline-flex items-center justify-center bg-neutral-900 text-white px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full align-middle mx-1 sm:mx-1.5">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-red mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 8v8M9 11h6" />
                </svg>
                <span className="font-mono text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider">samurai</span>
              </span>{" "}
              
              <span className="text-neutral-500">that combines</span> <br className="hidden md:block" />
              
              <span className="text-neutral-500">
                the aesthetics of ancient{" "}
                
                {/* Inline Katana sword badge */}
                <span className="inline-flex items-center justify-center bg-brand-red text-white px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-full align-middle mx-1 sm:mx-1.5 shadow-lg shadow-brand-red/25 font-mono text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M14.5 17.5L3 6M13 13l4 4M19 19l2 2" />
                  </svg>
                  Japan
                </span>{" "}
                with futuristic <br className="hidden md:block" />
                technology
              </span>
            </h2>
          </div>

          {/* Core descriptive sentence underneath title */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.95 }}
            viewport={{ once: true }}
            className="max-w-xl font-sans text-xs sm:text-sm text-neutral-950 leading-relaxed font-normal mb-12 text-left"
          >
            Each warrior is a unique digital artifact based on battle code and artificial intelligence
          </motion.p>

          {/* 2x2 Grid of Features with Exact Red Icons on Top */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 w-full text-left">
            
            {/* Unique Artwork */}
            <div className="flex flex-col items-start gap-3 group">
              {/* Custom Red Geometric Shield/Artwork Icon */}
              <div className="w-8 h-8 flex items-center justify-center text-brand-red transition-transform duration-300 group-hover:scale-110">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 15L85 35V65L50 85L15 65V35L50 15Z" stroke="currentColor" strokeWidth="8" strokeLinejoin="round"/>
                  <path d="M50 32L72 45V55L50 68L28 55V45L50 32Z" fill="currentColor" stroke="none"/>
                </svg>
              </div>
              <div>
                <h3 className="font-display font-extrabold text-sm text-neutral-900 mb-1 tracking-wide uppercase">
                  Unique artwork
                </h3>
                <p className="font-sans text-xs text-neutral-900 leading-relaxed font-medium">
                  Each NFT is a detailed <br /> digital character
                </p>
              </div>
            </div>

            {/* Rarity and Value */}
            <div className="flex flex-col items-start gap-3 group">
              {/* Custom Red Crest/Hexagon Icon */}
              <div className="w-8 h-8 flex items-center justify-center text-brand-red transition-transform duration-300 group-hover:scale-110">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 15L85 35V65L50 85L15 65V35L50 15Z" stroke="currentColor" strokeWidth="8" strokeLinejoin="round"/>
                  <path d="M35 55L42.5 42.5L50 55L57.5 42.5L65 55H35Z" fill="currentColor" stroke="none"/>
                </svg>
              </div>
              <div>
                <h3 className="font-display font-extrabold text-sm text-neutral-900 mb-1 tracking-wide uppercase">
                  Rarity and Value
                </h3>
                <p className="font-sans text-xs text-neutral-900 leading-relaxed font-medium">
                  Some Samurai have <br /> rare items that increase <br /> their importance
                </p>
              </div>
            </div>

            {/* Usefulness */}
            <div className="flex flex-col items-start gap-3 group">
              {/* Custom Red 8-Point Asterisk Icon */}
              <div className="w-8 h-8 flex items-center justify-center text-brand-red transition-transform duration-300 group-hover:rotate-45">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 15V85M15 50H85M25 25L75 75M25 75L75 25" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-display font-extrabold text-sm text-neutral-900 mb-1 tracking-wide uppercase">
                  Usefulness
                </h3>
                <p className="font-sans text-xs text-neutral-900 leading-relaxed font-medium">
                  Future in-game and <br /> metaverse activations
                </p>
              </div>
            </div>

            {/* Elite Club Membership */}
            <div className="flex flex-col items-start gap-3 group">
              {/* Custom Red 8-Point Asterisk Icon */}
              <div className="w-8 h-8 flex items-center justify-center text-brand-red transition-transform duration-300 group-hover:rotate-45">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 15V85M15 50H85M25 25L75 75M25 75L75 25" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-display font-extrabold text-sm text-neutral-900 mb-1 tracking-wide uppercase">
                  Elite Club Membership
                </h3>
                <p className="font-sans text-xs text-neutral-900 leading-relaxed font-medium">
                  Owners receive exclusive bonuses <br /> and access to the community
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
