"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { scheduleDays } from "@/content/schedule";
import Eyebrow from "./Eyebrow";

/* Bright summer image — Orient Express Corinthian exterior, sun-drenched sea */
const BG =
  "https://medias.orient-express.com/sites/default/files/styles/w3840/public/mobile/1176x768/Corinthian-Exterior-Caribbean-Luxigon.jpg";

export default function Schedule() {
  const [active, setActive] = useState(0);
  const day = scheduleDays[active];

  return (
    <section
      id="schedule"
      className="relative min-h-screen flex items-center justify-center py-14 px-6 md:px-14 overflow-hidden"
      aria-labelledby="schedule-heading"
    >
      {/* ── Full-bleed background image ── */}
      <div className="absolute inset-0">
        <Image
          src={BG}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />
        {/* Very light tint to keep image bright but readable behind the card */}
        <div className="absolute inset-0 bg-[#1a3050]/30" />
      </div>

      {/* ── White "letter" card — the schedule itself ── */}
      <div className="relative z-10 w-full max-w-4xl bg-white px-10 md:px-16 py-12 md:py-16 shadow-2xl">

        {/* Heading */}
        <div className="mb-4">
          <Eyebrow light>WEEKEND EVENTS</Eyebrow>
        </div>
        <h2
          id="schedule-heading"
          className="font-display font-normal text-ink text-center text-[clamp(28px,4.5vw,44px)] tracking-[-0.015em] mb-10"
        >
          Schedule &amp; Attire
        </h2>

        {/* ── Day selector — 3 equal columns ── */}
        <div className="grid grid-cols-3 border-b border-ink/12 mb-10">
          {scheduleDays.map((d, i) => (
            <button
              key={d.id}
              onClick={() => setActive(i)}
              className="relative text-center pb-5 group transition-opacity duration-200"
              aria-selected={active === i}
            >
              {/* Small uppercase label */}
              <div
                className={`font-body text-[9px] tracking-[0.22em] uppercase mb-1.5 transition-colors duration-200 ${
                  active === i ? "text-ink/55" : "text-ink/25 group-hover:text-ink/40"
                }`}
              >
                {d.tag}
              </div>

              {/* Date in display serif — "june 20" style */}
              <div
                className={`font-display font-normal text-[clamp(16px,2.5vw,26px)] transition-colors duration-200 ${
                  active === i ? "text-ink" : "text-ink/25 group-hover:text-ink/45"
                }`}
              >
                {d.date}
              </div>

              {/* Active underline */}
              {active === i && (
                <motion.div
                  layoutId="sched-underline"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-ink"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* ── Events list ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="divide-y divide-ink/8">
              {day.events.map((event, i) => (
                <div
                  key={i}
                  className="py-7 flex flex-col md:grid md:grid-cols-[140px_1fr] gap-3 md:gap-10"
                >
                  {/* ── Time column ── */}
                  <div className="pt-0.5">
                    {event.time && (
                      <div className="font-display font-normal text-ink text-[clamp(20px,2.5vw,28px)] leading-none">
                        {event.time}
                      </div>
                    )}
                    <div className="font-body text-[9px] tracking-[0.22em] uppercase text-ink/35 mt-1.5">
                      {event.period}
                    </div>
                  </div>

                  {/* ── Event content ── */}
                  <div>
                    <h3 className="font-display font-normal text-ink text-2xl mb-1.5 leading-tight">
                      {event.title}
                    </h3>
                    <p className="font-accent italic text-ink/70 text-lg leading-relaxed">
                      {event.description}
                    </p>

                    {/* Dress code — inline, subtle */}
                    {event.dressCode && (
                      <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <span className="font-body text-[8px] tracking-[0.22em] uppercase text-ink/35">
                          Dress
                        </span>
                        <span className="font-body text-[9px] tracking-[0.18em] uppercase text-ink/55 font-medium">
                          {event.dressCode.label}
                        </span>
                        {event.dressCode.subtitle && (
                          <span className="font-body text-[9px] text-ink/35">
                            — {event.dressCode.subtitle}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Dress code inspiration images */}
                    {event.dressCode?.images && event.dressCode.images.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-3">
                        {event.dressCode.images.map((img, idx) => (
                          <div
                            key={idx}
                            className="relative w-32 h-40 overflow-hidden flex-shrink-0"
                          >
                            <Image
                              src={img}
                              alt={`${event.dressCode!.label} inspiration ${idx + 1}`}
                              fill
                              className="object-cover"
                              sizes="128px"
                              loading="lazy"
                            />
                          </div>
                        ))}
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
