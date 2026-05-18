type EyebrowProps = {
  children: string;
  light?: boolean;
};

export default function Eyebrow({ children, light = false }: EyebrowProps) {
  const lineColor = light ? "bg-ink/30" : "bg-gold/60";
  const textColor = light ? "text-ink/60" : "text-gold";

  return (
    <div className="flex items-center gap-4 justify-center">
      <span
        className={`${textColor} font-body text-[11px] font-medium tracking-[0.25em] uppercase`}
      >
        {children}
      </span>
    </div>
  );
}
