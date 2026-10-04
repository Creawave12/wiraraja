import Eyebrow from "@/components/ui/Eyebrow";
import Placeholder from "@/components/ui/Placeholder";
import Section from "@/components/ui/Section";
import { president } from "@/content/about";

export default function President() {
  return (
    <Section containerClassName="grid items-start gap-9 md:grid-cols-[1.25fr_0.75fr] md:gap-14">
      <div>
        <Eyebrow>{president.eyebrow}</Eyebrow>
        <h2 className="mb-3.5">{president.title}</h2>
        {president.paragraphs.map((p) => (
          <p key={p} className="mb-3.5 max-w-[62ch]">
            {p}
          </p>
        ))}
        <p className="mb-3.5">
          <strong>{president.hashtag}</strong>
        </p>
        <p className="mb-3.5">{president.closing}</p>
        <div>
          <b className="mt-[22px] block font-serif text-[22px] font-bold italic text-forest">
            {president.name}
          </b>
          <span className="text-sm text-muted">{president.role}</span>
        </div>
      </div>
      <Placeholder
        label={president.photo.label}
        size={president.photo.size}
        ratio="4/5"
        icon="users"
      />
    </Section>
  );
}