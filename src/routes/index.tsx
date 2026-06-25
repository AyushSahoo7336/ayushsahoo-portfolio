import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { LeetStats } from "@/components/sections/LeetStats";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Ayush Sahoo — Software Developer" },
      { name: "description", content: "Software developer building real-time systems with WebRTC, Socket.IO, and the MERN stack." },
    ],
  }),
});

function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <LeetStats />
      <About />
      <Experience />
      <Projects />
    </main>
  );
}
