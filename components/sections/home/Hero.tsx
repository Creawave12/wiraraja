import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import GlowSurface from "@/components/ui/GlowSurface";
import Placeholder from "@/components/ui/Placeholder";
import Rule from "@/components/ui/Rule";
import { hero } from "@/content/home";

export default function Hero() {
  return (
    <GlowSurface>
      <Container className="grid items-center gap-9 pb-12 pt-14 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:pb-[72px] md:pt-[88px]">
        <div className="rise">
          <Eyebrow onDark>{hero.eyebrow}</Eyebrow>
          <h1>{hero.title}</h1>
          <Rule />
          <p className="mb-8 max-w-[52ch] text-base text-white/80">
            {hero.sub}
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="outline">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <Placeholder
          label={hero.photo.label}
          size={hero.photo.size}
          ratio="5/4"
          tone="dark"
        />
      </Container>
    </GlowSurface>
  );
}