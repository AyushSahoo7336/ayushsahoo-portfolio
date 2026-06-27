export const profile = {
  name: "Ayush Sahoo",
  shortName: "AYUSH",
  role: "Software Engineer",
  tagline:
    "I build real-time systems that respond fast — from peer-to-peer video calls to algorithmic trading engines. Currently focused on React, Node.js, and distributed architecture.",
  quote: "",
  welcome: "Welcome to my world",
  stats: [
    { value: "4th Year", label: "Information Science" },
    { value: "3", label: "Projects Shipped" },
  ],
  cvUrl: "/cv.pdf",
};

export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "leetcode", label: "LeetCode" },
  { id: "contact", label: "Contact" },
  { id: "lets-talk", label: "Let's Talk" },
] as const;


export const leetcode = {
  total: 341,
  easy: 163,
  medium: 153,
  hard: 25,
  streak: 300,
  rating: "1460+",
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
  "I'm currently a 4th-year Information Science student at Sir M. Visvesvaraya Institute of Technology, and I'm looking for an SDE internship where I can work on real systems with a real team.",
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
    title: "Bachelor of Engineering in Information Science",
    org: "Sir M. Visvesvaraya Institute of Technology",
    date: "2023 – 2027",
    extra: "CGPA: 8.26 / 10.0",
  },
];

export type SkillItem = {
  name: string;
  /** Either a Devicon CDN URL (rendered as <img>) or a Lucide icon name (rendered as accent-colored icon). */
  icon: string;
  iconType: "devicon" | "lucide";
  /** Invert image colors in dark mode (for black logos). */
  invertOnDark?: boolean;
  description: string;
};

