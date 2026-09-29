import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import shriSatheeshanImg from '../assets/images/shri_vd_satheeshan.png';
import shriShibuImg from '../assets/images/shri_shibu_baby_john.png';

export const LeadershipSection: React.FC = () => {
  const [activeLeader, setActiveLeader] = useState<number>(0);

  const leaders = [
    {
      id: 1,
      name: 'SHRI. V. D. SATHEESHAN',
      designation: "Hon'ble Chief Minister",
      department: 'Government of Kerala',
      image: shriSatheeshanImg,
      alt: 'Shri. V. D. Satheesan',
    },
    {
      id: 2,
      name: 'SHRI. SHIBU BABY JOHN',
      designation: "Hon'ble Minister for Skill Development",
      department: 'Department of Labour and Skills, Government of Kerala',
      image: shriShibuImg,
      alt: 'Shri. Shibu Baby John',
    },
  ];

  const nextLeader = () => {
    setActiveLeader((prev) => (prev + 1) % leaders.length);
  };

  const prevLeader = () => {
    setActiveLeader((prev) => (prev - 1 + leaders.length) % leaders.length);
  };

  return (
    <section id="leadership" className="py-20 lg:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold text-[#0e5774] uppercase tracking-widest mb-2">
            State Leadership & Governance
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-neutral-900 tracking-tight">
            Guiding Kerala's Skills Mission
          </h2>
          <div className="w-16 h-1 bg-[#0e5774] mx-auto mt-3 rounded-full" />
        </div>

        {/* 1. Large Feature Presentation (Taking up the page) */}
        <div className="relative bg-neutral-50 rounded-3xl border border-neutral-200 shadow-sm overflow-hidden min-h-[460px] lg:min-h-[520px] flex items-center">
          {/* Navigation Arrow Left */}
          <button
            onClick={prevLeader}
            className="absolute left-3 sm:left-6 z-30 p-3 sm:p-4 rounded-full bg-white/90 hover:bg-[#0e5774] text-[#0e5774] hover:text-white shadow-md border border-neutral-200 transition-all duration-200 cursor-pointer group"
            aria-label="Previous leader"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Navigation Arrow Right */}
          <button
            onClick={nextLeader}
            className="absolute right-3 sm:right-6 z-30 p-3 sm:p-4 rounded-full bg-white/90 hover:bg-[#0e5774] text-[#0e5774] hover:text-white shadow-md border border-neutral-200 transition-all duration-200 cursor-pointer group"
            aria-label="Next leader"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Active Leader Large Showcase */}
          <div className="w-full grid grid-cols-1 md:grid-cols-12 items-center gap-8 lg:gap-12 px-8 sm:px-16 lg:px-24 py-10">
            {/* Large Image Column */}
            <div className="md:col-span-6 flex justify-center items-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src={leaders[activeLeader].image}
                  alt={leaders[activeLeader].alt}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Name & Designation Column */}
            <div className="md:col-span-6 flex flex-col justify-center text-center md:text-left">
              <div className="max-w-lg">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0e5774] tracking-tight mb-3">
                  {leaders[activeLeader].name}
                </h3>

                {/* Elegant Underline Divider matching original portal design */}
                <div className="w-full h-[2px] bg-[#0e5774]/70 mb-4" />

                <div className="font-sans font-bold text-lg sm:text-xl lg:text-2xl text-neutral-800 tracking-normal mb-1.5">
                  {leaders[activeLeader].designation}
                </div>

                <div className="text-sm sm:text-base text-neutral-500 font-medium">
                  {leaders[activeLeader].department}
                </div>
              </div>

              {/* Indicator dots */}
              <div className="flex items-center gap-2 mt-8 justify-center md:justify-start">
                {leaders.map((leader, index) => (
                  <button
                    key={leader.id}
                    onClick={() => setActiveLeader(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      index === activeLeader
                        ? 'w-10 bg-[#0e5774]'
                        : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
                    }`}
                    aria-label={`View ${leader.name}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
