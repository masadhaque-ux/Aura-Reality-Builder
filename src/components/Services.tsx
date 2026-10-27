import React from 'react';
import { motion } from 'framer-motion';
import {
  Layout,
  Palette,
  Compass,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const serviceItems = [
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      category: 'Interface & Systems',
      description:
        'Crafting frictionless, deeply engaging digital experiences from spatial interaction architectures to complete enterprise design systems and clickable high-fidelity prototypes.',
      icon: Layout,
      tags: ['Design Systems', 'Micro-Interactions', 'User Journeys', 'Wireframing & Prototypes'],
      gradient: 'from-blue-500/20 to-cyan-500/10',
      iconColor: 'text-[#00f0ff]',
      corner: 'top-right',
    },
    {
      id: 'visual-graphic',
      title: 'Visual Graphic',
      category: 'Brand & Identity',
      description:
        'Sculpting iconic visual languages, generative art directions, 3D motion assets, and memorable typography systems that establish unmatched market distinction.',
      icon: Palette,
      tags: ['Brand Identity', '3D Motion Graphics', 'Art Direction', 'Custom Typography'],
      gradient: 'from-purple-500/20 to-pink-500/10',
      iconColor: 'text-[#b026ff]',
      corner: 'top-right',
    },
    {
      id: 'strategy',
      title: 'Digital Strategy',
      category: 'Positioning & Discovery',
      description:
        'Unlocking exponential value through market research, conversion funnel optimization, user behavioral analysis, and future-proof digital product roadmapping.',
      icon: Compass,
      tags: ['Product Discovery', 'Conversion Audits', 'Go-To-Market', 'Tech Architecture'],
      gradient: 'from-cyan-500/20 to-blue-500/10',
      iconColor: 'text-cyan-400',
      corner: 'top-right',
    },
    {
      id: 'business-growth',
      title: 'Business Growth',
      category: 'Scale & Engineering',
      description:
        'Powering high-velocity web performance, enterprise cloud architectures, search engine dominance, and data pipelines built for hyper-scaling brands.',
      icon: TrendingUp,
      tags: ['Full-Stack Engineering', 'Performance Audits', 'SEO Domination', 'Analytics & AI'],
      gradient: 'from-purple-500/20 to-blue-500/10',
      iconColor: 'text-blue-400',
      corner: 'top-right',
    },
  ];

  return (
    <section id="services" className="relative py-32 bg-[#0c1128] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff]">
              Capabilities // 04 Pillars
            </span>
          </div>

          <h2 className="font-black text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-[1.08] text-white">
            Services Built Specifically for your Business
          </h2>

          <p className="mt-5 text-gray-400 text-base sm:text-lg font-light leading-relaxed">
            We merge bespoke aesthetic elegance with rigorous full-stack engineering to build enduring digital superiority for modern companies.
          </p>
        </motion.div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {serviceItems.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/25 rounded-3xl p-8 sm:p-10 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >
                {/* Quarter-Circle Icon Container situated in the top-right corner of the card */}
                <div className="absolute top-0 right-0 w-28 h-28 sm:w-32 sm:h-32 rounded-bl-[100%] bg-gradient-to-br from-white/10 via-white/5 to-transparent border-l border-b border-white/10 flex items-start justify-end p-5 sm:p-6 transition-all duration-500 group-hover:scale-105 group-hover:from-white/15">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-[#00f0ff]/50 transition-all duration-300">
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${service.iconColor}`} />
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="pr-16 sm:pr-20">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                    {service.category}
                  </div>
                  <h3 className="font-black text-2xl sm:text-3xl tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-gray-300 font-light text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Tags & Action Button */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/5 text-[11px] font-medium text-gray-300 group-hover:border-white/15 transition-colors"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#00f0ff]/80" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#00f0ff] transition-colors cursor-pointer"
                  >
                    <span>Request proposal for {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>

                {/* Subtle corner hover highlight */}
                <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
