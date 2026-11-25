import type { IconName } from '../components/Icon'

export const profile = {
  name: 'Meor Hazrul Hakim',
  fullName: 'Meor Hazrul Hakim Bin Meor Harman',
  role: 'Graduate Software Engineer',
  headline: 'Designing, developing, and deploying software that solves real-world problems.',
  summary:
    'Graduate Software Engineer with a strong passion for designing, developing, and implementing innovative software solutions to address complex technical challenges. Proven track record in software development lifecycle management, problem-solving, and cross-functional team collaboration. Skilled in leveraging modern programming languages, agile methodologies, and software quality metrics to deliver efficient, scalable, and user-centric applications. Adept at utilizing cutting-edge technologies to optimize system performance and enhance overall productivity.',
  location: 'Rawang, Selangor, Malaysia',
  address: 'No 43, Jalan DM 1/7, Taman Desa Mas, Bandar Country Homes, 48000 Rawang',
  phone: '012-90129-60',
  email: 'meorhazrul69@gmail.com',
  linkedin: 'https://linkedin.com/in/meor-hazrul-ba278b244',
  github: 'https://github.com/meorezz',
  cvPath: '/Meor-Hakim-CV.pdf',
}

export const highlights: { icon: IconName; label: string; value: string }[] = [
  { icon: 'ai', label: 'Focus', value: 'AI-powered products' },
  { icon: 'product', label: 'Approach', value: 'Fullstack delivery' },
  { icon: 'target', label: 'Open to', value: 'Full-time SE roles' },
  { icon: 'pin', label: 'Based in', value: 'Rawang, Malaysia' },
]

export const skills = {
  languages: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++', 'C#', 'PHP', 'Dart'],
  frontend: ['React', 'Next.js', 'Angular', 'AngularJS', 'Vue.js', 'Flutter', 'React Native (Expo)', 'Ionic', 'Tailwind CSS'],
  backend: ['Node.js / Express', '.NET / ASP.NET', 'Django', 'Flask', 'Oracle APEX'],
  data: ['MySQL', 'MS SQL Server', 'Firebase', 'Azure', 'Supabase', 'SQLite'],
  ai: ['Google GenAI SDK', 'OpenAI Agent SDK', 'Anthropic API', 'Firebase Genkit', 'TensorFlow', 'ElevenLabs'],
  tools: ['Docker', 'Linux (Ubuntu)', 'SSRS', 'Google Cloud Run', 'Git / SourceTree'],
}

