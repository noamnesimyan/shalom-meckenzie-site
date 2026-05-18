import React from "react";
import Reveal from "./Reveal";

const details = [
  {
    icon: <img src="/clock.svg" alt="clock" style={{ height: 40, width: "auto" }} />,
    label: "WHEN",
    primary: "20-22 June 2026",
    secondary: "friday - sunday",
  },
  {
    icon: <img src="/compass.svg" alt="compass" style={{ height: 40, width: "auto" }} />,
    label: "WHERE",
    primary: "French Riviera",
    secondary: "marseille > saint tropez",
  },
  {
    icon: <img src="/passport.svg" alt="passport" style={{ height: 40, width: "auto" }} />,
    label: "NEAREST AIRPORT",
    primary: "Marseille Provence",
    secondary: "MRS · 30 min to port",
  },
  {
    icon: <img src="/lighthouse.svg" alt="lighthouse" style={{ height: 40, width: "auto" }} />,
    label: "MEETING POINT",
    primary: "Marseille Port",
    secondary: "Friday, June 20 · 12:00",
  },
];

/* Classic vertical nautical stripe — navy / sky / white */
const nautiStripe: React.CSSProperties = {
  backgroundImage: `repeating-linear-gradient(
    to right,
    #1B3A5C 0px,
    #1B3A5C 20px,
    #A8D8EA 20px,
    #A8D8EA 24px,
    #ffffff 24px,
    #ffffff 72px,
    #A8D8EA 72px,
    #A8D8EA 76px,
    #1B3A5C 76px,
    #1B3A5C 96px
  )`,
};

export default function Details() {
  return (
    <section
      id="details"
      className="py-14 md:py-20 px-6 md:px-14"
      style={nautiStripe}
      aria-labelledby="details-heading"
    >
      {/* ── White card ── */}
      <div className="max-w-5xl mx-auto bg-white shadow-2xl px-10 md:px-16 py-12 md:py-16">

        {/* Heading */}
        <Reveal>
          <h2
            id="details-heading"
            className="font-display font-normal text-ink text-center text-[clamp(28px,4.5vw,44px)] tracking-[-0.015em] mb-12"
          >
            An Invitation to the Riviera
          </h2>
        </Reveal>

        {/* ── 4 detail columns ── */}
        <Reveal delay={0.08}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0">
            {details.map((d) => (
              <div key={d.label} className="flex flex-col items-center text-center px-6 py-2 gap-4">
                {/* Icon */}
                <div className="opacity-70">
                  {d.icon}
                </div>

                {/* Label */}
                <div className="font-body text-[9px] tracking-[0.28em] uppercase text-ink/40">
                  {d.label}
                </div>

                {/* Primary */}
                <div className="font-display font-normal text-ink text-[clamp(14px,1.6vw,18px)] leading-snug -mt-2">
                  {d.primary}
                </div>

                {/* Secondary */}
                <div className="font-body text-ink/45 text-[11px] tracking-wide -mt-2">
                  {d.secondary}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── Divider ── */}
        <div className="border-t border-ink/10 my-12" />

        {/* ── Getting here — flight info ── */}
        <Reveal delay={0.15}>
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-body text-[9px] tracking-[0.28em] uppercase text-ink/40 mb-4">
              GETTING HERE
            </p>
            <h3 className="font-display font-normal text-ink text-[clamp(22px,3vw,32px)] tracking-[-0.01em] mb-5 leading-snug">
              For Your Convenience
            </h3>
            <p className="font-accent italic text-ink/70 text-xl md:text-2xl mt-6 max-w-2xl mx-auto leading-relaxed">
              A private flight from Tel Aviv departs at{" "}
              <span className="text-ink font-medium not-italic">12:00 on Friday, June 20</span>.
              Those who prefer are warmly welcome to meet us directly at the
              Port of Marseille.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
