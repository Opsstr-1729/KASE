import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, ArrowUpRight, Search } from 'lucide-react';
import { KaseLogo } from './KaseLogo';

interface NavbarProps {
  onOpenRegistry: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegistry, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Mission', href: '#about' },
    { name: 'Institutes', href: '#institutes' },
    { name: 'Initiatives', href: '#initiatives' },
    { name: 'Course Finder', href: '#courses' },
    { name: 'Circulars & Media', href: '#notices' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Main Top Bar with the Official KASE Logo on Pure White */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200 py-2.5'
            : 'bg-white border-b border-neutral-200 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          {/* Zone 1: Official KASE Brand Logo Lockup */}
          <a
            href="#"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e5774] rounded-lg transition-transform active:scale-[0.99]"
            title="Kerala Academy for Skills Excellence (KASE)"
          >
            <KaseLogo />
          </a>

          {/* Zone 2: Clean Text Nav Links */}
          <div className="hidden xl:flex items-center gap-7">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-neutral-700 hover:text-[#0e5774] transition-colors whitespace-nowrap relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0e5774] hover:after:w-full after:transition-all after:duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Zone 3: Primary Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSearch}
              className="p-2 text-neutral-600 hover:text-[#0e5774] hover:bg-[#eff7fa] rounded-lg transition-colors cursor-pointer"
              title="Search Courses and Notifications"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenRegistry}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#0e5774] bg-[#eff7fa] hover:bg-[#e2f0f5] border border-[#bcdbe7] rounded-lg transition-colors shadow-2xs whitespace-nowrap cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-[#0e5774]" />
              <span>Skill Registry</span>
            </button>

            <a
              href="#courses"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0e5774] hover:bg-[#0b475e] rounded-lg transition-colors shadow-xs whitespace-nowrap"
            >
              <span>Explore Courses</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-neutral-700 hover:text-[#0e5774] hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-neutral-200 bg-white px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="space-y-1">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-semibold text-neutral-800 hover:bg-[#eff7fa] hover:text-[#0e5774] transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegistry();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#0e5774] bg-[#eff7fa] border border-[#bcdbe7] rounded-lg cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-[#0e5774]" />
                <span>Verify Citizen / Worker in Skill Registry</span>
              </button>
              <a
                href="#courses"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#0e5774] hover:bg-[#0b475e] rounded-lg"
              >
                <span>Find Accredited Programs</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
