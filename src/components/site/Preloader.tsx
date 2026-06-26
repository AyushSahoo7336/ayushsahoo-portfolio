import { motion } from "framer-motion";

export function Preloader() {
  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      style={{ fontFamily: "'Space Grotesk', 'Outfit', sans-serif" }}
    >
      <h1
        className="preloader-sweep text-[18vw] font-extrabold leading-none tracking-tight md:text-[14vw]"
      >
        AYUSH
      </h1>
    </motion.div>
  );
}
