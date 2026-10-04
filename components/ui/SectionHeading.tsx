import Eyebrow from "@/components/ui/Eyebrow";

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  onDark?: boolean;
  size?: "md" | "lg";
};

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  onDark = false,
  size = "md",
}: Props) {
  return (
    <div>
      {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
      <h2
        className={`mb-3.5 ${
          size === "lg" ? "text-[clamp(28px,3.3vw,40px)]" : ""
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mb-9 max-w-[62ch] text-[17px] ${
            onDark ? "text-white/75" : "text-body"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}