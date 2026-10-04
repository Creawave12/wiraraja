"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import Icon from "@/components/ui/Icon";
import { estates } from "@/content/pillars";

export default function EstateSelector() {
  const current = useSelectedLayoutSegment();

  return (
    <nav aria-label="Choose an estate" className="grid gap-3">
      {estates.map((estate) => {
        const selected = estate.slug === current;
        return (
          <Link
            key={estate.slug}
            href={`/pillars/${estate.slug}`}
            aria-current={selected ? "page" : undefined}
            className={`group grid grid-cols-[46px_1fr_22px] items-center gap-4 rounded-xl border px-5 py-4 transition duration-[250ms] ${
              selected
                ? "border-tile bg-tile text-forest shadow-[inset_5px_0_0_#1a5c3a]"
                : "border-white/25 bg-white/[0.06] text-white hover:-translate-x-1 hover:border-white/50 hover:bg-white/[0.14]"
            }`}
          >
            <span
              className={`grid h-[46px] w-[46px] place-items-center rounded-[10px] text-[22px] transition duration-[250ms] ${
                selected
                  ? "bg-brand text-white"
                  : "bg-white/[0.14] text-gold-light group-hover:bg-white group-hover:text-brand"
              }`}
            >
              <Icon name={estate.icon} />
            </span>
            <span>
              <small
                className={`block text-[13px] font-medium ${
                  selected ? "text-brand-mid" : "text-gold-light"
                }`}
              >
                {estate.category}
              </small>
              <b className="block text-base font-semibold leading-[1.35]">
                {estate.name}
              </b>
              <em className="block text-[13px] not-italic opacity-75">
                {estate.location}
              </em>
            </span>
            <Icon
              name="check"
              className={`text-xl transition duration-[250ms] ${
                selected
                  ? "text-forest opacity-100"
                  : "text-white opacity-0 group-hover:translate-x-[3px] group-hover:opacity-90"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}