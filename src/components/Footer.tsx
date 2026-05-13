import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink py-20 px-6" aria-label="Footer">
      {/* Gold hairline */}
      <div className="flex items-center gap-4 text-gold/30 max-w-2xl mx-auto mb-16">
        <span className="flex-1 border-t border-gold/20" />
        <span className="text-[10px] tracking-widest">◆</span>
        <span className="flex-1 border-t border-gold/20" />
      </div>

      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-16 h-16">
            <Image
              src="/logo-50sm.png"
              alt="50SM"
              fill
              className="object-contain brightness-0 invert opacity-70"
            />
          </div>
        </div>

        {/* Name */}
        <p className="font-display italic text-ivory/70 text-xl md:text-2xl mb-3">
          Shalom Meckenzie&rsquo;s 50th Celebration
        </p>

        {/* Location line */}
        <p className="font-body text-[10px] font-medium tracking-[0.3em] uppercase text-gold/60 mb-8">
          Marseille · Saint-Tropez · French Riviera · June 2026
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 text-gold/20 mb-8">
          <span className="flex-1 border-t border-gold/15" />
          <span className="text-[10px]">◆</span>
          <span className="flex-1 border-t border-gold/15" />
        </div>

        {/* Fine print */}
        <p className="font-body text-[11px] text-ivory/25 tracking-widest uppercase">
          A private celebration · By invitation only
        </p>
        <p className="font-body text-[10px] text-ivory/15 tracking-wider mt-2">
          Produced by Sky Production
        </p>
      </div>
    </footer>
  );
}
