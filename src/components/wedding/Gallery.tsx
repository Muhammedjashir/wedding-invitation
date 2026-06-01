import { motion } from "motion/react";
import g1 from "@/assets/img1.png";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/img4.png";
import g4 from "@/assets/img3.png";
import g5 from "@/assets/img2.png";
import g6 from "@/assets/img5.png";
import g8 from "@/assets/img7.png";
import g9 from "@/assets/img8.png";
import hero from "@/assets/heroimg.png";
import cover from "@/assets/coverimg.png";

const featured = [
  { src: cover, alt: "Together" },
  { src: g2, alt: "Promise" },
  { src: hero, alt: "Hand in hand" },
];

const carousel = [g1, g3, g4, g5, g6, g8, g9, cover, g2, hero];

export function Gallery() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="font-display text-xs uppercase tracking-[0.4em] text-gold">
            Moments
          </p>
          <h2 className="mt-4 font-serif text-3xl italic sm:text-4xl">
            Captured <span className="text-gold-gradient">Memories</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {featured.map((m, i) => (
            <motion.div
              key={i}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl shadow-luxury gold-border"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
            >
              <img
                src={m.src}
                alt={m.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.04_260/0.5)] to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Auto sliding carousel */}
      <div className="mt-14 overflow-hidden">
        <div
          className="flex w-max gap-5 "
          style={{ animation: "scroll-x 40s linear infinite" }}
        >
          {[...carousel, ...carousel].map((src, i) => (
            <div
              key={i}
              className="relative h-64 w-48 shrink-0 overflow-hidden rounded-2xl shadow-luxury"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-contain transition-transform duration-[1400ms] ease-out hover:scale-110 "
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes scroll-x { to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}
