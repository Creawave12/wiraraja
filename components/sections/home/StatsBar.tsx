import CountUp from "@/components/ui/CountUp";
import { stats } from "@/content/home";

export default function StatsBar() {
  return (
    <section
      aria-label="Key facts"
      className="grid grid-cols-2 gap-y-3.5 bg-gold py-5 md:grid-cols-4"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="px-5 text-center md:border-r md:border-forest/20 md:last:border-r-0"
        >
          <CountUp
            value={stat.value}
            className="block font-serif text-[28px] font-bold text-forest"
          />
          <span className="text-[11px] uppercase tracking-[1px] text-forest/65">
            {stat.label}
          </span>
        </div>
      ))}
    </section>
  );
}