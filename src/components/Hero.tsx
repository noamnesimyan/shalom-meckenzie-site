"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25, delayChildren: 0.1 } },
};

/* Orient Express Corinthian — bow view at sea */
const YACHT_IMG =
  "https://medias.orient-express.com/sites/default/files/styles/w3840/public/mobile/2250x2160/orientexpress-sailingyachts-corinthian-front-yachtl.jpg";

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

  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 100]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.45], reduce ? [1, 1] : [1, 0]);
  const cardY = useTransform(scrollYProgress, [0, 0.45], reduce ? [0, 0] : [0, -30]);

  return (
    <section
      ref={ref}
      className="relative w-full h-dvh min-h-[680px] flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Parallax ocean background ── */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: bgY }}
          className="absolute -top-[15%] inset-x-0 bottom-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={YACHT_IMG}
            alt=""
            aria-hidden="true"
            className={`w-full h-full object-cover ${start ? "ken-burns hero-fade" : "opacity-0"}`}
          />
        </motion.div>
      </div>

      {/* Tint overlay — deeper at edges */}
      <div className="absolute inset-0 bg-[#0f2a45]/40" />

      {/* ── Two floating postcards ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={start ? "show" : "hidden"}
        style={{ opacity: cardOpacity, y: cardY }}
        className="relative z-10 px-6 w-full max-w-[900px] mx-auto"
      >
        {/* Desktop: positioned layout. Mobile: stacked. */}
        <div className="relative flex flex-col items-center md:block" style={{ minHeight: 520 }}>
        {/* Card A: The invitation postcard */}
        <motion.div
          variants={fadeUp}
          className={`relative shadow-2xl w-full max-w-[420px] md:max-w-[460px] md:absolute md:left-0 md:top-0 z-20 ${reduce ? "" : "float-a"}`}
        >
          <div className="relative aspect-[1024/725] w-full overflow-hidden">
            <Image
              src="/images/hero/postcard-invitation.png"
              alt="Save the Date - You are Invited to Shalom Meckenzie's 50th celebrations"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Card B: The Yacht postcard */}
        <motion.div
          variants={fadeUp}
          className={`relative shadow-2xl w-full max-w-[340px] md:max-w-[360px] mt-6 md:mt-0 md:absolute md:right-0 md:top-[60px] z-10 ${reduce ? "" : "float-b"}`}
        >
          <div className="relative aspect-[725/1024] w-full overflow-hidden">
            <Image
              src="/images/hero/postcard-yacht.png"
              alt="Shalom Meckenzie 50th Celebration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      {start && (
        <motion.div
          style={{ opacity: cardOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="font-body text-[9px] tracking-[0.3em] uppercase text-ivory/35">
            scroll
          </span>
          <div className="w-px h-8 bg-ivory/25 scroll-bounce" />
        </motion.div>
      )}
    </section>
  );
}
