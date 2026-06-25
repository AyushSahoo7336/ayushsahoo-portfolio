import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { WhatICreate } from "@/components/sections/WhatICreate";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Portfolio — Software Developer" },
      { name: "description", content: "Welcome to my world. I craft digital experiences across web, mobile, and games." },
      { property: "og:title", content: "Portfolio — Software Developer" },
      { property: "og:description", content: "Welcome to my world. I craft digital experiences across web, mobile, and games." },
    ],
  }),
});

function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <WhatICreate />
    </>
  );
}
