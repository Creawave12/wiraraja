import DistanceList from "@/components/ui/DistanceList";
import Icon from "@/components/ui/Icon";
import IconCard from "@/components/ui/IconCard";
import Pill from "@/components/ui/Pill";
import Placeholder from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StatsRow from "@/components/ui/StatsRow";
import SubHeading from "@/components/ui/SubHeading";
import EstateFooter from "@/components/sections/pillars/EstateFooter";
import ZoneOverview from "@/components/sections/pillars/madura/ZoneOverview";
import { madura, maduraZones } from "@/content/pillars";

export default function MaduraView() {
  const totalHa = maduraZones.reduce((sum, z) => sum + z.ha, 0);

  // Panjang bar jarak dihitung relatif terhadap yang terjauh
  const maxKm = Math.max(...madura.location.distances.map((d) => d.km));
  const distanceRows = madura.location.distances.map((d) => ({
    icon: d.icon,
    label: d.label,
    value: `${d.km} km`,
    percent: Math.round((d.km / maxKm) * 100),
  }));

  return (
    <>
      {/* Band 1: pengantar */}
      <Section>
        <h2 className="mb-1.5">{madura.title}</h2>
        <div className="mb-6 mt-1.5">
          <Pill>{madura.category}</Pill>
        </div>
        <div className="grid items-start gap-9 md:grid-cols-2 md:gap-14">
          <Placeholder
            label={madura.gateway.label}
            size={madura.gateway.size}
            ratio="16/10"
          />
          <div>
            <p className="mb-1.5 text-[19px] text-forest">{madura.intro}</p>
            <StatsRow
              items={[
                {
                  value: totalHa.toLocaleString("en-US"),
                  unit: "ha",
                  label: "total across all zones",
                },
              ]}
              className="mt-[22px]"
            />
          </div>
        </div>
      </Section>

      {/* Band 2: manfaat SEZ (gelap) */}
      <Section
        tone="dark"
        containerClassName="grid items-start gap-9 md:grid-cols-2 md:gap-14"
      >
        <SectionHeading
          title={madura.benefits.title}
          lead={madura.benefits.lead}
          onDark
        />
        <ul>
          {madura.benefits.items.map((b) => (
            <li
              key={b.label}
              className="grid grid-cols-[44px_1fr] items-center gap-3.5 border-b border-white/[0.14] py-4 font-medium text-white"
            >
              <span className="grid h-11 w-11 place-items-center rounded-[10px] bg-white/[0.14] text-[22px] text-tile">
                <Icon name={b.icon} />
              </span>
              {b.label}
            </li>
          ))}
        </ul>
      </Section>

      {/* Band 3: zona, keunggulan, lokasi */}
      <Section>
        <SubHeading>Zones across the estate</SubHeading>
        <ZoneOverview />
        <div className="mt-[22px]">
          <Placeholder
            label={madura.zoneMap.label}
            size={madura.zoneMap.size}
            ratio="21/10"
            icon="globe"
          />
        </div>

        <SubHeading>Built for business</SubHeading>
        <Reveal>
          <div className="grid gap-[22px] md:grid-cols-3">
            {madura.builtForBusiness.map((x) => (
              <IconCard key={x.title} icon={x.icon} title={x.title}>
                {x.text}
              </IconCard>
            ))}
          </div>
        </Reveal>

        <SubHeading>Location</SubHeading>
        <p className="mb-[22px] max-w-[62ch] text-[17px]">
          {madura.location.lead}
        </p>
        <div className="grid items-start gap-9 md:grid-cols-2 md:gap-14">
          <Placeholder
            label={madura.location.photo.label}
            size={madura.location.photo.size}
            ratio="1/1"
            icon="pin"
          />
          <DistanceList rows={distanceRows} />
        </div>

        <EstateFooter showFtz={false} />
      </Section>
    </>
  );
}