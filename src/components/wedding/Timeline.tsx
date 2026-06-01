import { motion } from "motion/react";

const steps = [
  { title: "We Met", icon: "❤️", text: "Two strangers, one beautiful beginning." },
  { title: "We Became Friends", icon: "🤍", text: "Conversations that turned into laughter." },
  { title: "We Fell In Love", icon: "💍", text: "Hearts spoke before words did." },
  { title: "We Said Yes", icon: "💕", text: "A promise, sealed with our families' duas." },
  { title: "We Are Getting Married", icon: "✨", text: "The forever we dreamed of begins." },
];

export function Timeline() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="font-display text-xs uppercase tracking-[0.4em] text-gold">
            Our Journey
          </p>
          <h2 className="mt-4 font-serif text-3xl italic sm:text-4xl">
            A <span className="text-gold-gradient">Love Story</span>
          </h2>
        </div>

        <div className="relative mt-14 pl-10">
          <div
            className="absolute left-4 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(180deg, transparent, oklch(0.78 0.13 84 / 0.6), transparent)",
            }}
          />
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
            >
              <div className="absolute -left-10 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gold-gradient text-base shadow-gold">
                <span aria-hidden>{s.icon}</span>
              </div>
              <h3 className="font-serif text-xl italic text-foreground">
                {s.title}
              </h3>
              <p className="mt-1 font-display text-base text-muted-foreground">
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
