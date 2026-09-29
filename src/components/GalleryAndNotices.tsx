import React, { useState } from 'react';
import { Image, FileText, Scale, Download, Eye } from 'lucide-react';
import { NOTICES, GalleryItem } from '../data/kaseData';
import dbLoiImg from '../assets/images/kase_deutsche_bahn_loi.jpg';
import labImg from '../assets/images/hero_kase_global_skills_1790669485919.jpg';
import iiicRealImg from '../assets/images/iiic_campus_real.png';
import ksidRealImg from '../assets/images/ksid_campus_real.png';

export const GalleryAndNotices: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gallery' | 'orders' | 'rti'>('gallery');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g-1',
      title: 'Letter of Intent (LoI) Exchanged Between KASE and Deutsche Bahn AG',
      caption:
        'KASE and Deutsche Bahn AG formalized their collaboration through the exchange of a Letter of Intent (LoI) to strengthen international skill development initiatives.',
      date: 'February 2026',
      category: 'International',
      image: dbLoiImg,
    },
    {
      id: 'g-2',
      title: 'Inauguration of District Skill Centre Robotics & Automation Lab',
      caption:
        'Hon’ble Minister for Labour & Skills inaugurating the advanced Industry 4.0 Mechatronics and pneumatic diagnostics laboratory.',
      date: 'January 2026',
      category: 'Inauguration',
      image: labImg,
    },
    {
      id: 'g-3',
      title: 'IIIC Chavara Infrastructure Summit & Industry Conclave',
      caption:
        'Senior engineers from top civil construction conglomerates reviewing heavy simulator facilities and BIM project studios.',
      date: 'December 2025',
      category: 'Workshops',
      image: iiicRealImg,
    },
    {
      id: 'g-4',
      title: 'Kerala State Institute of Design (KSID) Annual Graduation Expo',
      caption:
        'Showcasing student-designed sustainable bamboo ergonomics, UI/UX interaction systems, and medical diagnostics hardware.',
      date: 'November 2025',
      category: 'Skill Competitions',
      image: ksidRealImg,
    },
  ];

  const handleDownloadNotice = (title: string) => {
    setDownloadSuccess(title);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 3000);
  };

  return (
    <section id="notices" className="py-16 lg:py-24 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0e5774] uppercase tracking-wider mb-2">
              <span>Public Information & Media</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-neutral-900 tracking-tight">
              News, Official Orders & Gallery
            </h2>
            <p className="mt-2 text-neutral-600 text-sm sm:text-base">
              Transparent access to state government orders, bilateral MoU signings, RTI disclosures, and photo
              archives.
            </p>
          </div>

          {/* Segmented Tab Switcher */}
          <div className="inline-flex p-1 bg-neutral-200/80 rounded-xl border border-neutral-300/80 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'gallery'
                  ? 'bg-[#0e5774] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Image className="w-3.5 h-3.5" />
              <span>Photo Gallery</span>
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'orders'
                  ? 'bg-[#0e5774] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Government Orders (G.O.)</span>
            </button>
            <button
              onClick={() => setActiveTab('rti')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'rti'
                  ? 'bg-[#0e5774] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>RTI Act 2005</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Gallery */}
        {activeTab === 'gallery' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveLightbox(item)}
                  className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-2xs hover:shadow-md transition-all cursor-pointer group flex flex-col"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 text-[10px] font-bold text-white bg-[#0e5774]/90 backdrop-blur-xs rounded">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-mono text-neutral-400 mb-1">{item.date}</div>
                      <h4 className="font-display font-bold text-sm text-neutral-900 leading-snug line-clamp-2 group-hover:text-[#0e5774] transition-colors">
                        {item.title}
                      </h4>
                    </div>

                    <div className="pt-3 mt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-[#0e5774] font-semibold">
                      <span>View Photograph</span>
                      <Eye className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Government Orders & Circulars */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-2xs animate-in fade-in duration-300">
            {downloadSuccess && (
              <div className="p-3 bg-[#eff7fa] border-b border-[#bcdbe7] text-xs text-[#0e5774] flex items-center justify-between">
                <span>Downloaded official gazette document: <strong>{downloadSuccess}</strong></span>
                <span className="font-mono text-[11px] text-[#0e5774]">Verified Signature</span>
              </div>
            )}

            <div className="divide-y divide-neutral-200">
              {NOTICES.map((notice) => (
                <div
                  key={notice.id}
                  className="p-5 sm:p-6 hover:bg-neutral-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-mono font-semibold text-[#0e5774]">{notice.orderNumber}</span>
                      <span className="text-neutral-400">·</span>
                      <span className="text-neutral-500">{notice.date}</span>
                      <span className="text-neutral-400">·</span>
                      <span className="text-neutral-600 font-medium">{notice.category}</span>
                    </div>

                    <h4 className="font-display font-bold text-base text-neutral-900 leading-snug">
                      {notice.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs font-mono text-neutral-400 hidden md:inline">
                      {notice.fileSize}
                    </span>
                    <button
                      onClick={() => handleDownloadNotice(notice.title)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0e5774] bg-[#eff7fa] hover:bg-[#e2f0f5] border border-[#bcdbe7] rounded-lg transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: RTI Act 2005 */}
        {activeTab === 'rti' && (
          <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-2xs animate-in fade-in duration-300">
            <div className="max-w-3xl mb-6">
              <h3 className="font-display font-bold text-xl text-neutral-900 mb-2">
                Right to Information (RTI) Act 2005 Disclosures
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                In compliance with Section 4(1)(b) of the RTI Act 2005, KASE makes proactive disclosures regarding
                its organizational structure, budgetary allocations, tenders, and public grievances.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-neutral-100">
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2 text-xs">
                <span className="font-bold text-neutral-900 block text-sm">
                  State Public Information Officer (SPIO)
                </span>
                <p className="text-neutral-600">
                  General Manager (Administration & Projects), KASE<br />
                  3rd Floor, Carmel Tower, Vazhuthacaud, Thiruvananthapuram - 695014<br />
                  Email: <span className="font-mono text-[#0e5774]">spio.kase@kerala.gov.in</span><br />
                  Phone: +91 471 2735949
                </p>
              </div>

              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2 text-xs">
                <span className="font-bold text-neutral-900 block text-sm">
                  First Appellate Authority (FAA)
                </span>
                <p className="text-neutral-600">
                  Managing Director, Kerala Academy for Skills Excellence (KASE)<br />
                  Department of Labour and Skills, Government of Kerala<br />
                  Email: <span className="font-mono text-[#0e5774]">md.kase@kerala.gov.in</span><br />
                  Phone: +91 471 2735859
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex flex-wrap gap-4 text-xs font-semibold text-[#0e5774]">
              <a href="#contact" className="hover:underline">Submit Online RTI Application</a>
              <span>·</span>
              <a href="#notices" onClick={() => setActiveTab('orders')} className="hover:underline">View 17 Manuals under Section 4(1)(b)</a>
            </div>
          </div>
        )}

        {/* Lightbox Modal */}
        {activeLightbox && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-neutral-900 text-white rounded-2xl max-w-3xl w-full overflow-hidden border border-neutral-800 relative shadow-2xl">
              <button
                onClick={() => setActiveLightbox(null)}
                className="absolute top-4 right-4 z-10 p-2 text-white bg-black/60 hover:bg-black/90 rounded-full transition-colors cursor-pointer"
                aria-label="Close photo"
              >
                ✕
              </button>

              <div className="relative aspect-[16/10] w-full bg-black">
                <img
                  src={activeLightbox.image}
                  alt={activeLightbox.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 mb-1">
                  <span>{activeLightbox.category}</span>
                  <span>·</span>
                  <span>{activeLightbox.date}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {activeLightbox.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {activeLightbox.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
