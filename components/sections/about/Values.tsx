import Icon from "@/components/ui/Icon";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Tabs from "@/components/ui/Tabs";
import { values, valuesIntro } from "@/content/about";

export default function Values() {
  const items = values.map((v) => ({
    id: v.id,
    label: v.name,
    icon: v.icon,
    content: (
      <div className="grid items-center gap-8 rounded-2xl bg-forest p-7 md:grid-cols-[1fr_150px] md:p-10">
        <div>
          <h3 className="mb-3 text-[30px] text-gold">{v.name}</h3>
          <p className="max-w-[46ch] text-[17px] text-white/85">
            {v.description}
          </p>
        </div>
        <div className="grid aspect-square max-w-[120px] place-items-center rounded-[18px] border border-gold/50 bg-white text-5xl text-gold md:max-w-none md:text-[64px]">
          <Icon name={v.icon} />
        </div>
      </div>
    ),
  }));

  return (
    <Section>
      <Eyebrow>{valuesIntro.eyebrow}</Eyebrow>
      <h2 className="mb-7">{valuesIntro.title}</h2>
      <Tabs items={items} label="Company values" />
    </Section>
  );
}