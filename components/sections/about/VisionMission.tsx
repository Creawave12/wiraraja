import IconTile from "@/components/ui/IconTile";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { direction } from "@/content/about";

const card =
  "rounded-xl border border-line bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-mid/40 hover:shadow-[0_14px_30px_rgba(13,43,31,0.1)]";

export default function VisionMission() {
  return (
    <Section tone="alt">
      <SectionHeading
        eyebrow={direction.eyebrow}
        title={direction.title}
        lead={direction.lead}
      />
      <Reveal>
        <div className="grid gap-[22px] md:grid-cols-2">
          <div className={card}>
            <IconTile name="target" tone="outline" />
            <h3 className="mb-2 text-[22px]">Vision</h3>
            <p className="text-sm leading-[1.8]">{direction.vision}</p>
          </div>
          <div className={card}>
            <IconTile name="users" tone="outline" />
            <h3 className="mb-2 text-[22px]">Mission</h3>
            <ul className="list-disc pl-5">
              {direction.mission.map((m) => (
                <li key={m} className="mb-2 text-sm leading-[1.8]">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}