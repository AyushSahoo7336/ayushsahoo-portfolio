export function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-7xl px-6 pt-24 pb-20">
      <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div className="relative">
          <div
            aria-hidden
            className="absolute -left-10 -top-10 h-72 w-72 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ backgroundColor: "var(--primary-accent)" }}
          />
          <h1 className="relative text-5xl md:text-7xl font-bold -tracking-tight leading-[1.05]">
            Hi, I'm{" "}
            <span style={{ color: "var(--primary-accent)" }}>Ayush</span>{" "}
            Sahoo
          </h1>
          <p className="mt-6 text-gray-400 text-lg md:text-xl" style={{ fontFamily: "var(--font-body)" }}>
            Software Developer
          </p>
          <p className="mt-3 text-gray-500 max-w-xl" style={{ fontFamily: "var(--font-body)" }}>
            Building real-time systems. Not tutorials. Not clones.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 rounded-full border border-white/10 bg-white/5" />
        </div>
      </div>
    </section>
  );
}
