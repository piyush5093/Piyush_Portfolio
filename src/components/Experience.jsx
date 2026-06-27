import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import HeadingReveal from './ui/HeadingReveal';

const EXPERIENCE_DATA = [
  {
    company: 'Bluestock Fintech',
    role: 'Software Development Engineer Intern',
    type: 'Remote',
    duration: 'Dec 2024 – Jan 2025',
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
    bullets: [
      'Improved UI responsiveness across 6+ modules using React.js, ensuring design consistency.',
      'Reduced page load time by 30% through frontend performance optimization and code refactoring.',
      'Collaborated with frontend and design teams to deliver scalable, responsive user interfaces.'
    ]
  },
  {
    company: 'Edunet Foundation (EY GDS & AICTE)',
    role: 'MERN Stack Developer Intern',
    type: 'Remote',
    duration: 'Dec 2024 – Jan 2025',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Bootstrap'],
    bullets: [
      'Built a full-stack Doctor Appointment Booking system with authentication for patients and doctors.',
      'Designed REST APIs and MongoDB schema to efficiently manage appointment and user data.',
      'Built responsive UI using React.js and Bootstrap for cross-device usability.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <span className="font-mono text-xs text-sunset-amber uppercase tracking-widest mb-2">// PROFESSIONAL TIMELINE</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-heading m-0">
            <HeadingReveal text="Work Experience" />
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-[1px] bg-bg-surface-alt -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-16">
            {EXPERIENCE_DATA.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={exp.company} className="relative flex flex-col sm:flex-row items-start justify-between">
                  
                  {/* Timeline Node Point */}
                  <div className="absolute left-4 sm:left-1/2 top-4 h-3.5 w-3.5 rounded-full border-2 border-sunset-amber bg-transparent -translate-x-1/2 z-10 shadow-lg shadow-sunset-coral/30 animate-pulse" />

                  {/* Left Side (Spacing on Desktop, Timeline details on mobile is right-aligned) */}
                  <div className={`w-full sm:w-[45%] pl-10 sm:pl-0 ${isEven ? 'sm:text-right' : 'sm:order-last sm:text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-2"
                    >
                      <div className="flex items-center gap-2 text-sunset-amber font-mono text-xs justify-start sm:justify-end">
                        <Calendar size={12} />
                        <span>{exp.duration}</span>
                      </div>
                      <h3 className="text-lg font-bold text-text-heading m-0">{exp.role}</h3>
                      <h4 className="text-sm font-semibold text-text-body m-0">{exp.company}</h4>
                      <span className="inline-block rounded-full bg-bg-surface px-2.5 py-0.5 text-[10px] font-mono tracking-widest text-text-body/65 uppercase">
                        {exp.type}
                      </span>
                    </motion.div>
                  </div>

                  {/* Right Side (Content details card) */}
                  <div className={`w-full sm:w-[45%] pl-10 sm:pl-0 mt-4 sm:mt-0 ${isEven ? 'sm:order-last' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                      className="rounded-2xl border border-border-subtle bg-bg-surface shadow-[0_8px_30px_rgba(180,80,70,0.15)] p-6 backdrop-blur-sm shadow-xl"
                    >
                      {/* Accomplishments Bullets */}
                      <ul className="space-y-3 p-0 m-0 list-none text-left">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-body leading-relaxed">
                            <CheckCircle2 size={15} className="text-sunset-amber shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack badges */}
                      <div className="mt-6 pt-4 border-t border-border-subtle flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded bg-bg-surface border border-border-subtle px-2 py-0.5 text-[10px] font-mono tracking-wider text-text-heading"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}
