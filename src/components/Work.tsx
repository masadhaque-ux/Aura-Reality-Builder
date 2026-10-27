import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react';

export interface ProjectData {
  id: string;
  name: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  image: string;
  client: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
}

export const PROJECTS: ProjectData[] = [
  {
    id: 'pixzen',
    name: 'Pixzen',
    category: 'AI Creative Suite',
    year: '2026',
    tagline: 'Generative Canvas for Next-Gen Creators',
    description:
      'A real-time vector and spatial canvas platform combining multi-modal generative AI pipelines with ultra-low latency WebGPU rendering for enterprise design teams.',
    image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781522720269-Pixzen.webp',
    client: 'Pixzen Labs Inc.',
    deliverables: ['Web Application', 'Design System', 'Spatial UI/UX', 'Cloud Infrastructure'],
    metrics: [
      { label: 'Active Creators', value: '420K+' },
      { label: 'Render Latency', value: '<12ms' },
      { label: 'Series A Raised', value: '$28M' },
    ],
  },
  {
    id: 'wander',
    name: 'Wander',
    category: 'Luxury Hospitality',
    year: '2026',
    tagline: 'Architectural Escapes & Concierge Discovery',
    description:
      'Immersive digital gateway to handpicked luxury architectural properties featuring photorealistic 3D virtual walkthroughs and algorithmic concierge curation.',
    image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781631791578-Wander_Hero.webp',
    client: 'Wander Hospitality Group',
    deliverables: ['Mobile Experience', 'Direct Booking Engine', 'Brand World', 'Headless CMS'],
    metrics: [
      { label: 'Direct Bookings', value: '+184%' },
      { label: 'Avg Stay Value', value: '$6,400' },
      { label: 'App Store Rating', value: '4.9/5' },
    ],
  },
  {
    id: 'agentify',
    name: 'Agentify',
    category: 'Enterprise AI Ecosystem',
    year: '2025',
    tagline: 'Autonomous Intelligence Orchestration',
    description:
      'Next-generation collaborative platform empowering Fortune 500 enterprises to deploy, monitor, and coordinate fleets of specialized autonomous software agents.',
    image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781671943344-Agentify_Hero.webp',
    client: 'Agentify Systems',
    deliverables: ['SaaS Design', 'Real-Time Telemetry', 'Multi-Agent Graph UI', 'API Portal'],
    metrics: [
      { label: 'Tasks Automated', value: '1.2B/mo' },
      { label: 'Efficiency Gain', value: '62%' },
      { label: 'Fortune 100 Clients', value: '34' },
    ],
  },
  {
    id: 'future',
    name: 'Future',
    category: 'Electric Mobility',
    year: '2025',
    tagline: 'Intelligent Cockpit & Connected Vehicle UI',
    description:
      'Ultra-responsive in-vehicle infotainment operating system, telematics analytics dashboard, and companion mobile ecosystem for luxury EV platforms.',
    image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781679053418-Future_Carousel.webp',
    client: 'Future Dynamics',
    deliverables: ['In-Car OS Concept', 'Companion iOS/Android', 'Design Tokens', 'Telematics Visualizer'],
    metrics: [
      { label: 'Vehicles Deployed', value: '85,000+' },
      { label: 'Driver Satisfaction', value: '98.2%' },
      { label: 'Red Dot Award', value: 'Best of Best' },
    ],
  },
  {
    id: 'genova',
    name: 'Genova',
    category: 'Biotechnology Cloud',
    year: '2025',
    tagline: 'Genomic Sequencing & Precision Discovery',
    description:
      'A mission-critical bioinformatics workstation facilitating real-time genomic variant visual analysis and molecular pathway simulations for oncology researchers.',
    image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781670271708-Genova_Hero.webp',
    client: 'Genova Biosystems',
    deliverables: ['Scientific Data Viz', 'Cloud Platform', 'Design System', 'Interactive 3D Viewer'],
    metrics: [
      { label: 'Sequences Processed', value: '14 PB' },
      { label: 'Analysis Speedup', value: '14x' },
      { label: 'Research Labs', value: '180+' },
    ],
  },
];

interface WorkProps {
  onSelectProject: (project: ProjectData) => void;
  onViewAllProjects: () => void;
}

export const Work: React.FC<WorkProps> = ({ onSelectProject, onViewAllProjects }) => {
  // Default first project active or hovered
  const [activeId, setActiveId] = useState<string>(PROJECTS[0].id);

  return (
    <section id="work" className="relative py-32 bg-[#0c1128] overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Title and "View All Projects" link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff]">
                Featured Portfolio // 05 Highlights
              </span>
            </div>
            <h2 className="font-black text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-tight text-white">
              Our Works
            </h2>
          </div>

          <button
            onClick={onViewAllProjects}
            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span className="border-b border-transparent group-hover:border-white transition-all pb-0.5">
              View All Projects
            </span>
            <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#00f0ff]/50 transition-all">
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:text-[#00f0ff] transition-colors" />
            </div>
          </button>
        </motion.div>

        {/* Expanding Flex Gallery Container */}
        {/* Horizontal on desktop (md:flex-row), vertical on mobile */}
        {/* Transition ease [0.25, 1, 0.5, 1], duration 0.6s. Active flex value 4, inactive flex value 0.8 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 h-[750px] sm:h-[650px] md:h-[480px] lg:h-[520px] w-full"
        >
          {PROJECTS.map((project) => {
            const isActive = activeId === project.id;

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setActiveId(project.id)}
                onClick={() => {
                  setActiveId(project.id);
                  onSelectProject(project);
                }}
                animate={{
                  flex: isActive ? 4 : 0.8,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-white/30 transition-colors shadow-2xl flex-1 flex flex-col justify-end p-6 sm:p-8"
              >
                {/* Background Image with slow hover zoom */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} - ${project.category}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  {/* Dark gradient overlays */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                {/* Top Corner Pill (Always Visible) */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[11px] font-bold tracking-widest uppercase text-white/90">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:text-white group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 w-full">
                  {/* Minimal Title shown when collapsed */}
                  {!isActive && (
                    <div className="hidden md:block">
                      <h3 className="font-black text-2xl tracking-tight text-white whitespace-nowrap">
                        {project.name}
                      </h3>
                      <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                        {project.year}
                      </p>
                    </div>
                  )}

                  {/* Expanded Content Details */}
                  {isActive ? (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 }}
                      className="space-y-3"
                    >
                      <div className="text-xs font-bold uppercase tracking-widest text-[#00f0ff]">
                        {project.year} // {project.client}
                      </div>

                      <h3 className="font-black text-3xl sm:text-4xl md:text-5xl tracking-tighter text-white">
                        {project.name}
                      </h3>

                      <p className="text-sm sm:text-base font-light text-gray-200 line-clamp-2 max-w-xl leading-relaxed">
                        {project.description}
                      </p>

                      <div className="pt-2 flex items-center gap-4">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectProject(project);
                          }}
                          className="px-5 py-2.5 rounded-full bg-white text-[#0c1128] text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2 hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                        >
                          <span>Explore Case Study</span>
                          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    // On mobile, show title and brief details even if not desktop-active
                    <div className="md:hidden">
                      <h3 className="font-black text-2xl tracking-tight text-white">
                        {project.name}
                      </h3>
                      <p className="text-xs text-gray-300 mt-1">{project.tagline}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
