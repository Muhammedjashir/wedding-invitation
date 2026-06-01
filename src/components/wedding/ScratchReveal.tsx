import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function ScratchReveal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const drawingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Gold scratch surface
    const grad = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    grad.addColorStop(0, "#E9CB7A");
    grad.addColorStop(0.5, "#C9A24A");
    grad.addColorStop(1, "#E9CB7A");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, rect.width, rect.height);

    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.font = "600 14px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✦  Scratch To Reveal Our Big Day  ✦", rect.width / 2, rect.height / 2);

    ctx.globalCompositeOperation = "destination-out";
  }, []);

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.arc(x - rect.left, y - rect.top, 28, 0, Math.PI * 2);
    ctx.fill();
    checkReveal();
  };

  const checkReveal = () => {
    if (revealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { width, height } = canvas;
    const pixels = ctx.getImageData(0, 0, width, height).data;
    let cleared = 0;
    for (let i = 3; i < pixels.length; i += 64) {
      if (pixels[i] === 0) cleared++;
    }
    if (cleared / (pixels.length / 64) > 0.45) {
      setRevealed(true);
      if (navigator.vibrate) navigator.vibrate([30, 20, 60]);
    }
  };

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-md text-center">
        <p className="font-display text-xs uppercase tracking-[0.4em] text-gold">
          A Little Secret
        </p>
        <h2 className="mt-4 font-serif text-3xl italic sm:text-4xl">
          The <span className="text-gold-gradient">Big Day</span>
        </h2>

        <div className="relative mx-auto mt-10 aspect-[4/3] w-full max-w-sm">
          {/* Confetti burst on reveal */}
          <AnimatePresence>
            {revealed &&
              Array.from({ length: 24 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-gold-gradient"
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{
                    x: (Math.random() - 0.5) * 400,
                    y: (Math.random() - 0.5) * 400,
                    opacity: 0,
                    scale: 0.3,
                  }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                />
              ))}
          </AnimatePresence>

          <div className="glass-card relative h-full overflow-hidden rounded-3xl p-6">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-display text-xs uppercase tracking-[0.35em] text-gold">
                Save The Date
              </p>
              <p className="mt-3 font-serif text-4xl text-foreground">
                03 September
              </p>
              <p className="font-serif text-2xl text-gold-gradient">2026</p>
              <p className="mt-3 font-display text-sm tracking-[0.25em] text-muted-foreground">
                AFTER 5:00 PM
              </p>
            </div>

            <canvas
              ref={canvasRef}
              className={`absolute inset-0 h-full w-full cursor-grab touch-none rounded-3xl transition-opacity duration-700 ${
                revealed ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
              onMouseDown={(e) => {
                drawingRef.current = true;
                scratch(e.clientX, e.clientY);
              }}
              onMouseUp={() => (drawingRef.current = false)}
              onMouseLeave={() => (drawingRef.current = false)}
              onMouseMove={(e) => drawingRef.current && scratch(e.clientX, e.clientY)}
              onTouchStart={(e) => {
                drawingRef.current = true;
                const t = e.touches[0];
                scratch(t.clientX, t.clientY);
              }}
              onTouchEnd={() => (drawingRef.current = false)}
              onTouchMove={(e) => {
                if (!drawingRef.current) return;
                const t = e.touches[0];
                scratch(t.clientX, t.clientY);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
