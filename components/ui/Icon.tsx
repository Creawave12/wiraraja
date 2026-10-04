const paths = {
  factory: "M3 21h18M5 21V10l5 3v-3l5 3V4h4v17",
  solar:
    "M4 14h16l-2 6H6zM12 3v3M5 6l2 2M19 6l-2 2M8 14l1 6M16 14l-1 6",
  bolt: "M13 2 4 14h7l-1 8 9-12h-7z",
  drop: "M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z",
  wifi:
    "M2 9a15 15 0 0 1 20 0M5 13a10 10 0 0 1 14 0M9 17a4 4 0 0 1 6 0M12 20v.01",
  fire:
    "M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-9z",
  road: "M8 3 4 21M16 3l4 18M12 4v3M12 11v3M12 18v3",
  pin:
    "M12 21s-6-6-6-11a6 6 0 0 1 12 0c0 5-6 11-6 11zM12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
  phone:
    "M6 4h4l2 5-2.5 1.5a11 11 0 0 0 4.5 4.5L15.5 12l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 4 6a2 2 0 0 1 2-2z",
  mail:
    "M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM3 7l9 6 9-6",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",
  users:
    "M9 4.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6M17 6.5a2.5 2.5 0 1 1 0 5M17 14c2.5 0 4.5 1.8 4.5 4.5",
  chart: "M5 20v-8M12 20V5M19 20V9",
  ship: "M3 17l2 4h14l2-4zM6 17V9h12v8M12 5v4",
  plane:
    "M21 15l-8-4V5a1 1 0 0 0-2 0v6l-8 4v2l8-2v4l-2 1.5V22l3-1 3 1v-1.5L13 19v-4l8 2z",
  anchor:
    "M12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM12 8v13M5 13a7 7 0 0 0 14 0M8 12H5M16 12h3",
  bag: "M6 8h12l1 12H5zM9 8a3 3 0 0 1 6 0",
  building:
    "M4 21V5h10v16M14 10h6v11M8 9h2M8 13h2M8 17h2M17 14v.01M17 18v.01",
  leaf: "M5 19c0-8 5-13 14-14 0 9-5 14-14 14zM5 19l7-7",
  cycle: "M4 12a8 8 0 0 1 14-5M20 12a8 8 0 0 1-14 5M18 3v4h-4M6 21v-4h4",
  bed:
    "M3 19V6M3 14h18v5M21 14v-3a3 3 0 0 0-3-3h-7v6M7 11.5a1.5 1.5 0 1 0 0-.01",
  play: "M8 5v14l11-7z",
  image: "M4 5h16v14H4zM4 16l5-5 4 4 3-3 4 4M9 9.5v.01",
  scales:
    "M12 4v16M7 20h10M5 8h14M5 8l-2.5 6a3 3 0 0 0 5 0zM19 8l-2.5 6a3 3 0 0 0 5 0z",
  seal:
    "M12 3l2.4 1.7 3-.1.9 2.9 2.4 1.8-.9 2.8.9 2.8-2.4 1.8-.9 2.9-3-.1L12 21l-2.4-1.7-3 .1-.9-2.9-2.4-1.8.9-2.8-.9-2.8 2.4-1.8.9-2.9 3 .1zM9 12l2 2 4-4",
  bulb:
    "M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z",
  chat: "M4 5h16v11H9l-5 4z",
  heart:
    "M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z",
  percent:
    "M5 19L19 5M7.5 8.5a1.5 1.5 0 1 0 0-.01M16.5 17.5a1.5 1.5 0 1 0 0-.01",
  doc: "M7 3h7l4 4v14H7zM14 3v4h4M10 14l2 2 3-4",
  passport: "M6 3h12v18H6zM12 8.5a3 3 0 1 0 0 .01M9 17h6",
  globe:
    "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z",
  cap: "M2 9l10-5 10 5-10 5zM6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5",
  coins:
    "M12 3c-4 0-7 1.3-7 3s3 3 7 3 7-1.3 7-3-3-3-7-3zM5 6v6c0 1.7 3 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3 3 7 3s7-1.3 7-3v-6",
  box: "M3 8l9-5 9 5v12H3zM3 8l9 5 9-5M12 13v8",
  data:
    "M4 6a8 3 0 1 0 16 0 8 3 0 1 0-16 0M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6",
  bridge: "M2 17h20M4 17V8M20 17V8M4 9c5 0 3 5 8 5s3-5 8-5",
  link:
    "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
  cog:
    "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2",
  target:
    "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
  arrow: "M5 12h14M13 6l6 6-6 6",
  check: "M5 12l5 5 9-10",
  download: "M12 4v11M7 11l5 5 5-5M5 20h14",
  insta:
    "M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM17 7v.01",
  linkedin: "M7 10v7M7 7v.01M11 17v-7M11 13a3 3 0 0 1 6 0v4",
  youtube:
    "M6 6h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3zM10 9.5v5l4-2.5z",
} as const;

export type IconName = keyof typeof paths;

type Props = {
  name: IconName;
  className?: string; // ukuran lewat text-*, warna lewat text-*
};

export default function Icon({ name, className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`inline-block h-[1em] w-[1em] flex-none align-[-0.125em] ${className}`}
    >
      <path d={paths[name]} />
    </svg>
  );
}