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
      className="text-ink py-28 md:py-36 px-6"
      style={{ backgroundColor: "#fffbf7" }}
      aria-labelledby="welcome-heading"
    >
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <Eyebrow light>WELCOME</Eyebrow>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            id="welcome-heading"
            className="font-display font-normal text-ink mt-6 mb-8 leading-[1.1] text-[clamp(32px,4.5vw,44px)] tracking-[-0.01em]"
          >
            Join us for an exclusive
            <br />
            intimate celebration
            <br />
            marking Shalom's 50th birthday.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="font-accent italic text-ink/70 text-xl md:text-2xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Bringing together 120 of his closest circle for an unforgettable weekend on the
            French Riviera. Sailing from Marseille to Saint-Tropez aboard the iconic Orient
            Express Yacht, this is more than a celebration — it&rsquo;s a shared experience
            of the Riviera at its finest, blending sea, sun and the best company.
          </p>
        </Reveal>

        {/* Stats */}
        <Reveal delay={0.3}>
          <div className="mt-16 flex w-full items-start md:items-center justify-between gap-0 divide-x divide-ink/15">
            {stats.map((s) => (
              <div key={s.label} className="flex-1 px-2 md:px-16 text-center">
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
