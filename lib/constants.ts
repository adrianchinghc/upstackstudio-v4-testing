export const SITE_URL = 'https://upstackstudio.com'
export const SITE_NAME = 'Upstack Studio'

export const CALENDLY_URL =
  'https://calendly.com/upstackstudio/45-minute-strategy-session'

export const SOCIAL = {
  // Adrian's personal channels (primary content)
  youtube: 'https://youtube.com/@adrianchinghc',
  instagram: 'https://www.instagram.com/adrianchinghc/',
  linkedin: 'https://my.linkedin.com/in/adrianchinghc',
  tiktok: 'https://www.tiktok.com/@adrianchinghc',
  twitter: 'https://x.com/adrianchinghc',
  podcast: 'https://adrianchinghc.buzzsprout.com',
  // Company accounts (footer only)
  companyLinkedin: 'https://www.linkedin.com/company/upstack-studio/',
  companyInstagram: 'https://www.instagram.com/upstackstudio/',
  companyTiktok: 'https://www.tiktok.com/@upstackstudio',
  companyTwitter: 'https://x.com/upstackstudio',
}

// YouTube video IDs
export const YT_JUSTIN = 'KdxPAqwEDHY'
export const YT_JASON = 'kRUL8NrM_Rk'

// Client names for marquee
export const CLIENTS = [
  'Daikin Malaysia',
  'Magnum 4D',
  'BookXcess',
  'Teleme',
  'The Malaysian Insight',
  'AFA Malaysia',
  'Tradelink',
  'Whisker Tracker',
  'One Stop Manpower',
  'Recruitopia',
  'Niuace',
  'Black Tulip',
  'Fightcode',
  '12Job',
  'iWealth',
  'HITB',
  'Fitness Annotations',
] as const

// Directory ratings (scores as strings to preserve decimal formatting)
export const RATINGS = {
  clutch: { score: '4.9', label: 'Clutch' },
  techBehemoths: { score: '5.0', label: 'TechBehemoths' },
  google: { score: '4.9', label: 'Google' },
} as const

// Press
export const PRESS = {
  inRealLife: {
    title:
      'I Made RM 2 Million Building Apps After Losing RM 80,000 With Zero Backup Plan',
    url: 'https://inreallife.my/i-made-rm-2-million-building-apps-after-losing-rm-80000-with-zero-backup-plan/',
    source: 'In Real Life Malaysia',
  },
} as const

// Blog categories
export const BLOG_CATEGORIES = [
  'All',
  'Product Development',
  'Mobile App',
  'Web App',
  'Artificial Intelligence',
  'Workflow Automation',
  'No Code & Low Code',
  'Vibe Coding',
  'Insightful Stories',
  'Inside Upstack Studio',
] as const

// Industries served
export const INDUSTRIES = [
  'Manufacturing',
  'Financial Services',
  'Healthcare',
  'Logistics',
  'Media',
  'Professional Services',
  'Retail',
  'Consumer Tech',
  'HR Tech',
  'Sports & Lifestyle',
  'Cybersecurity',
  'Social Impact',
] as const

// Service guarantees — displayed in GuaranteeBar
export const GUARANTEES = [
  '2-Week Risk-Free Trial',
  'No Extra Charge for Our Delays',
  'Transparent Pricing',
  '24-Hour Response SLA',
] as const

// Animation presets — extracted from components for consistency
export const ANIMATION_PRESETS = {
  counter: { stiffness: 50, damping: 15 },
  sectionEnter: { duration: 0.4, delay: 0 },
  parallax: { stiffness: 150, damping: 20 },
} as const

export const EASE_OUT = [0.23, 1, 0.32, 1] as const
export const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const

// Team members — ordered by role hierarchy
export const TEAM_MEMBERS = [
  {
    name: 'Adrian',
    fullName: 'Adrian Ching',
    role: 'Founder',
    image: '/images/team/adrian.png',
    linkedin: 'https://my.linkedin.com/in/adrianchinghc',
  },
  {
    name: 'Derrick',
    fullName: 'Derrick Yeoh',
    role: 'Project Manager',
    image: '/images/team/derrick.png',
  },
  {
    name: 'Elly',
    fullName: 'Elly Shazwani',
    role: 'Content Strategist',
    image: '/images/team/elly.png',
  },
  {
    name: 'Yee Qing',
    fullName: 'Yee Qing',
    role: 'Product Designer',
    image: '/images/team/yeeqing.png',
  },
  {
    name: 'Arieff',
    fullName: 'Arieff',
    role: 'Product Designer',
    image: '/images/team/arieff.png',
  },
  {
    name: 'Syafiq',
    fullName: 'Syafiq',
    role: 'Software QA Engineer',
    image: '/images/team/syafiq.png',
  },
  {
    name: 'Alan',
    fullName: 'Alan',
    role: 'Software Developer',
    image: '/images/team/alan.png',
  },
  {
    name: 'Richard',
    fullName: 'Richard',
    role: 'Software Developer',
    image: '/images/team/richard.png',
  },
  {
    name: 'Jocelyn',
    fullName: 'Jocelyn',
    role: 'Software Developer',
    image: '/images/team/jocelyn.png',
  },
  {
    name: 'Wei Chen',
    fullName: 'Wei Chen',
    role: 'Software Developer',
    image: '/images/team/weichen.png',
  },
  {
    name: 'Kashi',
    fullName: 'Kashi',
    role: 'Software Developer',
    image: '/images/team/kashi.png',
  },
  {
    name: 'Noval',
    fullName: 'Noval',
    role: 'Software Developer',
    image: '/images/team/noval.png',
  },
  {
    name: 'Nielton',
    fullName: 'Nielton',
    role: 'Software Developer',
    image: '/images/team/nielton.png',
  },
  {
    name: 'Xavier',
    fullName: 'Xavier',
    role: 'Software Developer',
    image: '/images/team/xavier.png',
  },
] as const

// Company stats — for bento grid
export const COMPANY_STATS = {
  yearsInBusiness: 7,
  projectsCompleted: 25,
  teamMembers: 18,
  clientsServed: 40,
  fundingRaised: 0,
  remotePercentage: 100,
} as const

// Countries served with flag emojis
export const COUNTRIES_SERVED = [
  { name: 'Malaysia', flag: '🇲🇾', code: 'MY' },
  { name: 'Australia', flag: '🇦🇺', code: 'AU' },
  { name: 'United States', flag: '🇺🇸', code: 'US' },
  { name: 'United Kingdom', flag: '🇬🇧', code: 'UK' },
  { name: 'Netherlands', flag: '🇳🇱', code: 'NL' },
  { name: 'Singapore', flag: '🇸🇬', code: 'SG' },
] as const

// Featured testimonials — for written testimonial blocks
export const FEATURED_TESTIMONIALS = [
  {
    quote:
      "Working with Adrian and his team was a great experience. They handled everything professionally and made sure to address any potential issues before delivering the project. Even when our requirements changed, they were patient and worked with us to make the necessary adjustments, explaining everything clearly. Their dedication and passion made a huge difference compared to other vendors. They didn't just deliver and leave; they supported us every step of the way.",
    name: 'Ivan Lee',
    role: 'Executive Committee Member',
    company: 'Association of Financial Advisers Malaysia',
    companyShort: 'AFA',
    image: '/images/clients/ivan-lee.png',
    highlights: ['patient', 'explaining everything clearly', 'supported us every step of the way'],
  },
] as const
