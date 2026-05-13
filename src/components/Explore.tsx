"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { restaurants } from "@/content/restaurants";
import { beachClubs } from "@/content/beachClubs";
import type { Place } from "@/content/restaurants";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

function PlaceCard({ place, index }: { place: Place; index: number }) {
  return (
    <Reveal delay={index * 0.07}>
      <div className="group flex flex-col bg-ivory border border-ink/8 overflow-hidden hover:-translate-y-1 transition-transform duration-300">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={place.image}
            alt={place.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
          {/* Gold border reveal on hover */}
          <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/60 transition-all duration-300 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1 gap-2">
          <div className="font-body text-[9px] font-medium tracking-[0.2em] uppercase text-gold/80">
            {place.tag}
          </div>
          <h4 className="font-display font-bold text-ink text-lg leading-tight">
            {place.name}
          </h4>
          <p className="font-body text-ink/60 text-sm leading-relaxed flex-1">
            {place.description}
          </p>

          {/* Links */}
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-ink/10">
            <a
              href={place.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-body text-[10px] tracking-[0.15em] uppercase text-ink/50 hover:text-ink transition-colors"
              aria-label={`View ${place.name} on Google Maps`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              Maps
            </a>
            {place.websiteUrl && (
              <a
                href={place.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-body text-[10px] tracking-[0.15em] uppercase text-ink/50 hover:text-ink transition-colors"
                aria-label={`Visit ${place.name} website`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                </svg>
                Website
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

const tabs = [
  { id: "restaurants", label: "RESTAURANTS" },
  { id: "beach-clubs", label: "BEACH CLUBS" },
];

export default function Explore() {
  const [active, setActive] = useState<"restaurants" | "beach-clubs">("restaurants");
  const places = active === "restaurants" ? restaurants : beachClubs;

  return (
    <section
      id="explore"
      className="bg-ivory py-28 md:py-36 px-6"
      aria-labelledby="explore-heading"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-6">
            <Eyebrow light>À LA CARTE</Eyebrow>
            <h2
              id="explore-heading"
              className="font-display font-bold text-ink mt-6 text-[clamp(28px,4vw,44px)] tracking-[-0.01em]"
            >
              The Best of Saint-Tropez
            </h2>
            <p className="font-body text-ink/55 text-base mt-4 max-w-xl mx-auto leading-relaxed">
              Should you wish to wander, a curated shortlist of the Riviera&rsquo;s
              most beloved tables and shores.
            </p>
          </div>
        </Reveal>

        {/* Sub-tabs */}
        <Reveal delay={0.1}>
          <div className="flex justify-center gap-0 mt-12 mb-14 border-b border-ink/15">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id as typeof active)}
                className="relative px-8 pb-4 group"
                aria-selected={active === tab.id}
              >
                <span
                  className={`font-body text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                    active === tab.id
                      ? "text-ink"
                      : "text-ink/40 group-hover:text-ink/70"
                  }`}
                >
                  {tab.label}
                </span>
                {active === tab.id && (
                  <motion.div
                    layoutId="explore-tab"
                    className="absolute bottom-0 left-0 right-0 h-px bg-gold"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {places.map((place, i) => (
              <PlaceCard key={place.name} place={place} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
