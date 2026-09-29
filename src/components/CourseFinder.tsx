import React, { useState, useMemo } from 'react';
import { Search, Filter, Clock, MapPin, Award, CheckCircle, ChevronRight, X } from 'lucide-react';
import { COURSES, Course } from '../data/kaseData';

export const CourseFinder: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedInstitute, setSelectedInstitute] = useState<string>('All');
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const categories = ['All', 'Infrastructure', 'Design', 'Industry 4.0', 'Healthcare'];
  const institutes = ['All', 'IIIC', 'KSID', 'CoE'];

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.certification.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || course.category === selectedCategory;

      const matchesInstitute =
        selectedInstitute === 'All' || course.institute === selectedInstitute;

      return matchesSearch && matchesCategory && matchesInstitute;
    });
  }, [searchTerm, selectedCategory, selectedInstitute]);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationSubmitted(true);
    setTimeout(() => {
      setApplicationSubmitted(false);
      setActiveCourseModal(null);
    }, 2500);
  };

  return (
    <section id="courses" className="py-16 lg:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0e5774] uppercase tracking-wider mb-2">
            <span>Official Course Directory</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-neutral-900 tracking-tight">
            Accredited Courses & Apex Certifications
          </h2>
          <p className="mt-2 text-neutral-600 text-sm sm:text-base leading-relaxed">
            Filter through state-accredited programs offering verified NSQF certifications, simulator training,
            and direct industry placement tie-ups.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-neutral-50 p-4 sm:p-5 rounded-2xl border border-neutral-200 mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by title, technology (e.g. BIM, UI/UX, Festo, Nursing)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0e5774]/30 focus:border-[#0e5774] transition-all placeholder:text-neutral-400"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 text-xs"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Institute Filter */}
            <div className="flex items-center gap-1.5 w-full sm:w-auto shrink-0">
              <span className="text-xs text-neutral-500 font-medium">Academy:</span>
              <select
                value={selectedInstitute}
                onChange={(e) => setSelectedInstitute(e.target.value)}
                className="px-3 py-2 text-xs font-semibold bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0e5774]/30 text-neutral-800"
              >
                {institutes.map((inst) => (
                  <option key={inst} value={inst}>
                    {inst === 'All' ? 'All Academies' : inst}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            <span className="text-xs text-neutral-500 font-medium shrink-0 flex items-center gap-1">
              <Filter className="w-3 h-3 text-[#0e5774]" /> Sector:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0e5774] text-white shadow-2xs'
                    : 'bg-white text-neutral-600 hover:bg-neutral-200/60 border border-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count & Status */}
        <div className="flex items-center justify-between text-xs text-neutral-500 mb-4 px-1">
          <span>Showing {filteredCourses.length} accredited program{filteredCourses.length !== 1 ? 's' : ''}</span>
          <span>Verified State Curriculum</span>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="p-12 text-center bg-neutral-50 rounded-2xl border border-neutral-200">
            <p className="text-sm font-medium text-neutral-600">No accredited programs found matching your filter criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedInstitute('All');
              }}
              className="mt-3 text-xs font-semibold text-[#0e5774] hover:underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-[#0e5774]/50 transition-all duration-200 shadow-2xs hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Card Header Metadata */}
                  <div className="flex items-center justify-between gap-2 text-xs font-medium text-neutral-500 mb-3">
                    <span className="font-semibold text-[#0e5774]">{course.institute}</span>
                    <span>·</span>
                    <span>{course.category}</span>
                    <span>·</span>
                    <span
                      className={`text-[11px] font-semibold ${
                        course.intakeStatus === 'Open' ? 'text-[#0e5774]' : 'text-neutral-500'
                      }`}
                    >
                      {course.intakeStatus}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-neutral-900 leading-snug mb-2.5">
                    {course.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                    {course.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-neutral-500 pt-3 border-t border-neutral-100 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      <span className="truncate">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      <span className="truncate">{course.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      <span className="truncate">{course.certification}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveCourseModal(course)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-[#0e5774] bg-[#eff7fa] hover:bg-[#e2f0f5] rounded-lg transition-colors border border-[#bcdbe7] cursor-pointer"
                  >
                    <span>View Curriculum & Prospectus</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#0e5774]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal: Course Details & Inquiry */}
        {activeCourseModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 border border-neutral-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setActiveCourseModal(null)}
                className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#0e5774] uppercase tracking-wide mb-1">
                <span>{activeCourseModal.institute}</span>
                <span className="text-neutral-400">·</span>
                <span>{activeCourseModal.category}</span>
              </div>

              <h3 className="font-display font-bold text-xl text-neutral-900 mb-3">
                {activeCourseModal.title}
              </h3>

              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                {activeCourseModal.description}
              </p>

              <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200 space-y-3 text-xs mb-6">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-neutral-500 block">Duration</span>
                    <span className="font-semibold text-neutral-900">{activeCourseModal.duration}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Location</span>
                    <span className="font-semibold text-neutral-900">{activeCourseModal.location}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-200/80">
                  <span className="text-neutral-500 block">Minimum Eligibility</span>
                  <span className="font-semibold text-neutral-900">{activeCourseModal.eligibility}</span>
                </div>

                <div className="pt-2 border-t border-neutral-200/80">
                  <span className="text-neutral-500 block">Awarded Certification</span>
                  <span className="font-semibold text-[#0e5774]">{activeCourseModal.certification}</span>
                </div>
              </div>

              {/* Action Form / Direct Inquiry */}
              {applicationSubmitted ? (
                <div className="p-4 bg-[#eff7fa] border border-[#bcdbe7] rounded-xl text-center text-[#0e5774] text-xs">
                  <CheckCircle className="w-6 h-6 text-[#0e5774] mx-auto mb-1.5" />
                  <span className="font-bold block text-sm">Inquiry Received</span>
                  <span>An admissions counselor from {activeCourseModal.institute} will contact you shortly with the application form.</span>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-3">
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                    Request Admission Prospectus & Guidance
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Candidate Full Name"
                      className="px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0e5774]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Number (10 digits)"
                      className="px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0e5774]"
                    />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0e5774]"
                  />
                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveCourseModal(null)}
                      className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900 cursor-pointer"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 text-xs font-semibold text-white bg-[#0e5774] hover:bg-[#0b475e] rounded-lg shadow-xs cursor-pointer"
                    >
                      Submit Candidate Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
