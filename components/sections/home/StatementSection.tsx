import ButtonLink from "@/components/ui/ButtonLink";
import Section from "@/components/ui/Section";
import { statement } from "@/content/home";

export default function StatementSection() {
  return (
    <Section tone="dark">
      <div className="max-w-[860px]">
        <blockquote className="mb-[26px] max-w-[26ch] border-l-[3px] border-gold pl-[22px] font-serif text-[clamp(26px,3.4vw,40px)] italic leading-[1.4] text-white">
          {statement.quote}
        </blockquote>
        <p className="mb-8 max-w-[58ch] pl-[25px] font-serif text-[clamp(17px,1.8vw,20px)] leading-[1.7] text-white/90">
          {statement.text}
        </p>
        <div className="pl-[25px]">
          <ButtonLink href={statement.cta.href}>{statement.cta.label}</ButtonLink>
        </div>
      </div>
    </Section>
  );
}