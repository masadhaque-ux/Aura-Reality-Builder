import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Twitter,
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative pt-28 pb-16 bg-[#0c1128] border-t border-white/10 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Massive Bold CTA Headline Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center pb-24 border-b border-white/10 flex flex-col items-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff]">
              Initiate Collaboration
            </span>
          </div>

          {/* Massive bold CTA headline */}
          <h2 className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[1.0] text-white max-w-4xl mx-auto">
            Let's create something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-purple-400">
              epic.
            </span>
          </h2>

          <p className="mt-6 text-gray-300 font-light text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Have a breakthrough concept, ambitious rebrand, or complex enterprise product? We turn visionary ideas into category-defining reality.
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <button
              onClick={onOpenContact}
              className="px-9 py-4 rounded-full bg-white text-[#0c1128] font-bold text-sm tracking-wider uppercase inline-flex items-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </motion.div>

        {/* 4-Column Links Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center p-[1px]">
                <div className="w-full h-full bg-[#0c1128] rounded-full flex items-center justify-center">
                  <span className="font-black text-xs text-white">A</span>
                </div>
              </div>
              <span className="font-black tracking-tight text-xl text-white">
                AURA<span className="text-[#00f0ff]">.</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Award-winning digital agency crafting iconic experiences, hyper-scalable cloud applications, and future-forward design systems.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-medium text-gray-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for new projects Q3 2026</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm text-gray-400 font-medium">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-white transition-colors"
                >
                  Services &amp; Capabilities
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  onClick={(e) => handleNavClick(e, '#work')}
                  className="hover:text-white transition-colors"
                >
                  Selected Works
                </a>
              </li>
              <li>
                <a
                  href="#agency"
                  onClick={(e) => handleNavClick(e, '#agency')}
                  className="hover:text-white transition-colors"
                >
                  Agency Ethos &amp; Team
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Project Estimator
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Capabilities */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-white">
              Capabilities
            </div>
            <ul className="space-y-2.5 text-sm text-gray-400 font-medium">
              <li className="hover:text-gray-200 transition-colors">UI/UX Systems &amp; Prototyping</li>
              <li className="hover:text-gray-200 transition-colors">Visual Graphic &amp; 3D Motion</li>
              <li className="hover:text-gray-200 transition-colors">Strategic Product Discovery</li>
              <li className="hover:text-gray-200 transition-colors">Full-Stack Cloud Engineering</li>
              <li className="hover:text-gray-200 transition-colors">Spatial &amp; AI Workflows</li>
            </ul>
          </div>

          {/* Col 4: Studios & Socials */}
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-white">
              Global Studios
            </div>
            <div className="space-y-2 text-sm text-gray-400 font-light">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>San Francisco // New York // London</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#b026ff]" />
                <a
                  href="mailto:hello@aura-agency.design"
                  className="hover:text-white transition-colors"
                >
                  hello@aura-agency.design
                </a>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-widest text-white mb-3">
                Connect
              </div>
              <div className="flex items-center gap-3">
                {[
                  { icon: Twitter, label: 'Twitter / X', href: 'https://twitter.com' },
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                  { icon: Github, label: 'GitHub', href: 'https://github.com' },
                  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:scale-110 transition-all duration-200"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Privacy Policy, Terms of Service */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-gray-500">
          <div>
            &copy; {currentYear} AURA Creative Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Security &amp; Compliance
            </a>
            <div className="flex items-center gap-1.5 text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              <span>Systems 100% Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
