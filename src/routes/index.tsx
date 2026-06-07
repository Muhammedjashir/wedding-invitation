import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { OpeningCover } from "@/components/wedding/OpeningCover";
import { Hero } from "@/components/wedding/Hero";
import { Message } from "@/components/wedding/Message";
import { ScratchReveal } from "@/components/wedding/ScratchReveal";
import { Countdown } from "@/components/wedding/Countdown";
import { Timeline } from "@/components/wedding/Timeline";
import { Gallery } from "@/components/wedding/Gallery";
import { Details } from "@/components/wedding/Details";
import { Venue } from "@/components/wedding/Venue";
import { Footer } from "@/components/wedding/Footer";
import { MusicButton } from "@/components/wedding/MusicButton";

import coverImg from "@/assets/cover.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jabir T ❤️ Jusaila Nasar | Wedding Invitation" },
      {
        name: "description",
        content:
          "Join us in celebrating our wedding on 03 September 2026. With love, from Jusaila & Jabir.",
      },
      { property: "og:title", content: "Jabir T ❤️ Jusaila Nasar | Wedding Invitation" },
      {
        property: "og:description",
        content: "Join us in celebrating our wedding on 03 September 2026.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: coverImg },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: coverImg },
      { name: "theme-color", content: "#D4AF37" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Inter:wght@400;500;600&family=Pinyon+Script&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <AnimatePresence>
        {!opened && <OpeningCover onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >

            <div className="relative z-10">
              <Hero />
              <Message />
              <ScratchReveal />
              <Countdown />
              <Timeline />
              <Gallery />
              <Details />
              <Venue />
              <Footer />
            </div>

            <MusicButton autoplay={opened} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
