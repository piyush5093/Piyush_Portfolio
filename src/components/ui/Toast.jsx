import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

export const Toast = ({ message, isVisible, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 flex items-center gap-2 rounded-full border border-emerald-500/20 bg-bg-surface px-4 py-2 text-sm text-text-heading shadow-2xl backdrop-blur-md shadow-emerald-500/5"
        >
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
            <Check size={12} />
          </div>
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
