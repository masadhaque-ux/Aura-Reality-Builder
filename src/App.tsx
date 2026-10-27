/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Clients } from './components/Clients';
import { Services } from './components/Services';
import { Work, ProjectData, PROJECTS } from './components/Work';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ProjectModal } from './components/ProjectModal';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  const handleOpenContactWithService = (serviceName?: string) => {
    setSelectedService(serviceName);
    setContactOpen(true);
  };

  const handleSelectProject = (project: ProjectData) => {
    setSelectedProject(project);
    setProjectModalOpen(true);
  };

  const handleViewAllProjects = () => {
    setSelectedProject(PROJECTS[0]);
    setProjectModalOpen(true);
  };

  const handleExploreWork = () => {
    const el = document.getElementById('work') || document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0c1128] text-white selection:bg-blue-500/30 overflow-x-hidden font-sans">
      {/* 3.1 Fixed Pill Navbar */}
      <Navbar onOpenContact={() => handleOpenContactWithService()} />

      {/* Main Page Content */}
      <main className="w-full">
        {/* 3.2 Hero Section (Scroll-Based Dual-Layer City Masking) */}
        <Hero onExploreWork={handleExploreWork} />

        {/* 3.3 Clients (Infinite Continuous Ticker) */}
        <Clients onOpenContact={() => handleOpenContactWithService()} />

        {/* 3.4 Services (2x2 Grid with Quarter-Circle Corner Icons) */}
        <Services onSelectService={handleOpenContactWithService} />

        {/* 3.5 Work (Expanding Flex Gallery with 5 Projects) */}
        <Work
          onSelectProject={handleSelectProject}
          onViewAllProjects={handleViewAllProjects}
        />

        {/* 3.6 About (Split Content with Quotes & Key Statistics) */}
        <About onOpenContact={() => handleOpenContactWithService()} />
      </main>

      {/* 3.7 Footer (Massive Bold CTA & 4-Column Directory) */}
      <Footer onOpenContact={() => handleOpenContactWithService()} />

      {/* Interactive Project Inquiry Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        preselectedService={selectedService}
      />

      {/* Detailed Project Case Study Showcase Modal */}
      <ProjectModal
        isOpen={projectModalOpen}
        project={selectedProject}
        onClose={() => setProjectModalOpen(false)}
        onSelectProject={setSelectedProject}
        onOpenContact={() => {
          setProjectModalOpen(false);
          setContactOpen(true);
        }}
      />
    </div>
  );
}
