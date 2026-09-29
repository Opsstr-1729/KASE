import React, { useState } from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';
import iiicCampusImg from '../assets/images/iiic_campus_real.png';
import iiicLogoImg from '../assets/images/iiic_official_logo.png';
import ksidCampusImg from '../assets/images/ksid_campus_real.png';
import ksidLogoImg from '../assets/images/ksid_official_logo.png';

export const InstitutesShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'iiic' | 'ksid' | 'coe'>('iiic');

  return (
    <section id="institutes" className="py-16 lg:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-[#0e5774] uppercase tracking-wider mb-2">
              Flagship State Institutions
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-neutral-900 tracking-tight">
              Apex Academies Founded by KASE
            </h2>
            <p className="mt-2 text-neutral-600 text-sm sm:text-base">
              Dedicated autonomous institutes equipped with industrial-grade laboratories, international curriculum
              partners, and residential campus facilities.
            </p>
          </div>

          {/* Interactive Segmented Selector with Official Logos */}
          <div className="inline-flex p-1.5 bg-neutral-100 rounded-2xl border border-neutral-200 self-start md:self-auto gap-1">
            <button
              onClick={() => setActiveTab('iiic')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeTab === 'iiic'
                  ? 'bg-[#0e5774] text-white shadow-sm'
                  : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200/60'
              }`}
            >
              <img
                src={iiicLogoImg}
                alt="IIIC Logo"
                className="w-5 h-5 rounded-full object-contain bg-white p-0.5"
              />
              <span>IIIC Chavara</span>
            </button>

            <button
              onClick={() => setActiveTab('ksid')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeTab === 'ksid'
                  ? 'bg-[#0e5774] text-white shadow-sm'
                  : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200/60'
              }`}
            >
              <img
                src={ksidLogoImg}
                alt="KSID Logo"
                className="h-4 w-auto object-contain bg-white px-1 py-0.5 rounded"
              />
              <span>KSID Design</span>
            </button>

            <button
              onClick={() => setActiveTab('coe')}
              className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeTab === 'coe'
                  ? 'bg-[#0e5774] text-white shadow-sm'
                  : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200/60'
              }`}
            >
              Centres of Excellence (CoE)
            </button>
          </div>
        </div>

        {/* Tab 1: IIIC (Indian Institute of Infrastructure and Construction) */}
        {activeTab === 'iiic' && (
          <div className="bg-neutral-50 rounded-3xl border border-neutral-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 animate-in fade-in duration-300 shadow-sm">
            {/* Visual Column with authentic high-res campus image */}
            <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto min-h-[340px] bg-neutral-900">
              <img
                src={iiicCampusImg}
                alt="Indian Institute of Infrastructure and Construction (IIIC) Campus at Chavara"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white lg:hidden">
                <span className="font-display font-bold text-base">IIIC Campus · Chavara, Kollam</span>
                <img src={iiicLogoImg} alt="IIIC" className="w-8 h-8 rounded-full bg-white p-1" />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                {/* Institute Header with Official IIIC Logo */}
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-neutral-200">
                  <div className="text-xs font-semibold text-[#0e5774]">
                    <span>Chavara, Kollam, Kerala</span>
                    <span className="text-neutral-400 mx-1.5">·</span>
                    <span>Operated with ULCCS</span>
                  </div>
                  <img
                    src={iiicLogoImg}
                    alt="Official IIIC Logo"
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl object-contain bg-white border border-neutral-200 p-1 shadow-2xs shrink-0"
                  />
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-neutral-900 mb-3 tracking-tight">
                  Indian Institute of Infrastructure & Construction (IIIC)
                </h3>

                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  Set on a sprawling 20-acre international campus, IIIC is India's leading academy for construction
                  management, building information modelling (BIM), machine operating simulators, and specialized
                  infrastructure technologies.
                </p>

                {/* Key Features without AI check icons */}
                <div className="space-y-2.5 mb-6 text-xs text-neutral-700">
                  <div className="pl-3 border-l-2 border-[#0e5774]">
                    <span className="font-medium">State-of-the-art Hydraulic Excavator & Crane Simulators</span>
                  </div>
                  <div className="pl-3 border-l-2 border-[#0e5774]">
                    <span className="font-medium">Autodesk & Bentley Authorized Training Center</span>
                  </div>
                  <div className="pl-3 border-l-2 border-[#0e5774]">
                    <span className="font-medium">Postgraduate, Technician, and Supervisory Certification Tracks</span>
                  </div>
                  <div className="pl-3 border-l-2 border-[#0e5774]">
                    <span className="font-medium">90%+ Placement Record with Top Infrastructure Conglomerates</span>
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
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0e5774] hover:bg-[#0b475e] transition-colors shadow-xs"
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

        {/* Tab 2: KSID (Kerala State Institute of Design) */}
        {activeTab === 'ksid' && (
          <div className="bg-neutral-50 rounded-3xl border border-neutral-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 animate-in fade-in duration-300 shadow-sm">
            {/* Visual Column with authentic high-res campus image */}
            <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto min-h-[340px] bg-neutral-900">
              <img
                src={ksidCampusImg}
                alt="Kerala State Institute of Design (KSID) Campus at Chandanathope"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white lg:hidden">
                <span className="font-display font-bold text-base">KSID Campus · Chandanathope</span>
                <img src={ksidLogoImg} alt="KSID" className="h-6 w-auto bg-white px-2 py-0.5 rounded" />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                {/* Institute Header with Official KSID Logo */}
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-neutral-200">
                  <div className="text-xs font-semibold text-[#0e5774]">
                    <span>Chandanathope, Kollam, Kerala</span>
                    <span className="text-neutral-400 mx-1.5">·</span>
                    <span>Mentored by NID Ahmedabad</span>
                  </div>
                  <img
                    src={ksidLogoImg}
                    alt="Official KSID Logo"
                    className="h-8 sm:h-9 w-auto object-contain bg-white border border-neutral-200 px-2 py-1 rounded-xl shadow-2xs shrink-0"
                  />
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-neutral-900 mb-3 tracking-tight">
                  Kerala State Institute of Design (KSID)
                </h3>

                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  KSID is Kerala's apex institute for advanced design education. Set up under KASE with technical
                  guidance from the National Institute of Design (NID), KSID nurtures designers in digital user
                  experience, industrial ergonomics, and traditional craft innovation.
                </p>

                {/* Key Features without AI check icons */}
                <div className="space-y-2.5 mb-6 text-xs text-neutral-700">
                  <div className="pl-3 border-l-2 border-[#0e5774]">
                    <span className="font-medium">Postgraduate Diploma Programs in Integrated Digital & Physical Design</span>
                  </div>
                  <div className="pl-3 border-l-2 border-[#0e5774]">
                    <span className="font-medium">Specialized Ceramic, Wood, Apparel & Ergonomics Prototype Labs</span>
                  </div>
                  <div className="pl-3 border-l-2 border-[#0e5774]">
                    <span className="font-medium">Interdisciplinary Research in Sustainable Materials and Vernacular Craft</span>
                  </div>
                  <div className="pl-3 border-l-2 border-[#0e5774]">
                    <span className="font-medium">Design Incubation & Commercial Intellectual Property Center</span>
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
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0e5774] hover:bg-[#0b475e] transition-colors shadow-xs"
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

        {/* Tab 3: Centres of Excellence (CoE) */}
        {activeTab === 'coe' && (
          <div className="bg-neutral-50 rounded-3xl border border-neutral-200 p-6 sm:p-10 animate-in fade-in duration-300 shadow-sm">
            <div className="max-w-3xl mb-8">
              <h3 className="font-display font-extrabold text-2xl text-neutral-900 mb-2">
                Specialized Industry Centres of Excellence
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Co-invested public-private training infrastructure operating across Kerala to train engineering
                graduates and polytechnic diploma holders in niche domain specializations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-[#0e5774] font-semibold uppercase tracking-wider block mb-1">
                    Offshore & Maritime
                  </span>
                  <h4 className="font-display font-bold text-base text-neutral-900 mb-2">
                    Apex Skill Development Center (ASDC)
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    OPITO-accredited offshore survival training, deep-water underwater welding, and oil & gas safety
                    certifications.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="text-neutral-500">Kochi Port</span>
                  <span className="text-[#0e5774] font-semibold">OPITO Certified</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-[#0e5774] font-semibold uppercase tracking-wider block mb-1">
                    Healthcare & Mobility
                  </span>
                  <h4 className="font-display font-bold text-base text-neutral-900 mb-2">
                    International Nursing Excellence (NSDC-I)
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    OET/IELTS preparation, OSCE simulated hospital wards, and fast-track employment licensing for NHS UK
                    and Germany.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="text-neutral-500">Thiruvananthapuram</span>
                  <span className="text-[#0e5774] font-semibold">Govt Bilateral</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-[#0e5774] font-semibold uppercase tracking-wider block mb-1">
                    Industry 4.0 Robotics
                  </span>
                  <h4 className="font-display font-bold text-base text-neutral-900 mb-2">
                    Advanced Automation & PLC Center
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Festo & Siemens pneumatic-electropneumatic kits, robotic arms calibration, and industrial IoT SCADA
                    networks.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="text-neutral-500">Kozhikode</span>
                  <span className="text-[#0e5774] font-semibold">Siemens Lab</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
