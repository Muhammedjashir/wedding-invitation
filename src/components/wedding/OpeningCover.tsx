import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import cover from "@/assets/coverimg.png";
import { GoldParticles } from "./Particles";
import { Ornament } from "./Ornament";

export function OpeningCover({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);
    if (navigator.vibrate) navigator.vibrate(30);
    setTimeout(onOpen, 1400);
  };

  return (
    <AnimatePresence>
      <motion.section
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src={cover}
            alt="Wedding cover"
            className="h-full w-full object-cover slow-zoom"
            style={{ filter: "blur(2px) brightness(0.7)" }}
          />
          <div className="absolute inset-0 bg-[var(--gradient-overlay)]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 30%, oklch(0.18 0.04 260 / 0.7) 100%)",
            }}
          />
        </div>

        <GoldParticles count={36} />

        {/* Golden doors reveal */}
        <AnimatePresence>
          {opening && (
            <>
              <motion.div
                className="absolute inset-y-0 left-0 w-1/2 z-30 bg-gold-gradient"
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
                style={{ boxShadow: "inset -20px 0 60px oklch(0.4 0.1 75 / 0.6)" }}
              />
              <motion.div
                className="absolute inset-y-0 right-0 w-1/2 z-30 bg-gold-gradient"
                initial={{ x: 0 }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
                style={{ boxShadow: "inset 20px 0 60px oklch(0.4 0.1 75 / 0.6)" }}
              />
            </>
          )}
        </AnimatePresence>

        <motion.div
          className="relative z-20 px-6 text-center text-ivory"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="font-display text-sm uppercase tracking-[0.45em] text-[var(--gold-soft)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            You Are Invited
          </motion.p>
          <p className="mt-3 font-display text-xs uppercase tracking-[0.35em] text-ivory/80">
            To Celebrate Our Wedding
          </p>

          <Ornament className="mx-auto mt-8 h-5 w-56 opacity-90" />

          <motion.h1
            className="mt-6 font-script text-6xl leading-none text-gold-gradient sm:text-7xl md:text-8xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.4 }}
          >
            Jusaila
          </motion.h1>
          <motion.span
            className="my-2 inline-block font-serif text-xl italic text-[var(--gold-soft)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            &amp;
          </motion.span>
          <motion.h1
            className="font-script text-6xl leading-none text-gold-gradient sm:text-7xl md:text-8xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 1.4 }}
          >
            Jabir
          </motion.h1>

          <Ornament className="mx-auto mt-8 h-5 w-56 opacity-90" />

          <p className="mt-8 font-display text-sm tracking-[0.25em] text-ivory/90">
            03 · 09 · 2026
          </p>

          <motion.button
            onClick={handleOpen}
            className="pulse-gold mt-12 inline-flex items-center gap-3 rounded-full bg-gold-gradient px-8 py-4 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-[oklch(0.2_0.05_260)] shadow-gold transition-transform hover:scale-105 active:scale-95"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            whileHover={{ y: -2 }}
          >
            <span className="gold-shimmer">Tap To Open</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}
