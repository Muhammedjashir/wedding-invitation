import { motion } from "motion/react";
import { Ornament } from "./Ornament";

export function Message() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-2xl text-center">
        <motion.p
          className="font-display text-xs uppercase tracking-[0.4em] text-gold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Bismillāhir-Raḥmānir-Raḥīm
        </motion.p>
        <motion.h2
          className="mt-6 font-serif text-3xl italic leading-tight sm:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          With Love, <span className="text-gold-gradient">We Begin</span>
          <br /> Our Forever
        </motion.h2>
        <Ornament className="mx-auto mt-8 h-4 w-48" />
        <motion.p
          className="mt-8 font-display text-lg leading-relaxed text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          From a simple hello to a lifetime of togetherness, our journey has
          been filled with laughter, understanding, and endless memories. We
          are excited to begin the most beautiful chapter of our lives and
          would be honored to celebrate it with you.
        </motion.p>
      </div>
    </section>
  );
}
