import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, Pause, Play, ChevronLeft, ChevronRight, Globe, Building2, Cpu, Compass } from 'lucide-react';
import mouImg from '../assets/images/gallery_international_mou_1790669527144.jpg';
import heroLabImg from '../assets/images/hero_kase_global_skills_1790669485919.jpg';
import iiicImg from '../assets/images/institute_iiic_campus_1790669500805.jpg';
import ksidImg from '../assets/images/institute_ksid_design_1790669515173.jpg';

interface HeroProps {
  onOpenRegistry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegistry }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      id: 0,
      image: mouImg,
      tag: 'Bilateral Industry MoU',
      caption: 'Exchange of Letter of Intent (LoI) with Deutsche Bahn AG to strengthen international technical skilling.',
      partner: 'Deutsche Bahn AG (Germany)',
      icon: Globe,
    },
    {
      id: 1,
      image: heroLabImg,
      tag: 'Industry 4.0 Labs',
      caption: 'Statewide advanced mechatronics, pneumatic automation & robotics centers for youth skilling.',
      partner: 'Centres of Excellence · 14 Districts',
      icon: Cpu,
    },
    {
      id: 2,
      image: iiicImg,
      tag: 'Apex State Academy',
      caption: 'Indian Institute of Infrastructure and Construction (IIIC) 20-acre specialized campus at Chavara, Kollam.',
      partner: 'ULCCS & KASE Collaboration',
      icon: Building2,
    },
    {
      id: 3,
      image: ksidImg,
      tag: 'Design & Human Innovation',
      caption: 'Kerala State Institute of Design (KSID) mentored by National Institute of Design (NID).',
      partner: 'KSID Campus · Chandanathope',
      icon: Compass,
    },
  ];

  // Auto-scroll background images every 5 seconds
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-[620px] lg:min-h-[720px] w-full flex flex-col justify-between overflow-hidden bg-[#072430]">
      {/* 1. AUTOMATICALLY SCROLLING BACKGROUND IMAGES (BEHIND THE WORDS) */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.caption}
              className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-out ${
                idx === currentSlide ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>
        ))}

        {/* High-legibility scrim overlays using brand color #0e5774 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#072430]/95 via-[#0e5774]/80 to-[#072430]/65 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#072430] via-transparent to-black/40 z-10" />
        
        {/* Subtle geometric grid */}
        <div
          className="absolute inset-0 opacity-[0.04] z-10 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      {/* 2. FOREGROUND CONTENT: WORDS IN FRONT OF THE SCROLLING IMAGES */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 pt-16 sm:pt-20 lg:pt-28 pb-12 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow metadata */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-200 mb-4 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-md border border-white/20">
            <span>Department of Labour & Skills</span>
            <span className="text-white/40">·</span>
            <span>G.O.(Rt) No.1501/16/LBR</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] mb-6 text-balance drop-shadow-sm">
            Elevating Kerala's Workforce to Global Standards.
          </h1>

          {/* Subtext */}
          <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl font-normal drop-shadow-xs">
            Kerala Academy for Skills Excellence (KASE) is the State Skill Development Mission—coordinating
            apex technical academies, accredited international partnerships, and the official Kerala Skill
            Registry for certified talent.
          </p>

          {/* Call to Actions using #0e5774 and White */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[#0e5774] bg-white hover:bg-neutral-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:translate-y-[-1px]"
            >
              <span>Find Accredited Courses</span>
              <ArrowRight className="w-4 h-4 text-[#0e5774]" />
            </a>

            <button
              onClick={onOpenRegistry}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0e5774]/70 hover:bg-[#0e5774] border border-white/30 backdrop-blur-md transition-all duration-200 cursor-pointer shadow-md hover:border-white/50"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-200" />
              <span>Verify Skill Registry ID</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM BAR: LIVE SLIDE CONTROLLER & STATS */}
      <div className="relative z-20 w-full border-t border-white/15 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Active Slide Information Banner */}
            <div className="flex items-center gap-3 text-xs text-white/90">
              <span className="px-2 py-0.5 rounded bg-[#0e5774] text-white font-semibold text-[11px] uppercase tracking-wider shrink-0 border border-white/20">
                {slides[currentSlide].tag}
              </span>
              <span className="truncate max-w-md sm:max-w-xl text-white/90 font-medium">
                {slides[currentSlide].caption}
              </span>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-3 shrink-0 self-end lg:self-center">
              {/* Slide Indicators */}
              <div className="flex items-center gap-1.5 mr-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentSlide
                        ? 'w-7 bg-white'
                        : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Jump to background slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Pause / Play Auto-scroll */}
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/15"
                title={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
                aria-label={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
              >
                {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              </button>

              {/* Prev / Next Buttons */}
              <button
                onClick={prevSlide}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/15"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/15"
                aria-label="Next slide"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 mt-4 border-t border-white/10">
            <div>
              <div className="font-display font-bold text-xl sm:text-2xl text-white tabular-nums">
                120+
              </div>
              <div className="text-[11px] text-white/70 font-medium">
                Accredited Courses
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-xl sm:text-2xl text-cyan-300 tabular-nums">
                48,500+
              </div>
              <div className="text-[11px] text-white/70 font-medium">
                Certified Youth
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-xl sm:text-2xl text-white tabular-nums">
                14
              </div>
              <div className="text-[11px] text-white/70 font-medium">
                District Centers
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-xl sm:text-2xl text-white tabular-nums">
                2 Apex
              </div>
              <div className="text-[11px] text-white/70 font-medium">
                IIIC & KSID Academies
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
