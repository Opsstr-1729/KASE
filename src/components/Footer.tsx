import React from 'react';
import { ArrowUp } from 'lucide-react';
import { KaseLogo } from './KaseLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051a23] text-neutral-400 text-xs border-t border-[#0b475e]">
      {/* Upper Footer: Strategic Pillars & Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & State Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              <KaseLogo variant="white" className="h-12 scale-90 origin-left" />
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              State Skill Development Mission of the Government of Kerala, functioning under the Department of
              Labour and Skills as per G.O.(Rt) No.1501/16/LBR. Dedicated to elevating Kerala's technical talent
              to international benchmarks.
            </p>

            <div className="pt-2 text-[11px] text-neutral-500 font-mono">
              Incorporated under Section 25 of the Companies Act 1956 (Non-Profit Company).
            </div>
          </div>

          {/* Col 2: Apex Institutions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider">
              Flagship Institutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#institutes" className="hover:text-cyan-300 transition-colors">
                  Indian Institute of Infrastructure & Construction (IIIC)
                </a>
              </li>
              <li>
                <a href="#institutes" className="hover:text-cyan-300 transition-colors">
                  Kerala State Institute of Design (KSID)
                </a>
              </li>
              <li>
                <a href="#institutes" className="hover:text-cyan-300 transition-colors">
                  Festo Precision Automation CoE
                </a>
              </li>
              <li>
                <a href="#institutes" className="hover:text-cyan-300 transition-colors">
                  International Healthcare & Nursing Academy
                </a>
              </li>
              <li>
                <a href="#institutes" className="hover:text-cyan-300 transition-colors">
                  Schneider Electric Energy Management CoE
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Portals & Citizen Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider">
              Citizen Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#registry" className="hover:text-cyan-300 transition-colors">
                  Kerala Skill Registry
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-cyan-300 transition-colors">
                  Course Prospectus 2026
                </a>
              </li>
              <li>
                <a href="#notices" className="hover:text-cyan-300 transition-colors">
                  Government Orders (G.O.)
                </a>
              </li>
              <li>
                <a href="#notices" className="hover:text-cyan-300 transition-colors">
                  RTI Disclosures (Sec 4(1)(b))
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-colors">
                  Tenders & Expressions of Interest
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Registered Office */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider">
              Registered Office
            </h4>
            <div className="space-y-2 text-neutral-400">
              <p>
                3rd Floor, Carmel Tower, Vazhuthacaud,<br />
                Thiruvananthapuram - 695014, Kerala, India
              </p>
              <p className="font-mono text-neutral-300">
                EPABX: +91 471 2735949 / 2735859
              </p>
              <p className="font-mono text-cyan-300">
                kase.kerala@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright, Compliance & Scroll to top */}
      <div className="border-t border-[#0b384a] bg-[#031118] py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            © {new Date().getFullYear()} Kerala Academy for Skills Excellence (KASE). Department of Labour & Skills, Govt. of Kerala.
          </div>

          <div className="flex items-center gap-6">
            <a href="#notices" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#notices" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <span>·</span>
            <a href="#notices" className="hover:text-white transition-colors">
              Hyperlinking Policy
            </a>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
