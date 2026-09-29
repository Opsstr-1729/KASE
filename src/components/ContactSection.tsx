import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Building } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: 'Student Inquiries',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        purpose: 'Student Inquiries',
        message: '',
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Office & Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0e5774] uppercase tracking-wider mb-2">
                <Building className="w-3.5 h-3.5 text-[#0e5774]" />
                <span>State Headquarters</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-neutral-900 tracking-tight">
                Connect with KASE
              </h2>
              <p className="mt-2 text-neutral-600 text-sm leading-relaxed">
                Whether you are an industry conglomerate seeking talent pipelines, a training provider applying
                for accreditation, or a student needing career counseling.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 space-y-4 text-xs">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-4 h-4 text-[#0e5774] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-neutral-900 block text-sm">Headquarters Address</span>
                  <span className="text-neutral-600 leading-relaxed block mt-0.5">
                    3rd Floor, Carmel Tower, Cotton Hill Road,<br />
                    Vazhuthacaud, Thiruvananthapuram,<br />
                    Kerala - 695014, India
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-neutral-200/80">
                <Phone className="w-4 h-4 text-[#0e5774] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-neutral-900 block text-sm">Helpdesk & EPABX</span>
                  <span className="text-neutral-600 font-mono mt-0.5 block">+91 471 2735949 / 2735859</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-neutral-200/80">
                <Mail className="w-4 h-4 text-[#0e5774] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-neutral-900 block text-sm">Official Email Channels</span>
                  <div className="space-y-0.5 mt-0.5">
                    <a href="mailto:kase.kerala@gmail.com" className="font-mono text-[#0e5774] hover:underline block">
                      kase.kerala@gmail.com
                    </a>
                    <a href="mailto:enquiry@kase.in" className="font-mono text-[#0e5774] hover:underline block">
                      enquiry@kase.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-neutral-200/80">
                <Clock className="w-4 h-4 text-[#0e5774] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-neutral-900 block text-sm">Public Office Hours</span>
                  <span className="text-neutral-600 mt-0.5 block">
                    Monday to Saturday: 09:30 AM – 05:30 PM<br />
                    <span className="text-neutral-400 text-[11px]">(Closed on 2nd Saturdays & Public Holidays)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-neutral-50 p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-2xs">
            <div className="mb-6">
              <h3 className="font-display font-bold text-lg text-neutral-900">
                Submit Official Inquiry or Collaboration Proposal
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Your message is routed directly to the designated department officer at KASE.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-white rounded-xl border border-[#0e5774] animate-in fade-in duration-200">
                <CheckCircle2 className="w-10 h-10 text-[#0e5774] mx-auto mb-3" />
                <h4 className="font-display font-bold text-base text-neutral-900 mb-1">
                  Inquiry Dispatched Successfully
                </h4>
                <p className="text-xs text-neutral-600 max-w-md mx-auto">
                  Reference Ticket ID: <strong className="font-mono text-[#0e5774]">KASE-TKT-{Math.floor(100000 + Math.random() * 900000)}</strong>.
                  A designated desk officer will follow up with you within 2 working days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Full Name / Entity Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Varma or Siemens India"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0e5774]/30 focus:border-[#0e5774]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0e5774]/30 focus:border-[#0e5774]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0e5774]/30 focus:border-[#0e5774]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Subject / Engagement Type
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0e5774]/30 focus:border-[#0e5774] text-neutral-800"
                    >
                      <option value="Student Inquiries">Course Admissions & Student Guidance</option>
                      <option value="Industry Partnership">Industry Partnership & MoU Proposals</option>
                      <option value="Training Accreditation">Training Provider Accreditation</option>
                      <option value="Skill Registry">Skill Registry Verification Assistance</option>
                      <option value="General Grievance">RTI & Public Grievance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Detailed Message or Scope *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding your inquiry, partnership interest, or course query..."
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0e5774]/30 focus:border-[#0e5774]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-500">
                    Protected under Government of Kerala Citizen Privacy Standards.
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0e5774] hover:bg-[#0b475e] transition-colors shadow-xs cursor-pointer"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
