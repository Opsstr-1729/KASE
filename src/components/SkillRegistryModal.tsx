import React, { useState } from 'react';
import { X, ShieldCheck, Smartphone, CheckCircle2, Download, Check } from 'lucide-react';
import { MOCK_REGISTRY_DATABASE } from '../data/kaseData';

interface SkillRegistryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SkillRegistryModal: React.FC<SkillRegistryModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'verify' | 'register' | 'app'>('verify');
  const [searchId, setSearchId] = useState('');
  const [verifiedRecord, setVerifiedRecord] = useState<(typeof MOCK_REGISTRY_DATABASE)[0] | null>(null);
  const [searchAttempted, setSearchAttempted] = useState(false);

  // Registration Form State
  const [regFormData, setRegFormData] = useState({
    name: '',
    phone: '',
    trade: 'Electrician',
    district: 'Thiruvananthapuram',
    qualification: 'ITI / Diploma',
    experienceYears: '3',
  });
  const [regSuccess, setRegSuccess] = useState(false);

  if (!isOpen) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchAttempted(true);
    const found = MOCK_REGISTRY_DATABASE.find(
      (w) =>
        w.kaseRegNo.toLowerCase() === searchId.toLowerCase().trim() ||
        w.name.toLowerCase().includes(searchId.toLowerCase().trim())
    );
    setVerifiedRecord(found || null);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegSuccess(true);
    setTimeout(() => {
      setRegSuccess(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-neutral-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Top Bar */}
        <div className="p-5 bg-[#0e5774] text-white flex items-center justify-between border-b border-[#0b475e]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-white">
                Kerala Skill Registry
              </h3>
              <p className="text-xs text-white/80">
                Official Government of Kerala Verified Trades & Credentials
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="px-6 pt-4 pb-2 border-b border-neutral-200 flex items-center gap-4 bg-neutral-50 text-xs">
          <button
            onClick={() => setActiveTab('verify')}
            className={`pb-2 font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'verify'
                ? 'border-[#0e5774] text-[#0e5774]'
                : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            Verify Credential / QR
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`pb-2 font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'register'
                ? 'border-[#0e5774] text-[#0e5774]'
                : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            New Artisan Registration
          </button>
          <button
            onClick={() => setActiveTab('app')}
            className={`pb-2 font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'app'
                ? 'border-[#0e5774] text-[#0e5774]'
                : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            Download Mobile App
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* TAB 1: Verify */}
          {activeTab === 'verify' && (
            <div className="space-y-5">
              <form onSubmit={handleVerify} className="space-y-2">
                <label className="block text-xs font-semibold text-neutral-700">
                  Search by KASE Registration Number or Name
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    placeholder="e.g. KL-SKILL-2026-8842 or Arjun"
                    className="flex-1 px-3.5 py-2.5 text-xs bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0e5774]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0e5774] hover:bg-[#0b475e] rounded-xl transition-colors cursor-pointer"
                  >
                    Authenticate
                  </button>
                </div>
              </form>

              {searchAttempted && (
                <div>
                  {verifiedRecord ? (
                    <div className="p-4 bg-[#eff7fa] rounded-xl border border-[#bcdbe7] text-xs space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-neutral-900">{verifiedRecord.name}</span>
                        <span className="px-2 py-0.5 bg-[#0e5774] text-white font-semibold rounded text-[10px]">
                          Authenticated & Active
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-neutral-700">
                        <div>
                          <span className="text-neutral-500 block">Designated Trade:</span>
                          <span className="font-medium">{verifiedRecord.trade}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 block">District:</span>
                          <span className="font-medium">{verifiedRecord.district}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 block">KASE Registration ID:</span>
                          <span className="font-mono font-bold text-[#0e5774]">{verifiedRecord.kaseRegNo}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 block">Skill Competency:</span>
                          <span className="font-medium">{verifiedRecord.certificationLevel}</span>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-[#bcdbe7] flex items-center justify-between text-neutral-500 text-[11px]">
                        <span>Verified by Department of Labour & Skills</span>
                        <span className="font-mono text-[#0e5774]">Security Check: PASS</span>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 bg-neutral-100 rounded-xl text-neutral-600 text-xs text-center">
                      No certified worker record matches "{searchId}". Please ensure the ID matches the format on the KASE card.
                    </div>
                  )}
                </div>
              )}

              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-xs text-neutral-600">
                <span className="font-bold text-neutral-800 block mb-1">
                  How does State Verification work?
                </span>
                <p className="leading-relaxed">
                  Every skilled worker enrolled in the Kerala Skill Registry undergoes biometric or Aadhaar verification
                  coupled with trade testing at accredited government institutions (ITI, IIIC, KSID, or ASDC).
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: Register */}
          {activeTab === 'register' && (
            <div>
              {regSuccess ? (
                <div className="p-8 text-center bg-[#eff7fa] rounded-xl border border-[#bcdbe7] text-xs text-[#0e5774]">
                  <CheckCircle2 className="w-10 h-10 text-[#0e5774] mx-auto mb-2" />
                  <h4 className="font-display font-bold text-base mb-1">
                    Application Docket Initiated
                  </h4>
                  <p>
                    Your provisional registration ID is <strong>KL-PROV-{Math.floor(10000 + Math.random() * 90000)}</strong>.
                    Visit your nearest District Skill Development Centre for trade credential physical verification.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRegister} className="space-y-3.5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-neutral-700 mb-1">Full Legal Name *</label>
                      <input
                        type="text"
                        required
                        value={regFormData.name}
                        onChange={(e) => setRegFormData({ ...regFormData, name: e.target.value })}
                        placeholder="As in Aadhaar"
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0e5774]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-neutral-700 mb-1">Mobile Number (Aadhaar linked) *</label>
                      <input
                        type="tel"
                        required
                        value={regFormData.phone}
                        onChange={(e) => setRegFormData({ ...regFormData, phone: e.target.value })}
                        placeholder="10 digit number"
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0e5774]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-neutral-700 mb-1">Primary Trade / Skill *</label>
                      <select
                        value={regFormData.trade}
                        onChange={(e) => setRegFormData({ ...regFormData, trade: e.target.value })}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0e5774]"
                      >
                        <option value="Electrician">Licensed Electrician</option>
                        <option value="Plumber">Plumber & Pipe Fitter</option>
                        <option value="BIM Modeler">BIM & CAD Draftsperson</option>
                        <option value="Crane Operator">Heavy Equipment Operator</option>
                        <option value="Healthcare Assistant">Healthcare / Nursing Aide</option>
                        <option value="Graphic & UI Designer">UI/UX & Digital Designer</option>
                        <option value="HVAC Technician">HVAC & Refrigeration Mechanic</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-neutral-700 mb-1">Home District *</label>
                      <select
                        value={regFormData.district}
                        onChange={(e) => setRegFormData({ ...regFormData, district: e.target.value })}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0e5774]"
                      >
                        <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                        <option value="Kollam">Kollam</option>
                        <option value="Pathanamthitta">Pathanamthitta</option>
                        <option value="Alappuzha">Alappuzha</option>
                        <option value="Kottayam">Kottayam</option>
                        <option value="Idukki">Idukki</option>
                        <option value="Ernakulam">Ernakulam</option>
                        <option value="Thrissur">Thrissur</option>
                        <option value="Palakkad">Palakkad</option>
                        <option value="Malappuram">Malappuram</option>
                        <option value="Kozhikode">Kozhikode</option>
                        <option value="Wayanad">Wayanad</option>
                        <option value="Kannur">Kannur</option>
                        <option value="Kasaragod">Kasaragod</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-3 flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2.5 text-xs font-semibold text-white bg-[#0e5774] hover:bg-[#0b475e] rounded-lg shadow-xs cursor-pointer"
                    >
                      Submit Registration Docket
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 3: Mobile App */}
          {activeTab === 'app' && (
            <div className="space-y-5 text-xs">
              <div className="p-4 bg-[#eff7fa] rounded-xl border border-[#bcdbe7] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0e5774] text-white flex items-center justify-center shrink-0">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-neutral-900">
                    Kerala Skill Registry Official App (v2.4)
                  </h4>
                  <p className="text-neutral-600 mt-0.5">
                    Available for Android on Google Play and direct government APK package.
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-neutral-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0e5774]" />
                  <span>Offline Digital ID Card with encrypted QR code verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0e5774]" />
                  <span>Receive direct work alerts from certified state contractors and households</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0e5774]" />
                  <span>Free insurance benefits linkage under Department of Labour & Skills schemes</span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap gap-3">
                <a
                  href="#download-apk"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Download initiated for official APK (Kerala_Skill_Registry_2026.apk).');
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-[#0e5774] hover:bg-[#0b475e] rounded-lg cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download APK (Android 9+)</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
