import { motion } from "motion/react";
import hero from "@/assets/g2.jpg";
import { Petals } from "./Particles";
import { Ornament } from "./Ornament";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Couple"
          className="h-full w-full object-contain slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.27_0.07_260/0.1)] via-transparent to-[var(--ivory)]" />
      </div>

      <Petals count={12} />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-2xl flex-col items-center justify-end px-6 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="glass-card rounded-3xl px-8 py-10"
        >
          <p className="font-display text-xs uppercase tracking-[0.4em]">
            The Beginning
          </p>
          <h2 className="mt-4 font-serif text-4xl italic text-foreground sm:text-5xl">
            Our Forever <span className="">Begins</span>
          </h2>
          <Ornament className="mx-auto mt-5 h-4 w-40" />
          <p className="mt-5 font-display text-base leading-relaxed text-muted-foreground sm:text-lg">
            With the blessings of our families, we invite you to celebrate the
            beginning of our beautiful journey together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
