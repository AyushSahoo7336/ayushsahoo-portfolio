export const profile = {
  name: "Your Name",
  shortName: "YOU",
  role: "Software Developer",
  tagline:
    "I craft exceptional digital experiences through clean code and creative solutions. From web apps to mobile and games, I bring ideas to life.",
  quote: "I believe in what I can learn to do, not just in what I can already do.",
  welcome: "Welcome to my world",
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "10+", label: "Projects Completed" },
  ],
  cvUrl: "/cv.pdf",
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/education", label: "Education" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
  { to: "/lets-talk", label: "Let's Talk" },
] as const;

export const marqueeWords = [
  "DEVELOPER",
  "2026",
  "FRONTEND",
  "BACKEND",
  "MOBILE",
  "GAME DEV",
  "REACT",
  "UNITY",
  "TYPESCRIPT",
];

export const skills = [
  {
    title: "Frontend Development",
    short: "React, Vue, Next.js",
    blurb:
      "Building responsive, accessible, and performant user interfaces with modern frameworks and tools.",
    tech: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS"],
    icon: "Layout",
  },
  {
    title: "Backend Development",
    short: "Node.js, Python, APIs",
    blurb:
      "Designing and implementing scalable APIs, microservices, and server-side applications.",
    tech: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
    icon: "Server",
  },
  {
    title: "Mobile Development",
    short: "React Native, Flutter",
    blurb: "Creating cross-platform mobile applications with native-like performance and UX.",
    tech: ["React Native", "Flutter", "Expo", "iOS", "Android"],
    icon: "Smartphone",
  },
  {
    title: "Game Development",
    short: "Unity, Godot",
    blurb: "Developing immersive gaming experiences from concept to release across platforms.",
    tech: ["Unity", "Godot", "C#", "GDScript", "Game Design"],
    icon: "Gamepad2",
  },
];

export const bio = [
  "I'm a full-stack developer with a passion for creating beautiful and functional applications. With over 3 years of experience, I've worked on everything from startup MVPs to enterprise-scale applications.",
  "I focus on shipping real products — web, mobile, and games — balancing speed, quality, and long-term maintainability.",
];

export const experiences = [
  { title: "Software Developer", org: "Company Name", date: "2025 – Present" },
  { title: "Software Developer", org: "Previous Company", date: "2025" },
  {
    title: "Certificate of Appreciation & Participation",
    org: "Training Center",
    date: "2025",
  },
  {
    title: "Game Developer (Unity Engine)",
    org: "Independent Game Development Team",
    date: "2024 – Present",
  },
  {
    title: "Game Developer (Godot Engine)",
    org: "Independent Game Development Team",
    date: "2023",
  },
  { title: "Freelance Front-End Developer", org: "Self-Employed", date: "2022" },
];

export const education = [
  { title: "Diploma in Digital Development", org: "Institute Name", date: "2023 – 2025" },
  { title: "Deug Economie", org: "Economics Faculty", date: "2021 – 2023" },
  { title: "Scientific Baccalaureate", org: "High School", date: "2021" },
];

export type ProjectCategory =
  | "Mobile"
  | "Desktop"
  | "Websites"
  | "Extensions"
  | "Other";

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Mobile",
  "Desktop",
  "Websites",
  "Extensions",
  "Other",
];

export const projects: {
  title: string;
  blurb: string;
  category: ProjectCategory;
  github?: string;
  demo?: string;
  accent: string;
}[] = [
  {
    title: "Project One",
    blurb: "A short one-line description of what this project does and who it's for.",
    category: "Websites",
    github: "https://github.com/",
    demo: "https://example.com/",
    accent: "from-cyan-500/40 to-blue-600/40",
  },
  {
    title: "Project Two",
    blurb: "Full-stack management system with role-based access control.",
    category: "Websites",
    github: "https://github.com/",
    accent: "from-purple-500/40 to-cyan-500/40",
  },
  {
    title: "Project Three",
    blurb: "Modern content browser with search, filters, and media playback.",
    category: "Websites",
    github: "https://github.com/",
    demo: "https://example.com/",
    accent: "from-orange-500/40 to-pink-500/40",
  },
  {
    title: "Project Four",
    blurb: "Project management platform designed to boost productivity.",
    category: "Websites",
    github: "https://github.com/",
    demo: "https://example.com/",
    accent: "from-emerald-500/40 to-cyan-500/40",
  },
  {
    title: "Mobile App",
    blurb: "React Native app for note-taking, organizing, and reminders.",
    category: "Mobile",
    github: "https://github.com/",
    accent: "from-indigo-500/40 to-purple-600/40",
  },
  {
    title: "Desktop Tool",
    blurb: "Lightweight, fast desktop utility with a clean UI.",
    category: "Desktop",
    github: "https://github.com/",
    accent: "from-rose-500/40 to-orange-500/40",
  },
  {
    title: "Browser Extension",
    blurb: "Organize your browser chaos in seconds.",
    category: "Extensions",
    github: "https://github.com/",
    accent: "from-yellow-500/40 to-rose-500/40",
  },
  {
    title: "CLI / Other",
    blurb: "A terminal tool built for speed and efficiency.",
    category: "Other",
    github: "https://github.com/",
    accent: "from-cyan-400/40 to-emerald-500/40",
  },
];

export const contacts = [
  { platform: "WhatsApp", handle: "+1 555 123 4567", href: "https://wa.me/15551234567", icon: "MessageCircle" },
  { platform: "GitHub", handle: "@your-handle", href: "https://github.com/", icon: "Github" },
  { platform: "LinkedIn", handle: "@your-handle", href: "https://linkedin.com/", icon: "Linkedin" },
  { platform: "Twitter", handle: "@your-handle", href: "https://twitter.com/", icon: "Twitter" },
  { platform: "Instagram", handle: "@your-handle", href: "https://instagram.com/", icon: "Instagram" },
  { platform: "Email", handle: "you@example.com", href: "mailto:you@example.com", icon: "Mail" },
];
