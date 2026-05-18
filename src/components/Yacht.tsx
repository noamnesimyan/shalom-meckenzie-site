"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const movements = [
  {
    num: "01",
    title: "Welcome Aboard",
    src: "https://medias.orient-express.com/sites/default/files/styles/w3840/public/mobile/2250x2160/orientexpress-sailingyachts-corinthian-front-yachtl.jpg",
    alt: "Orient Express Corinthian — bow view at sea",
    text: "Sailing along the French Riviera, this extraordinary vessel becomes our private world — where refined design meets the rhythm of the open sea.",
  },
  {
    num: "02",
    title: "Crafted for the Sea",
    src: "https://medias.orient-express.com/sites/default/files/styles/w3840/public/mobile/1176x768/Corinthian-Exterior-Caribbean-Luxigon.jpg",
    alt: "Corinthian — sun-drenched exterior at sea",
    text: "From sun-drenched decks overlooking the Mediterranean to intimate evenings under an open sky — every moment on board is crafted to feel effortless, immersive, and unforgettable.",
  },
];

export default function Yacht() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-30, 30]);
  const y2 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [30, -30]);

  return (
    <section
      id="yacht"
      className="bg-ivory py-28 md:py-36 overflow-hidden"
      aria-labelledby="yacht-heading"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-20 md:mb-28">
            <Eyebrow light>THE LEGENDARY YACHT</Eyebrow>
            <h2
              id="yacht-heading"
              className="font-display font-normal text-ink mt-6 text-[clamp(28px,4.5vw,44px)] tracking-[-0.01em]"
            >
              Orient Express Corinthian
            </h2>
            <div className="font-accent italic text-ink/70 text-xl md:text-2xl mt-6 max-w-3xl mx-auto leading-relaxed space-y-4">
              <p>At the heart of the experience — the legendary Orient Express Yacht.</p>
              <p>A modern interpretation of timeless elegance, inspired by the heritage of the iconic Orient Express — where every detail is an act of intention.</p>
            </div>
          </div>
        </Reveal>

        {/* Movement 01 — large photo left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-24 md:mb-32">
          <motion.div style={{ y: y1 }} className="lg:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={movements[0].src}
                alt={movements[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </motion.div>
          <div className="lg:col-span-5 relative">
            <div className="">
              {/* <Eyebrow light>{movements[0].num}</Eyebrow> */}
              <h3 className="font-display font-normal text-ink mt-6 text-2xl tracking-[-0.01em]">
                {movements[0].title}
              </h3>
            </div>
            <span
              aria-hidden="true"
              className="absolute -top-8 -left-2 md:-top-16 md:-left-6 font-display font-bold text-[100px] md:text-[160px] leading-none text-gold/10 select-none pointer-events-none"
            >
              01
            </span>
            <Reveal delay={0.1}>
              <p className="font-accent italic text-ink/70 text-lg leading-relaxed relative z-10">
                {movements[0].text}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Movement 02 — text left, wide photo right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-24 md:mb-32">
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="">
              {/* <Eyebrow light>{movements[0].num}</Eyebrow> */}
              <h3 className="font-display font-normal text-ink mt-6 text-2xl tracking-[-0.01em]">
                {movements[1].title}
              </h3>
            </div>
            <span
              aria-hidden="true"
              className="absolute -top-8 -right-2 md:-top-16 md:-right-6 font-display font-bold text-[100px] md:text-[160px] leading-none text-gold/10 select-none pointer-events-none"
            >
              02
            </span>
            <Reveal delay={0.1}>
              <p className="font-accent italic text-ink/70 text-lg leading-relaxed relative z-10">
                {movements[1].text}
              </p>
            </Reveal>
          </div>
          <motion.div style={{ y: y2 }} className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={movements[1].src}
                alt={movements[1].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
