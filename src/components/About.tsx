import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Users2, Zap, ShieldCheck, HeartHandshake } from 'lucide-react';

interface AboutProps {
  onOpenContact: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  const stats = [
    {
      value: '10+',
      label: 'Years Experience',
      sublabel: 'Mastering digital frontier',
    },
    {
      value: '150+',
      label: 'Global Clients',
      sublabel: 'Across 24 countries',
    },
    {
      value: '$450M+',
      label: 'Client Capital Raised',
      sublabel: 'Post-redesign impact',
    },
    {
      value: '99.4%',
      label: 'Client Satisfaction',
      sublabel: 'Long-term partnerships',
    },
  ];

  const recognitions = [
    { name: 'Awwwards Site of the Year', year: '2025' },
    { name: 'FWA of the Month (x8)', year: '2024-2026' },
    { name: 'Red Dot: Best of the Best', year: '2025' },
    { name: 'Fast Company World Changing Ideas', year: '2025' },
  ];

  return (
    <section id="agency" className="relative py-32 bg-[#0c1128] overflow-hidden">
      {/* Background Detail: Center-positioned absolute blurred purple circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Content: 2-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column: Bold Headline & Ethos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 self-start">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-purple-300">
                Agency Ethos // Who We Are
              </span>
            </div>

            {/* Bold Headline */}
            <h2 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.08] text-white">
              Design is not just what it looks like.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-purple-500">
                It's how it feels.
              </span>
            </h2>

            {/* Interactive quote author */}
            <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/10">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#00f0ff] to-[#b026ff] p-[2px]">
                <div className="w-full h-full rounded-full bg-[#0c1128] flex items-center justify-center font-bold text-sm text-white">
                  AO
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-white tracking-wide">
                  Aura Executive Leadership
                </p>
                <p className="text-xs font-light text-gray-400">
                  Global Creative Direction &amp; Systems Engineering
                </p>
              </div>
            </div>

            {/* Accolades List */}
            <div className="mt-12 bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
              <div className="text-xs font-bold uppercase tracking-widest text-[#00f0ff] mb-4 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Industry Recognitions</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recognitions.map((item) => (
                  <div key={item.name} className="flex flex-col border-l border-white/10 pl-3">
                    <span className="text-sm font-semibold text-gray-200">{item.name}</span>
                    <span className="text-xs text-gray-400 font-light">{item.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Paragraph Descriptions + Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-between space-y-12"
          >
            {/* Paragraph Descriptions */}
            <div className="space-y-6 text-gray-300 font-light text-base sm:text-lg leading-relaxed">
              <p>
                We are an independent creative agency and technology lab operating at the convergence of high-craft aesthetics, emerging artificial intelligence, and scalable web engineering.
              </p>
              <p>
                Founded on the belief that ordinary software is invisible, we collaborate with trailblazing founders and global category leaders to create unforgettable digital flagships that command market leadership and deliver unprecedented commercial velocity.
              </p>
            </div>

            {/* Statistics 2x2 Grid */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-6 border-t border-white/10">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-md group hover:border-white/20 transition-all duration-300"
                >
                  <div className="font-black text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 group-hover:from-[#00f0ff] group-hover:to-white transition-all">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs sm:text-sm font-bold tracking-tight text-white uppercase">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-[11px] font-light text-gray-400">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>

            {/* Strategic Call to Action */}
            <div className="pt-4">
              <button
                onClick={onOpenContact}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer"
              >
                Inquire about availability for Q3/Q4
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
