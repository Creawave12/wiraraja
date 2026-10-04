import type { Metadata } from "next";
import ButtonLink from "@/components/ui/ButtonLink";
import PageHeader from "@/components/ui/PageHeader";
import Intro from "@/components/sections/about/Intro";
import President from "@/components/sections/about/President";
import VisionMission from "@/components/sections/about/VisionMission";
import Values from "@/components/sections/about/Values";
import Milestones from "@/components/sections/about/Milestones";
import { aboutHeader } from "@/content/about";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Wiraraja Indonesia was established in 1998 in Batam, Riau Islands. Learn about our vision, mission, values and milestones.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={aboutHeader.eyebrow}
        title={aboutHeader.title}
        description={aboutHeader.description}
        titleClassName="max-w-[16ch]"
        actions={
          aboutHeader.videoUrl ? (
            <ButtonLink href={aboutHeader.videoUrl} icon="play">
              Watch video
            </ButtonLink>
          ) : undefined
        }
      />
      <Intro />
      <President />
      <VisionMission />
      <Values />
      <Milestones />
    </>
  );
}