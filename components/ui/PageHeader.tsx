import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import GlowSurface from "@/components/ui/GlowSurface";
import Rule from "@/components/ui/Rule";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  titleClassName?: string;
  actions?: React.ReactNode; // tombol di bawah deskripsi
  aside?: React.ReactNode; // kolom kanan (dipakai selector estate)
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  titleClassName = "",
  actions,
  aside,
}: Props) {
  return (
    <GlowSurface className="pb-[68px] pt-[84px]">
      <Container
        className={
          aside
            ? "grid items-center gap-[52px] md:grid-cols-[0.9fr_1.1fr]"
            : ""
        }
      >
        <div className="rise">
          <Eyebrow onDark>{eyebrow}</Eyebrow>
          <h1
            className={`text-[clamp(32px,4.2vw,44px)] ${titleClassName}`}
          >
            {title}
          </h1>
          <Rule />
          {description && (
            <p className="max-w-[56ch] text-base text-white/80">
              {description}
            </p>
          )}
          {actions && <div className="mt-7">{actions}</div>}
        </div>
        {aside}
      </Container>
    </GlowSurface>
  );
}