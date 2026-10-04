import Icon from "@/components/ui/Icon";
import { maduraZones, type ZoneId } from "@/content/pillars";

// Record<ZoneId, string> artinya: SETIAP id zona wajib punya warna.
// Tambah zona baru di data tapi lupa di sini? TypeScript langsung merah.
const swatch: Record<ZoneId, string> = {
  logistics: "bg-gold",
  processing: "bg-forest",
  halal: "bg-brand-mid",
  digital: "bg-gold-light",
  shipbuilding: "bg-[#8A7431]",
  reservoir:
    "bg-[repeating-linear-gradient(135deg,#E8F5EE_0_5px,#fff_5px_10px)]",
};

const fmt = (n: number) => n.toLocaleString("en-US");

export default function ZoneOverview() {
  // Data turunan: dihitung, bukan diketik
  const total = maduraZones.reduce((sum, z) => sum + z.ha, 0);

  return (
    <div>
      <div
        role="img"
        aria-label={`Zone areas as proportions of ${fmt(total)} hectares`}
        className="flex h-11 overflow-hidden rounded-[10px] border border-line"
      >
        {maduraZones.map((z) => (
          <span
            key={z.id}
            title={`${z.name}, ${z.ha} ha`}
            style={{ width: `${(z.ha / total) * 100}%` }}
            className={`block h-full ${swatch[z.id]}`}
          />
        ))}
      </div>

      <ul className="mb-[30px] mt-4 flex flex-wrap gap-x-[22px] gap-y-2 text-sm">
        {maduraZones.map((z) => (
          <li key={z.id} className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className={`h-3.5 w-3.5 rounded border border-line ${swatch[z.id]}`}
            />
            {z.name}, {z.ha} ha
          </li>
        ))}
      </ul>

      <div className="grid gap-[22px] md:grid-cols-3">
        {maduraZones
          .filter((z) => z.card)
          .map((z) => (
            <div
              key={z.id}
              className="rounded-b-[14px] rounded-t border border-t-4 border-line border-t-gold bg-white px-6 py-[22px]"
            >
              <span className="mb-3 grid h-[46px] w-[46px] place-items-center rounded-[10px] bg-tile text-[22px] text-brand">
                <Icon name={z.icon} />
              </span>
              <div className="font-serif text-[34px] font-bold leading-[1.1] text-forest">
                {fmt(z.ha)}
                <small className="ml-[3px] font-sans text-[15px] font-semibold">
                  ha
                </small>
              </div>
              <h3 className="mb-2.5 mt-1 text-lg">{z.name}</h3>
              {z.uses.length > 0 && (
                <ul className="list-disc pl-[18px] text-[14.5px]">
                  {z.uses.map((u) => (
                    <li key={u}>{u}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}