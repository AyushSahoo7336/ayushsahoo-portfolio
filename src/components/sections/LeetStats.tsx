export function LeetStats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-gray-500">LeetCode</div>
            <div className="mt-2 flex items-baseline gap-3">
              <span className="font-mono text-5xl md:text-6xl font-bold text-white">341</span>
              <span className="text-gray-400" style={{ fontFamily: "var(--font-body)" }}>
                Problems Solved
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="font-mono text-xs uppercase border border-white/10 px-3 py-1 rounded-full text-gray-300">
                153 Medium
              </span>
              <span className="font-mono text-xs uppercase border border-white/10 px-3 py-1 rounded-full text-gray-300">
                25 Hard
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="relative inline-flex">
              <span className="absolute inline-flex h-3 w-3 rounded-full bg-green-500 opacity-75 animate-ping" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
            </span>
            <span className="font-mono text-sm text-gray-300">296-Day Max Streak</span>
          </div>
        </div>
      </div>
    </section>
  );
}
