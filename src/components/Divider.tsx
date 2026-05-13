type DividerProps = {
  light?: boolean;
};

export default function Divider({ light = false }: DividerProps) {
  const lineColor = light ? "border-ink/15" : "border-gold/30";
  const textColor = light ? "text-ink/25" : "text-gold/60";

  return (
    <div className={`flex items-center gap-4 ${textColor}`}>
      <span className={`flex-1 border-t ${lineColor}`} />
      <span className="text-[10px] tracking-widest">◆</span>
      <span className={`flex-1 border-t ${lineColor}`} />
    </div>
  );
}
