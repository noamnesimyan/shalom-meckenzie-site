import React from "react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const ICON_COLOR = "#000d1b";

const details = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    label: "WHEN",
    primary: "Friday 20 – Sunday 22 June",
    secondary: "2026",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    label: "WHERE",
    primary: "Port of Marseille → Saint-Tropez",
    secondary: "French Riviera, France",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 012.12 2.18 2 2 0 014.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
      </svg>
    ),
    label: "NEAREST AIRPORT",
    primary: "Marseille Provence (MRS)",
    secondary: "~30 minutes by car to port",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a14.5 14.5 0 000 20M2 12h20"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10"/>
        <path d="M12 22C6.48 22 2 17.52 2 12"/>
      </svg>
    ),
    label: "GETTING THERE",
    primary: "Private chauffeur from MRS",
    secondary: "Valet parking at port",
  },
];

const stripeStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  backgroundImage: `repeating-linear-gradient(
    to right,
    transparent 0px,
    transparent 30px,
    rgba(176, 210, 232, 0.42) 30px,
    rgba(176, 210, 232, 0.42) 34px,
    rgba(190, 220, 238, 0.28) 34px,
    rgba(190, 220, 238, 0.28) 44px,
    rgba(176, 210, 232, 0.42) 44px,
    rgba(176, 210, 232, 0.42) 48px,
    transparent 48px,
    transparent 78px
  )`,
};

export default function Details() {
  return (
    <section
      id="details"
      className="py-28 md:py-36 px-6"
      style={stripeStyle}
      aria-labelledby="details-heading"
    >
      <div className="max-w-6xl mx-auto bg-white border-3 border-ink">
        <Reveal>
          <div className="text-center mb-16">
            <h2
              id="details-heading"
              className="font-display font-bold text-ink mt-6 text-[clamp(28px,4vw,44px)] tracking-[-0.01em]"
            >
              An Invitation to the Riviera
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {details.map((d, i) => (
            <Reveal key={d.label} delay={i * 0.08}>
              <div className="bg-white/80 backdrop-blur-sm p-6 flex flex-col items-center text-center gap-5 h-full">
                <div className="w-14 h-14 rounded-full border border-ink/15 flex items-center justify-center flex-shrink-0">
                  {d.icon}
                </div>
                <div>
                  <div className="font-body text-[10px] font-medium tracking-[0.25em] uppercase text-gold mb-3">
                    {d.label}
                  </div>
                  <div className="font-display font-bold text-ink text-lg leading-snug mb-1">
                    {d.primary}
                  </div>
                  <div className="font-body text-ink/50 text-sm">{d.secondary}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
