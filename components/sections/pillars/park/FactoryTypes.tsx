import Placeholder from "@/components/ui/Placeholder";
import Tabs from "@/components/ui/Tabs";
import { park } from "@/content/pillars";

export default function FactoryTypes() {
  const items = park.factoryTypes.map((type) => ({
    id: type.id,
    label: `Type ${type.name}`,
    content: (
      <div className="grid items-start gap-9 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="font-serif text-[56px] font-bold leading-none text-forest">
            ±{type.area}
            <small className="ml-1 font-sans text-xl font-semibold">m²</small>
          </div>
          <p className="mt-1.5">
            Factory Type {type.name}, with ground floor and mezzanine floor
            layouts.
          </p>

          {/* Perbandingan ukuran: tipe aktif disorot */}
          <div className="mt-6 grid gap-3">
            {park.factoryTypes.map((other) => {
              const on = other.id === type.id;
              return (
                <div
                  key={other.id}
                  className={`grid grid-cols-[64px_1fr] items-center gap-3 text-sm ${
                    on ? "font-semibold text-forest" : "text-muted"
                  }`}
                >
                  <span>Type {other.name}</span>
                  <div className="relative h-2.5 overflow-hidden rounded-md bg-tile">
                    <span
                      style={{ width: `${other.pct}%` }}
                      className={`absolute inset-y-0 left-0 rounded-md bg-gold ${
                        on ? "opacity-100" : "opacity-45"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-[22px] md:grid-cols-2">
          <Placeholder
            label={`Floor drawing: Type ${type.name} ground floor`}
            size="1000 × 1250 px, PNG on light background"
            ratio="4/5"
            icon="doc"
          />
          <Placeholder
            label={`Floor drawing: Type ${type.name} mezzanine floor`}
            size="1000 × 1250 px, PNG on light background"
            ratio="4/5"
            icon="doc"
          />
        </div>
      </div>
    ),
  }));

  return <Tabs items={items} label="Factory types" />;
}