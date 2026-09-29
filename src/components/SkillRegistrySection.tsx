import React, { useState } from 'react';
import { ShieldCheck, Search, QrCode, Smartphone, Download, CheckCircle2, UserCheck, ArrowRight } from 'lucide-react';
import { MOCK_REGISTRY_DATABASE, RegistryWorker } from '../data/kaseData';

interface SkillRegistrySectionProps {
  onOpenFullModal: () => void;
}

export const SkillRegistrySection: React.FC<SkillRegistrySectionProps> = ({ onOpenFullModal }) => {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState<RegistryWorker[] | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      setSearchResult(null);
      setSearched(false);
      return;
    }
    const q = query.toLowerCase().trim();
    const results = MOCK_REGISTRY_DATABASE.filter(
      (w) =>
        w.name.toLowerCase().includes(q) ||
        w.trade.toLowerCase().includes(q) ||
        w.district.toLowerCase().includes(q) ||
        w.kaseRegNo.toLowerCase().includes(q)
    );
    setSearchResult(results);
    setSearched(true);
  };

  return (
    <section id="registry" className="py-16 lg:py-24 bg-[#072430] text-white border-b border-[#0b475e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Mission Description & Mobile App */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-cyan-300" />
              <span>Official Citizen & Enterprise Portal</span>
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-4">
              Kerala Skill Registry
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
              The official authenticated database of certified technicians, specialized craftsmen, and technical
              professionals across Kerala. Every registered candidate holds verified NSQF competency credentials
              with cryptographic QR authentication.
            </p>

            <div className="space-y-3 mb-8 text-xs text-neutral-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                <span>Zero-fraud credential verification for overseas employers and local contractors</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                <span>Geolocated trade discovery for households seeking licensed electricians, plumbers, and mechanics</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                <span>Direct integration with IndiaSkills and National Career Service (NCS)</span>
              </div>
            </div>

            {/* Mobile App Download Card */}
            <div className="p-4 sm:p-5 bg-[#0b384a]/90 rounded-2xl border border-[#0e5774] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#0e5774] border border-cyan-400/30 flex items-center justify-center text-white shrink-0">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white">
                    Skill Registry Mobile App
                  </h4>
                  <p className="text-xs text-neutral-300 mt-0.5">
                    For Citizens & Skilled Professionals (Android / iOS)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={onOpenFullModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#0e5774] bg-white hover:bg-neutral-100 transition-colors shadow-2xs whitespace-nowrap cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Get App & Register</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Credential Verification Box */}
          <div className="lg:col-span-6 bg-[#041922] p-6 sm:p-8 rounded-2xl border border-[#0e5774]/60 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-display font-bold text-base text-white">
                  Instant Certificate / Candidate Verification
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Enter candidate name, trade, or KASE Registration ID
                </p>
              </div>
              <QrCode className="w-5 h-5 text-cyan-300" />
            </div>

            <form onSubmit={handleSearch} className="mb-4">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g. KL-SKILL-2026-8842 or 'BIM', 'Arjun'..."
                    className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#0b384a]/60 border border-[#0e5774] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-300/40 focus:border-cyan-300"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2.5 text-xs font-semibold text-white bg-[#0e5774] hover:bg-[#136c8f] rounded-xl transition-colors shrink-0 cursor-pointer"
                >
                  Verify
                </button>
              </div>
            </form>

            {/* Quick Demo Suggestions */}
            <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-neutral-400 mb-6">
              <span>Quick tests:</span>
              <button
                type="button"
                onClick={() => {
                  setQuery('KL-SKILL-2026-8842');
                  setSearchResult(MOCK_REGISTRY_DATABASE.filter((w) => w.kaseRegNo === 'KL-SKILL-2026-8842'));
                  setSearched(true);
                }}
                className="underline hover:text-cyan-300 cursor-pointer"
              >
                KL-SKILL-2026-8842
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => {
                  setQuery('Nurse');
                  setSearchResult(MOCK_REGISTRY_DATABASE.filter((w) => w.trade.includes('Nurse')));
                  setSearched(true);
                }}
                className="underline hover:text-cyan-300 cursor-pointer"
              >
                Nurse
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => {
                  setQuery('Design');
                  setSearchResult(MOCK_REGISTRY_DATABASE.filter((w) => w.trade.includes('Design')));
                  setSearched(true);
                }}
                className="underline hover:text-cyan-300 cursor-pointer"
              >
                Designer
              </button>
            </div>

            {/* Result Area */}
            {searched ? (
              searchResult && searchResult.length > 0 ? (
                <div className="space-y-3">
                  <div className="text-[11px] font-semibold text-cyan-300 uppercase tracking-wider flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Authentication Confirmed ({searchResult.length} record found)</span>
                  </div>

                  {searchResult.map((w) => (
                    <div
                      key={w.id}
                      className="p-3.5 bg-[#072430] rounded-xl border border-cyan-400/40 text-xs space-y-2 animate-in fade-in duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-sm">{w.name}</span>
                        <span className="px-2 py-0.5 bg-[#0e5774] text-white border border-white/20 rounded text-[10px] font-semibold">
                          {w.status}
                        </span>
                      </div>
                      <div className="text-neutral-200 font-medium">{w.trade}</div>
                      <div className="flex items-center justify-between text-neutral-400 text-[11px] pt-1 border-t border-[#0e5774]/40">
                        <span className="font-mono text-cyan-300">{w.kaseRegNo}</span>
                        <span>{w.district} · {w.certificationLevel}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 bg-[#072430] rounded-xl border border-[#0e5774]/40 text-center text-xs text-neutral-400">
                  <span>No registry match found for "{query}". Please check the registration number or name.</span>
                </div>
              )
            ) : (
              <div className="p-5 bg-[#0b384a]/30 rounded-xl border border-dashed border-[#0e5774]/50 text-center text-xs text-neutral-400">
                <span>Enter an applicant ID or choose a quick sample above to test real-time state credential verification.</span>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-[#0e5774]/40 text-center">
              <button
                onClick={onOpenFullModal}
                className="text-xs font-semibold text-cyan-300 hover:text-white inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Are you a skilled worker? Apply for KASE State Certification</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
