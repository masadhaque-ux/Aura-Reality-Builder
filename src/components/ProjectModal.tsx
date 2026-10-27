import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle, Sparkles, ExternalLink } from 'lucide-react';
import { ProjectData, PROJECTS } from './Work';

interface ProjectModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (p: ProjectData) => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onSelectProject,
  onOpenContact,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'impact'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0c1128]/85 backdrop-blur-xl transition-all"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          className="relative w-full max-w-4xl bg-[#0c1330] border border-white/15 rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.9)] backdrop-blur-2xl z-10 my-6 overflow-hidden max-h-[92vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff]">
                Case Study // {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close case study"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Body - Scrollable */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            {/* Visual Hero Banner */}
            <div className="relative rounded-2xl overflow-hidden border border-white/15 h-64 sm:h-80 w-full group">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1330] via-black/40 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-300">
                    {project.client} &bull; {project.year}
                  </div>
                  <h3
                    id="case-study-title"
                    className="font-black text-3xl sm:text-4xl text-white tracking-tight"
                  >
                    {project.name}
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                  <span>Production Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-4 border border-white/10 rounded-2xl p-4 sm:p-6 bg-white/[0.02]">
              {project.metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="font-black text-xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-medium text-gray-400 uppercase tracking-wider mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              {[
                { id: 'overview', label: 'Executive Overview' },
                { id: 'architecture', label: 'Technical Architecture' },
                { id: 'impact', label: 'Deliverables & Impact' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-white text-[#0c1128] shadow-md'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-white">The Challenge &amp; Solution</h4>
                <p className="text-gray-300 font-light leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                  Working closely with {project.client}, our multi-disciplinary team refactored the entire user journey, stripped away cognitive overhead, and introduced real-time spatial interaction paradigms that elevated engagement metrics far beyond industry benchmarks.
                </p>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-white">Core Engineering Stack</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['React 19 / Next.js', 'WebGPU & Canvas', 'Tailwind CSS Engine', 'Edge Micro-Services'].map(
                    (tech) => (
                      <div
                        key={tech}
                        className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-gray-200 text-center"
                      >
                        {tech}
                      </div>
                    )
                  )}
                </div>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  Implemented zero-layout-shift asset streaming with instant sub-second transitions and GPU-accelerated micro-animations.
                </p>
              </div>
            )}

            {activeTab === 'impact' && (
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-white">Shipped Deliverables</h4>
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-300"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#00f0ff]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Other Projects Quick Switcher */}
            <div className="pt-4 border-t border-white/10">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                Switch to Another Project
              </div>
              <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
                {PROJECTS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => onSelectProject(p)}
                    className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl border text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                      p.id === project.id
                        ? 'border-[#00f0ff] bg-white/10 text-white'
                        : 'border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <span>{p.name}</span>
                    <span className="text-[10px] font-normal text-gray-400">({p.category})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="px-6 sm:px-8 py-5 border-t border-white/10 bg-white/[0.02] flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-6 py-2.5 rounded-full bg-white text-[#0c1128] text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.25)] cursor-pointer"
            >
              <span>Build Something Like This</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
