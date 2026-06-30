import React from 'react';
import { motion } from 'framer-motion';

export default function HeadingReveal({ text, className = '', delay = 0, trigger = "inView" }) {
  const wipeVariants = {
    hidden: { 
      clipPath: 'polygon(0 -20%, 0 -20%, 0 120%, 0 120%)',
      opacity: 0,
      x: -10 
    },
    visible: {
      clipPath: 'polygon(0 -20%, 110% -20%, 110% 120%, 0 120%)',
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: delay },
    },
  };

  return (
    <motion.span
      variants={wipeVariants}
      initial="hidden"
      animate={trigger === "mount" ? "visible" : undefined}
      whileInView={trigger === "inView" ? "visible" : undefined}
      viewport={trigger === "inView" ? { once: true, margin: "-40px" } : undefined}
      className={`inline-block font-display ${className}`}
    >
      {text}
    </motion.span>
  );
}
