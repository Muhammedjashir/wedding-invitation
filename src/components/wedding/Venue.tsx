import { motion } from "motion/react";

const MAP_URL = "https://maps.app.goo.gl/JySDGq1uVqmH8ZEG8";

export function Venue() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="font-display text-xs uppercase tracking-[0.4em] text-gold">
            Find Your Way
          </p>
          <h2 className="mt-4 font-serif text-3xl italic sm:text-4xl">
            The <span className="text-gold-gradient">Venue</span>
          </h2>
        </div>

        <motion.div
          className="glass-card mt-12 overflow-hidden rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="relative aspect-[16/10] w-full bg-muted">
            <iframe
              title="Venue map"
              src="https://www.google.com/maps?q=11.2588,75.7804&z=14&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="relative flex h-12 w-12 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.78_0.13_84/0.4)]" />
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gold-gradient text-foreground shadow-gold">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 22s7-7.58 7-13a7 7 0 1 0-14 0c0 5.42 7 13 7 13z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="currentColor"
                      fillOpacity="0.2"
                    />
                    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
              </span>
            </div>
          </div>

          <div className="p-7 text-center">
            <p className="font-display text-xs uppercase tracking-[0.35em] text-gold">
              Reception
            </p>
            <h3 className="mt-2 font-serif text-2xl italic text-foreground">
              C A H auditorium
            </h3>
            <p className="mt-2 font-display text-sm text-muted-foreground">
              03 September 2026 · After 5:00 PM
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={MAP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-[oklch(0.2_0.05_260)] shadow-gold transition-transform hover:scale-105"
              >
                View Location
              </a>
              <a
                href={MAP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--gold)] px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-gold transition-colors hover:bg-[oklch(0.78_0.13_84/0.1)]"
              >
                Navigate
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
