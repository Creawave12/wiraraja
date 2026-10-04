"use client";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function GlowSurface({ className = "", children }: Props) {
  function handleMove(e: React.MouseEvent<HTMLElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <header
      className={`hero-surface ${className}`}
      onMouseMove={handleMove}
    >
      {children}
    </header>
  );
}