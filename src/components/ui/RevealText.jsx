import React from 'react';
import { motion } from 'framer-motion';

export default function RevealText({ text, className = '', delay = 0 }) {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { y: '100%' },
    visible: {
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, idx) => (
        <span key={idx} className="relative overflow-hidden inline-block mr-[0.2em] pb-[0.05em] leading-normal">
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
