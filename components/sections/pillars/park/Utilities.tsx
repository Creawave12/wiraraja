import Placeholder from "@/components/ui/Placeholder";
import Tabs from "@/components/ui/Tabs";
import Tbd from "@/components/ui/Tbd";
import { park } from "@/content/pillars";

export default function Utilities() {
  const items = park.utilities.map((u) => ({
    id: u.id,
    label: u.name,
    icon: u.icon,
    content: (
      <div className="grid items-start gap-8 md:grid-cols-[0.7fr_1.3fr]">
        <Placeholder
          label={`Photo: ${u.name.toLowerCase()}`}
          size="1200 × 900 px"
          ratio="4/3"
          icon={u.icon}
        />
        <div>
          <h3 className="mb-2">{u.name}</h3>
          <p className="mb-2.5">Available at Wiraraja Industrial Park I.</p>
          <dl>
            {park.utilitySpecs.map((spec) => (
              <div
                key={spec.term}
                className="grid items-baseline gap-x-[18px] gap-y-1.5 border-b border-line py-3.5 last:border-b-0 md:grid-cols-[150px_1fr]"
              >
                <dt className="text-sm text-muted">{spec.term}</dt>
                <dd className="font-medium text-forest">
                  <Tbd>{spec.todo}</Tbd>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    ),
  }));

  return <Tabs items={items} label="Infrastructure and facilities" />;
}