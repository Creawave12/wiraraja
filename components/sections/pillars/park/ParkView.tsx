import CheckList from "@/components/ui/CheckList";
import DistanceList from "@/components/ui/DistanceList";
import Placeholder from "@/components/ui/Placeholder";
import Section from "@/components/ui/Section";
import StatsRow from "@/components/ui/StatsRow";
import SubHeading from "@/components/ui/SubHeading";
import EstateFooter from "@/components/sections/pillars/EstateFooter";
import FactoryTypes from "@/components/sections/pillars/park/FactoryTypes";
import Utilities from "@/components/sections/pillars/park/Utilities";
import { park } from "@/content/pillars";

export default function ParkView() {
  return (
    <Section>
      <h2 className="mb-6">{park.title}</h2>

      <div className="grid items-start gap-9 md:grid-cols-2 md:gap-14">
        <Placeholder
          label={park.video.label}
          size={park.video.size}
          icon="play"
        />
        <div>
          <h3 className="mb-2 text-[26px]">{park.headline}</h3>
          <p>{park.intro}</p>
          <CheckList items={park.features} />
        </div>
      </div>

      <StatsRow items={park.stats} />

      <SubHeading>Park layout</SubHeading>
      <Placeholder
        label={park.layout.photo.label}
        size={park.layout.photo.size}
        ratio="21/9"
      />
      <div className="mt-[22px] grid gap-[22px] md:grid-cols-3">
        {park.layout.blocks.map((block) => (
          <div
            key={block.name}
            className="rounded-[14px] border border-line border-l-[3px] border-l-gold bg-white p-[26px]"
          >
            <p className="font-semibold text-forest">{block.name}</p>
            <div className="font-serif text-[44px] font-bold leading-[1.1] text-forest">
              {block.count}
            </div>
            <p className="text-sm">{block.label}</p>
          </div>
        ))}
      </div>

      <SubHeading>Factory types</SubHeading>
      <FactoryTypes />

      <SubHeading>Infrastructure and facilities</SubHeading>
      <Utilities />
      <div className="mt-2 grid gap-x-10 md:grid-cols-2">
        <CheckList items={park.services.left} />
        <CheckList items={park.services.right} />
      </div>

      <SubHeading>Location</SubHeading>
      <div className="grid items-start gap-9 md:grid-cols-2 md:gap-14">
        <Placeholder
          label={park.location.photo.label}
          size={park.location.photo.size}
          ratio="1/1"
          icon="pin"
        />
        <div>
          <p className="mb-2">{park.location.address}</p>
          <DistanceList rows={park.location.distances} />
        </div>
      </div>

      <EstateFooter />
    </Section>
  );
}