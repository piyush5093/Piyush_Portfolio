import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0a0a0f]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center">
        {/* Animated greeting */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sunset-amber text-sm font-mono tracking-widest uppercase mb-4"
        >
          Loading the work...
        </motion.div>
        
        {/* Simple elegant progress bar */}
        <div className="w-40 h-[2px] bg-bg-surface rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-accent"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
}
