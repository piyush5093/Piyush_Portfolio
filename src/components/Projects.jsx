import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Image, AlertCircle, X, Check, Star, Code2, ArrowRight } from 'lucide-react';
import { Github } from './ui/Icons';
import { TiltCard } from './ui/TiltCard';
import HeadingReveal from './ui/HeadingReveal';
import Magnetic from './ui/Magnetic';
import TerminalProjectSwitcher from './ui/TerminalProjectSwitcher';

const FILTERS = ['All', 'AI & GenAI', 'Full-Stack', 'Tools & Scripts'];

const PROJECTS_DATA = [
  // Featured Projects
  {
    id: 'codeverse',
    title: 'CodeVerse — AI Coding Education Platform',
    featured: true,
    category: 'Full-Stack',
    isAI: true,
    color: '#6366f1', // Indigo accent
    recruiterHighlight: '⚡ Context-Aware Gemini AI Integration & Interactive DSA Sandbox',
    tech: ['React.js v18', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Gemini AI', 'Razorpay', 'Cloudinary'],
    image: '/project-images/CodeVerse.png',
    description: 'A full ed-tech platform where students browse courses, track progress, and watch video lectures, while instructors get a full creation and analytics dashboard. Features a context-aware Gemini AI chatbot that adapts help to the specific course, an interactive DSA visualizer sandbox, and a gamified adventure coding game.',
    highlights: [
      'Context-aware Gemini AI tutor that adapts answers based on course context',
      'Embedded DSA visualizer sandbox (sorting, searching, graphs, trees) with execution-speed controls',
      'Embedded "CodeVerse Adventure" coding game (Phaser.js-powered, fullscreen-capable)',
      'Razorpay payment gateway integration (UPI + cards) for course purchases',
      'SMTP OTP authentication with automatic failover fallback'
    ],
    github: 'https://github.com/piyush5093/CodeVerse',
    demo: 'https://code-verse-lweh.vercel.app/'
  },
  {
    id: 'algoai',
    title: 'AlgoAI — Premium DSA Visualizer & AI Tutor',
    featured: true,
    category: 'AI & GenAI',
    isAI: true,
    color: '#a855f7', // Purple accent
    recruiterHighlight: '📊 10+ Interactive DSA Visualizers & Groq Llama 3 Complexity Analyzer',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Groq API (Llama 3)'],
    image: '/project-images/AlgoAI.png',
    description: 'An interactive platform that makes learning Data Structures & Algorithms intuitive by visually animating algorithm execution step-by-step — similar to a Python Tutor for DSA — combined with an integrated Groq-powered AI tutor for instant guidance.',
    highlights: [
      '10+ visualizations: sorting (Merge, Quick, Bubble, etc.), searching, linked lists, stacks, queues, BST, Dijkstra',
      'Code execution simulator animating memory allocation and pointer references line-by-line',
      'Groq-powered AI chat assistant for algorithm questions and complexity analysis',
      'Interactive quiz generator mode adapted to studied algorithms'
    ],
    github: 'https://github.com/piyush5093/AlgoAI',
    demo: 'https://algo-ai-rosy.vercel.app/'
  },
  {
    id: 'flowsync',
    title: 'FlowSync — AI-Powered Team Standup Manager',
    featured: true,
    category: 'Full-Stack',
    isAI: true,
    color: '#10b981', // Emerald accent
    recruiterHighlight: '🎙️ Web Speech voice standups & Groq standup summarization pipeline',
    tech: ['React v19', 'Vite', 'Tailwind CSS v4', 'Node.js', 'Express.js', 'MongoDB', 'Groq (Llama 3.1)', 'Recharts'],
    image: '/project-images/FlowSync.png',
    description: 'An asynchronous standup platform replacing time-consuming daily meetings. Team members submit text or audio updates; AI transcribes, analyzes sentiment, summarizes work, and flags blockers for managers via a real-time dashboard.',
    highlights: [
      'Voice-to-text updates powered by the native browser Web Speech API',
      'Groq Llama 3.1 AI sentiment, standup summary, and blocker analysis pipelines',
      'Manager dashboard: team metrics, AI summaries, blocker alerts, coaching notes, and activity charts',
      'JWT authentication with role-based access controls and invite-code generation'
    ],
    github: 'https://github.com/piyush5093/FlowSync',
    demo: 'https://flow-sync-lake.vercel.app/'
  },
  {
    id: 'codeverse-adventure',
    title: 'CodeVerse Adventure — Gamified Coding Platform',
    featured: true,
    category: 'Full-Stack',
    isAI: false,
    color: '#f59e0b', // Amber accent
    recruiterHighlight: '🎮 Phaser.js 2D world sync & real-time Judge0 compiler integration',
    tech: ['React 18', 'Vite', 'Phaser.js', 'Monaco Editor', 'Node.js', 'Express.js', 'Judge0 API'],
    image: '/project-images/CodeVerse-Adventure.png',
    description: 'A "Duolingo meets adventure game" for learning programming. Players write and execute real code (Python, Java, C++, JS) to solve puzzles, directly manipulating the 2D game world to clear levels.',
    highlights: [
      'Real code execution and testing powered by the Judge0 API',
      '10 levels with 50 total tasks covering loops, arrays, strings, recursion, sorting, and debugging',
      'Phaser.js 2D game world that visually reacts to successful code execution',
      'Monaco Editor integration for professional-grade developer experience'
    ],
    github: 'https://github.com/piyush5093/Codeverse-Adventure',
    demo: 'https://codeverse-adventure.vercel.app/'
  },
  // Secondary Projects
  {
    id: 'codemeet',
    title: 'CodeMeet — Technical Interview Platform',
    featured: false,
    category: 'Full-Stack',
    isAI: false,
    tech: ['React', 'Node.js', 'Clerk Auth', 'Stream Video', 'Monaco Editor', 'Inngest', 'MongoDB'],
    image: '/project-images/CodeMeet.png',
    description: 'Platform for running live 1-on-1 technical interviews with code execution and video calling.',
    highlights: [
      'VSCode editor with secure code execution sandbox against test cases',
      'Live 1-on-1 video rooms with screen sharing, screen recording, and chat',
      'Inngest handle background tasks and Clerk handle authentication flows'
    ],
    github: 'https://github.com/piyush5093/CodeMeet',
    demo: 'https://codemeet-win7.onrender.com/',
    isRenderFree: true
  },
  {
    id: 'thumbster',
    title: 'Thumbster — AI Thumbnail Generator',
    featured: false,
    category: 'AI & GenAI',
    isAI: true,
    tech: ['TypeScript', 'React.js', 'Node.js', 'Express.js'],
    image: '/project-images/Thumbster.png',
    description: 'AI-driven pipeline creating customized thumbnails based on user-specified prompts.',
    highlights: [
      'Full-stack TypeScript architecture with clean separation of client and server code',
      'Tailored AI generations matching creator-defined styles and text requirements'
    ],
    github: 'https://github.com/piyush5093/Thumbster',
    demo: 'https://thumbster-server.vercel.app/'
  },
  {
    id: 'medislot',
    title: 'MediSlot — Health Record System',
    featured: false,
    category: 'Full-Stack',
    isAI: false,
    tech: ['Node.js', 'Express.js', 'EJS', 'MongoDB', 'HTML5', 'CSS3', 'JavaScript'],
    image: '/project-images/MediSlot-VHR.png',
    description: 'EY GDS internship project. Secure system for doctor appointments and patient health histories.',
    highlights: [
      'Secure authentication profiles for both patients and medical doctors',
      'Track medical histories, diagnoses, dosage prescription checklists, and appointments'
    ],
    github: 'https://github.com/piyush5093/MediSlot',
    demo: 'https://medislot-ey2e.onrender.com/',
    isRenderFree: true
  },
  {
    id: 'chatinsider',
    title: 'ChatInsider — WhatsApp Chat Analytics',
    featured: false,
    category: 'Tools & Scripts',
    isAI: false,
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    image: '/project-images/ChatInsider.png',
    description: 'Data analysis tool mapping raw WhatsApp chat exports to rich user metrics and trends.',
    highlights: [
      'Timeline frequency analysis detailing hourly, daily, and weekly chat patterns',
      'Hinglish-aware stopword filtering to ensure clean keyword cloud generation',
      'Ranks top contributors, message types, and active group discussion days'
    ],
    github: 'https://github.com/piyush5093/ChatInsider',
    demo: null // No live demo
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      window.lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      window.lenis?.start();
      document.body.style.overflow = '';
    }
    return () => {
      window.lenis?.start();
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'AI & GenAI') return proj.isAI;
    if (activeFilter === 'Full-Stack') return proj.category === 'Full-Stack';
    if (activeFilter === 'Tools & Scripts') return proj.category === 'Tools & Scripts';
    return true;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const secondaryProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="flex flex-col items-start">
            <span className="font-mono text-xs text-sunset-amber uppercase tracking-widest mb-2">// MY WORK</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-heading m-0">
              <HeadingReveal text="Featured Projects" />
            </h2>
          </div>
        </div>

        {/* Terminal Project Switcher */}
        <TerminalProjectSwitcher projects={featuredProjects} />

        {/* Featured Projects Grid - Split Horizontal Cards on Desktop */}
        <div className="space-y-12 mb-20 mt-4">
          <AnimatePresence mode="popLayout">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                id={`project-${project.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard 
                  className="w-full p-0 overflow-hidden hover:border-border-subtle"
                  hoverable={true}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full">
                    
                    {/* Left: Interactive Media Mockup Frame */}
                    <div 
                      className="lg:col-span-5 relative aspect-video lg:aspect-auto min-h-[220px] lg:min-h-full overflow-hidden cursor-pointer group"
                      onClick={() => setSelectedProject(project)}
                      data-cursor="project"
                    >
                      {/* Brand themed backdrop glow gradient */}
                      <div 
                        style={{ background: `radial-gradient(circle at center, ${project.color}25 0%, transparent 75%)` }}
                        className="absolute inset-0 z-0 opacity-100 group-hover:scale-110 transition-transform duration-700" 
                      />
                      
                      {/* Image zoom on hover */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover object-top filter brightness-[0.88] group-hover:brightness-[0.96] transition-all duration-700 ease-out group-hover:scale-[1.04]"
                        loading="lazy"
                      />

                      {/* Glass Grid scanning overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100%_4px] opacity-25 pointer-events-none" />

                      {/* Hover Expand overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                        <span className="rounded-full bg-black/60 border border-border-subtle p-3 text-text-heading scale-90 group-hover:scale-100 transition-transform duration-300">
                          <Image size={18} />
                        </span>
                      </div>

                      {/* Tag Badge overlay */}
                      <span className="absolute top-4 left-4 z-10 rounded-md bg-black/50 border border-border-subtle backdrop-blur-md px-2.5 py-1 text-[9px] font-mono tracking-widest text-text-heading uppercase">
                        {project.category}
                      </span>
                    </div>

                    {/* Right: Detailed Content section */}
                    <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between relative z-10">
                      
                      {/* Accent glow on hover corners */}
                      <div 
                        style={{ boxShadow: `0 0 40px ${project.color}08` }}
                        className="absolute inset-0 -z-10 pointer-events-none rounded-r-2xl" 
                      />

                      <div className="space-y-4 text-left">
                        {/* Recruiter Quick Fact Pill */}
                        <div className="inline-flex">
                          <span 
                            style={{ color: project.color, borderColor: `${project.color}25`, backgroundColor: `${project.color}05` }}
                            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-semibold font-mono uppercase tracking-wider shadow-sm"
                          >
                            <Star size={10} fill="currentColor" />
                            {project.recruiterHighlight}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 
                          className="text-xl sm:text-2xl font-bold tracking-tight text-text-heading hover:text-sunset-coral transition-colors duration-200 cursor-pointer m-0"
                          onClick={() => setSelectedProject(project)}
                        >
                          {project.title.split('—')[1] ? project.title.split('—')[1].trim() : project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-text-body leading-relaxed m-0">
                          {project.description}
                        </p>

                        {/* Staggered mini checkmark list for desktop */}
                        <ul className="hidden sm:grid grid-cols-2 gap-x-4 gap-y-1.5 p-0 m-0 list-none text-xs text-text-body/80">
                          {project.highlights.slice(0, 4).map((h, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-1.5 truncate">
                              <Check size={12} style={{ color: project.color }} className="shrink-0 mt-0.5" />
                              <span className="truncate">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Footer Actions & Tech pills */}
                      <div className="mt-8 space-y-4">
                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-md bg-bg-surface border border-border-subtle px-2.5 py-0.5 text-[9px] font-mono text-text-heading"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center gap-3 pt-4 border-t border-border-subtle relative z-20">
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ backgroundColor: project.color }}
                              className="flex items-center gap-1.5 rounded-lg px-4.5 py-2 text-xs font-bold text-white shadow-lg hover:brightness-110 transition-all duration-200"
                            >
                              Live Demo
                              <ExternalLink size={12} />
                            </a>
                          )}
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 rounded-lg border border-border-subtle bg-bg-surface shadow-[0_8px_30px_rgba(180,80,70,0.15)] hover:bg-bg-surface-hover px-4.5 py-2 text-xs font-bold text-text-heading transition-all duration-300"
                          >
                            <Github size={12} />
                            Code
                          </a>
                          <button
                            onClick={() => setSelectedProject(project)}
                            style={{ color: project.color }}
                            className="ml-auto flex items-center gap-1 text-xs font-bold font-mono hover:brightness-125 tracking-wider transition-all duration-200"
                          >
                            DETAILS &rarr;
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Secondary Projects Title */}
        {secondaryProjects.length > 0 && (
          <div className="border-t border-border-subtle pt-16 mb-10 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-text-heading m-0">More Shipped Projects</h3>
          </div>
        )}

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {secondaryProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard className="h-full flex flex-col justify-between p-0 overflow-hidden hover:border-border-subtle" hoverable={true}>
                  {/* Image Container */}
                  <div 
                    className="relative aspect-video w-full overflow-hidden cursor-pointer group/sec"
                    onClick={() => setSelectedProject(project)}
                    data-cursor="project"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-top filter brightness-[0.88] group-hover/sec:brightness-[0.96] transition-all duration-500 ease-out group-hover/sec:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/sec:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="rounded-full bg-black/60 border border-border-subtle p-2 text-text-heading scale-90 group-hover/sec:scale-100 transition-transform duration-300">
                        <Image size={14} />
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-3 text-left">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] tracking-wider text-sunset-amber uppercase">
                          {project.category}
                        </span>
                        {project.isAI && (
                          <span className="rounded-full bg-sunset-amber/10 border border-sunset-amber/20 px-2 py-0.5 text-[8px] font-mono tracking-widest text-sunset-coral uppercase">
                            AI
                          </span>
                        )}
                      </div>

                      <h4 
                        className="text-base font-bold text-text-heading hover:text-sunset-coral transition-colors duration-200 cursor-pointer m-0 line-clamp-1"
                        onClick={() => setSelectedProject(project)}
                      >
                        {project.title.split('—')[0].trim()}
                      </h4>

                      <p className="text-xs sm:text-sm text-text-body leading-relaxed line-clamp-3 m-0">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 pt-1">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded bg-bg-surface px-1.5 py-0.5 text-[9px] font-mono text-text-heading"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      {/* Render Wake Up Warning */}
                      {project.isRenderFree && (
                        <div className="flex items-center gap-1 text-[10px] font-mono text-amber-400/80 mt-4 mb-2 bg-amber-400/5 border border-amber-400/10 rounded-md p-1.5 text-left">
                          <AlertCircle size={10} className="shrink-0" />
                          <span>may take ~20s to wake up</span>
                        </div>
                      )}

                      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border-subtle relative z-20">
                        {project.demo ? (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 rounded bg-sunset-deep hover:bg-sunset-coral px-3 py-1.5 text-[10px] font-semibold text-white transition-all duration-300"
                          >
                            Demo
                            <ExternalLink size={10} />
                          </a>
                        ) : (
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="flex items-center gap-1 rounded border border-border-subtle bg-bg-surface shadow-[0_8px_30px_rgba(180,80,70,0.15)] hover:bg-bg-surface-hover px-3 py-1.5 text-[10px] font-semibold text-text-heading transition-all duration-300"
                          >
                            <Image size={10} />
                            Screenshots
                          </button>
                        )}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 rounded border border-border-subtle bg-bg-surface shadow-[0_8px_30px_rgba(180,80,70,0.15)] hover:bg-bg-surface-hover px-3 py-1.5 text-[10px] font-semibold text-text-heading transition-all duration-300"
                        >
                          <Github size={10} />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Detail Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 15 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d0d14] via-[#08080d] to-[#040408] p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] scrollbar-hide"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Subtle ambient gradient glow matching project color */}
              <div 
                className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none" 
                style={{ background: `radial-gradient(circle, ${selectedProject.color} 0%, transparent 70%)` }}
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 rounded-full border border-white/10 bg-black/60 p-2 text-text-muted hover:text-text-heading hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <X size={16} />
              </button>

              {/* Mockup Browser Window Frame for Screenshot */}
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#07070a] mb-6 shadow-xl z-10">
                {/* Browser top bar */}
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white/5 border-b border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  <div className="text-[10px] text-text-muted/60 font-mono ml-4 truncate">
                    {selectedProject.demo || `https://github.com/piyush5093/${selectedProject.id}`}
                  </div>
                </div>
                <div className="p-2 sm:p-4 bg-[#0a0a0f]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full rounded-lg object-contain max-h-[350px] mx-auto shadow-md"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="space-y-6 text-left relative z-10">
                <div>
                  <span 
                    className="font-mono text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/5"
                    style={{ color: selectedProject.color }}
                  >
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-heading mt-3 mb-2">
                    {selectedProject.title}
                  </h3>
                  
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        style={{ 
                          borderColor: `${selectedProject.color}25`, 
                          backgroundColor: `${selectedProject.color}05`, 
                          color: selectedProject.color 
                        }}
                        className="rounded-md border px-2.5 py-0.5 text-[10px] font-mono font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono tracking-widest text-text-muted uppercase m-0">// Overview</h4>
                  <p className="text-sm sm:text-base text-text-body leading-relaxed m-0">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-mono tracking-widest text-text-muted uppercase m-0">// Key Features & Highlights</h4>
                  <ul className="space-y-3 p-0 m-0 list-none">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-text-body/90 leading-relaxed">
                        <div 
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5 text-white"
                          style={{ backgroundColor: `${selectedProject.color}20`, color: selectedProject.color }}
                        >
                          <Check size={11} />
                        </div>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10 mt-8">
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ backgroundColor: selectedProject.color }}
                      className="flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg shadow-black/30 hover:brightness-110 active:scale-[0.98] transition-all duration-200"
                    >
                      Live Demo
                      <ExternalLink size={14} />
                    </a>
                  )}
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3 text-sm font-bold text-text-heading active:scale-[0.98] transition-all duration-300"
                  >
                    <Github size={14} />
                    GitHub Repository
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
