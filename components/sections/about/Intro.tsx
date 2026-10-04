import Eyebrow from "@/components/ui/Eyebrow";
import Placeholder from "@/components/ui/Placeholder";
import Section from "@/components/ui/Section";
import { intro } from "@/content/about";

export default function Intro() {
  return (
    <Section tone="alt">
      <Eyebrow>{intro.eyebrow}</Eyebrow>
      <h2 className="mb-3.5">{intro.title}</h2>
      <div className="mb-[34px] mt-[26px]">
        <Placeholder
          label={intro.photo.label}
          size={intro.photo.size}
          ratio="12/5"
        />
      </div>
      <div className="grid gap-3.5">
        {intro.paragraphs.map((p) => (
          <p key={p} className="max-w-[68ch]">
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}