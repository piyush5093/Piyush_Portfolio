import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, ArrowUpRight, Terminal, Award } from 'lucide-react';
import { Github, Linkedin } from './ui/Icons';
import Magnetic from './ui/Magnetic';
import RevealText from './ui/RevealText';
import HeadingReveal from './ui/HeadingReveal';

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 1.2, // Wait for loading screen to complete before starting stagger
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left"
        >
          {/* Main Info */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="inline-flex">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold font-mono tracking-widest text-accent-light uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-light"></span>
                </span>
                👋 Available for SDE Roles
              </div>
            </motion.div>

            {/* Main Headings Group */}
            <motion.div className="flex flex-col items-start">
              <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-text-light leading-[1.05] m-0">
                <HeadingReveal text="Piyush Sharad Patil" trigger="mount" />
              </motion.h1>
              <motion.div variants={itemVariants} className="mt-4 sm:mt-5">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold animate-text-gradient bg-gradient-to-r from-accent via-[#a855f7] to-accent bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(99,102,241,0.4)] m-0 leading-tight">
                  Full Stack Developer
                </h2>
              </motion.div>
            </motion.div>

            {/* Bio Description */}
            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base text-text-muted/90 max-w-2xl leading-relaxed m-0"
            >
              Full Stack Developer who builds AI-integrated, production-ready web apps with the MERN stack. I've shipped 8 real projects — from AI-powered coding education platforms to team productivity tools — and solved 350+ DSA problems along the way. Currently looking for SDE roles where I can ship things that matter.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
              <Magnetic>
                <a
                  href="#projects"
                  onClick={handleScrollToProjects}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-light px-6 py-3.5 text-sm font-semibold tracking-wider text-text-light hover:shadow-xl hover:shadow-accent/20 transition-all duration-300"
                >
                  View Projects
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="/Piyush_Patil_Resume.pdf"
                  download="Piyush_Patil_Resume.pdf"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-semibold tracking-wider text-text-light hover:border-white/20 transition-all duration-300"
                >
                  Download Resume
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>
            </motion.div>

            {/* Social Row */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
              <Magnetic>
                <a
                  href="https://github.com/piyush5093"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-bg-card/50 hover:bg-accent/10 hover:border-accent/30 text-text-muted hover:text-accent-light transition-all duration-300"
                  title="GitHub"
                >
                  <Github size={18} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://www.linkedin.com/in/piyush-patil-292842279"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-bg-card/50 hover:bg-accent/10 hover:border-accent/30 text-text-muted hover:text-accent-light transition-all duration-300"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://leetcode.com/u/piyush5093/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-bg-card/50 hover:bg-accent/10 hover:border-accent/30 text-text-muted hover:text-accent-light transition-all duration-300 font-mono text-xs"
                  title="LeetCode"
                >
                  <Terminal size={18} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://www.geeksforgeeks.org/user/pp362bw8l/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-bg-card/50 hover:bg-accent/10 hover:border-accent/30 text-text-muted hover:text-accent-light transition-all duration-300"
                  title="GeeksforGeeks"
                >
                  <Award size={18} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="mailto:piyushpatil5093@gmail.com"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-bg-card/50 hover:bg-accent/10 hover:border-accent/30 text-text-muted hover:text-accent-light transition-all duration-300"
                  title="Email"
                >
                  <Mail size={18} />
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Profile Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] flex items-center justify-center"
            >
              {/* Futuristic holographic target-like HUD ring (Outer) */}
              <svg 
                className="absolute inset-0 w-full h-full text-accent/25 animate-glow-rotate" 
                viewBox="0 0 100 100"
                fill="none"
              >
                <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 6" />
                <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="0.5" strokeDasharray="40 2" />
                <path d="M50 2 L50 6 M50 94 L50 98 M2 50 L6 50 M94 50 L98 50" stroke="currentColor" strokeWidth="1" />
              </svg>

              {/* Inner target-like HUD ring (rotating opposite direction) */}
              <svg 
                className="absolute inset-0 w-full h-full text-accent-light/15 animate-glow-rotate [animation-direction:reverse]" 
                viewBox="0 0 100 100"
                fill="none"
              >
                <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 4" />
                <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.25" />
              </svg>

              {/* Halo Glow effect behind the photo */}
              <div className="absolute w-[75%] h-[75%] bg-accent/20 rounded-full blur-3xl animate-pulse" />

              {/* Profile Image Frame Container with radial-gradient mask */}
              <div className="absolute w-[80%] h-[80%] overflow-hidden flex items-center justify-center rounded-full">
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{
                    maskImage: 'radial-gradient(circle at 50% 32%, black 30%, transparent 68%)',
                    WebkitMaskImage: 'radial-gradient(circle at 50% 32%, black 30%, transparent 68%)'
                  }}
                >
                  <img 
                    src="/Profile_Photo.png" 
                    alt="Piyush Sharad Patil" 
                    className="w-full h-full object-cover object-[center_12%] scale-[1.08] transition-all duration-500 hover:scale-[1.12] hover:brightness-[1.02] filter brightness-[0.96] contrast-[1.04]"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Outer decorative tech ticks */}
              <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[1px] h-3 bg-accent-light" />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[1px] h-3 bg-accent-light" />
                <div className="absolute left-2 top-1/2 -translate-y-1/2 h-[1px] w-3 bg-accent-light" />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 h-[1px] w-3 bg-accent-light" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10 text-text-muted">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-1.5 h-6 rounded-full bg-white/20 relative overflow-hidden"
        >
          <div className="absolute top-1 left-0 right-0 mx-auto w-1 h-1.5 rounded-full bg-accent" />
        </motion.div>
      </div>
    </section>
  );
}
