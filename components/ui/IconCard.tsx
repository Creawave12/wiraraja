import type { IconName } from "@/components/ui/Icon";
import IconTile from "@/components/ui/IconTile";

type Props = {
  icon: IconName;
  title: string;
  children: React.ReactNode;
};

export default function IconCard({ icon, title, children }: Props) {
  return (
    <div className="rounded-[14px] border border-line bg-white p-[26px] transition duration-300 hover:-translate-y-1 hover:border-brand-mid/40 hover:shadow-[0_14px_30px_rgba(13,43,31,0.1)]">
      <IconTile name={icon} />
      <h3 className="mb-2 text-lg">{title}</h3>
      <p className="text-sm">{children}</p>
    </div>
  );
}