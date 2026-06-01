import { Ornament } from "./Ornament";

const shareText =
  "Jusaila Nasar ❤️ Jabir T — You're invited to our wedding on 03 September 2026.";

export function Footer() {
  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      try {
        await navigator.share({ title: "Wedding Invitation", text: shareText, url });
      } catch {}
    } else {
      navigator.clipboard?.writeText(`${shareText} ${url}`);
    }
  };

  const waUrl = `https://wa.me/?text=${encodeURIComponent(
    shareText + " " + (typeof window !== "undefined" ? window.location.href : ""),
  )}`;

  return (
    <footer className="relative px-6 pb-20 pt-16 text-center">
      <Ornament className="mx-auto h-5 w-56" />
      <h2 className="mt-8 font-serif text-3xl italic sm:text-4xl">
        We Can't Wait To <span className="text-gold-gradient">Celebrate</span>
        <br /> With You
      </h2>
      <p className="mx-auto mt-5 max-w-md font-display text-base text-muted-foreground">
        Your presence will make our special day even more memorable.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button
          onClick={handleShare}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-[oklch(0.2_0.05_260)] shadow-gold transition-transform hover:scale-105"
        >
          Share Invitation
        </button>
        <a
          href={waUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--gold)] px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-gold transition-colors hover:bg-[oklch(0.78_0.13_84/0.1)]"
        >
          WhatsApp
        </a>
      </div>

      <div className="mt-14 font-script text-3xl text-gold-gradient">
        Jusaila &amp; Jabir
      </div>
      <p className="mt-2 font-display text-xs uppercase tracking-[0.4em] text-muted-foreground">
        03 · 09 · 2026
      </p>
    </footer>
  );
}
