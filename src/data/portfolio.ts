export const profile = {
  name: "Ayush Sahoo",
  shortName: "AYUSH",
  role: "Software Engineer",
  tagline:
    "I build real-time systems that respond fast — from peer-to-peer video calls to algorithmic trading engines. Currently focused on React, Node.js, and distributed architecture.",
  quote: "",
  welcome: "Welcome to my world",
  stats: [
    { value: "3rd Year", label: "Information Science" },
    { value: "3", label: "Projects Shipped" },
  ],
  cvUrl: "/cv.pdf",
};

export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "leetcode", label: "LeetCode" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  { id: "lets-talk", label: "Let's Talk" },
] as const;

export const leetcode = {
  total: 341,
  easy: 163,
  medium: 153,
  hard: 25,
  streak: 296,
  profile: "https://leetcode.com/AyushSahoo1",
};

export const marqueeWords = [
  "SOFTWARE ENGINEER",
  "2026",
  "REACT",
  "NODE.JS",
  "WEBRTC",
  "DISTRIBUTED SYSTEMS",
  "TYPESCRIPT",
  "REAL-TIME",
];

export const skills = [
  {
    title: "Frontend Engineering",
    short: "React, Next.js, TypeScript",
    blurb:
      "Building fast, responsive interfaces with React and TypeScript — focused on real-time UI updates and clean component architecture.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
    icon: "Layout",
  },
  {
    title: "Backend Engineering",
    short: "Node.js, APIs, WebSockets",
    blurb:
      "Designing low-latency APIs and real-time services with Node.js, WebSockets, and message-driven architectures.",
    tech: ["Node.js", "Express", "WebSockets", "REST", "PostgreSQL"],
    icon: "Server",
  },
  {
    title: "Real-Time Systems",
    short: "WebRTC, P2P, Streaming",
    blurb:
      "Peer-to-peer media, signaling servers, TURN/STUN fallbacks, and the protocol work that makes calls actually connect.",
    tech: ["WebRTC", "Socket.IO", "TURN/STUN", "Mediasoup", "RxJS"],
    icon: "Smartphone",
  },
  {
    title: "Data Structures & Algorithms",
    short: "DSA, system design",
    blurb:
      "Heaps, trees, graphs — picking the right structure to turn an O(N) loop into an O(log N) operation in production code.",
    tech: ["C++", "Heaps", "Trees", "Graphs", "System Design"],
    icon: "Gamepad2",
  },
];

export const bio = [
  "I'm a full-stack developer focused on real-time systems — the kind where milliseconds matter. Over the past year I've independently built and deployed three production applications: a WebRTC video conferencing platform, a distributed version control system, and an algorithmic trading engine.",
  "I'm currently a 3rd-year Information Science student at Sir M. Visvesvaraya Institute of Technology, and I'm looking for an SDE internship where I can work on real systems with a real team.",
];

export const experiences = [
  {
    title: "VidMeet — Real-Time Video Conferencing",
    org: "Independent Project · WebRTC, Node.js, React",
    date: "2025",
  },
  {
    title: "GitVerse — Distributed Version Control",
    org: "Independent Project · Node.js, CLI, Cloud Sync",
    date: "2025",
  },
  {
    title: "StockFlow — Algorithmic Trading Engine",
    org: "Independent Project · C++/Node.js, Heap-based Matching",
    date: "2024",
  },
];

export const education = [
  {
    title: "B.E. in Information Science",
    org: "Sir M. Visvesvaraya Institute of Technology",
    date: "2023 – 2027",
    extra: "CGPA: 8.26 / 10.0",
  },
];

export type ProjectCategory = "Web Apps";

export const projectCategories: ("All" | ProjectCategory)[] = ["All", "Web Apps"];

export const projects: {
  title: string;
  blurb: string;
  category: ProjectCategory;
  github?: string;
  demo?: string;
  accent: string;
  tech?: string[];
}[] = [
  {
    title: "VidMeet",
    blurb:
      "Real-time video conferencing platform with peer-to-peer audio/video, screen sharing, and TURN/STUN fallback for restrictive networks.",
    category: "Web Apps",
    github: "https://github.com/AyushSahoo7336/VidMeet",
    demo: "https://vidmeet-chi.vercel.app",
    accent: "from-cyan-500/40 to-blue-600/40",
    tech: ["WebRTC", "React", "Node.js", "Socket.IO", "TURN/STUN"],
  },
  {
    title: "GitVerse",
    blurb:
      "Distributed version control system with a custom CLI, cloud sync, and a dashboard for commit history visualization.",
    category: "Web Apps",
    github: "https://github.com/AyushSahoo7336/GitVerse",
    demo: "https://gitverse-rust.vercel.app",
    accent: "from-purple-500/40 to-cyan-500/40",
    tech: ["Node.js", "CLI", "AWS S3", "React"],
  },
  {
    title: "StockFlow",
    blurb:
      "Algorithmic trading engine using Min-Heap/Max-Heap priority queues to cut order evaluation from O(N) to O(log N).",
    category: "Web Apps",
    github: "https://github.com/AyushSahoo7336/StockFlow",
    demo: "https://stock-flow.live",
    accent: "from-emerald-500/40 to-cyan-500/40",
    tech: ["C++", "Node.js", "Heaps", "WebSockets"],
  },
];

export const contacts = [
  { platform: "Email", handle: "ayush733695@gmail.com", href: "mailto:ayush733695@gmail.com", icon: "Mail" },
  { platform: "GitHub", handle: "@AyushSahoo7336", href: "https://github.com/AyushSahoo7336", icon: "Github" },
  { platform: "LinkedIn", handle: "@ayush-sahoo-63515b186", href: "https://linkedin.com/in/ayush-sahoo-63515b186", icon: "Linkedin" },
  { platform: "LeetCode", handle: "@AyushSahoo1", href: "https://leetcode.com/AyushSahoo1", icon: "Code2" },
  { platform: "WhatsApp", handle: "+91 9756212879", href: "https://wa.me/919756212879", icon: "MessageCircle" },
];
