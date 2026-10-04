import DistanceList from "@/components/ui/DistanceList";
import Placeholder from "@/components/ui/Placeholder";
import Section from "@/components/ui/Section";
import StatsRow from "@/components/ui/StatsRow";
import SubHeading from "@/components/ui/SubHeading";
import EstateFooter from "@/components/sections/pillars/EstateFooter";
import { energy } from "@/content/pillars";

export default function EnergyView() {
  return (
    <Section>
      <h2 className="mb-6">{energy.title}</h2>

      <div className="grid items-start gap-9 md:grid-cols-2 md:gap-14">
        <Placeholder
          label={energy.gateway.label}
          size={energy.gateway.size}
          ratio="16/10"
        />
        <div>
          <p>{energy.intro}</p>
          <StatsRow items={energy.stats} className="mt-[22px]" />
        </div>
      </div>

      <SubHeading>Facilities and infrastructure</SubHeading>
      {energy.facilityGroups.map((group) => (
        <div key={group.title}>
          <p className="mb-3.5 mt-[26px] font-semibold text-forest">
            {group.title}
          </p>
          <div className="grid gap-[22px] md:grid-cols-3">
            {group.items.map((item) => (
              <Placeholder
                key={item.name}
                label={item.name}
                size="Photo, 1200 × 900 px"
                icon={item.icon}
                tile
              />
            ))}
          </div>
        </div>
      ))}

      <SubHeading>Location</SubHeading>
      <div className="grid items-start gap-9 md:grid-cols-2 md:gap-14">
        <Placeholder
          label={energy.location.photo.label}
          size={energy.location.photo.size}
          ratio="1/1"
          icon="pin"
        />
        <div>
          <p className="mb-2">{energy.location.address}</p>
          <DistanceList rows={energy.location.distances} />
        </div>
      </div>

      <EstateFooter />
    </Section>
  );
}