export interface Course {
  id: string;
  title: string;
  institute: 'IIIC' | 'KSID' | 'CoE' | 'Accredited Partner';
  category: 'Infrastructure' | 'Design' | 'Healthcare' | 'Industry 4.0' | 'Logistics';
  duration: string;
  eligibility: string;
  certification: string;
  description: string;
  intakeStatus: 'Open' | 'Upcoming' | 'Ongoing';
  location: string;
}

export interface Notice {
  id: string;
  orderNumber: string;
  date: string;
  title: string;
  category: 'Government Order' | 'Admission' | 'Tender' | 'Circular';
  fileSize: string;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  date: string;
  category: 'International' | 'Inauguration' | 'Workshops' | 'Skill Competitions';
  image: string;
}

export interface RegistryWorker {
  id: string;
  name: string;
  trade: string;
  district: string;
  kaseRegNo: string;
  certificationLevel: string;
  status: 'Verified' | 'Active';
  rating: number;
}

export const KASE_STATS = [
  { label: 'Accredited Programs', value: '120+', detail: 'Industry-aligned curricula' },
  { label: 'Youth Certified', value: '48,500+', detail: 'Globally benchmarked' },
  { label: 'Apex Institutes', value: '2', detail: 'IIIC Chavara & KSID Kollam' },
  { label: 'District Skill Centers', value: '14', detail: 'Covering all Kerala districts' },
  { label: 'Global Tie-Ups', value: '18+', detail: 'Including Deutsche Bahn, Festo' },
];

export const HERO_HIGHLIGHTS = [
  {
    tag: 'International Mobility',
    title: 'Letter of Intent formalised with Deutsche Bahn AG',
    description: 'KASE and German railway conglomerate Deutsche Bahn AG partner to create international career pipelines and precision vocational training for Kerala technical youth.',
    partner: 'Deutsche Bahn AG (Germany)',
    type: 'Bilateral Industry MoU',
  },
  {
    tag: 'World-Class Infrastructure',
    title: 'Indian Institute of Infrastructure and Construction (IIIC)',
    description: 'Premier academy at Chavara offering high-end certifications in BIM, Geotechnical engineering, Smart Heavy Machinery, and sustainable construction.',
    partner: 'ULCCS Collaboration',
    type: 'Apex State Academy',
  },
  {
    tag: 'Design & Human-Centred Innovation',
    title: 'Kerala State Institute of Design (KSID)',
    description: 'Pioneering design education in partnership with National Institute of Design (NID), fostering industrial ergonomics, digital UX, and integrated craft development.',
    partner: 'NID Mentorship',
    type: 'Postgraduate Design School',
  },
];

export const COURSES: Course[] = [
  {
    id: 'iiic-bim-adv',
    title: 'Advanced Diploma in Building Information Modelling (BIM)',
    institute: 'IIIC',
    category: 'Infrastructure',
    duration: '6 Months (Full-Time)',
    eligibility: 'B.Tech / Diploma in Civil Engineering / Architecture',
    certification: 'KASE & Autodesk Joint Certification',
    description: 'Master Revit, Navisworks, 4D/5D scheduling, and clash detection for mega-infrastructure and global engineering consultancies.',
    intakeStatus: 'Open',
    location: 'IIIC Campus, Chavara, Kollam',
  },
  {
    id: 'ksid-ux-design',
    title: 'Post Graduate Diploma in Integrated Design & Digital Experience',
    institute: 'KSID',
    category: 'Design',
    duration: '2 Years (Full-Time)',
    eligibility: 'Graduate degree in any discipline with creative portfolio',
    certification: 'Kerala State Institute of Design (Govt of Kerala)',
    description: 'Specialised master-level study in interaction design, service design, cognitive ergonomics, and design-led strategic management.',
    intakeStatus: 'Open',
    location: 'KSID Campus, Chandanathope, Kollam',
  },
  {
    id: 'coe-robotics-automation',
    title: 'Industry 4.0 Mechatronics & Precision Automation Specialist',
    institute: 'CoE',
    category: 'Industry 4.0',
    duration: '4 Months (Intensive)',
    eligibility: 'Diploma / Degree in Mechanical, Electrical, or Robotics',
    certification: 'KASE Centre of Excellence & Festo Didactic',
    description: 'Hands-on training in PLC programming, industrial SCADA, sensor diagnostics, pneumatic robotics, and automated manufacturing pipelines.',
    intakeStatus: 'Upcoming',
    location: 'CoE Kalamassery / TVM',
  },
  {
    id: 'coe-global-nursing',
    title: 'International Healthcare & Critical Care Bridging Course',
    institute: 'CoE',
    category: 'Healthcare',
    duration: '3 Months (Fast-Track)',
    eligibility: 'B.Sc Nursing / GNM with state council registration',
    certification: 'KASE Healthcare Academy & NHS/European Equivalency',
    description: 'OET/IELTS preparation, international hospital clinical communication protocols, and modern emergency response simulation.',
    intakeStatus: 'Open',
    location: 'Thiruvananthapuram',
  },
  {
    id: 'iiic-heavy-machinery',
    title: 'Certification in Advanced Construction Equipment Operations',
    institute: 'IIIC',
    category: 'Infrastructure',
    duration: '3 Months (Simulator & On-Field)',
    eligibility: '10th / Plus Two with valid LMV License',
    certification: 'National Skill Qualification Framework (NSQF Level 4)',
    description: 'High-precision training on modern hydraulic excavators, motor graders, and crawler cranes with computerised simulator practice.',
    intakeStatus: 'Open',
    location: 'IIIC Campus, Chavara, Kollam',
  },
  {
    id: 'ksid-product-craft',
    title: 'Craft Product Innovation & Sustainable Material Design',
    institute: 'KSID',
    category: 'Design',
    duration: '1 Year (Executive)',
    eligibility: 'Degree/Diploma in Design, Fine Arts, or Engineering',
    certification: 'KSID Fellowship Certification',
    description: 'Blending Kerala’s traditional bamboo, coir, and bell-metal heritage with contemporary ergonomic mass production standards.',
    intakeStatus: 'Upcoming',
    location: 'KSID Campus, Chandanathope, Kollam',
  },
];

