import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const TRACK =
  "https://pixabay.com/music/wedding-invitation-wedding-375839/download?filename=wedding-invitation-wedding-375839.mp3";

export function MusicButton({ autoplay }: { autoplay: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      const a = new Audio(TRACK);
      a.loop = true;
      a.volume = 0.45;
      audioRef.current = a;
    }
    if (autoplay) {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
    return () => {
      audioRef.current?.pause();
    };
  }, [autoplay]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  return (
    <motion.button
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient text-[oklch(0.2_0.05_260)] shadow-gold backdrop-blur"
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      <span className={playing ? "spin-slow" : ""}>
        {playing ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 5h2v14H9zM13 5h2v14h-2z" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3z" />
          </svg>
        )}
      </span>
    </motion.button>
  );
}
