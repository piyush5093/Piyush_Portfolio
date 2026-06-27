import React from 'react';
import { TiltCard } from './ui/TiltCard';
import HeadingReveal from './ui/HeadingReveal';
import { Award, BookOpen, Terminal, Sparkles, Code } from 'lucide-react';

const CERT_DATA = [
  {
    title: 'Oracle Java Foundation Certification',
    issuer: 'Oracle',
    icon: Code,
    desc: 'Demonstrates foundational knowledge of Java programming concepts, syntax, variables, and data structures.'
  },
  {
    title: 'MERN Stack Development Certification',
    issuer: 'Apna College',
    icon: BookOpen,
    desc: 'Comprehensive full-stack program covering MongoDB, Express.js, React.js, and Node.js for production environments.'
  },
  {
    title: 'DSA (Java) Certification',
    issuer: 'Apna College',
    icon: Award,
    desc: 'Rigorous course on Data Structures & Algorithms, sorting, searching, tree traversals, and dynamic programming.'
  },
  {
    title: 'AI/ML Certification',
    issuer: 'Apna College',
    icon: Sparkles,
    desc: 'Covers core artificial intelligence and machine learning algorithms, model training fundamentals, and deep learning basics.'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <span className="font-mono text-xs text-sunset-amber uppercase tracking-widest mb-2">// CREDENTIALS & METRICS</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-heading m-0">
            <HeadingReveal text="Certifications & Achievements" />
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Leetcode/GFG Big Metrics Card */}
          <TiltCard className="lg:col-span-2 flex flex-col justify-between p-6 bg-gradient-to-br from-accent/5 to-accent-light/5 border-sunset-amber/10" delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/25 text-sunset-coral">
                <Terminal size={18} />
              </div>
              <h3 className="text-base font-bold text-text-heading m-0">DSA Accomplishments</h3>
            </div>
            
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-text-heading tracking-tight mb-2">350+ Solved</div>
              <p className="text-sm text-text-body leading-relaxed mb-4 m-0">
                Solved 350+ algorithmic coding problems across competitive platforms LeetCode and GeeksforGeeks. Expert knowledge of memory layouts, complexity calculations, runtime tuning, and systems optimization.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://leetcode.com/u/piyush5093/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-semibold text-sunset-coral hover:text-sunset-amber transition-colors duration-200"
                >
                  LeetCode Profile &rarr;
                </a>
                <a 
                  href="https://www.geeksforgeeks.org/user/pp362bw8l/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-semibold text-sunset-coral hover:text-sunset-amber transition-colors duration-200"
                >
                  GFG Profile &rarr;
                </a>
              </div>
            </div>
          </TiltCard>

          {/* Standard Certification Cards */}
          {CERT_DATA.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <TiltCard key={cert.title} className="flex flex-col justify-between p-6" delay={0.15 + index * 0.05}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-bg-surface text-sunset-coral">
                      <Icon size={16} />
                    </div>
                    <span className="font-mono text-[10px] tracking-wider text-text-body uppercase">
                      {cert.issuer}
                    </span>
                  </div>
                  
                  <h4 className="text-sm sm:text-base font-bold text-text-heading m-0 mb-2">
                    {cert.title}
                  </h4>
                  
                  <p className="text-xs text-text-body leading-relaxed m-0">
                    {cert.desc}
                  </p>
                </div>
              </TiltCard>
            );
          })}

        </div>

      </div>
    </section>
  );
}
