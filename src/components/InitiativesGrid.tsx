import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface InitiativesGridProps {
  onOpenRegistry: () => void;
  onSelectCategory: (cat: string) => void;
}

export const InitiativesGrid: React.FC<InitiativesGridProps> = ({ onOpenRegistry, onSelectCategory }) => {
  const initiatives = [
    {
      id: 'coe',
      index: '01',
      title: 'Centres of Excellence (CoE)',
      kicker: 'Industry 4.0 Partnerships',
      description:
        'State-of-the-art training facilities co-established with international corporations including Festo, Siemens, and Schneider Electric for specialized workforce skilling.',
      tag: 'Global Tech',
      actionText: 'Explore CoE Labs',
      href: '#institutes',
    },
    {
      id: 'accredited',
      index: '02',
      title: 'Accredited Skill Courses',
      kicker: 'Quality Standardisation',
      description:
        'Over 120 standardized curricula accredited under strict state quality guidelines and aligned with the National Skills Qualification Framework (NSQF).',
      tag: 'NSQF Certified',
      actionText: 'Search 120+ Courses',
      href: '#courses',
    },
    {
      id: 'placement',
      index: '03',
      title: 'Employment Enhancement & Overseas Mobility',
      kicker: 'International Career Desks',
      description:
        'Facilitating high-value overseas recruitment and apprenticeship linkages with European transit corporations, GCC infrastructure giants, and domestic tier-1 firms.',
      tag: 'Deutsche Bahn LoI',
      actionText: 'View Bilateral MoUs',
      href: '#notices',
    },
    {
      id: 'registry',
      index: '04',
      title: 'Kerala Skill Registry',
      kicker: 'Digital Citizen Portal',
      description:
        'A centralized digital database connecting certified technicians, artisans, and professionals with citizens, contractors, and overseas recruiters with QR verification.',
      tag: 'Online Verification',
      actionText: 'Search Registry ID',
      isRegistryAction: true,
    },
    {
      id: 'iiic',
      index: '05',
      title: 'Indian Institute of Infrastructure & Construction',
      kicker: 'Apex Civil & BIM Academy',
      description:
        'Specialised 20-acre Chavara campus providing advanced civil engineering, heavy machinery operating simulators, and digital BIM project certifications.',
      tag: 'Autonomous Apex Institute',
      actionText: 'Visit IIIC Showcase',
      href: '#institutes',
    },
    {
      id: 'ksid',
      index: '06',
      title: 'Kerala State Institute of Design (KSID)',
      kicker: 'Design & Craft Innovation',
      description:
        'State apex institute mentored by NID Ahmedabad offering postgraduate programs in industrial ergonomics, communication design, and sustainable craft.',
      tag: 'NID Mentored',
      actionText: 'Explore Design Programs',
      href: '#institutes',
    },
  ];

  return (
    <section id="initiatives" className="py-16 lg:py-24 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#0e5774] uppercase tracking-wider mb-2">
            Integrated Ecosystem
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-neutral-900 tracking-tight">
            Key Strategic Initiatives
          </h2>
          <p className="mt-2 text-neutral-600 text-sm sm:text-base leading-relaxed">
            From premier residential academies to grassroots district training centers, explore the programs
            shaping Kerala's human capital.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200 hover:border-[#0e5774]/50 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                {/* Top Bar inside Card: Index Numeral + Tag (Zero AI icons) */}
                <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-neutral-100">
                  <span className="font-mono text-sm font-extrabold text-[#0e5774] bg-[#eff7fa] px-2.5 py-1 rounded border border-[#bcdbe7]">
                    {item.index}
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-neutral-500 uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#0e5774] tracking-tight mb-1">
                  {item.kicker}
                </div>
                <h3 className="font-display font-bold text-lg text-neutral-900 mb-2.5 group-hover:text-[#0e5774] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-neutral-100">
                {item.isRegistryAction ? (
                  <button
                    onClick={onOpenRegistry}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0e5774] group-hover:text-[#0b475e] transition-colors cursor-pointer"
                  >
                    <span>{item.actionText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0e5774] group-hover:text-[#0b475e] transition-colors"
                  >
                    <span>{item.actionText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
