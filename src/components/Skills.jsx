import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiCplusplus, 
  SiHtml5, 
  SiCss, 
  SiTailwindcss, 
  SiBootstrap, 
  SiRedux, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiGit, 
  SiGithub, 
  SiDocker, 
  SiPostman, 
  SiVercel,
  SiRender,
  SiGooglecloud,
  SiKubernetes,
  SiTerraform,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiOpenai
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Sparkles, 
  Cpu, 
  Terminal, 
  Network, 
  Layers, 
  Globe, 
  Workflow, 
  Star,
  Brain,
  Cloud
} from 'lucide-react';
import { TiltCard } from './ui/TiltCard';
import HeadingReveal from './ui/HeadingReveal';

// Core skills that get a tiny star badge
const CORE_SKILLS = ['React.js', 'JavaScript', 'Node.js', 'MongoDB'];

const TECH_CATEGORIES = [
  {
    category: 'Languages',
    icon: Code2,
    skills: [
      { name: 'JavaScript', logo: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', logo: SiTypescript, color: '#3178C6' },
      { name: 'Java', logo: FaJava, color: '#ED8B00' },
      { name: 'Python', logo: SiPython, color: '#3776AB' },
      { name: 'C++', logo: SiCplusplus, color: '#00599C' }
    ]
  },
  {
    category: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'React.js', logo: SiReact, color: '#61DAFB' },
      { name: 'HTML5', logo: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', logo: SiCss, color: '#1572B6' },
      { name: 'Tailwind CSS', logo: SiTailwindcss, color: '#06B6D4' },
      { name: 'Bootstrap', logo: SiBootstrap, color: '#7952B3' },
      { name: 'Redux', logo: SiRedux, color: '#764ABC' }
    ]
  },
  {
    category: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', logo: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', logo: SiExpress, color: '#FFFFFF' }
    ]
  },
  {
    category: 'Databases',
    icon: Database,
    skills: [
      { name: 'MongoDB', logo: SiMongodb, color: '#47A248' },
      { name: 'MySQL', logo: SiMysql, color: '#4479A1' }
    ]
  },
  {
    category: 'Cloud Technologies',
    icon: Cloud,
    skills: [
      { name: 'AWS (EC2, S3, Lambda, IAM)', logo: FaAws, color: '#FF9900' },
      { name: 'Microsoft Azure', logo: VscAzure, color: '#0089D6' },
      { name: 'Google Cloud Platform', logo: SiGooglecloud, color: '#4285F4' },
      { name: 'Docker', logo: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', logo: SiKubernetes, color: '#326CE5' },
      { name: 'Terraform', logo: SiTerraform, color: '#7B42BC' }
    ]
  },
  {
    category: 'Machine Learning',
    icon: Cpu,
    skills: [
      { name: 'Supervised & Unsupervised Algos', logo: Brain, color: '#34D399', isFallback: true },
      { name: 'Model Evaluation', logo: Cpu, color: '#FBBF24', isFallback: true },
      { name: 'Pandas', logo: SiPandas, color: '#150458' },
      { name: 'NumPy', logo: SiNumpy, color: '#013243' },
      { name: 'Scikit-learn', logo: SiScikitlearn, color: '#F7931E' }
    ]
  },
  {
    category: 'Generative AI & LLMs',
    icon: Sparkles,
    skills: [
      { name: 'Prompt Engineering', logo: Sparkles, color: '#A78BFA', isFallback: true },
      { name: 'LLM APIs (Basics)', logo: SiOpenai, color: '#00A244' },
      { name: 'GenAI Fundamentals', logo: Brain, color: '#EC4899', isFallback: true }
    ]
  },
  {
    category: 'Tools & Platforms',
    icon: Terminal,
    skills: [
      { name: 'Git', logo: SiGit, color: '#F05032' },
      { name: 'GitHub', logo: SiGithub, color: '#FFFFFF' },
      { name: 'Postman', logo: SiPostman, color: '#FF6C37' },
      { name: 'Vercel', logo: SiVercel, color: '#FFFFFF' },
      { name: 'Render', logo: SiRender, color: '#46E3B7' }
    ]
  }
];

const CORE_CS_CONCEPTS = [
  { name: 'Data Structures & Algorithms', desc: 'Expert in LeetCode/GFG runtime efficiency', icon: Network },
  { name: 'Object-Oriented Programming', desc: 'Scalable structural classes in Java & C++', icon: Layers },
  { name: 'Database Management Systems', desc: 'Indexing, query tuning, and normalization', icon: Database },
  { name: 'Operating Systems', desc: 'Process synchronization and memory layouts', icon: Cpu },
  { name: 'Computer Networks', desc: 'IP routing, HTTP schemas, and TCP handshakes', icon: Globe },
  { name: 'System Design', desc: 'Scalable services and async queue architectures', icon: Workflow }
];

