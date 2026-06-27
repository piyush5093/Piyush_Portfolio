import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Magnetic({ children }) {
  const ref = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsDesktop(mediaQuery.matches);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Quick-responding spring for snappy snap-back and smooth pull
  const springConfig = { damping: 12, stiffness: 180, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!isDesktop || !ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Pull factor (scales translation dynamically, maximum range limit)
    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (!isDesktop) return <>{children}</>;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
