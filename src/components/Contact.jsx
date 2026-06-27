import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Terminal, Award, Copy, Check } from 'lucide-react';
import { Github, Linkedin } from './ui/Icons';
import { Toast } from './ui/Toast';
import Magnetic from './ui/Magnetic';
import HeadingReveal from './ui/HeadingReveal';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('piyushpatil5093@gmail.com');
    setCopied(true);
  };

  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="relative pt-24 pb-12 overflow-hidden bg-transparent">
      
      {/* Contact Section Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="font-mono text-xs text-sunset-amber uppercase tracking-widest mb-2">// GET IN TOUCH</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-heading m-0 mb-4">
            <HeadingReveal text="Let's Build Something" />
          </h2>
          <p className="text-sm sm:text-base text-text-body max-w-md m-0">
            I am actively seeking SDE roles and open-source collaborations. Drop me an email or call, and let's work together!
          </p>
        </div>

        {/* Contact Info Box */}
        <div className="max-w-xl mx-auto rounded-2xl border border-border-subtle bg-bg-surface shadow-[0_8px_30px_rgba(180,80,70,0.15)] p-6 sm:p-8 backdrop-blur-sm shadow-2xl mb-16 text-left">
          
          <div className="space-y-6">
            
            {/* Email Contact */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-bg-surface border border-border-subtle hover:border-border-subtle transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sunset-amber/10 text-sunset-amber">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-mono tracking-wider text-text-body uppercase m-0 mb-0.5">Email Address</h4>
                  <a href="mailto:piyushpatil5093@gmail.com" className="text-sm sm:text-base font-bold text-text-heading hover:text-sunset-coral transition-colors duration-200">
                    piyushpatil5093@gmail.com
                  </a>
                </div>
              </div>

              <Magnetic>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border-subtle bg-bg-surface shadow-[0_8px_30px_rgba(180,80,70,0.15)] hover:bg-bg-surface-hover px-3.5 py-2 text-xs font-semibold text-text-heading transition-all duration-200 self-start sm:self-auto"
                >
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </Magnetic>
            </div>

            {/* Phone Contact */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-bg-surface border border-border-subtle hover:border-border-subtle transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sunset-amber/10 text-sunset-amber">
                <Phone size={18} />
              </div>
              <div>
                <h4 className="text-xs font-mono tracking-wider text-text-body uppercase m-0 mb-0.5">Phone Call</h4>
                <a href="tel:+917498411534" className="text-sm sm:text-base font-bold text-text-heading hover:text-sunset-coral transition-colors duration-200">
                  +91 7498411534
                </a>
              </div>
            </div>

            {/* Location Info */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-bg-surface border border-border-subtle hover:border-border-subtle transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sunset-amber/10 text-sunset-amber">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="text-xs font-mono tracking-wider text-text-body uppercase m-0 mb-0.5">Location</h4>
                <p className="text-sm sm:text-base font-bold text-text-heading m-0">
                  Pune, Maharashtra, India
                </p>
              </div>
            </div>

          </div>

          {/* Social icons row in Contact */}
          <div className="flex justify-center gap-6 mt-8 pt-8 border-t border-border-subtle">
            <Magnetic>
              <a
                href="https://github.com/piyush5093"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-body hover:text-sunset-coral transition-colors duration-200"
                title="GitHub"
              >
                <Github size={20} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://www.linkedin.com/in/piyush-patil-292842279"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-body hover:text-sunset-coral transition-colors duration-200"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://leetcode.com/u/piyush5093/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-body hover:text-sunset-coral transition-colors duration-200"
                title="LeetCode"
              >
                <Terminal size={20} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://www.geeksforgeeks.org/user/pp362bw8l/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-body hover:text-sunset-coral transition-colors duration-200"
                title="GeeksforGeeks"
              >
                <Award size={20} />
              </a>
            </Magnetic>
          </div>

        </div>

        {/* Subtle Footer divider */}
        <div className="border-t border-border-subtle mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-body gap-4">
          <p className="m-0">&copy; {currentYear} Piyush Patil. All rights reserved.</p>
          <p className="m-0">"Clean code. Real impact. Ship it."</p>
          <p className="m-0">Built with React &amp; Tailwind v4</p>
        </div>

      </div>

      {/* Copy notification Toast */}
      <Toast
        message="Email copied to clipboard!"
        isVisible={copied}
        onClose={() => setCopied(false)}
      />

    </section>
  );
}
