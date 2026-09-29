/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Ticker } from './components/Ticker';
import { Hero } from './components/Hero';
import { BilateralScrollBanner } from './components/BilateralScrollBanner';
import { AboutAndLeadership } from './components/AboutAndLeadership';
import { LeadershipSection } from './components/LeadershipSection';
import { InstitutesShowcase } from './components/InstitutesShowcase';
import { InitiativesGrid } from './components/InitiativesGrid';
import { CourseFinder } from './components/CourseFinder';
import { SkillRegistrySection } from './components/SkillRegistrySection';
import { GalleryAndNotices } from './components/GalleryAndNotices';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SkillRegistryModal } from './components/SkillRegistryModal';
import { SearchModal } from './components/SearchModal';

export default function App() {
  const [isRegistryModalOpen, setIsRegistryModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const handleSelectCourseFromSearch = (courseId: string) => {
    const courseEl = document.getElementById('courses');
    if (courseEl) {
      courseEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col text-neutral-900 selection:bg-[#0e5774] selection:text-white font-sans">
      {/* Top Bar */}
      <Navbar
        onOpenRegistry={() => setIsRegistryModalOpen(true)}
        onOpenSearch={() => setIsSearchModalOpen(true)}
      />

      {/* 2026 Sleek Announcement / Notice Ticker */}
      <Ticker />

      {/* Main Page Body */}
      <main className="flex-1">
        {/* Hero Section: High Impact Visual, Clear Value Prop & Interactive Spotlight */}
        <Hero onOpenRegistry={() => setIsRegistryModalOpen(true)} />

        {/* International Collaboration Scrolling Highlight Banner: Deutsche Bahn AG LoI */}
        <BilateralScrollBanner />

        {/* Strategic Mandate & Convergence Framework */}
        <AboutAndLeadership />

        {/* Dedicated Full-Page Leadership Showcase with Big Images & Designations */}
        <LeadershipSection />

        {/* Flagship Apex Institutions: IIIC, KSID & CoEs */}
        <InstitutesShowcase />

        {/* Key Strategic Initiatives Grid */}
        <InitiativesGrid
          onOpenRegistry={() => setIsRegistryModalOpen(true)}
          onSelectCategory={(cat) => {
            const courseEl = document.getElementById('courses');
            if (courseEl) courseEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Course & Opportunity Finder with Filter and Prospectus Requests */}
        <CourseFinder />

        {/* Official Kerala Skill Registry: Verification & Mobile App */}
        <SkillRegistrySection onOpenFullModal={() => setIsRegistryModalOpen(true)} />

        {/* Press & Media Gallery, Government Orders (G.O.) & RTI */}
        <GalleryAndNotices />

        {/* State Headquarters Contact & Inquiry Form */}
        <ContactSection />
      </main>

      {/* Compliant Official Civic Footer */}
      <Footer />

      {/* Interactive Modals */}
      <SkillRegistryModal
        isOpen={isRegistryModalOpen}
        onClose={() => setIsRegistryModalOpen(false)}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectCourse={handleSelectCourseFromSearch}
      />
    </div>
  );
}