export type ExperienceItem = {
  title: string
  org: string
  period: string
  highlight?: string
  icon: IconName
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    title: 'Personal Expenses Manager (PEM)',
    org: 'Self project',
    period: '8 Aug – 11 Sep 2026',
    highlight: 'Oracle APEX + AI',
    icon: 'cost',
    bullets: [
      'Developed a personal web app on Oracle APEX to record daily expenses.',
      'Integrated Oozma, an AI agent budget advisor, to help manage income and recommend better spending decisions.',
    ],
  },
  {
    title: 'Backend AI Developer',
    org: 'GDG AI Hackathon 2026 (Google Developer Group)',
    period: '10–24 April 2026',
    highlight: 'Participant',
    icon: 'ai',
    bullets: [
      'Built Siswa-Rent, a natural-language student rental search platform (BM/EN) that replaces dropdown filters — users describe budget, distance, and vibe in a single sentence.',
      'Implemented the AI Agent Service on Google Cloud Run (Node.js/Express + Firebase Genkit): Gemini 3.1 Pro parses query intent to JSON, fetches Google Places candidates, scores via fit_score (distance, price, vibe, landlord quality), and streams ranked results with reasoning via SSE.',
      'Built a Python offline pipeline to scrape and geocode real rental listings near UTM Skudai, producing prices.json for live price enrichment.',
    ],
  },
  {
    title: 'Fullstack Developer',
    org: 'BorNEO HackWknd 2025 (UNIMAS)',
    period: '12–13 March 2026',
    highlight: 'Participant',
    icon: 'group',
    bullets: [
      'Built a cross-platform mobile app (Flutter, Node.js, Supabase) to help preserve endangered indigenous languages in Sabah and Sarawak, letting users learn vocabulary and practice pronunciation with AI-powered feedback.',
      'Designed an offline-first system (SQLite + Supabase sync) and a community contribution feature where native speakers submit and review new words and audio recordings.',
    ],
  },
  {
    title: 'Backend Developer',
    org: 'Deriv Hackathon 2026',
    period: '14–15 February 2026',
    highlight: 'Finalist',
    icon: 'graph',
    bullets: [
      'Built DerivIQ, an AI-powered trading platform with a dual-agent pipeline: Stock Research Agent (GPT-4.1) analyzing news, financials, and market metrics, feeding a Trade Decision Agent (GPT-4o-mini) that outputs Buy/Hold/Sell recommendations.',
      'Developed the Next.js 16 / React 19.2 frontend (Tailwind CSS, Shadcn/ui) with AI Copilot Chat (streaming), real-time market data panels (Finnhub API), a Behavioral Insights module, and advanced trade entry with automated execution controls.',
      'Built secure Next.js API routes for chat streaming, portfolio aggregation, and Finnhub proxying; secured all dashboard routes with Supabase session auth and secure cookies.',
    ],
  },
  {
    title: 'Front-end Developer',
    org: 'NASA Sarawak Space Apps Challenge',
    period: '14–15 October 2025',
    highlight: 'Participant',
    icon: 'visuals',
    bullets: [
      'Developed the front-end of a storytelling web app (Angular) that visualizes global terrains and landscapes using official NASA data.',
      'Built responsive, data-driven UI components to turn NASA datasets into an interactive, visually engaging user experience.',
    ],
  },
  {
    title: 'Fullstack Developer Intern',
    org: 'Blue Ocean IT Sdn. Bhd',
    period: '11 March – 29 August 2025',
    icon: 'management',
    bullets: [
      'Developed and maintained a hospital management system; optimized SQL queries and API integrations to reduce response times.',
      'Utilized Docker, Linux Ubuntu, SourceTree, and SSRS for scalable, secure deployment.',
      'Developed medicine label printing with SQL Server Reporting Services and invoicing with .NET.',
    ],
  },
]

export const projects: {
  name: string
  blurb: string
  stack: string[]
  icon: IconName
}[] = [
  {
    name: 'Siswa-Rent',
    blurb: 'Natural-language student rental search (BM/EN) with Gemini scoring and live listing enrichment.',
    stack: ['Node.js', 'Firebase Genkit', 'Gemini', 'Cloud Run'],
    icon: 'ai',
  },
  {
    name: 'DerivIQ',
    blurb: 'AI trading platform with a dual-agent research/decision pipeline and a real-time market dashboard.',
    stack: ['Next.js 16', 'React 19', 'Supabase', 'Finnhub'],
    icon: 'graph',
  },
  {
    name: 'Indigenous Languages App',
    blurb: 'Offline-first Flutter app for vocabulary, pronunciation feedback, and community contributions.',
    stack: ['Flutter', 'Node.js', 'Supabase', 'SQLite'],
    icon: 'group',
  },
  {
    name: 'NASA Storytelling UI',
    blurb: 'Angular front-end that turns official NASA terrain datasets into an interactive story.',
    stack: ['Angular', 'NASA Open Data'],
    icon: 'visuals',
  },
  {
    name: 'Personal Expenses Manager',
    blurb: 'Oracle APEX expense tracker with Oozma, an AI agent that advises on income and spending.',
    stack: ['Oracle APEX', 'AI Agent'],
    icon: 'cost',
  },
  {
    name: 'Hospital Management System',
    blurb: 'Internship work spanning HMS features, SSRS medicine labels, and .NET invoicing.',
    stack: ['.NET', 'SQL Server', 'SSRS', 'Docker'],
    icon: 'management',
  },
]

export const education = [
  {
    program: 'Bachelor of Software Engineering',
    school: 'University of Malaysia Sarawak (UNIMAS)',
    period: 'Oct 2022 – Jul 2026',
    detail: 'CGPA: 3.25',
  },
  {
    program: 'Matriculation Programme — Computer Science (Modul 2)',
    school: 'Malacca Matriculation College',
    period: 'Aug 2020 – Jul 2022',
    detail: 'CGPA: 3.46',
  },
]

export const reference = {
  name: 'Dr. Noor Hazlini Binti Borhan',
  title: 'Lecturer / Supervisor',
  org: 'Universiti Malaysia Sarawak (UNIMAS)',
  email: 'bnhazlini@unimas.my',
}

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]
