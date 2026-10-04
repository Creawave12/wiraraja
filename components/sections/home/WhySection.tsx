import ButtonLink from "@/components/ui/ButtonLink";
import CheckList from "@/components/ui/CheckList";
import Eyebrow from "@/components/ui/Eyebrow";
import Placeholder from "@/components/ui/Placeholder";
import Section from "@/components/ui/Section";
import { why } from "@/content/home";

export default function WhySection() {
  return (
    <Section
      tone="alt"
      containerClassName="grid items-center gap-9 md:grid-cols-2 md:gap-14"
    >
      <Placeholder label={why.photo.label} size={why.photo.size} />
      <div>
        <Eyebrow>{why.eyebrow}</Eyebrow>
        <h2 className="mb-3.5">{why.title}</h2>
        <p className="mb-2.5 max-w-[56ch] text-[15px]">{why.lead}</p>
        <CheckList items={why.points} className="mb-[26px]" />
        <ButtonLink href={why.cta.href} variant="solid">
          {why.cta.label}
        </ButtonLink>
      </div>
    </Section>
  );
}