export const NOTICES: Notice[] = [
  {
    id: 'not-01',
    orderNumber: 'G.O.(Rt) No. 412/2026/LBR',
    date: 'March 24, 2026',
    title: 'Sanctioning of Phase-III expansion grant for District Skill Centres under KASE Mission convergence',
    category: 'Government Order',
    fileSize: '1.4 MB (PDF)',
    featured: true,
  },
  {
    id: 'not-02',
    orderNumber: 'KASE/ADM/IIIC-KSID/2026',
    date: 'March 18, 2026',
    title: 'Admission Notification for 2026 Academic Batches at IIIC Chavara and KSID Chandanathope',
    category: 'Admission',
    fileSize: '820 KB (PDF)',
    featured: true,
  },
  {
    id: 'not-03',
    orderNumber: 'EOI-KASE-2026/INT-09',
    date: 'March 11, 2026',
    title: 'Expression of Interest (EoI) for Accredited Training Providers in Maritime Logistics & Offshore Safety',
    category: 'Tender',
    fileSize: '2.1 MB (PDF)',
    featured: false,
  },
  {
    id: 'not-04',
    orderNumber: 'KASE/CIR/REG-2026/04',
    date: 'February 28, 2026',
    title: 'Mandatory QR-code authentication guidelines for all certificates issued through Kerala Skill Registry',
    category: 'Circular',
    fileSize: '450 KB (PDF)',
    featured: false,
  },
];

export const MOCK_REGISTRY_DATABASE: RegistryWorker[] = [
  {
    id: 'reg-01',
    name: 'Arjun R. Nair',
    trade: 'BIM Modeler & MEP Drafter',
    district: 'Ernakulam',
    kaseRegNo: 'KL-SKILL-2026-8842',
    certificationLevel: 'NSQF Level 6 (IIIC Certified)',
    status: 'Verified',
    rating: 4.9,
  },
  {
    id: 'reg-02',
    name: 'Fathima Zehra',
    trade: 'Industrial UI/UX Designer',
    district: 'Kozhikode',
    kaseRegNo: 'KL-SKILL-2025-4190',
    certificationLevel: 'PG Diploma (KSID Certified)',
    status: 'Verified',
    rating: 5.0,
  },
  {
    id: 'reg-03',
    name: 'Anoop Krishnan',
    trade: 'Industrial Automation & PLC Specialist',
    district: 'Palakkad',
    kaseRegNo: 'KL-SKILL-2026-1123',
    certificationLevel: 'Centre of Excellence (Festo)',
    status: 'Verified',
    rating: 4.8,
  },
  {
    id: 'reg-04',
    name: 'Sherin Mary Thomas',
    trade: 'Critical Care Certified Nurse (OET B)',
    district: 'Kottayam',
    kaseRegNo: 'KL-SKILL-2025-9011',
    certificationLevel: 'Global Health Mobility Track',
    status: 'Verified',
    rating: 4.9,
  },
  {
    id: 'reg-05',
    name: 'Muhammed Shamseer',
    trade: 'Heavy Hydraulic Excavator Operator',
    district: 'Malappuram',
    kaseRegNo: 'KL-SKILL-2026-3304',
    certificationLevel: 'NSQF Level 4 (IIIC)',
    status: 'Verified',
    rating: 4.7,
  },
];
