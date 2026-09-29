import React, { useState } from 'react';
import { Search, X, FileText, ArrowRight } from 'lucide-react';
import { COURSES, NOTICES } from '../data/kaseData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (courseId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectCourse }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const matchedCourses = searchTerm.trim()
    ? COURSES.filter(
        (c) =>
          c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.institute.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const matchedNotices = searchTerm.trim()
    ? NOTICES.filter(
        (n) =>
          n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          n.orderNumber.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-xl w-full border border-neutral-200 shadow-2xl overflow-hidden flex flex-col">
        {/* Search Input Box */}
        <div className="p-4 border-b border-neutral-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-neutral-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search programs, G.O. circulars, institutions, or keywords..."
            className="flex-1 text-sm bg-transparent border-none focus:outline-none text-neutral-900 placeholder:text-neutral-400"
          />
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-100 cursor-pointer"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-4">
          {!searchTerm.trim() ? (
            <div className="py-8 text-center text-xs text-neutral-400 space-y-2">
              <p>Type keywords like "BIM", "Design", "Nursing", "IIIC", "Order", or "Admission".</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['BIM', 'Design', 'Festo', 'Civil', 'Admission', 'IIIC'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="px-2.5 py-1 bg-neutral-100 hover:bg-[#eff7fa] hover:text-[#0e5774] text-neutral-700 rounded-lg text-xs cursor-pointer transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {matchedCourses.length === 0 && matchedNotices.length === 0 ? (
                <div className="py-8 text-center text-xs text-neutral-500">
                  No direct results found for "{searchTerm}". Try a broader term.
                </div>
              ) : (
                <>
                  {matchedCourses.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">
                        Accredited Courses ({matchedCourses.length})
                      </span>
                      {matchedCourses.map((c) => (
                        <a
                          key={c.id}
                          href="#courses"
                          onClick={() => {
                            onSelectCourse(c.id);
                            onClose();
                          }}
                          className="p-3 rounded-xl hover:bg-[#eff7fa] border border-transparent hover:border-[#bcdbe7] transition-colors flex items-center justify-between group block"
                        >
                          <div>
                            <div className="text-xs font-semibold text-neutral-900 group-hover:text-[#0e5774]">
                              {c.title}
                            </div>
                            <div className="text-[11px] text-neutral-500 mt-0.5">
                              {c.institute} · {c.duration} · {c.location}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#0e5774] group-hover:translate-x-1 transition-all" />
                        </a>
                      ))}
                    </div>
                  )}

                  {matchedNotices.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-neutral-100">
                      <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">
                        Official Orders & Circulars ({matchedNotices.length})
                      </span>
                      {matchedNotices.map((n) => (
                        <a
                          key={n.id}
                          href="#notices"
                          onClick={onClose}
                          className="p-3 rounded-xl hover:bg-[#eff7fa] border border-transparent hover:border-[#bcdbe7] transition-colors flex items-center justify-between group block"
                        >
                          <div>
                            <div className="text-xs font-semibold text-neutral-900 group-hover:text-[#0e5774]">
                              {n.title}
                            </div>
                            <div className="text-[11px] font-mono text-neutral-500 mt-0.5">
                              {n.orderNumber} · {n.date}
                            </div>
                          </div>
                          <FileText className="w-4 h-4 text-neutral-400 group-hover:text-[#0e5774]" />
                        </a>
                      ))}
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
