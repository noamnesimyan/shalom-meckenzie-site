"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    src: "https://medias.orient-express.com/sites/default/files/styles/w3840/public/mobile/2250x2160/orientexpress-sailingyachts-corinthian-front-yachtl.jpg",
    caption: "ORIENT EXPRESS CORINTHIAN · AT SEA",
  },
  {
    src: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&q=85",
    caption: "SAINT-TROPEZ HARBOUR",
  },
  {
    src: "https://medias.orient-express.com/sites/default/files/styles/w3840/public/mobile/2250x2160/OE_YACHTPAGE_3776x2168_03_0.jpg",
    caption: "THE CORINTHIAN · CÔTE D'AZUR",
  },
  {
    src: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=1920&q=85",
    caption: "PAMPELONNE BEACH · SAINT-TROPEZ",
  },
  {
    src: "https://medias.orient-express.com/sites/default/files/styles/w3840/public/mobile/2250x2160/OE_YACHTPAGE_3776x2168_05.jpg",
    caption: "ON DECK · GOLDEN HOUR",
  },
  {
    src: "https://medias.orient-express.com/sites/default/files/styles/w3840/public/desktop/1440x1908/Capri-Amalfi%20Coast-Stills%20%281%29_0.webp",
    caption: "CÔTE D'AZUR · AMALFI COAST",
  },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    if (paused || reduce) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [paused, reduce, next]);

  return (
    <div
      className="relative w-full h-[80vh] md:h-screen overflow-hidden bg-ink group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-label="Photo gallery"
    >
      {/* Slides */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 1.2 }}
        >
          <Image
            src={slides[current].src}
            alt={slides[current].caption}
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/15" />
        </motion.div>
      </AnimatePresence>

      {/* Caption */}
      <div className="absolute bottom-16 left-8 md:left-12 z-10 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.p
            key={current}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="font-body text-[10px] tracking-[0.3em] uppercase text-ivory/55"
          >
            {slides[current].caption}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-3 text-ivory/50 hover:text-ivory opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300"
        aria-label="Previous image"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-3 text-ivory/50 hover:text-ivory opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300"
        aria-label="Next image"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-[3px] bg-ivory"
                : "w-[6px] h-[6px] bg-ivory/35 hover:bg-ivory/65"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
