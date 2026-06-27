import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Detect mouse-based devices
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for lag-free mouse following
  const springConfig = { damping: 45, stiffness: 250, mass: 0.8 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 175); // Subtract half of the glow width (350/2)
      mouseY.set(e.clientY - 175); // Subtract half of the glow height (350/2)
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDesktop, mouseX, mouseY]);

  if (!isDesktop) return null;

  return (
    <motion.div
      style={{
        x: glowX,
        y: glowY,
      }}
      className="fixed top-0 left-0 w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-accent/8 to-accent-light/8 opacity-[0.35] blur-[80px] pointer-events-none z-30"
    />
  );
}
