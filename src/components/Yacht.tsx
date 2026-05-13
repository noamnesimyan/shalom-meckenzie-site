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
    text: "At 220 metres, with three carbon-fibre Solid Sails reaching skyward, Corinthian is the world's largest sailing yacht — and, for one weekend, our private domain along the Côte d'Azur.",
  },
  {
    num: "02",
    title: "Timeless Escape",
    src: "https://medias.orient-express.com/sites/default/files/styles/w3840/public/mobile/1176x768/Corinthian-Exterior-Caribbean-Luxigon.jpg",
    alt: "Corinthian — sun-drenched exterior at sea",
    text: "Fifty-four suites. One hundred and ten guests. Decks designed for long lunches under linen umbrellas and even longer evenings beneath a Mediterranean sky.",
  },
  {
    num: "03",
    src: "https://medias.orient-express.com/sites/default/files/styles/w3840/public/mobile/2250x2160/OE_YACHTPAGE_3776x2168_03_0.jpg",
    alt: "Corinthian — restaurant terrace at sea",
    text: "From sun-drenched mornings to mirror-still midnight crossings, every hour aboard is composed with the quiet confidence of a brand that has been redefining luxury travel for nearly 140 years.",
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
            <Eyebrow light>THE LEGENDARY VESSEL</Eyebrow>
            <h2
              id="yacht-heading"
              className="font-display font-bold text-ink mt-6 text-[clamp(28px,4vw,36px)] tracking-[-0.01em]"
            >
              Orient Express Corinthian
            </h2>
            <p className="font-accent italic text-ink/55 text-xl md:text-2xl mt-6 max-w-2xl mx-auto leading-relaxed">
              A modern interpretation of timeless elegance — born of the Orient Express
              heritage, reimagined for the sea.
            </p>
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
              <h3 className="font-display font-bold text-ink mt-6 text-[clamp(28px,4vw,36px)] tracking-[-0.01em]">
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
              <p className="font-body text-ink/65 text-base md:text-lg leading-relaxed relative z-10">
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
              <h3 className="font-display font-bold text-ink mt-6 text-[clamp(28px,4vw,36px)] tracking-[-0.01em]">
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
              <p className="font-body text-ink/65 text-base md:text-lg leading-relaxed relative z-10">
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

        {/* Movement 03 — full-width photo with text overlay */}
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute top-4 right-4 md:top-8 md:right-8 font-display font-bold text-[100px] md:text-[160px] leading-none text-ivory/25 select-none pointer-events-none z-10"
          >
            03
          </span>
          <Reveal>
            <div className="relative aspect-[16/9] md:aspect-[16/7] overflow-hidden">
              <Image
                src={movements[2].src}
                alt={movements[2].alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </Reveal>
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-ivory/95 backdrop-blur-sm p-6 md:p-8 max-w-xs md:max-w-sm z-10">
            <p className="font-body text-ink/70 text-sm md:text-base leading-relaxed">
              {movements[2].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
