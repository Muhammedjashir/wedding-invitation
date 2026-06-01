import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const TARGET = new Date("2026-09-03T17:00:00+05:30").getTime();

function diff() {
  const now = Date.now();
  const d = Math.max(0, TARGET - now);
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    seconds: Math.floor((d / 1000) % 60),
  };
}

function Cell({ label, value }: { label: string; value: number }) {
  const v = String(value).padStart(2, "0");
  return (
    <div className="glass-card flex flex-col items-center rounded-2xl px-3 py-5 sm:px-6 sm:py-7">
      <div className="relative h-14 w-full overflow-hidden sm:h-16">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={v}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center font-serif text-4xl text-gold-gradient sm:text-5xl"
          >
            {v}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-2 font-display text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const [t, setT] = useState(diff);
  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-display text-xs uppercase tracking-[0.4em] text-gold">
          Counting The Moments
        </p>
        <h2 className="mt-4 font-serif text-3xl italic sm:text-4xl">
          Until We Say <span className="text-gold-gradient">Qubool Hai</span>
        </h2>
        <div className="mt-10 grid grid-cols-4 gap-3 sm:gap-5">
          <Cell label="Days" value={t.days} />
          <Cell label="Hours" value={t.hours} />
          <Cell label="Minutes" value={t.minutes} />
          <Cell label="Seconds" value={t.seconds} />
        </div>
      </div>
    </section>
  );
}