// Sub-component for individual tech tile to handle local states & animations cleanly
const TechTile = ({ skill, index }) => {
  const [hovered, setHovered] = useState(false);
  const LogoComponent = skill.logo;
  const isCore = CORE_SKILLS.includes(skill.name);

  // Passive ambient float offset
  const floatDuration = 4 + (index % 3) * 0.8;
  const floatDelay = (index % 5) * 0.25;

  return (
    <motion.div
      animate={{ y: [0, -3, 0] }}
      transition={{ 
        repeat: Infinity, 
        duration: floatDuration, 
        ease: "easeInOut", 
        delay: floatDelay 
      }}
      whileHover={{ y: -5, scale: 1.02 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      style={{
        borderColor: hovered ? skill.color : 'rgba(255, 255, 255, 0.05)',
        boxShadow: hovered ? `0 8px 24px -4px ${skill.color}18` : 'none',
        transition: 'border-color 0.2s ease-out, box-shadow 0.2s ease-out'
      }}
      className="relative flex flex-col items-center justify-center rounded-xl border bg-bg-surface p-3 text-center cursor-default min-h-[95px] h-auto w-full"
    >
      {/* Core Star Badge */}
      {isCore && (
        <span className="absolute top-1.5 right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-sunset-amber/20 text-sunset-coral" title="Core Technology">
          <Star size={8} fill="currentColor" />
        </span>
      )}

      {/* Logo */}
      <motion.div 
        animate={hovered ? { scale: 1.1, rotate: index % 2 === 0 ? 3 : -3 } : { scale: 1, rotate: 0 }}
        transition={{ duration: 0.2 }}
        style={{ color: skill.color }}
        className="shrink-0 mb-2 flex items-center justify-center"
      >
        <LogoComponent size={30} className={skill.isFallback ? 'text-sunset-coral' : ''} />
      </motion.div>

      {/* Tech Name */}
      <span className="text-[10px] font-mono font-medium tracking-wide text-text-heading max-w-full leading-normal">
        {skill.name}
      </span>
    </motion.div>
  );
};

export default function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <span className="font-mono text-xs text-sunset-amber uppercase tracking-widest mb-2">// TECHNICAL CAPABILITIES</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-heading m-0">
            <HeadingReveal text="Skills & Tech Stack" />
          </h2>
        </div>

        {/* Bento Grid layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TECH_CATEGORIES.map((cat, catIdx) => {
            const CatIcon = cat.icon;
            
            // Adjust card span: Frontend, Cloud, and Tools take 2 columns on large screens to display complete grid balance
            const isLarge = cat.category === 'Frontend' || cat.category === 'Cloud Technologies' || cat.category === 'Tools & Platforms';
            
            return (
              <TiltCard 
                key={cat.category} 
                className={`flex flex-col p-6 ${
                  isLarge 
                    ? 'md:col-span-2 lg:col-span-2' 
                    : 'md:col-span-1'
                }`}
                delay={catIdx * 0.05}
                hoverable={false} // Disable global tilt transform so individual tiles can animate smoothly
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 border-b border-border-subtle pb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sunset-amber/10 text-sunset-amber">
                    <CatIcon size={16} />
                  </div>
                  <h3 className="text-sm font-bold tracking-wider text-text-heading uppercase font-mono m-0">
                    {cat.category}
                  </h3>
                </div>

                {/* Sub Tech Tiles Grid */}
                <div className={`grid gap-3 w-full ${
                  isLarge 
                    ? 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6' 
                    : 'grid-cols-3'
                }`}>
                  {cat.skills.map((skill, skillIdx) => (
                    <TechTile key={skill.name} skill={skill} index={skillIdx + catIdx * 10} />
                  ))}
                </div>
              </TiltCard>
            );
          })}

          {/* Specialized Core CS panel (different layout, clean list style) */}
          <TiltCard 
            className="md:col-span-2 lg:col-span-3 flex flex-col p-6 border-border-subtle"
            delay={TECH_CATEGORIES.length * 0.05}
            hoverable={false}
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6 border-b border-border-subtle pb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sunset-amber/10 text-sunset-amber">
                <Cpu size={16} />
              </div>
              <h3 className="text-sm font-bold tracking-wider text-text-heading uppercase font-mono m-0">
                Core Computer Science Concepts
              </h3>
            </div>

            {/* Structured Concept List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CORE_CS_CONCEPTS.map((concept, index) => {
                const ConceptIcon = concept.icon;
                return (
                  <motion.div
                    key={concept.name}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-3.5 p-3 rounded-xl bg-bg-surface border border-border-subtle hover:border-sunset-amber/10 hover:bg-sunset-amber/5 transition-all duration-200"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sunset-amber/10 text-sunset-amber">
                      <ConceptIcon size={18} />
                    </div>
                    <div className="text-left">
                      <h4 className="text-xs sm:text-sm font-bold text-text-heading m-0 mb-1">
                        {concept.name}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-text-body leading-relaxed m-0">
                        {concept.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
