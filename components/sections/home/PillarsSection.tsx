import Link from "next/link";
import Icon from "@/components/ui/Icon";
import IconTile from "@/components/ui/IconTile";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { pillarPanels, pillarsIntro } from "@/content/home";

export default function PillarsSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow={pillarsIntro.eyebrow}
        title={pillarsIntro.title}
        lead={pillarsIntro.lead}
        size="lg"
      />
      <Reveal>
        <div className="grid gap-[22px] md:grid-cols-2">
          {pillarPanels.map((panel) => (
            <div
              key={panel.title}
              className="rounded-2xl border border-line bg-alt p-[34px] transition duration-300 hover:-translate-y-1 hover:border-brand-mid/40 hover:shadow-[0_14px_30px_rgba(13,43,31,0.1)]"
            >
              <IconTile name={panel.icon} />
              <h3 className="mb-2 text-[26px]">{panel.title}</h3>
              <p className="mb-5 text-base">{panel.text}</p>
              {panel.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between gap-4 border-t border-line py-[13px] text-base font-semibold text-forest transition-[padding] duration-200 hover:pl-1.5"
                >
                  <span>
                    {link.label}
                    <small className="block text-[13px] font-normal text-muted">
                      {link.note}
                    </small>
                  </span>
                  <Icon name="arrow" className="text-xl" />
                </Link>
              ))}
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}