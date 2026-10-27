import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // "As the user scrolls [0, 50] pixels, background opacity transitions from 0.02 to 0.08 and backdrop-filter blur increases from 8px to 24px."
  const bgOpacity = useTransform(scrollY, [0, 50], [0.02, 0.08]);
  const blurAmount = useTransform(scrollY, [0, 50], [8, 24]);
  const borderOpacity = useTransform(scrollY, [0, 50], [0.1, 0.18]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Agency', href: '#agency' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <motion.nav
        aria-label="Main Navigation"
        className={`pointer-events-auto w-full max-w-5xl transition-all duration-300 relative ${
          mobileMenuOpen ? 'rounded-3xl' : 'rounded-full'
        } border border-white/10`}
        style={{
          backgroundColor: `rgba(255, 255, 255, ${bgOpacity.get()})`,
          backdropFilter: `blur(${blurAmount.get()}px)`,
          WebkitBackdropFilter: `blur(${blurAmount.get()}px)`,
          borderColor: `rgba(255, 255, 255, ${borderOpacity.get()})`,
        }}
      >
        <div className="flex items-center justify-between px-6 py-3.5 sm:py-4">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center p-[1px] shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0c1128] rounded-full flex items-center justify-center">
                <span className="font-black text-xs tracking-tighter text-white">A</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black tracking-tight text-lg text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-300 transition-colors">
                AURA<span className="text-[#00f0ff] font-bold">.</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 py-1 group"
              >
                <span>{item.name}</span>
                {/* Navigation links feature a span bottom-border that expands on hover (w-0 to w-full) */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#00f0ff] to-[#b026ff] transition-all duration-300 ease-out group-hover:w-full rounded-full" />
              </a>
            ))}
          </div>

          {/* CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0c1128] text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] cursor-pointer"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-white/10 px-6 py-6 flex flex-col gap-4"
            >
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="text-base font-medium text-gray-200 hover:text-[#00f0ff] transition-colors py-1 flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-500" />
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full py-3 rounded-full bg-white text-[#0c1128] text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  <span>Start Project</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};
