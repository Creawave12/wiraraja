import type { IconName } from "@/components/ui/Icon";

export type EstateSlug = "park" | "energy" | "madura";

export const pillarsHeader = {
  eyebrow: "What We Do",
  title: "Two Pillars, One Vision",
  description:
    "Industrial parks and renewable energy, two pillars behind one vision. Choose an estate to see what it offers, how it is built and where it sits.",
};

export const estates: {
  slug: EstateSlug;
  icon: IconName;
  category: string;
  name: string;
  location: string;
  metaDescription: string;
}[] = [
  {
    slug: "park",
    icon: "factory",
    category: "Industrial Park",
    name: "Wiraraja Industrial Park I",
    location: "Kabil, Nongsa, Batam",
    metaDescription:
      "Wiraraja Industrial Park I in Kabil, Nongsa, Batam: ready-built factories, industrial land lots and professional estate management in a Free Trade Zone.",
  },
  {
    slug: "energy",
    icon: "solar",
    category: "Renewable Energy",
    name: "Green Renewable Energy and Smart-Eco Industrial Park II",
    location: "Galang Island, Riau Islands",
    metaDescription:
      "Wiraraja Green Renewable Energy and Smart-Eco Industrial Park II on Galang Island, a Smart-Eco Thematic Industrial Park of 851 ha.",
  },
  {
    slug: "madura",
    icon: "building",
    category: "Industrial Park (SEZ)",
    name: "Wiraraja Madura Industrial Estate III",
    location: "Madura Island, Bangkalan",
    metaDescription:
      "Wiraraja Madura Industrial Estate III, a Special Economic Zone and the first integrated industrial, logistics, energy and downstream-processing platform on Madura Island.",
  },
];

export const ftzNote = [
  "Our Industrial Park is strategically located in a Free Trade Zone (FTZ) providing us competitive advantages in export-oriented business whether in manufacturing, operations, and trade activities.",
];
export const teamNote =
  "Our team is always available for you to provide solutions to your needs. Do not hesitate to contact us in order to assist you finding the right investment solutions for your business.";

/* Industrial Park I */
export const park = {
  title: "Wiraraja Industrial Park I",
  video: {
    label: "Video: aerial flythrough of Industrial Park I",
    size: "Video link plus 1600 × 900 px poster",
  },
  headline: "A one-stop solution for your investment",
  intro:
    "Wiraraja Industrial Park I provides a one-stop solution for companies seeking to invest in manufacturing operations. Wiraraja Industrial Park aims to meet the diverse needs of businesses and support their growth in a conducive industrial environment with a total area of 20 ha for Wiraraja Industrial Park I Phase 1. To cater to a variety of manufacturing activities, Wiraraja Industrial Park offers:",
  features: [
    "Selection of ready-built factories for companies to choose from",
    "Industrial land lots for companies with specific requirements",
    "Professional industrial estate management",
    "Integrated infrastructure and facilities",
    "Strategic location access to ports",
  ],
  stats: [
    { value: "20", unit: "ha", label: "total area, Phase 1" },
    { value: "48", label: "industrial buildings across Blocks A, B and C" },
    { value: "3", label: "factory types, ±5,000 to ±20,000 m²" },
    { value: "FTZ", label: "Free Trade Zone location" },
  ],
  layout: {
    photo: {
      label: "Master plan render: Blocks A, B and C",
      size: "1920 × 900 px, aerial with block overlay",
    },
    blocks: [
      { name: "Block A", count: "26", label: "industrial buildings" },
      { name: "Block B", count: "15", label: "industrial buildings" },
      { name: "Block C", count: "7", label: "industrial buildings" },
    ],
  },
  factoryTypes: [
    { id: "a", name: "A", area: "5,000", pct: 25 },
    { id: "b", name: "B", area: "10,000", pct: 50 },
    { id: "c", name: "C", area: "20,000", pct: 100 },
  ],
  utilities: [
    { id: "electricity", icon: "bolt" as IconName, name: "Electricity" },
    { id: "water", icon: "drop" as IconName, name: "Clean water" },
    {
      id: "fiber",
      icon: "wifi" as IconName,
      name: "Fiber optic communication",
    },
  ],
  // Belum diterima dari client: tampil sebagai kotak "Tbd"
  utilitySpecs: [
    { term: "Provider or source", todo: "isi: penyedia / sumber" },
    { term: "Capacity", todo: "isi: kapasitas" },
    { term: "Notes", todo: "isi: catatan, mis. cadangan / redundansi" },
  ],
  services: {
    left: [
      "Professional industrial estate management",
      "Integrated infrastructure and facilities",
    ],
    right: [
      "Strategic location with access to ports",
      "Industrial support facilities: apartment, office tower, mosque and cafetaria",
    ],
  },
  location: {
    photo: {
      label: "Map: Batam, Singapore and Malaysia with park inset",
      size: "1200 × 1200 px, square",
    },
    address:
      "Located in Jalan Wiraraja Industrial Estate Blok A No. 3A & 5, Kabil, Nongsa, Batam City, Riau Islands, Indonesia 29467.",
    distances: [
      { icon: "plane" as IconName, label: "Hang Nadim Airport", value: "14 min" },
      {
        icon: "ship" as IconName,
        label: "Batam Centre, Nongsapura and Sekupang ferry terminals",
        value: "30 - 40 min",
      },
      { icon: "anchor" as IconName, label: "Batu Ampar Seaport", value: "33 min" },
      { icon: "bag" as IconName, label: "Nagoya Shopping Centre", value: "30 min" },
      { icon: "ship" as IconName, label: "Ferry crossing to Singapore", value: "40 min" },
      { icon: "globe" as IconName, label: "Johor Bahru, Malaysia", value: "2 hours" },
    ],
  },
};