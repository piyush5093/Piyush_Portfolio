import React from 'react';
import { motion } from 'framer-motion';

export const BentoCard = ({ 
  children, 
  className = '', 
  hoverable = true,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`
        relative overflow-hidden rounded-2xl border border-border-subtle 
        bg-bg-surface backdrop-blur-sm p-6
        ${hoverable ? 'hover:-translate-y-1 hover:border-border-subtle hover:shadow-2xl hover:shadow-sunset-coral/5 transition-all duration-300 ease-out' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};
