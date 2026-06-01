import { useMemo } from "react";

export function GoldParticles({ count = 28 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const size = 4 + Math.random() * 10;
        return {
          id: i,
          left: Math.random() * 100,
          size,
          duration: 12 + Math.random() * 18,
          delay: -Math.random() * 20,
        };
      }),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export function Petals({ count = 14 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 18 + Math.random() * 14,
        delay: -Math.random() * 25,
        scale: 0.6 + Math.random() * 0.9,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((p) => (
        <svg
          key={p.id}
          viewBox="0 0 24 24"
          className="absolute opacity-70"
          style={{
            left: `${p.left}%`,
            width: 18 * p.scale,
            height: 18 * p.scale,
            animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
            color: "oklch(0.88 0.06 25)",
          }}
        >
          <path
            fill="currentColor"
            d="M12 2c3 4 7 6 7 11a7 7 0 1 1-14 0c0-5 4-7 7-11z"
          />
        </svg>
      ))}
    </div>
  );
}
