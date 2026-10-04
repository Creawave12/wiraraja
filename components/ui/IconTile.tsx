import Icon, { type IconName } from "@/components/ui/Icon";

const tones = {
  default: "bg-tile text-brand",
  outline: "border border-gold/60 bg-white text-gold",
  dark: "bg-white/[0.14] text-gold-light",
};

type Props = {
  name: IconName;
  tone?: keyof typeof tones;
  className?: string;
};

export default function IconTile({
  name,
  tone = "default",
  className = "",
}: Props) {
  return (
    <div
      className={`mb-4 grid h-[46px] w-[46px] place-items-center rounded-[10px] text-[22px] ${tones[tone]} ${className}`}
    >
      <Icon name={name} />
    </div>
  );
}