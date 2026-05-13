import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const stats = [
  { value: "3", label: "Days" },
  { value: "120", label: "Guests" },
  { value: "1", label: "Legendary Yacht" },
];

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="bg-ivory text-ink py-28 md:py-36 px-6"
      aria-labelledby="welcome-heading"
    >
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <Eyebrow light>WELCOME</Eyebrow>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            id="welcome-heading"
            className="font-display font-bold text-ink mt-6 mb-8 leading-[1.1] text-[clamp(30px,5vw,52px)] tracking-[-0.01em]"
          >
            Three Days.
            <br />
            One Horizon.
            <br />
            <span className="italic font-normal">A Life Worth Celebrating.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="font-body text-ink/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Join us on the French Riviera for an intimate weekend honouring Shalom&rsquo;s
            fiftieth year. One hundred and twenty of his closest sail from Marseille to
            Saint-Tropez aboard the legendary Orient Express Corinthian — a celebration of
            friendship, sea air, and the kind of nights you remember forever.
          </p>
        </Reveal>

        {/* Stats */}
        <Reveal delay={0.3}>
          <div className="mt-16 flex items-center justify-center gap-0 divide-x divide-ink/15">
            {stats.map((s) => (
              <div key={s.label} className="px-10 md:px-16 text-center">
                <div className="font-display font-bold text-[clamp(36px,6vw,64px)] text-ink leading-none tracking-tight">
                  {s.value}
                </div>
                <div className="font-body text-[10px] font-medium tracking-[0.2em] uppercase text-ink/50 mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
