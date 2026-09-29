import React, { useState, useEffect } from 'react';
import { Megaphone, ChevronRight, Pause, Play, ExternalLink } from 'lucide-react';
import { NOTICES } from '../data/kaseData';

export const Ticker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % NOTICES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentNotice = NOTICES[currentIndex];

  return (
    <div
      className="bg-[#0b475e] text-white border-b border-[#083445] text-xs py-2 px-4 sm:px-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Ticker Label */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#0e5774] text-cyan-200 border border-white/20">
            <Megaphone className="w-3 h-3" />
          </span>
          <span className="font-semibold text-white tracking-wide uppercase text-[11px]">
            Latest Update
          </span>
        </div>

        {/* Center: Active Notification */}
        <div className="flex-1 min-w-0 flex items-center gap-3 overflow-hidden">
          <span className="hidden sm:inline text-cyan-200 font-mono text-[11px] shrink-0">
            {currentNotice.date}
          </span>
          <span className="text-white/40 hidden sm:inline">·</span>
          <a
            href="#notices"
            className="truncate text-white hover:text-cyan-200 font-medium transition-colors flex items-center gap-1.5"
            title={currentNotice.title}
          >
            <span className="truncate">{currentNotice.title}</span>
            <ExternalLink className="w-3 h-3 text-cyan-300 shrink-0 opacity-80" />
          </a>
        </div>

        {/* Right: Controls & Index */}
        <div className="flex items-center gap-2 shrink-0 text-white/90">
          <span className="text-[11px] font-mono text-cyan-200">
            {currentIndex + 1} / {NOTICES.length}
          </span>
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1 hover:text-white transition-colors rounded hover:bg-[#0e5774] cursor-pointer"
            title={isPaused ? 'Resume ticker' : 'Pause ticker'}
            aria-label={isPaused ? 'Resume ticker' : 'Pause ticker'}
          >
            {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % NOTICES.length)}
            className="p-1 hover:text-white transition-colors rounded hover:bg-[#0e5774] cursor-pointer"
            title="Next update"
            aria-label="Next update"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
