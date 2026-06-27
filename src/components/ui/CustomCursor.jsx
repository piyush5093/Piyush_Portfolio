import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [cursorState, setCursorState] = useState('default'); // 'default', 'hover', 'project', 'hidden'

  // Motion values for the dot
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Springs for the dot (fast, slight smoothing)
  const dotX = useSpring(cursorX, { stiffness: 1000, damping: 40, mass: 0.1 });
  const dotY = useSpring(cursorY, { stiffness: 1000, damping: 40, mass: 0.1 });

  // Springs for the ring (more lag)
  const ringX = useSpring(cursorX, { stiffness: 150, damping: 20, mass: 0.5 });
  const ringY = useSpring(cursorY, { stiffness: 150, damping: 20, mass: 0.5 });

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const moveMouse = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      
      // Hide cursor over inputs and textareas to let default text cursor show
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        setCursorState('hidden');
        return;
      }

      // Check for project card hover
      if (target.closest('[data-cursor="project"]')) {
        setCursorState('project');
        return;
      }

      // Check for general interactive elements
      if (target.closest('a, button, [role="button"]')) {
        setCursorState('hover');
        return;
      }

      setCursorState('default');
    };

    const handleMouseOut = () => {
      setCursorState('default');
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseOut); // when mouse leaves viewport

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseOut);
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice) return null;

  const isHidden = cursorState === 'hidden';
  const isHover = cursorState === 'hover';
  const isProject = cursorState === 'project';

  // Determine ring size based on state
  let ringSize = 32;
  if (isHover) ringSize = 50;
  if (isProject) ringSize = 70;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full border-[1.5px] border-accent mix-blend-exclusion"
        style={{
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isHidden ? 0 : isProject ? 1 : isHover ? 0.8 : 0.4,
          backgroundColor: isProject ? 'var(--color-accent)' : 'transparent',
        }}
        animate={{
          width: ringSize,
          height: ringSize,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {isProject && (
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-bold font-mono text-white tracking-widest uppercase"
          >
            View
          </motion.span>
        )}
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full bg-accent mix-blend-exclusion"
        style={{
          x: dotX,
          y: dotY,
          width: 8,
          height: 8,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isHidden || isProject ? 0 : 1, // Hide dot when in project state or input state
        }}
      />
    </>
  );
};
