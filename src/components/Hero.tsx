"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const itemVariant = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

const containerVariant = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.18, delayChildren: 0.05 } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [start, setStart] = useState(false);

  useEffect(() => {
    const handler = () => setStart(true);
    window.addEventListener("splash:fadeStart", handler, { once: true });
    return () => window.removeEventListener("splash:fadeStart", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Background shifts down at ~40% of scroll speed — classic parallax depth
  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 120]);
  // Text fades out slightly faster as user scrolls away
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], reduce ? [1, 1] : [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], reduce ? [0, 0] : [0, -40]);

  return (
    <section
      ref={ref}
      className="relative w-full h-dvh min-h-[600px] flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Parallax background container — taller than section to absorb shift */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: bgY }}
          className="absolute -top-[15%] inset-x-0 bottom-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://medias.orient-express.com/sites/default/files/styles/w3840/public/mobile/2250x2160/orientexpress-sailingyachts-corinthian-front-yachtl.jpg"
            alt=""
            aria-hidden="true"
            className={`w-full h-full object-cover ${start ? "ken-burns hero-fade" : "opacity-0"}`}
          />
        </motion.div>
      </div>

      {/* Gradient overlay — strong at top and bottom, clear in centre */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/65 via-ink/10 to-ink/85" />

      {/* Content — fades and lifts on scroll */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate={start ? "show" : "hidden"}
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.p
          variants={itemVariant}
          className="font-accent italic text-ivory/65 text-lg md:text-xl mb-6 tracking-wide"
        >
          With great joy, you are invited to celebrate
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariant}
          className="font-display font-bold text-ivory leading-none tracking-[-0.02em] text-[clamp(52px,10vw,112px)] mb-3"
        >
          Shalom Meckenzie
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          variants={itemVariant}
          className="font-display italic font-normal text-ivory/80 text-[clamp(22px,4vw,44px)] mb-8"
        >
          A Golden Jubilee at Sea
        </motion.h2>

        {/* Date */}
        <motion.p
          variants={itemVariant}
          className="font-body text-[11px] md:text-xs font-medium tracking-[0.3em] uppercase text-ivory/55"
        >
          20 — 22 June 2026 · Marseille → Saint-Tropez
        </motion.p>
      </motion.div>

      {/* Scroll cue — only mount after splash hands off */}
      {start && <motion.div
        style={{ opacity: textOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-ivory/35">
          scroll
        </span>
        <div className="w-px h-8 bg-ivory/25 scroll-bounce" />
      </motion.div>}
    </section>
  );
}
