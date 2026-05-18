"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    src: "/images/carousel/carousel-1.jpg",
    caption: "SUITE SALON · OCEAN VIEW",
  },
  {
    src: "/images/carousel/carousel-2.jpg",
    caption: "THE CORINTHIAN · MAIN DECK",
  },
  {
    src: "/images/carousel/carousel-3.jpg",
    caption: "MARINA PLATFORM · ADRIATIC COVE",
  },
  {
    src: "/images/carousel/carousel-4.jpg",
    caption: "THE CORINTHIAN · SALON DINING",
  },
  {
    src: "/images/carousel/carousel-5.jpg",
    caption: "PRESIDENTIAL SUITE · SUNRISE OVER THE RIVIERA",
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
          className="absolute inset-0 flex items-center justify-center"
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
          <div className="absolute inset-0 bg-ink/20" />

          {/* Centered white logo with screen blending */}
          <div className="relative z-10 w-48 h-48 md:w-48 md:h-48 select-none pointer-events-none opacity-80 mix-blend-screen">
            <Image
              src="/images/orient-express-logo.png"
              alt="Orient Express Logo"
              fill
              className="object-contain"
            />
          </div>
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
            className={`rounded-full transition-all duration-300 ${i === current
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
