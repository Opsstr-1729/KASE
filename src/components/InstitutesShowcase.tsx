import React, { useState } from 'react';
import { Building2, Compass, Award, ExternalLink, MapPin, Users, Check, ChevronRight } from 'lucide-react';
import iiicCampusImg from '../assets/images/institute_iiic_campus_1790669500805.jpg';
import ksidStudioImg from '../assets/images/institute_ksid_design_1790669515173.jpg';

export const InstitutesShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'iiic' | 'ksid' | 'coe'>('iiic');

  return (
    <section id="institutes" className="py-16 lg:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0e5774] uppercase tracking-wider mb-2">
              <Building2 className="w-3.5 h-3.5 text-[#0e5774]" />
              <span>Flagship State Institutions</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-neutral-900 tracking-tight">
              Apex Academies Founded by KASE
            </h2>
            <p className="mt-2 text-neutral-600 text-sm sm:text-base">
              Dedicated autonomous institutes equipped with industrial-grade laboratories, international curriculum
              partners, and residential campus facilities.
            </p>
          </div>

          {/* Interactive Segmented Selector */}
          <div className="inline-flex p-1 bg-neutral-100 rounded-xl border border-neutral-200 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('iiic')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'iiic'
                  ? 'bg-[#0e5774] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              IIIC Chavara
            </button>
            <button
              onClick={() => setActiveTab('ksid')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'ksid'
                  ? 'bg-[#0e5774] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              KSID Chandanathope
            </button>
            <button
              onClick={() => setActiveTab('coe')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'coe'
                  ? 'bg-[#0e5774] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Centres of Excellence (CoE)
            </button>
          </div>
        </div>

        {/* Tab 1: IIIC */}
        {activeTab === 'iiic' && (
          <div className="bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 animate-in fade-in duration-300">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto min-h-[300px]">
              <img
                src={iiicCampusImg}
                alt="Indian Institute of Infrastructure and Construction Campus at Chavara"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 text-white lg:hidden">
                <span className="font-display font-bold text-lg">IIIC Campus · Chavara, Kollam</span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#0e5774] mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Chavara, Kollam, Kerala</span>
                  <span className="text-neutral-400">·</span>
                  <span>Operated with ULCCS</span>
                </div>

                <h3 className="font-display font-extrabold text-2xl text-neutral-900 mb-3">
                  Indian Institute of Infrastructure & Construction (IIIC)
                </h3>

                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  Set on a sprawling 20-acre international campus, IIIC is India's leading academy for construction
                  management, building information modelling (BIM), machine operating simulators, and specialized
                  infrastructure technologies.
                </p>

                {/* Key Features */}
                <div className="space-y-2.5 mb-6 text-xs text-neutral-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0e5774] shrink-0" />
                    <span>State-of-the-art Hydraulic Excavator & Crane Simulators</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0e5774] shrink-0" />
                    <span>Autodesk & Bentley Authorized Training Center</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0e5774] shrink-0" />
                    <span>Postgraduate, Technician, and Supervisory Certification Tracks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0e5774] shrink-0" />
                    <span>90%+ Placement Record with Top Infrastructure Conglomerates</span>
                  </div>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-neutral-200/80 mb-6 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-neutral-900 block">Admissions Status</span>
                    <span className="text-[#0e5774] font-medium">Academic Batches Open (2026-27)</span>
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 bg-[#eff7fa] text-[#0e5774] border border-[#bcdbe7] rounded font-semibold">
                    18 Programs
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-200">
                <a
                  href="#courses"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0e5774] hover:bg-[#0b475e] transition-colors"
                >
                  <span>View IIIC Courses</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://iiic.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-neutral-700 bg-white hover:bg-neutral-100 border border-neutral-300 transition-colors"
                >
                  <span>Visit IIIC Official Portal</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: KSID */}
        {activeTab === 'ksid' && (
          <div className="bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 animate-in fade-in duration-300">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto min-h-[300px]">
              <img
                src={ksidStudioImg}
                alt="Kerala State Institute of Design Studio at Chandanathope"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 text-white lg:hidden">
                <span className="font-display font-bold text-lg">KSID Studio · Chandanathope</span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#0e5774] mb-2">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Chandanathope, Kollam, Kerala</span>
                  <span className="text-neutral-400">·</span>
                  <span>Mentored by NID Ahmedabad</span>
                </div>

                <h3 className="font-display font-extrabold text-2xl text-neutral-900 mb-3">
                  Kerala State Institute of Design (KSID)
                </h3>

                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  KSID is Kerala's apex institute for advanced design education. Set up under KASE with technical
                  guidance from the National Institute of Design (NID), KSID nurtures designers in digital user
                  experience, industrial ergonomics, and traditional craft innovation.
                </p>

                {/* Key Features */}
                <div className="space-y-2.5 mb-6 text-xs text-neutral-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0e5774] shrink-0" />
                    <span>Postgraduate Diploma Programs in Integrated Digital & Physical Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0e5774] shrink-0" />
                    <span>Specialized Ceramic, Wood, Apparel & Ergonomics Prototype Labs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0e5774] shrink-0" />
                    <span>Interdisciplinary Research in Sustainable Materials and Vernacular Craft</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0e5774] shrink-0" />
                    <span>Design Incubation & Commercial Intellectual Property Center</span>
                  </div>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-neutral-200/80 mb-6 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-neutral-900 block">Admissions Status</span>
                    <span className="text-[#0e5774] font-medium">Entrance Registration Open (2026 Batch)</span>
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 bg-[#eff7fa] text-[#0e5774] border border-[#bcdbe7] rounded font-semibold">
                    PG & Fellowships
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-200">
                <a
                  href="#courses"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0e5774] hover:bg-[#0b475e] transition-colors"
                >
                  <span>View KSID Courses</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://ksid.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-neutral-700 bg-white hover:bg-neutral-100 border border-neutral-300 transition-colors"
                >
                  <span>Visit KSID Official Portal</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Centres of Excellence */}
        {activeTab === 'coe' && (
          <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 sm:p-10 animate-in fade-in duration-300">
            <div className="max-w-3xl mb-8">
              <h3 className="font-display font-extrabold text-2xl text-neutral-900 mb-2">
                Industry-Anchored Centres of Excellence (CoEs)
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Co-established by KASE and international tech giants to offer turnkey equipment, proprietary
                certification, and international placement guarantees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* CoE 1 */}
              <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#0e5774] uppercase tracking-wide mb-1">
                    Industry 4.0 & Mechatronics
                  </div>
                  <h4 className="font-display font-bold text-lg text-neutral-900 mb-2">
                    Festo Precision Automation CoE
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    Equipped with Festo modular production systems, robotic arms, smart pneumatics, and sensor
                    troubleshooting suites.
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <span>Location: Kalamassery</span>
                  <span className="font-semibold text-[#0e5774]">Festo Certified</span>
                </div>
              </div>

              {/* CoE 2 */}
              <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#0e5774] uppercase tracking-wide mb-1">
                    Healthcare & Mobility
                  </div>
                  <h4 className="font-display font-bold text-lg text-neutral-900 mb-2">
                    International Nursing & Healthcare CoE
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    High-fidelity clinical ICU simulation, OET language immersion, and regulatory bridging for
                    NHS and European hospital deployment.
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <span>Location: Thiruvananthapuram</span>
                  <span className="font-semibold text-[#0e5774]">Global Pathway</span>
                </div>
              </div>

              {/* CoE 3 */}
              <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#0e5774] uppercase tracking-wide mb-1">
                    Energy & Smart Grid
                  </div>
                  <h4 className="font-display font-bold text-lg text-neutral-900 mb-2">
                    Schneider Electric Energy Management CoE
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    Building management systems (BMS), solar microgrid synchronization, and intelligent power
                    distribution automation.
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <span>Location: Kozhikode</span>
                  <span className="font-semibold text-[#0e5774]">Schneider Certified</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
