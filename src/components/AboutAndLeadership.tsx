import React from 'react';
import { FileText, BookOpen } from 'lucide-react';

export const AboutAndLeadership: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="text-xs font-semibold text-[#0e5774] uppercase tracking-wider mb-2">
            State Skill Development Mission
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-neutral-900 tracking-tight">
            Convergence of Skill Initiatives across Kerala
          </h2>
          <p className="mt-3 text-neutral-600 text-base leading-relaxed">
            Kerala Academy for Skills Excellence (KASE) was established by the Government of Kerala as a
            non-profit apex company under the Department of Labour and Skills to bridge the gap between academic
            curricula and global industry demands.
          </p>
        </div>

        {/* 2-Column Grid: Strategic Mandate & Framework */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: About Text & Legislative Background */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-neutral-200 shadow-2xs flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-xl text-neutral-900 mb-3">
                Mandate & Legislative Framework
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-4">
                Designated as the State Skill Development Mission as per <strong>G.O.(Rt) No.1501/16/LBR dated 02.12.2016</strong>,
                KASE coordinates the skilling initiatives of all state departments.
                Recognising Kerala's unique demographic profile and high literacy index, KASE champions
                super-specialized skilling models with international certification benchmarks.
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                Rather than basic low-end vocational training, KASE focuses on high-precision sectors—Building Information
                Modelling (BIM), advanced industrial robotics, sustainable product design, deep-sea & offshore safety,
                and international healthcare mobility pathways.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-neutral-100">
                <div className="pl-3 border-l-2 border-[#0e5774]">
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                    Apex Quality Audits
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Rigorous accreditation norms for private & public training centers.
                  </p>
                </div>

                <div className="pl-3 border-l-2 border-[#0e5774]">
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                    International Mobility
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Direct bilateral pathways with European and Asian industrial employers.
                  </p>
                </div>

                <div className="pl-3 border-l-2 border-[#0e5774]">
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                    Kerala Skill Registry
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Statewide database of authenticated, certified trade specialists.
                  </p>
                </div>

                <div className="pl-3 border-l-2 border-[#0e5774]">
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                    Industry Co-Investment
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Centres of Excellence co-funded with global market leaders.
                  </p>
                </div>
              </div>
            </div>

            {/* Citizen Charter & Statutory Reports */}
            <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-wrap items-center gap-4">
              <a
                href="#notices"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0e5774] hover:text-[#0b475e] transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download Citizen Charter (PDF)</span>
              </a>
              <span className="text-neutral-300">·</span>
              <a
                href="#notices"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0e5774] hover:text-[#0b475e] transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Annual Report & Audit Statements</span>
              </a>
            </div>
          </div>

          {/* Right: Statutory Pillars & Convergence Highlights (No AI Icons) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-2xs flex-1 flex flex-col justify-between">
              <div>
                <span className="inline-block text-[11px] font-mono font-bold text-[#0e5774] bg-[#eff7fa] px-2.5 py-1 rounded border border-[#bcdbe7] mb-3">
                  PILLAR 01 · GLOBAL TRACK
                </span>
                <h4 className="font-display font-bold text-base text-neutral-900 mb-1">
                  Global Employment Linkages
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Fostering structured international apprentice placement frameworks with global enterprises like
                  Deutsche Bahn AG (Germany) for European rail transit, and certified healthcare mobility tracks.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-100 text-xs text-[#0e5774] font-semibold">
                Direct Bilateral Government Track
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-2xs flex-1 flex flex-col justify-between">
              <div>
                <span className="inline-block text-[11px] font-mono font-bold text-[#0e5774] bg-[#eff7fa] px-2.5 py-1 rounded border border-[#bcdbe7] mb-3">
                  PILLAR 02 · INDUSTRY 4.0
                </span>
                <h4 className="font-display font-bold text-base text-neutral-900 mb-1">
                  Statewide Skilling Hubs
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Advanced mechatronics, pneumatic automation, and smart BIM modeling simulators establishing
                  next-generation vocational centers across all 14 districts of Kerala.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-100 text-xs text-[#0e5774] font-semibold">
                14 District Skill Centers
              </div>
            </div>

            {/* Secretariat Note */}
            <div className="p-4 bg-[#eff7fa] rounded-xl border border-[#bcdbe7] text-xs text-[#0e5774] flex items-center justify-between">
              <div>
                <span className="font-bold block text-[#0e5774]">Office of the Managing Director, KASE</span>
                <span className="text-[#136c8f] text-[11px]">Department of Labour and Skills, Govt. Secretariat, Thiruvananthapuram</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
