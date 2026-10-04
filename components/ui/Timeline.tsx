"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

export default function Timeline({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 1. Garis emas memanjang mengikuti scroll
    const updateLine = () => {
      const rect = el.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, (window.innerHeight * 0.65 - rect.top) / rect.height),
      );
      el.style.setProperty("--p", `${progress * 100}%`);
    };
    updateLine();
    window.addEventListener("scroll", updateLine, { passive: true });
    window.addEventListener("resize", updateLine);

    // 2. Titik menyala saat item masuk layar
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.seen = "true";
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.25 },
    );
    el.querySelectorAll("[data-tl-item]").forEach((item) =>
      observer.observe(item),
    );

    return () => {
      window.removeEventListener("scroll", updateLine);
      window.removeEventListener("resize", updateLine);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="relative grid gap-12 pl-11">
      {/* Rel abu-abu */}
      <div
        aria-hidden="true"
        className="absolute bottom-2 left-[11px] top-2 w-0.5 bg-white/20"
      />
      {/* Rel emas: tingginya dikendalikan variabel --p */}
      <div
        aria-hidden="true"
        style={{ height: "var(--p, 0%)" }}
        className="absolute left-[11px] top-2 max-h-[calc(100%-16px)] w-0.5 bg-gold transition-[height] duration-150 ease-linear"
      />
      {children}
    </div>
  );
}