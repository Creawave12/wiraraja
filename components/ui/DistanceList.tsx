import Icon, { type IconName } from "@/components/ui/Icon";
import InView from "@/components/ui/InView";

type Row = {
  icon: IconName;
  label: string;
  value: string;
  percent?: number; // kalau diisi, bar ditampilkan
};

export default function DistanceList({ rows }: { rows: Row[] }) {
  return (
    <InView>
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid grid-cols-[40px_1fr_auto] items-center gap-x-3.5 gap-y-0.5 border-b border-line py-3.5 last:border-b-0"
        >
          <span className="grid h-10 w-10 place-items-center rounded-[9px] bg-tile text-xl text-brand">
            <Icon name={row.icon} />
          </span>
          <span>{row.label}</span>
          <b className="whitespace-nowrap text-right font-serif text-xl font-bold text-forest">
            {row.value}
          </b>
          {row.percent !== undefined && (
            <div
              aria-hidden="true"
              className="relative col-span-2 col-start-2 mt-1.5 h-1.5 overflow-hidden rounded-md bg-tile"
            >
              <span
                style={{ "--w": `${row.percent}%` } as React.CSSProperties}
                className="absolute inset-y-0 left-0 w-[var(--w)] rounded-md bg-linear-to-r from-brand to-gold transition-[width] duration-[1100ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-data-[seen=false]:w-0"
              />
            </div>
          )}
        </div>
      ))}
    </InView>
  );
}