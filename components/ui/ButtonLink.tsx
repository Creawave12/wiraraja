import Link from "next/link";
import Icon, { type IconName } from "@/components/ui/Icon";

const base =
  "inline-flex items-center gap-2 rounded-md border px-[26px] py-[13px] text-sm font-semibold transition duration-200";

const variants = {
  gold: "border-transparent bg-gold text-forest hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(200,168,75,0.35)]",
  outline: "border-white/45 text-white hover:bg-white/10",
  solid: "border-transparent bg-brand text-white hover:bg-brand-mid",
  ghost: "border-forest text-forest hover:bg-tile",
};

type Props = {
  href: string;
  variant?: keyof typeof variants;
  icon?: IconName;
  children: React.ReactNode;
};

export default function ButtonLink({
  href,
  variant = "gold",
  icon,
  children,
}: Props) {
  const external = /^https?:\/\//.test(href);

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {icon && <Icon name={icon} />}
      {children}
    </Link>
  );
}