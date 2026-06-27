import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import { AuroraBackground } from './components/ui/AuroraBackground';
import { CustomCursor } from './components/ui/CustomCursor';
import { SmoothScroll } from './components/ui/SmoothScroll';
import LoadingScreen from './components/ui/LoadingScreen';
import { AnimatePresence } from 'framer-motion';

// --- DevTools Insider Greeting ---
const consoleStyle1 = "color: #6366f1; font-weight: bold; font-family: monospace; font-size: 14px;";
const consoleStyle2 = "color: #f5f5f7; font-size: 14px; font-family: sans-serif; line-height: 1.5;";
const consoleStyle3 = "color: #8b5cf6; font-size: 14px; font-family: monospace; font-weight: bold;";

const asciiGreeting = `
%c
    ____  _                  __ 
   / __ \\(_)__  ____  _______/ /_
  / /_/ / / / / / / / / / ___/ __ \\
 / ____/ / /_/ / /_/ (__  ) / / / /
/_/   /_/\\__, /\\__,_/____/_/ /_/ 
        /____/                   

%cHey there! Looking under the hood? 
I like that. Let's build something awesome together.

%c📫 piyushpatil5093@gmail.com
`;

if (typeof window !== 'undefined') {
  console.log(asciiGreeting, consoleStyle1, consoleStyle2, consoleStyle3);
}
// ---------------------------------

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen text-text-muted bg-transparent font-sans selection:bg-accent/30 selection:text-text-light antialiased">
        <AnimatePresence>
          {isLoading && <LoadingScreen />}
        </AnimatePresence>
        <CustomCursor />
      {/* Drifting Aurora Background Effect */}
      <AuroraBackground />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Single Page Layout Container */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Sections */}
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
    </div>
    </SmoothScroll>
  );
}

export default App;
