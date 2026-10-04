import Icon, { type IconName } from "@/components/ui/Icon";

type Props = {
  label: string;
  size: string; // contoh: "1600 × 900 px"
  ratio?: string; // contoh: "16/9", "4/5"
  icon?: IconName;
  tone?: "light" | "dark";
  tile?: boolean;
  className?: string;
};

export default function Placeholder({
  label,
  size,
  ratio = "16/9",
  icon = "image",
  tone = "light",
  tile = false,
  className = "",
}: Props) {
  const dark = tone === "dark";
  const stripe = dark ? "rgba(255,255,255,0.05)" : "rgba(13,43,31,0.04)";

  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      style={{
        aspectRatio: tile ? "4/3" : ratio,
        backgroundImage: `repeating-linear-gradient(135deg, ${stripe} 0 12px, transparent 12px 24px)`,
      }}
      className={`relative flex min-h-[180px] w-full flex-col gap-1 rounded-[14px] border-[1.5px] border-dashed border-gold p-[18px] ${
        tile
          ? "items-start justify-end text-left"
          : "items-center justify-center text-center"
      } ${dark ? "bg-white/5 text-white/80" : "bg-alt text-body"} ${className}`}
    >
      <Icon
        name={icon}
        className={
          tile
            ? "absolute right-4 top-4 text-2xl text-gold"
            : "mb-1.5 text-[30px] text-gold"
        }
      />
      <b
        className={`max-w-[34ch] ${tile ? "text-base" : "text-sm"} ${
          dark ? "text-white" : "text-forest"
        }`}
      >
        {label}
      </b>
      <span
        className={`text-[12.5px] ${dark ? "text-white/65" : "text-muted"}`}
      >
        {size}
      </span>
    </div>
  );
}