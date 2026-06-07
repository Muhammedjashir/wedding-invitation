import { motion } from "motion/react";
import { Ornament } from "./Ornament";

const items = [
  { label: "Groom", value: "Jabir T S/O Usman Thettan", script: true },
  { label: "Bride", value: "Jusaila Nasar D/O Nasar", script: true },
  { label: "Date", value: "03 September 2026" },
  { label: "Time", value: "After 5:00 PM" },
  { label: "Venue", value: "C A H auditorium 4th mile" },
];

export function Details() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="font-display text-xs uppercase tracking-[0.4em] text-gold">
            The Celebration
          </p>
          <h2 className="mt-4 font-serif text-3xl italic sm:text-4xl">
            Wedding <span className="text-gold-gradient">Details</span>
          </h2>
          <Ornament className="mx-auto mt-6 h-4 w-44" />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              className={`glass-card rounded-2xl p-7 text-center ${
                i === items.length - 1 && items.length % 2 === 1
                  ? "sm:col-span-2"
                  : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <p className="font-display text-[10px] uppercase tracking-[0.4em] text-gold">
                {it.label}
              </p>
              <p
                className={
                  it.script
                    ? "mt-3 font-script text-4xl text-gold-gradient"
                    : "mt-3 font-serif text-2xl text-foreground"
                }
              >
                {it.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
