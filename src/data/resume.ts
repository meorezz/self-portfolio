export const profile = {
  name: 'Meor Hazrul Hakim',
  fullName: 'Meor Hazrul Hakim Bin Meor Harman',
  role: 'Software Engineer',
  headline: 'Building scalable systems and AI-powered products.',
  summary:
    'Results-oriented Software Engineer with a strong passion for designing, developing, and implementing innovative software solutions. Proven track record across the software development lifecycle, problem-solving, and cross-functional collaboration — delivering efficient, scalable, and user-centric applications.',
  location: 'Rawang, Selangor, Malaysia',
  phone: '012-90129-60',
  email: 'meorhazrul69@gmail.com',
  linkedin: 'https://linkedin.com/in/meor-hazrul-ba278b244',
  github: 'https://github.com/meorezz',
}

export const skills = {
  languages: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++', 'C#', 'Dart'],
  frontend: ['React Native (Expo)', 'Angular', 'Flutter', 'Next.js', 'Tailwind CSS'],
  backend: ['Node.js', 'Express', 'Django', 'Flask', '.NET Framework'],
  data: ['MySQL', 'MS SQL Server', 'Firebase', 'Supabase', 'SQLite'],
  tools: ['Docker', 'Linux', 'SSRS', 'Google Cloud Run', 'Git'],
}

export type ExperienceItem = {
  title: string
  org: string
  period: string
  highlight?: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    title: 'Backend AI Developer',
    org: 'GDG AI Hackathon 2026',
    period: '10–24 April 2026',
    highlight: 'Participant',
    bullets: [
      'Built Siswa-Rent, a natural-language student rental search platform (BM/EN) that replaces dropdown filters — users describe budget, distance, and vibe in a single sentence.',
      'Implemented the AI Agent Service on Google Cloud Run (Node.js/Express + Firebase Genkit): Gemini parses query intent to JSON, fetches Google Places candidates, scores via fit_score, and streams ranked results with reasoning via SSE.',
      'Built a Python offline pipeline to scrape and geocode ~30 real rental listings near UTM Skudai for live price enrichment.',
    ],
  },
  {
    title: 'Fullstack Developer',
    org: 'BorNEO HackWknd 2025 (UNIMAS)',
    period: '12–13 March 2026',
    highlight: 'Participant',
    bullets: [
      'Built a cross-platform mobile app (Flutter, Node.js, Supabase) to help preserve 6 endangered indigenous languages in Sabah and Sarawak.',
      'Designed an offline-first system (SQLite + Supabase sync) and a community contribution feature for native speakers to submit and review words and audio.',
    ],
  },
  {
    title: 'Backend Developer',
    org: 'Deriv Hackathon 2026',
    period: '14–15 February 2026',
    highlight: 'Finalist',
    bullets: [
      'Built DerivIQ, an AI-powered trading platform with a dual-agent pipeline: Stock Research Agent analyzing news/financials/market metrics, feeding a Trade Decision Agent with Buy/Hold/Sell recommendations.',
      'Developed the Next.js / React frontend with AI Copilot Chat (streaming), real-time market data panels (Finnhub API), and advanced trade entry controls.',
      'Built secure Next.js API routes for chat streaming and portfolio aggregation; secured dashboard routes with Supabase session auth.',
    ],
  },
  {
    title: 'Front-end Developer',
    org: 'NASA Sarawak Space Apps Challenge',
    period: '14–15 October 2025',
    highlight: 'Participant',
    bullets: [
      'Developed the front-end of a storytelling web app (Angular) that visualizes global terrains using official NASA data.',
      'Built responsive, data-driven UI components for an interactive, visually engaging experience.',
    ],
  },
  {
    title: 'Fullstack Developer Intern',
    org: 'Blue Ocean IT Sdn. Bhd',
    period: '11 March – 29 August 2025',
    bullets: [
      'Developed and maintained a hospital management system; optimized SQL queries and API integrations to reduce response times.',
      'Utilized Docker, Linux, SourceTree, and SSRS for scalable, secure deployment.',
      'Developed medicine label printing with SQL Server Reporting Services and invoicing with .NET.',
    ],
  },
  {
    title: 'Arduino Developer',
    org: 'My Digital Maker TeenTech Prize (MDEC)',
    period: 'Aug – Sep 2021',
    highlight: '1st Place',
    bullets: [
      'Built an anti-double-parking system on Arduino and won 1st place at My Digital Maker TeenTech Prizes.',
    ],
  },
]

export const education = [
  {
    program: 'Bachelor of Software Engineering',
    school: 'University of Malaysia Sarawak (UNIMAS)',
    period: 'Oct 2022 – Oct 2026',
    detail: 'Current CGPA: 3.23',
  },
  {
    program: 'Matriculation Programme — Computer Science (Modul 2)',
    school: 'Malacca Matriculation College',
    period: 'Aug 2020 – Jul 2022',
    detail: 'CGPA: 3.46',
  },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]
