"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { scheduleDays } from "@/content/schedule";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function Schedule() {
  const [active, setActive] = useState(0);
  const day = scheduleDays[active];

  return (
    <section
      id="schedule"
      className="bg-ink py-28 md:py-36 px-6"
      aria-labelledby="schedule-heading"
    >
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <Eyebrow>THE WEEKEND PROGRAMME</Eyebrow>
            <h2
              id="schedule-heading"
              className="font-display font-bold text-ivory mt-6 text-[clamp(28px,4vw,44px)] tracking-[-0.01em]"
            >
              Schedule &amp; Attire
            </h2>
          </div>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.1}>
          <div className="flex justify-center mb-12 border-b border-ivory/10">
            {scheduleDays.map((d, i) => (
              <button
                key={d.id}
                onClick={() => setActive(i)}
                className="relative px-6 md:px-10 pb-4 text-center group"
                aria-selected={active === i}
              >
                <div
                  className={`font-body text-[9px] font-medium tracking-[0.2em] uppercase mb-1 transition-colors duration-300 ${
                    active === i ? "text-gold" : "text-ivory/40 group-hover:text-ivory/60"
                  }`}
                >
                  {d.tag}
                </div>
                <div
                  className={`font-display text-sm md:text-base transition-colors duration-300 ${
                    active === i ? "text-ivory" : "text-ivory/40 group-hover:text-ivory/70"
                  }`}
                >
                  {d.date}
                </div>
                {active === i && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-gold"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Events */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="space-y-0 divide-y divide-ivory/8">
              {day.events.map((event, i) => (
                <div
                  key={i}
                  className="py-8 grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8"
                >
                  {/* Time col */}
                  <div className="flex flex-row md:flex-col gap-3 md:gap-1">
                    {event.time && (
                      <div className="font-body text-gold text-sm font-medium">
                        {event.time}
                      </div>
                    )}
                    <div className="font-body text-[9px] tracking-[0.2em] uppercase text-ivory/35">
                      {event.period}
                    </div>
                  </div>

                  {/* Content col */}
                  <div>
                    <h3 className="font-display font-bold text-ivory text-xl mb-2">
                      {event.title}
                    </h3>
                    <p className="font-body text-ivory/60 text-sm leading-relaxed mb-4">
                      {event.description}
                    </p>
                    {event.dressCode && (
                      <div>
                        <div className="inline-flex items-center gap-3 border border-gold/30 px-4 py-2 bg-gold/5 mb-4">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z"/>
                          </svg>
                          <div>
                            <div className="font-body text-[9px] tracking-[0.2em] uppercase text-gold font-medium">
                              {event.dressCode.label}
                            </div>
                            <div className="font-body text-ivory/50 text-xs">
                              {event.dressCode.subtitle}
                            </div>
                          </div>
                        </div>

                        {event.dressCode.images && event.dressCode.images.length > 0 && (
                          <div>
                            <div className="grid grid-cols-3 gap-2 max-w-xs">
                              {event.dressCode.images.map((img, idx) => (
                                <div
                                  key={idx}
                                  className="relative aspect-[3/4] overflow-hidden group"
                                >
                                  <Image
                                    src={img}
                                    alt={`${event.dressCode!.label} inspiration ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 33vw, 120px"
                                    loading="lazy"
                                  />
                                  <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/60 transition-colors duration-300 pointer-events-none" />
                                </div>
                              ))}
                            </div>
                            <p className="font-body text-[9px] tracking-[0.2em] uppercase text-ivory/30 mt-2">
                              Dress inspiration
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
