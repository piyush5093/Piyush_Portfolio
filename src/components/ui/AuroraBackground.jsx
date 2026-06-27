import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AuroraBackground = () => {
  const { scrollY } = useScroll();
  // As the user scrolls down, move the blobs slightly downwards to create a parallax effect where they scroll slower than the foreground.
  // This keeps the effect subtle: moving ~150px over a long scroll.
  const parallaxY = useTransform(scrollY, [0, 3000], [0, 150]);

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden bg-transparent">
      {/* Dynamic Cosmic Nebula / Aurora Blobs */}
      <motion.div style={{ y: parallaxY }} className="absolute inset-0">
      
      {/* Blob 1: Deep Indigo (Top-Left, Hero Section area) */}
      <div 
        className="absolute top-[-10%] left-[-10%] h-[70vw] w-[70vw] max-w-[800px] rounded-full opacity-[0.12] blur-[120px] animate-float-slow bg-gradient-to-br from-indigo-500 to-purple-600" 
        style={{ animationDuration: '25s' }}
      />
      
      {/* Blob 2: Cyan/Teal (Center-Right, Skills/Projects area) */}
      <div 
        className="absolute top-[30%] right-[-15%] h-[60vw] w-[60vw] max-w-[700px] rounded-full opacity-[0.15] blur-[130px] animate-float-medium bg-gradient-to-bl from-teal-400 to-emerald-700" 
        style={{ animationDuration: '22s', animationDelay: '-5s' }}
      />
      
      {/* Blob 3: Violet (Bottom-Left, Contact area) */}
      <div 
        className="absolute bottom-[-10%] left-[-5%] h-[65vw] w-[65vw] max-w-[750px] rounded-full opacity-[0.14] blur-[140px] animate-float-slow bg-gradient-to-tr from-violet-600 to-fuchsia-700" 
        style={{ animationDuration: '28s', animationDelay: '-10s' }}
      />
      </motion.div>

      {/* Fine Dot Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          maskImage: 'linear-gradient(to bottom, #000 10%, transparent 80%)',
          WebkitMaskImage: 'linear-gradient(to bottom, #000 10%, transparent 80%)'
        }}
      />

      {/* Subtle Noise / Grain Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle vignettes for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/20 to-[#0a0a0f]/80 pointer-events-none" />
    </div>
  );
};
