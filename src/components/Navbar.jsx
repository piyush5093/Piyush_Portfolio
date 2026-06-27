import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Trigger when section occupies the center of the viewport
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    NAV_ITEMS.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      if (window.lenis) {
        window.lenis.scrollTo(target);
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-accent to-accent-light origin-left z-50 shadow-sm shadow-accent/50" 
        style={{ scaleX }} 
      />
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-bg-dark/80 backdrop-blur-lg border-b border-white/5 py-4 shadow-xl shadow-black/20' 
          : 'bg-transparent py-6'
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-1.5 font-mono text-sm font-semibold tracking-tight text-text-light"
            >
              <span className="text-accent">&lt;</span>
              <span>PiyushPatil</span>
              <span className="text-accent">/&gt;</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`relative text-xs font-medium uppercase tracking-widest transition-colors duration-200 py-1.5 ${
                        isActive ? 'text-text-light' : 'text-text-muted hover:text-text-light'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Resume Button */}
              <a
                href="/Piyush_Patil_Resume.pdf"
                download="Piyush_Patil_Resume.pdf"
                className="group flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wider text-text-light hover:bg-accent hover:border-accent hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
              >
                RESUME
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-text-muted hover:bg-white/5 hover:text-text-light focus:outline-none"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden border-b border-white/5 bg-bg-dark/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="space-y-1 px-4 pb-6 pt-4">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`block rounded-md px-3 py-2 text-sm font-medium tracking-wider uppercase ${
                        isActive 
                          ? 'bg-accent/10 text-accent font-semibold' 
                          : 'text-text-muted hover:bg-white/5 hover:text-text-light'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <div className="pt-4 border-t border-white/5 mt-2">
                  <a
                    href="/Piyush_Patil_Resume.pdf"
                    download="Piyush_Patil_Resume.pdf"
                    className="flex w-full items-center justify-center gap-1 rounded-full bg-accent py-2.5 text-xs font-semibold tracking-wider text-text-light hover:bg-accent-light shadow-lg shadow-accent/20"
                  >
                    DOWNLOAD RESUME
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
