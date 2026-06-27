import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';

export default function TerminalProjectSwitcher({ projects }) {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState('');
  const command = "ls -l ./featured_work";

  useEffect(() => {
    // Detect mobile to skip animation if preferred, but a fast animation is fine everywhere.
    let i = 0;
    const interval = setInterval(() => {
      setTyped(command.substring(0, i));
      i++;
      if (i > command.length) {
        clearInterval(interval);
        setTimeout(() => setStep(1), 400);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(`project-${id}`);
    if (el) {
      if (window.lenis) {
        window.lenis.scrollTo(el, { offset: -100, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      
      // Temporary highlight effect
      el.style.transition = 'all 0.5s ease';
      el.style.boxShadow = '0 0 0 2px var(--color-accent), 0 0 40px rgba(99, 102, 241, 0.3)';
      setTimeout(() => {
        el.style.boxShadow = '';
      }, 1500);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl border border-border-subtle bg-[#07070a]/80 backdrop-blur-md shadow-2xl overflow-hidden mb-16 font-mono text-sm">
      {/* Mac-style Title Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-bg-surface border-b border-border-subtle">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-[10px] text-text-body flex items-center gap-2">
          <TerminalIcon size={12} />
          <span>piyush@portfolio: ~/work</span>
        </div>
        <div className="w-10" /> {/* Spacer for centering */}
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-6 text-text-heading text-xs sm:text-sm">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-emerald-400 font-bold">➜</span>
          <span className="text-cyan-400 font-bold">~</span>
          <span>{typed}</span>
          {step === 0 && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-4 bg-text-light inline-block translate-y-1"
            />
          )}
        </div>

        <AnimatePresence>
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="mt-4 overflow-x-auto pb-2 scrollbar-hide"
            >
              <div className="min-w-[500px]">
                {/* Table Header */}
                <div className="text-text-body text-[10px] sm:text-xs mb-3 grid grid-cols-12 gap-4 uppercase tracking-widest border-b border-border-subtle pb-2">
                  <div className="col-span-2">Perms</div>
                  <div className="col-span-2">Size</div>
                  <div className="col-span-3">Domain</div>
                  <div className="col-span-5">Project Name (Click to Execute)</div>
                </div>
                
                {/* Table Rows */}
                <div className="space-y-1.5">
                  {projects.map((p, i) => {
                    const shortName = p.title.split('—')[0].trim().toLowerCase().replace(/\s+/g, '-');
                    return (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        key={p.id}
                        onClick={() => handleScrollTo(p.id)}
                        className="grid grid-cols-12 gap-4 text-xs sm:text-sm hover:bg-bg-surface cursor-pointer py-1.5 px-1 rounded transition-colors group"
                        data-cursor="hover"
                      >
                        <div className="col-span-2 text-text-body">-rwxr-xr-x</div>
                        <div className="col-span-2 text-text-body">{Math.floor(Math.random() * 800 + 100)} KB</div>
                        <div className="col-span-3 flex items-center">
                          <span 
                            className="px-2 py-0.5 rounded text-[10px] bg-opacity-10 border" 
                            style={{ 
                              color: p.color || '#94a3b8', 
                              backgroundColor: `${p.color || '#94a3b8'}15`,
                              borderColor: `${p.color || '#94a3b8'}30`
                            }}
                          >
                            {p.category}
                          </span>
                        </div>
                        <div className="col-span-5 text-text-heading group-hover:text-sunset-coral flex items-center justify-between">
                          <span className="font-semibold flex items-center gap-2">
                            ./{shortName}.sh
                          </span>
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sunset-coral text-[10px] uppercase tracking-widest bg-sunset-amber/10 px-2 py-1 rounded">
                            Execute &rarr;
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              
              {/* Ready Prompt */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: projects.length * 0.08 + 0.3 }}
                className="flex items-center gap-2 mt-6"
              >
                <span className="text-emerald-400 font-bold">➜</span>
                <span className="text-cyan-400 font-bold">~</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-4 bg-text-light inline-block translate-y-1"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
