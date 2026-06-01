export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="orn-grad" x1="0" x2="1">
          <stop offset="0" stopColor="oklch(0.88 0.08 86)" stopOpacity="0" />
          <stop offset="0.5" stopColor="oklch(0.78 0.13 84)" />
          <stop offset="1" stopColor="oklch(0.88 0.08 86)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 12 H80" stroke="url(#orn-grad)" strokeWidth="1" />
      <path d="M120 12 H200" stroke="url(#orn-grad)" strokeWidth="1" />
      <g stroke="oklch(0.62 0.13 75)" strokeWidth="1" fill="none">
        <circle cx="100" cy="12" r="6" />
        <path d="M100 4 L100 20 M92 12 L108 12" />
        <circle cx="100" cy="12" r="2" fill="oklch(0.78 0.13 84)" />
      </g>
    </svg>
  );
}