const devicon = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}.svg`;

export const skillCategories: {
  id: string;
  title: string;
  blurb: string;
  icon: string;
  accent: string;
  items: SkillItem[];
}[] = [
  {
    id: "languages",
    title: "Languages & Core",
    blurb: "Foundational languages and computer science concepts.",
    icon: "Terminal",
    accent: "from-amber-500/30 to-orange-500/30",
    items: [
      { name: "JavaScript", icon: devicon("javascript/javascript-original"), iconType: "devicon", description: "Versatile scripting language for web development and beyond." },
      { name: "Java", icon: devicon("java/java-original"), iconType: "devicon", description: "Object-oriented language for building robust, scalable applications." },
      { name: "C", icon: devicon("c/c-original"), iconType: "devicon", description: "Low-level systems programming and algorithmic foundations." },
      { name: "DSA", icon: "Network", iconType: "lucide", description: "Data structures and algorithms for efficient problem solving." },
      { name: "OOP", icon: "Boxes", iconType: "lucide", description: "Object-oriented programming principles and design patterns." },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    blurb: "Building responsive and interactive user interfaces.",
    icon: "Layout",
    accent: "from-cyan-500/30 to-blue-600/30",
    items: [
      { name: "React.js", icon: devicon("react/react-original"), iconType: "devicon", description: "Component-based library for building interactive UIs with hooks and state." },
      { name: "HTML5", icon: devicon("html5/html5-original"), iconType: "devicon", description: "Semantic markup and modern web document structure." },
      { name: "CSS3", icon: devicon("css3/css3-original"), iconType: "devicon", description: "Styling, animations, flexbox, and grid layouts." },
      { name: "Chart.js", icon: "PieChart", iconType: "lucide", description: "Interactive data visualization and charting library." },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    blurb: "Server-side logic, APIs, and real-time communication.",
    icon: "Server",
    accent: "from-emerald-500/30 to-cyan-500/30",
    items: [
      { name: "Node.js", icon: devicon("nodejs/nodejs-original"), iconType: "devicon", description: "JavaScript runtime for building scalable server-side applications." },
      { name: "Express.js", icon: devicon("express/express-original"), iconType: "devicon", invertOnDark: true, description: "Minimalist web framework for Node.js APIs and middleware." },
      { name: "REST APIs", icon: "Cable", iconType: "lucide", description: "Architectural style for designing networked applications." },
      { name: "Socket.io", icon: devicon("socketio/socketio-original"), iconType: "devicon", invertOnDark: true, description: "Real-time, bidirectional event-based communication." },
      { name: "WebSockets / WebRTC", icon: "RadioTower", iconType: "lucide", description: "Protocols for real-time streaming and peer-to-peer media." },
    ],
  },
  {
    id: "data-tools",
    title: "Databases, Tools & Cloud",
    blurb: "Data storage, version control, deployment, and concepts.",
    icon: "Database",
    accent: "from-purple-500/30 to-pink-500/30",
    items: [
      { name: "MongoDB & Mongoose", icon: devicon("mongodb/mongodb-original"), iconType: "devicon", description: "NoSQL document database with ODM for schema modeling." },
      { name: "MySQL", icon: devicon("mysql/mysql-original"), iconType: "devicon", description: "Relational database management system for structured data." },
      { name: "Git & GitHub", icon: devicon("github/github-original"), iconType: "devicon", invertOnDark: true, description: "Version control and collaborative code hosting platform." },
      { name: "Vercel & Render", icon: devicon("vercel/vercel-original"), iconType: "devicon", invertOnDark: true, description: "Cloud platforms for frontend and backend deployment." },
      { name: "Cloudinary", icon: "Cloud", iconType: "lucide", description: "Cloud-based image and video management service." },
      { name: "JWT & bcrypt", icon: "ShieldCheck", iconType: "lucide", description: "Authentication tokens and password hashing for security." },
      { name: "DBMS", icon: "Database", iconType: "lucide", description: "Database management systems and normalization concepts." },
      { name: "OS & Networks", icon: "ServerCog", iconType: "lucide", description: "Operating system internals and network protocols." },
    ],
  },
];


export type ProjectCategory = "Web Apps";

export const projectCategories: ("All" | ProjectCategory)[] = ["All", "Web Apps"];

import vidmeetImg from "@/assets/vidmeet.png";
import gitverseImg from "@/assets/gitverse.png";
import stockflowImg from "@/assets/stockflow.png.asset.json";

export const projects: {
  title: string;
  blurb: string;
  highlights: string[];
  category: ProjectCategory;
  github?: string;
  demo?: string;
  accent: string;
  tech?: string[];
  image?: string;
}[] = [
  {
    title: "VidMeet",
    blurb:
      "Real-time video conferencing platform with peer-to-peer audio/video, screen sharing, and TURN/STUN fallback for restrictive networks.",
    highlights: [
      "Resolved persistent WebRTC connection failures on strict institutional networks via automated TURN relay fallback, routing ICE candidates over standard web ports (80/443)",
      "Eliminated video stream flicker by isolating media elements into reusable React components with useRef-based rendering",
      "Secured access via JWT authentication, host-controlled waiting rooms, and live network quality monitoring",
    ],
    category: "Web Apps",
    github: "https://github.com/AyushSahoo7336/VidMeet",
    demo: "https://vidmeet-chi.vercel.app",
    accent: "from-cyan-500/40 to-blue-600/40",
    tech: ["WebRTC", "React", "Node.js", "Socket.IO", "TURN/STUN"],
    image: vidmeetImg,
  },
  {
    title: "GitVerse",
    blurb:
      "Distributed version control system with a custom CLI, cloud sync, and a dashboard for commit history visualization.",
    highlights: [
      "Built a Node.js CLI supporting 8+ VCS operations (init, push/pull, revert, remote add) with bidirectional cloud sync",
      "JWT-authenticated Express backend on MongoDB Atlas with public/private repository visibility controls",
      "React dashboard with commit history, file-level inspection, and a contribution heatmap",
    ],
    category: "Web Apps",
    github: "https://github.com/AyushSahoo7336/GitVerse",
    demo: "https://gitverse-rust.vercel.app",
    accent: "from-purple-500/40 to-cyan-500/40",
    tech: ["Node.js", "CLI", "AWS S3", "React"],
    image: gitverseImg,
  },
  {
    title: "StockFlow",
    blurb:
      "Algorithmic trading engine using Min-Heap/Max-Heap priority queues to cut order evaluation from O(N) to O(log N).",
    highlights: [
      "Streamed live stock prices every 10 seconds via a bidirectional WebSocket pipeline (Socket.io + Yahoo Finance API)",
      "Integrated Gemini AI-powered stock analysis with a persistent, auditable transaction ledger",
      "Built portfolio management and simulated trading on \u20b910,00,000 virtual capital",
    ],
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
