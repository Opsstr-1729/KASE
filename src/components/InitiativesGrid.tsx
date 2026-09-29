import React from 'react';
import { Award, Briefcase, GraduationCap, ShieldCheck, Cpu, ArrowUpRight, Compass } from 'lucide-react';

interface InitiativesGridProps {
  onOpenRegistry: () => void;
  onSelectCategory: (cat: string) => void;
}

export const InitiativesGrid: React.FC<InitiativesGridProps> = ({ onOpenRegistry, onSelectCategory }) => {
  const initiatives = [
    {
      id: 'coe',
      title: 'Centres of Excellence (CoE)',
      kicker: 'Industry 4.0 Partnerships',
      description:
        'State-of-the-art training facilities co-established with international corporations including Festo, Siemens, and Schneider Electric for specialized workforce skilling.',
      icon: Cpu,
      tag: 'Global Tech',
      actionText: 'Explore CoE Labs',
      href: '#institutes',
    },
    {
      id: 'accredited',
      title: 'Accredited Skill Courses',
      kicker: 'Quality Standardisation',
      description:
        'Over 120 standardized curricula accredited under strict state quality guidelines and aligned with the National Skills Qualification Framework (NSQF).',
      icon: GraduationCap,
      tag: 'NSQF Certified',
      actionText: 'Search 120+ Courses',
      href: '#courses',
    },
    {
      id: 'placement',
      title: 'Employment Enhancement & Overseas Mobility',
      kicker: 'International Career Desks',
      description:
        'Facilitating high-value overseas recruitment and apprenticeship linkages with European transit corporations, GCC infrastructure giants, and domestic tier-1 firms.',
      icon: Briefcase,
      tag: 'Deutsche Bahn LoI',
      actionText: 'View Bilateral MoUs',
      href: '#notices',
    },
    {
      id: 'registry',
      title: 'Kerala Skill Registry',
      kicker: 'Digital Citizen Portal',
      description:
        'A centralized digital database connecting certified technicians, artisans, and professionals with citizens, contractors, and overseas recruiters with QR verification.',
      icon: ShieldCheck,
      tag: 'Online Verification',
      actionText: 'Search Registry ID',
      isRegistryAction: true,
    },
    {
      id: 'iiic',
      title: 'Indian Institute of Infrastructure & Construction',
      kicker: 'Apex Civil & BIM Academy',
      description:
        'Specialised 20-acre Chavara campus providing advanced civil engineering, heavy machinery operating simulators, and digital BIM project certifications.',
      icon: Award,
      tag: 'Chavara, Kollam',
      actionText: 'Institute Profile',
      href: '#institutes',
    },
    {
      id: 'ksid',
      title: 'Kerala State Institute of Design',
      kicker: 'National Design Standard',
      description:
        'Kerala’s flagship design institution mentored by NID Ahmedabad, offering postgraduate specializations in digital user experience, craft product innovation, and ergonomics.',
      icon: Compass,
      tag: 'NID Mentored',
      actionText: 'Design Admissions',
      href: '#institutes',
    },
  ];

  return (
    <section id="initiatives" className="py-16 lg:py-24 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0e5774] uppercase tracking-wider mb-2">
            <span>Integrated Ecosystem</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-neutral-900 tracking-tight">
            Key Strategic Initiatives
          </h2>
          <p className="mt-2 text-neutral-600 text-sm sm:text-base leading-relaxed">
            From premier residential academies to grassroots district training centers, explore the programs
            shaping Kerala's human capital.
          </p>
        </div>

        {/* 6-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200 hover:border-[#0e5774]/50 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar inside Card: Icon + Category unboxed */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#eff7fa] text-[#0e5774] flex items-center justify-center border border-[#bcdbe7] group-hover:bg-[#0e5774] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-neutral-500">
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
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0e5774] hover:text-[#0b475e] transition-colors cursor-pointer"
                    >
                      <span>{item.actionText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#0e5774] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0e5774] hover:text-[#0b475e] transition-colors"
                    >
                      <span>{item.actionText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#0e5774] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
