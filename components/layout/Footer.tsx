import Link from "next/link";
import Container from "@/components/ui/Container";
import LogoMark from "@/components/ui/LogoMark";
import { siteConfig, footerInfoLinks } from "@/content/site";

function Column({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="mb-3.5 font-sans text-[11px] font-medium uppercase tracking-[2px] text-gold">
        {title}
      </h4>
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-abyss pb-6 pt-16 text-sm text-white/65">
      <Container>
        <div className="mb-[38px] grid gap-9 md:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-[11px]">
              <LogoMark />
              <span className="font-serif text-sm font-bold tracking-[1px] text-white">
                WIRARAJA INDONESIA
              </span>
            </Link>
            <p className="my-3.5 max-w-[30ch] text-xs text-white/40">
              {siteConfig.about}
            </p>
            {/* Ikon sosial media: menunggu link akun asli dari client */}
          </div>

          <Column title="Information">
            {/* Placeholder: halaman belum tentu ada */}
            {footerInfoLinks.map((item) => (
              <span key={item} className="mb-2 block text-[13px] text-white/50">
                {item}
              </span>
            ))}
          </Column>

          <Column title="Our Location">
            <p className="mb-1.5 text-[13px] font-semibold text-gold">
              Head Office
            </p>
            <address className="text-[13px] not-italic text-white/50">
              {siteConfig.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </Column>

          <Column title="Contact Us">
            <a
              href={`mailto:${siteConfig.email}`}
              className="mb-2 block text-[13px] text-white/50 hover:text-white"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.phoneHref}
              className="mb-2 block text-[13px] text-white/50 hover:text-white"
            >
              {siteConfig.phone}
            </a>
            <h4 className="mb-3.5 mt-[22px] font-sans text-[11px] font-medium uppercase tracking-[2px] text-gold">
              Operational Hour
            </h4>
            <div className="text-[13px] text-white/50">
              {siteConfig.hours.map((h) => (
                <span key={h} className="block">
                  {h}
                </span>
              ))}
            </div>
          </Column>
        </div>

        <div className="border-t border-white/10 pt-5 text-[13px]">
          Copyright © {new Date().getFullYear()} {siteConfig.name}
        </div>
      </Container>
    </footer>
  );
}