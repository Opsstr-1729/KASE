import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import dbLoiImg from '../assets/images/kase_deutsche_bahn_loi.jpg';

export const BilateralScrollBanner: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      className="bg-gradient-to-r from-[#072430] via-[#0e5774] to-[#072430] text-white py-3.5 border-y border-[#186b8a] overflow-hidden relative shadow-inner"
      aria-label="International Bilateral Milestone"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Badge without AI icons */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 font-bold">
                International Milestone
              </span>
              <span className="text-xs font-bold text-white tracking-tight">
                Global Mobility Track
              </span>
            </div>
          </div>

          {/* Scrolling Content Card */}
          <div className="flex-1 min-w-0 bg-black/25 backdrop-blur-sm border border-white/15 rounded-2xl p-2.5 sm:px-4 sm:py-3 flex items-center gap-4 overflow-hidden">
            {/* Thumbnail Image - Clear & Bright */}
            <div className="relative w-20 h-14 sm:w-28 sm:h-20 rounded-xl overflow-hidden shrink-0 border-2 border-white/40 shadow-lg bg-neutral-900 group">
              <img
                src={dbLoiImg}
                alt="Letter of Intent Exchanged Between KASE and Deutsche Bahn AG"
                className="w-full h-full object-cover object-center brightness-105 group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-0 right-0 bg-[#0e5774] text-[10px] font-bold text-white px-1.5 py-0.5 rounded-tl shadow-xs">
                LoI Event
              </span>
            </div>

            {/* Title & Official Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xs sm:text-sm font-extrabold text-white tracking-tight truncate">
                  Letter of Intent (LoI) Exchanged Between KASE and Deutsche Bahn AG
                </h3>
                <span className="hidden lg:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  Active Partnership
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-cyan-100 font-normal line-clamp-2 leading-relaxed">
                "KASE and Deutsche Bahn AG formalized their collaboration through the exchange of a Letter of Intent (LoI) to strengthen international skill development initiatives."
              </p>
            </div>
          </div>

          {/* Action Link */}
          <a
            href="#notices"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all shrink-0 whitespace-nowrap"
          >
            <span>Read Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-300" />
          </a>
        </div>
      </div>
    </section>
  );
};
