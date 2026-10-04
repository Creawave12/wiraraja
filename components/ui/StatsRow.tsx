type Stat = {
  value: string;
  unit?: string;
  label: string;
};

type Props = {
  items: Stat[];
  onDark?: boolean;
  className?: string;
};

export default function StatsRow({
  items,
  onDark = false,
  className = "my-[34px]",
}: Props) {
  return (
    <div
      className={`grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] border-t-2 border-gold ${className}`}
    >
      {items.map((item) => (
        <div key={item.label} className="pb-1.5 pr-[22px] pt-[22px]">
          <b
            className={`block font-serif text-4xl font-bold leading-[1.1] ${
              onDark ? "text-gold" : "text-forest"
            }`}
          >
            {item.value}
            {item.unit && (
              <small className="ml-[3px] font-sans text-[15px] font-semibold">
                {item.unit}
              </small>
            )}
          </b>
          <span className={`text-sm ${onDark ? "text-white/70" : "text-muted"}`}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}