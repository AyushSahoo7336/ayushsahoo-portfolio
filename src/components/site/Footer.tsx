export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs uppercase tracking-widest text-gray-500">
          © {new Date().getFullYear()} Ayush Sahoo
        </div>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-white transition">GitHub</a>
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="mailto:hello@example.com" className="hover:text-white transition">Email</a>
        </div>
      </div>
    </footer>
  );
}
