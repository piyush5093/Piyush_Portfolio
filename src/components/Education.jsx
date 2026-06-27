import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import HeadingReveal from './ui/HeadingReveal';

const EDUCATION_DATA = [
  {
    degree: 'B.E. Information Technology',
    institution: "PES's Modern College of Engineering, Pune",
    location: 'Pune, Maharashtra, India',
    duration: '2022 – 2026',
    metric: 'CGPA: 9.34',
    icon: GraduationCap
  },
  {
    degree: 'XII (HSC) — Science',
    institution: 'Moolji Jaitha College, Jalgaon',
    location: 'Jalgaon, Maharashtra, India',
    duration: '2021 – 2022',
    metric: 'Score: 83.00%',
    icon: Award
  },
  {
    degree: 'X (SSC)',
    institution: 'H.J. Patil Madhyamik Vidyalaya, Jalgaon',
    location: 'Jalgaon, Maharashtra, India',
    duration: '2019 – 2020',
    metric: 'Score: 93.60%',
    icon: Award
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <span className="font-mono text-xs text-sunset-amber uppercase tracking-widest mb-2">// ACADEMIC PATH</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-heading m-0">
            <HeadingReveal text="Education" />
          </h2>
        </div>

        {/* Education Stack */}
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          {EDUCATION_DATA.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden rounded-2xl border border-border-subtle bg-bg-surface shadow-[0_8px_30px_rgba(180,80,70,0.15)] p-6 backdrop-blur-sm shadow-xl hover:border-border-subtle hover:bg-bg-surface transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sunset-amber/10 text-sunset-amber group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} />
                  </div>
                  
                  {/* Details */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-text-heading m-0 group-hover:text-sunset-coral transition-colors duration-200">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-text-body m-0">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-body/65 font-mono pt-1">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Academic Score Badge */}
                <div className="shrink-0 flex items-center self-start md:self-auto pl-16 md:pl-0">
                  <span className="rounded-full bg-sunset-amber/10 border border-sunset-amber/20 px-4 py-2 text-xs font-mono font-bold text-sunset-coral shadow-inner shadow-sunset-coral/5">
                    {edu.metric}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
