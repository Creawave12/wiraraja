import type { IconName } from "@/components/ui/Icon";

export const hero = {
  eyebrow: "Est. 1998 · Batam, Riau Islands",
  title: "One Idea Changes The World",
  sub: "Empowering Indonesia, building up the nation through integrated products, services, and solutions with quality and long-term value creations to our stakeholders worldwide.",
  primaryCta: { label: "Explore business pillars", href: "/pillars" },
  secondaryCta: { label: "Learn more", href: "/about" },
  photo: {
    label: "Hero photo: warehouse or industrial park",
    size: "1600 × 1280 px, landscape",
  },
};

export const stats = [
  { value: "28+", label: "Years of Growth" },
  { value: "2", label: "Business Sectors" },
  { value: "FTZ", label: "Free Trade Zone" },
  { value: "40m", label: "From Singapore" },
];

export const pillarsIntro = {
  eyebrow: "What We Do",
  title: "Our business pillars",
  lead: "Wiraraja Indonesia engages in Industrial Park and Renewable Energy, two pillars working toward one vision: a Golden Indonesia.",
};

type PillarPanel = {
  icon: IconName;
  title: string;
  text: string;
  links: { label: string; note: string; href: string }[];
};

export const pillarPanels: PillarPanel[] = [
  {
    icon: "factory",
    title: "Industrial Park",
    text: "One-stop solutions for companies seeking to invest in manufacturing operations, from ready-built factories and industrial land lots to professional industrial estate management.",
    links: [
      {
        label: "Wiraraja Industrial Park I",
        note: "Kabil, Nongsa, Batam",
        href: "/pillars/park",
      },
      {
        label: "Wiraraja Madura Industrial Estate III",
        note: "Special Economic Zone, Madura Island",
        href: "/pillars/madura",
      },
    ],
  },
  {
    icon: "solar",
    title: "Renewable Energy",
    text: "Wiraraja Green Renewable Energy and Smart-Eco Industrial Park II on Galang Island, a Smart-Eco Thematic Industrial Park with a total area of 851 ha.",
    links: [
      {
        label: "Green Renewable Energy and Smart-Eco Industrial Park II",
        note: "Solar farm, gas powerplant, waste management and energy",
        href: "/pillars/energy",
      },
    ],
  },
];

export const why = {
  eyebrow: "Why Wiraraja",
  title: "One-stop solution for your investment",
  lead: "Our company aims to provide you bright solutions to move your business forward. Create impact together, reach new heights together.",
  points: [
    "Free Trade Zone (FTZ) benefits for export-oriented business",
    "16 minutes to Hang Nadim Airport and a 40-minute ferry crossing to Singapore",
    "Factory types A, B and C, with industrial land lots for specific requirements",
  ],
  cta: { label: "See investment insights", href: "/investment" },
  photo: {
    label: "Photo: Industrial Park I aerial view",
    size: "1600 × 900 px",
  },
};

export const statement = {
  quote:
    "“We are committed to driving positive change and growth by delivering integrated business solutions.”",
  text: "Wiraraja Indonesia was established in 1998 in Batam, Riau Islands. We engage in Industrial Park, Manufacturing, Mining, and Renewable Energy, continuously growing and creating value for all stakeholders in our mission to empower Indonesia.",
  cta: { label: "Read our story", href: "/about" },
};