import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, Pause, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import dbLoiImg from '../assets/images/kase_deutsche_bahn_loi.jpg';
import heroLabImg from '../assets/images/hero_kase_global_skills_1790669485919.jpg';
import iiicRealImg from '../assets/images/iiic_campus_real.png';
import ksidRealImg from '../assets/images/ksid_campus_real.png';

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
      image: dbLoiImg,
      tag: 'International Collaboration',
      title: 'Letter of Intent (LoI) Exchanged Between KASE and Deutsche Bahn AG',
      caption:
        'KASE and Deutsche Bahn AG formalized their collaboration through the exchange of a Letter of Intent (LoI) to strengthen international skill development initiatives.',
      partner: 'Deutsche Bahn AG (Germany) & KASE',
    },
    {
      id: 1,
      image: heroLabImg,
      tag: 'Industry 4.0 Labs',
      title: 'Statewide Advanced Automation & Mechatronics Centers',
      caption:
        'Statewide advanced mechatronics, pneumatic automation & robotics centers for youth skilling across all 14 districts.',
      partner: 'Centres of Excellence · 14 Districts',
    },
    {
      id: 2,
      image: iiicRealImg,
      tag: 'Apex State Academy',
      title: 'Indian Institute of Infrastructure and Construction (IIIC)',
      caption:
        '20-acre specialized international campus at Chavara, Kollam, training in BIM, heavy machinery & green construction.',
      partner: 'ULCCS & KASE Collaboration',
    },
    {
      id: 3,
      image: ksidRealImg,
      tag: 'Design & Human Innovation',
      title: 'Kerala State Institute of Design (KSID)',
      caption:
        'Mentored by National Institute of Design (NID), shaping top talent in digital UX, industrial ergonomics and craft innovation.',
      partner: 'KSID Campus · Chandanathope',
    },
  ];

  // Auto-scroll background images every 5.5 seconds
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

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
    <section className="relative min-h-[620px] lg:min-h-[700px] w-full flex flex-col justify-between overflow-hidden bg-[#072430]">
      {/* 1. AUTOMATICALLY SCROLLING BACKGROUND IMAGES */}
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
              alt={slide.title}
              className={`w-full h-full object-cover object-center brightness-100 contrast-[1.02] transition-transform duration-[6000ms] ease-out ${
                idx === currentSlide ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>
        ))}

        {/* Reduced overlay opacity: Soft and transparent so people's faces and details are completely visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#072430]/60 via-[#0e5774]/30 to-black/15 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#072430]/80 via-transparent to-black/25 z-10" />

        {/* Subtle geometric grid */}
        <div
          className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      {/* 2. FOREGROUND CONTENT: Clean open layout from before, no box covering faces */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 pt-14 sm:pt-20 lg:pt-24 pb-10 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow metadata */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-200 mb-4 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-md border border-white/20">
            <span>Department of Labour & Skills</span>
            <span className="text-white/40">·</span>
            <span>G.O.(Rt) No.1501/16/LBR</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] mb-6 text-balance drop-shadow-md">
            Elevating Kerala's Workforce to Global Standards.
          </h1>

          {/* Subtext */}
          <p className="text-white/95 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl font-normal drop-shadow-md">
            Kerala Academy for Skills Excellence (KASE) is the State Skill Development Mission—coordinating
            apex technical academies, accredited international partnerships, and the official Kerala Skill
            Registry for certified talent.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[#0e5774] bg-white hover:bg-neutral-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:translate-y-[-1px]"
            >
              <span>Find Accredited Courses</span>
              <ArrowRight className="w-4 h-4 text-[#0e5774]" />
            </a>

            <button
              onClick={onOpenRegistry}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0e5774]/80 hover:bg-[#0e5774] border border-white/30 backdrop-blur-md transition-all duration-200 cursor-pointer shadow-md hover:border-white/50"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-200" />
              <span>Verify Skill Registry ID</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. SCROLLING SHOWCASE BANNER: HIGH-VISIBILITY COLLABORATION DISPLAY */}
      <div className="relative z-20 w-full border-t border-white/20 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Active Scrolling Slide Banner */}
            <div className="flex items-center gap-3 text-xs text-white/95 flex-1 min-w-0">
              <span className="px-2.5 py-1 rounded bg-[#0e5774] text-white font-bold text-[11px] uppercase tracking-wider shrink-0 border border-white/30">
                {slides[currentSlide].tag}
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 truncate">
                <span className="font-bold text-white tracking-tight truncate">
                  {slides[currentSlide].title}:
                </span>
                <span className="text-cyan-100 font-medium truncate">
                  "{slides[currentSlide].caption}"
                </span>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-3 shrink-0 self-end lg:self-center">
              {/* Slide Indicators */}
              <div className="flex items-center gap-1.5 mr-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentSlide
                        ? 'w-8 bg-cyan-300 shadow-xs'
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
        </div>
      </div>
    </section>
  );
};
