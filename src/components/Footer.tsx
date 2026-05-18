import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="bg-ink py-16 md:py-24 px-6"
      aria-label="Footer"
      style={{ backgroundColor: "#0B1733" }}
    >
      {/* ── Main three-column lockup ── */}
      <div className="max-w-5xl mx-auto">

        {/* Row: left text | logo | right text */}
        <div className="flex items-center gap-6 md:gap-10">

          {/* LEFT — rule + label + rule */}
          <div className="flex-1 flex flex-col items-end gap-3 min-w-0">
            <span className="w-full border-t border-white/20" />
            <span
              className="font-body text-white/70 text-[10px] md:text-[11px] tracking-[0.28em] uppercase whitespace-nowrap"
              style={{ fontStyle: "italic" }}
            >
              Shalom Meckenzie&rsquo;s
            </span>
            <span className="w-full border-t border-white/20" />
          </div>

          {/* CENTER — logo */}
          <div className="flex-shrink-0 relative w-24 h-24 md:w-32 md:h-32">
            <Image
              src="/logo-50sm.png"
              alt="50SM"
              fill
              className="object-contain brightness-0 invert opacity-80"
            />
          </div>

          {/* RIGHT — rule + label + rule */}
          <div className="flex-1 flex flex-col items-start gap-3 min-w-0">
            <span className="w-full border-t border-white/20" />
            <span
              className="font-body text-white/70 text-[10px] md:text-[11px] tracking-[0.28em] uppercase whitespace-nowrap"
            >
              50th Celebration
            </span>
            <span className="w-full border-t border-white/20" />
          </div>

        </div>

        {/* ── Location tagline ── */}
        <p className="text-center font-body text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/45 mt-10 md:mt-12">
          Marseille&nbsp;·&nbsp;Saint-Tropez&nbsp;·&nbsp;French Riviera&nbsp;·&nbsp;June 2026
        </p>

        {/* ── Bottom fine print ── */}
        <div className="mt-10 md:mt-14 flex flex-col items-center gap-2">
          <p className="font-body text-[9px] tracking-[0.25em] uppercase text-white/20">
            A private celebration&nbsp;·&nbsp;By invitation only
          </p>
          <p className="font-body text-[9px] tracking-wider text-white/12">
            Produced by Sky Production
          </p>
        </div>

      </div>
    </footer>
  );
}
