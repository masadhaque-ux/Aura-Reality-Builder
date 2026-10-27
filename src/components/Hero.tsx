import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hook into scroll progress of the 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Circle mask expands from 0% to 150% as the user scrolls
  const clipPathProgress = useTransform(
    scrollYProgress,
    [0, 0.85],
    ['circle(0% at 50% 50%)', 'circle(150% at 50% 50%)']
  );

  // Subtle zoom scaling from 1 to 1.15 for cinematic depth
  const baseScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const revealScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  // Scroll indicator opacity fades out as user scrolls past initial zone
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Subtle parallax drift for the hero text
  const textTranslateY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] w-full"
      aria-label="Hero Showcase"
    >
      {/* Sticky viewport container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0c1128]">
        {/* =========================================
            BASE LAYER (Sketch Outline + "Imagine the Future")
            ========================================= */}
        <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center overflow-hidden">
          {/* Base Background Image (Sketch Outline) */}
          <motion.div
            style={{ scale: baseScale }}
            className="absolute inset-0 w-full h-full origin-center"
          >
            <img
              src="https://strvid.nyc3.cdn.digitaloceanspaces.com/cloudinary/hero_city_outline_fzg37d.jpg"
              alt="Architectural sketch outline of futuristic city skyline"
              className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.25]"
            />
            {/* Dark & moody overlays for depth */}
            <div className="absolute inset-0 bg-[#0c1128]/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0c1128]/70 to-[#0c1128]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1128] via-transparent to-[#0c1128]/80" />
          </motion.div>

          {/* Base Layer Content */}
          <motion.div
            style={{ y: textTranslateY }}
            className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center pointer-events-none select-none"
          >
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
                Phase 01 // Conception
              </span>
            </div>

            {/* Base Headline */}
            <div className="font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[1.0] text-white">
              Imagine <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-purple-200">
                the Future.
              </span>
            </div>

            {/* Base Subtext */}
            <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl font-light text-gray-300 leading-relaxed">
              We architect visionary digital interfaces, bespoke brand identities, and boundary-pushing web ecosystems that redefine industries.
            </p>
          </motion.div>
        </div>

        {/* =========================================
            TOP LAYER (Realistic Skyline + "Build the Reality")
            Masked dynamically via clipPath circle
            ========================================= */}
        <motion.div
          style={{ clipPath: clipPathProgress }}
          className="absolute inset-0 z-20 w-full h-full flex items-center justify-center overflow-hidden will-change-[clip-path]"
        >
          {/* Realistic Background Image */}
          <motion.div
            style={{ scale: revealScale }}
            className="absolute inset-0 w-full h-full origin-center"
          >
            <img
              src="https://strvid.nyc3.cdn.digitaloceanspaces.com/cloudinary/hero_city_iglhwn.jpg"
              alt="Realistic hyper-detailed luminous metropolis skyline"
              className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.1]"
            />
            {/* Subtle glow overlays */}
            <div className="absolute inset-0 bg-[#0c1128]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1128] via-[#0c1128]/30 to-[#0c1128]/70" />
            <div className="absolute inset-0 bg-radial-gradient from-blue-500/10 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Top Layer Content (Primary H1) */}
          <motion.div
            style={{ y: textTranslateY }}
            className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center pointer-events-none select-none"
          >
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#00f0ff]/30 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff]">
                Phase 02 // Production Reality
              </span>
            </div>

            {/* Semantic Single H1 for the page */}
            <h1 className="font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[1.0] text-white">
              Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-white to-[#b026ff]">
                the Reality.
              </span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl font-light text-gray-200 leading-relaxed">
              Transforming audacious creative visions into high-velocity digital products, scalable enterprise platforms, and transformative experiences.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator at bottom center */}
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="absolute bottom-8 left-0 right-0 z-30 flex flex-col items-center justify-center pointer-events-auto"
        >
          <button
            onClick={onExploreWork}
            className="group flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll to explore client projects"
          >
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#00f0ff] transition-colors">
              Scroll to Reveal
            </span>
            <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center group-hover:border-[#00f0ff]/50 transition-all duration-300">
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChevronDown className="w-4 h-4 text-white group-hover:text-[#00f0ff] transition-colors" />
              </motion.div>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
