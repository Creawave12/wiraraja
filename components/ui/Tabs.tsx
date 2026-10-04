"use client";

import { useId, useRef, useState } from "react";
import Icon, { type IconName } from "@/components/ui/Icon";

type TabItem = {
  id: string;
  label: string;
  icon?: IconName;
  content: React.ReactNode;
};

type Props = {
  items: TabItem[];
  label: string; // nama grup tab untuk screen reader
  orientation?: "horizontal" | "vertical";
  className?: string;
};

export default function Tabs({
  items,
  label,
  orientation = "horizontal",
  className = "",
}: Props) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const vertical = orientation === "vertical";

  function handleKeyDown(e: React.KeyboardEvent, index: number) {
    const prevKey = vertical ? "ArrowUp" : "ArrowLeft";
    const nextKey = vertical ? "ArrowDown" : "ArrowRight";
    let next = index;

    if (e.key === nextKey) next = (index + 1) % items.length;
    else if (e.key === prevKey) next = (index - 1 + items.length) % items.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = items.length - 1;
    else return;

    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  const tabList = (
    <div
      role="tablist"
      aria-label={label}
      aria-orientation={orientation}
      className={
        vertical ? "grid content-start gap-2.5" : "mb-[26px] flex flex-wrap gap-2.5"
      }
    >
      {items.map((item, i) => {
        const selected = i === active;
        return (
          <button
            key={item.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${baseId}-tab-${item.id}`}
            aria-selected={selected}
            aria-controls={`${baseId}-panel-${item.id}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className={`inline-flex items-center gap-2 border-[1.5px] text-[15px] font-medium transition duration-200 ${
              vertical
                ? "w-full justify-start rounded-[10px] px-[18px] py-3.5 text-left"
                : "rounded-full px-5 py-[9px]"
            } ${
              selected
                ? "border-brand bg-brand text-white"
                : "border-line bg-white text-forest hover:border-forest"
            }`}
          >
            {item.icon && <Icon name={item.icon} />}
            {item.label}
          </button>
        );
      })}
    </div>
  );

  const panels = items.map((item, i) => (
    <div
      key={item.id}
      role="tabpanel"
      id={`${baseId}-panel-${item.id}`}
      aria-labelledby={`${baseId}-tab-${item.id}`}
      hidden={i !== active}
      tabIndex={0}
      className="panel-in"
    >
      {item.content}
    </div>
  ));

  if (vertical) {
    return (
      <div className={`grid gap-9 md:grid-cols-[0.7fr_1.3fr] md:gap-14 ${className}`}>
        {tabList}
        <div>{panels}</div>
      </div>
    );
  }

  return (
    <div className={className}>
      {tabList}
      {panels}
    </div>
  );
}