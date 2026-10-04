import Container from "@/components/ui/Container";

const tones = {
  white: "",
  alt: "bg-alt",
  dark: "bg-forest text-white/[0.82] [&_h2]:text-white [&_h3]:text-white",
};

type Props = {
  tone?: keyof typeof tones;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
};

export default function Section({
  tone = "white",
  className = "",
  containerClassName = "",
  children,
}: Props) {
  return (
    <section className={`py-[60px] md:py-[72px] ${tones[tone]} ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}