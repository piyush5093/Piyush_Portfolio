import React from 'react';
import { motion } from 'framer-motion';
import { TiltCard } from './ui/TiltCard';
import { Award, BookOpen, Layers, Briefcase, GraduationCap } from 'lucide-react';
import HeadingReveal from './ui/HeadingReveal';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <span className="font-mono text-xs text-sunset-amber uppercase tracking-widest mb-2">// GET TO KNOW ME</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-heading m-0">
            <HeadingReveal text="About Me" />
          </h2>
        </div>

        {/* Bento Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Biography Card */}
          <TiltCard className="md:col-span-8 flex flex-col justify-between" delay={0.1}>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sunset-amber/10 text-sunset-amber">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-lg font-bold text-text-heading m-0">Education & Background</h3>
              </div>
              <p className="text-text-body leading-relaxed text-sm sm:text-base m-0">
                I am a final-year Bachelor of Engineering in Information Technology student at PES's Modern College of Engineering in Pune, Maharashtra. I specialize in building AI-integrated, production-ready web applications using the MERN stack.
              </p>
              <p className="text-text-body leading-relaxed text-sm sm:text-base m-0">
                My engineering journey is driven by translating complex logical flows into elegant user experiences. Combining modern web technologies with AI integrations, I enjoy shipping applications that solve real-world problems. Whether designing robust database schemas or refining user experience down to the millisecond, I focus on building high-performance software.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-border-subtle flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-text-body">
              <div><span className="text-sunset-amber">Location:</span> Pune, India</div>
              <div><span className="text-sunset-amber">Interests:</span> Full-Stack Development · GenAI · Systems Design</div>
            </div>
          </TiltCard>

          {/* Quick Stats Grid */}
          {/* Stat 1: CGPA */}
          <TiltCard className="md:col-span-4 flex flex-col justify-between items-start" delay={0.2}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sunset-amber/10 text-sunset-amber mb-4">
              <GraduationCap size={20} />
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-text-heading tracking-tight mb-2">9.34</div>
              <h4 className="text-xs font-mono tracking-widest text-text-body uppercase mb-1">BE IT CGPA</h4>
              <p className="text-xs text-text-body m-0">PES's Modern College of Engineering, Pune</p>
            </div>
          </TiltCard>

          {/* Stat 2: DSA Problems */}
          <TiltCard className="md:col-span-4 flex flex-col justify-between items-start" delay={0.3}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sunset-amber/10 text-sunset-amber mb-4">
              <Award size={20} />
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-text-heading tracking-tight mb-2">350+</div>
              <h4 className="text-xs font-mono tracking-widest text-text-body uppercase mb-1">DSA Problems Solved</h4>
              <p className="text-xs text-text-body m-0">Across LeetCode & GeeksforGeeks</p>
            </div>
          </TiltCard>

          {/* Stat 3: Shipped Projects */}
          <TiltCard className="md:col-span-4 flex flex-col justify-between items-start" delay={0.4}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sunset-amber/10 text-sunset-amber mb-4">
              <Layers size={20} />
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-text-heading tracking-tight mb-2">8 Shipped</div>
              <h4 className="text-xs font-mono tracking-widest text-text-body uppercase mb-1">Real-World Projects</h4>
              <p className="text-xs text-text-body m-0">From AI coding tools to standup managers</p>
            </div>
          </TiltCard>

          {/* Stat 4: Internships */}
          <TiltCard className="md:col-span-4 flex flex-col justify-between items-start" delay={0.5}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sunset-amber/10 text-sunset-amber mb-4">
              <Briefcase size={20} />
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-text-heading tracking-tight mb-2">2 Roles</div>
              <h4 className="text-xs font-mono tracking-widest text-text-body uppercase mb-1">Internship Experiences</h4>
              <p className="text-xs text-text-body m-0">Bluestock Fintech & Edunet Foundation (EY GDS)</p>
            </div>
          </TiltCard>

        </div>
      </div>
    </section>
  );
}
