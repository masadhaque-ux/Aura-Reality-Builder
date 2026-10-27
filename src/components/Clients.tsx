import React from 'react';
import { motion } from 'framer-motion';
import {
  Camera,
  ShoppingBag,
  Hexagon,
  Tv,
  Globe2,
  CreditCard,
  ArrowRight,
} from 'lucide-react';

interface ClientsProps {
  onOpenContact: () => void;
}

export const Clients: React.FC<ClientsProps> = ({ onOpenContact }) => {
  // 6 specific client logos mapped to exact Lucide icons & text as specified
  const clientLogos = [
    { name: 'Instagram', icon: Camera, color: 'hover:text-pink-400' },
    { name: 'Shopify', icon: ShoppingBag, color: 'hover:text-emerald-400' },
    { name: 'HubSpot', icon: Hexagon, color: 'hover:text-orange-400' },
    { name: 'CNBC', icon: Tv, color: 'hover:text-blue-400' },
    { name: 'BUSINESS INSIDER', icon: Globe2, color: 'hover:text-cyan-300' },
    { name: 'stripe', icon: CreditCard, color: 'hover:text-indigo-400' },
  ];

  // Repeat items to ensure seamless infinite loop animation without any blank gaps
  const tickerItems = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="relative py-24 sm:py-28 overflow-hidden bg-[#0c1128] border-b border-white/5">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          {/* Header & badge */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Trusted by 300+ businesses
            </h2>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-[#00f0ff] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
              <span>Interested</span>
            </div>
          </div>

          {/* Sub CTA link */}
          <button
            onClick={onOpenContact}
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span>Join our roster</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Infinite Ticker Track with Gradient Edge Masks */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left fade edge */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 z-20 pointer-events-none bg-gradient-to-r from-[#0c1128] via-[#0c1128]/80 to-transparent" />

        {/* Right fade edge */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 z-20 pointer-events-none bg-gradient-to-l from-[#0c1128] via-[#0c1128]/80 to-transparent" />

        {/* Moving Ticker Strip */}
        <motion.div
          className="flex items-center gap-12 sm:gap-20 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 40,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {tickerItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.name}-${index}`}
                className="flex items-center gap-3.5 text-gray-400 hover:text-white transition-colors duration-300 group cursor-default select-none py-2 px-3 rounded-xl hover:bg-white/[0.02]"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 group-hover:scale-105 transition-all duration-300">
                  <Icon className={`w-5 h-5 transition-colors ${item.color}`} />
                </div>
                <span className="font-bold text-lg sm:text-xl tracking-tight uppercase group-hover:tracking-wider transition-all duration-300">
                  {item.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
