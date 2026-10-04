"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import LogoMark from "@/components/ui/LogoMark";
import { navLinks, siteConfig } from "@/content/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 bg-forest transition-shadow duration-300 ${
        scrolled
          ? "shadow-[0_8px_26px_rgba(0,0,0,0.28)]"
          : "shadow-[0_1px_0_rgba(255,255,255,0.1)]"
      }`}
    >
      <Container>
        <nav
          aria-label="Main"
          className="flex flex-wrap items-center justify-between gap-x-5 gap-y-1.5 pb-1 pt-2.5 md:h-16 md:flex-nowrap md:py-0"
        >
          <Link
            href="/"
            aria-label="Wiraraja Indonesia, home"
            className="flex items-center gap-[11px]"
          >
            <LogoMark />
            <span>
              <b className="block font-serif text-sm font-bold leading-[1.2] tracking-[1px] text-white">
                WIRARAJA INDONESIA
              </b>
              <small className="block text-[9px] uppercase leading-[1.3] tracking-[2px] text-gold">
                {siteConfig.tagline}
              </small>
            </span>
          </Link>

          <ul className="flex w-full gap-[22px] overflow-x-auto pb-3 pt-1.5 md:w-auto md:gap-[30px] md:overflow-visible md:p-0">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative block whitespace-nowrap py-1.5 text-[13px] tracking-[0.5px] transition-colors hover:text-white ${
                      isActive
                        ? "text-white after:absolute after:inset-x-0 after:-bottom-[3px] after:h-0.5 after:bg-gold"
                        : "text-white/75"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
}