import Placeholder from "@/components/ui/Placeholder";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/ui/Timeline";
import TimelineItem from "@/components/ui/TimelineItem";
import { milestones, milestonesIntro } from "@/content/about";

export default function Milestones() {
  return (
    <Section tone="dark">
      <SectionHeading
        eyebrow={milestonesIntro.eyebrow}
        title={milestonesIntro.title}
        lead={milestonesIntro.lead}
        onDark
      />
      <Timeline>
        {milestones.map((m) => (
          <TimelineItem
            key={m.title}
            year={m.year}
            tbd={m.tbd}
            tag={m.tag}
            title={m.title}
            aside={
              <Placeholder
                label={m.photo.label}
                size={m.photo.size}
                ratio="4/3"
                tone="dark"
              />
            }
          >
            {m.text}
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
}