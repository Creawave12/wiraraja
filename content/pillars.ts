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

/* Galang (energy) */
type Facility = { name: string; icon: IconName };
type DistanceRow = { icon: IconName; label: string; value: string };

export const energy = {
  title: "Wiraraja Green Renewable Energy and Smart-Eco Industrial Park II",
  gateway: { label: "Render: park gateway", size: "1600 × 1000 px" },
  intro:
    "Wiraraja Green Renewable Energy and Smart-Eco Industrial Park II was established in 2023 at Galang Island, Riau Islands, Indonesia. Our Industrial Park aims to provide conducive environment with Smart-Eco Thematic Industrial Park Concept with total area of 851 ha.",
  stats: [
    { value: "851", unit: "ha", label: "total area" },
    { value: "2023", label: "established" },
  ],
  facilityGroups: [
    {
      title: "Power and utilities",
      items: [
        { name: "Solar farm powerplant", icon: "solar" },
        { name: "Gas powerplant", icon: "fire" },
        { name: "Waste management and energy", icon: "cycle" },
        { name: "Water and waste water treatment plant", icon: "drop" },
      ] satisfies Facility[],
    },
    {
      title: "Living and logistics",
      items: [
        { name: "Dormitories and commercial area", icon: "bed" },
        { name: "Domestic ports", icon: "ship" },
      ] satisfies Facility[],
    },
  ],
  location: {
    photo: {
      label: "Map: Galang Island, Barelang Bridge and Batam",
      size: "1200 × 1200 px, square",
    },
    address:
      "Located in Galang Island, approximately 43 km, connected by Barelang (Batam-Rempang-Galang) Bridge which provides easy access road.",
    distances: [
      { icon: "factory", label: "to Wiraraja Industrial Park I", value: "1 hr 24 min" },
      { icon: "plane", label: "to Hang Nadim Airport", value: "1 hr 25 min" },
      { icon: "ship", label: "to Batam Centre Ferry Terminal", value: "1 hr 21 min" },
      { icon: "anchor", label: "to Batu Ampar Seaport", value: "1 hr 23 min" },
    ] satisfies DistanceRow[],
  },
};

/* Madura */
export type ZoneId =
  | "logistics"
  | "processing"
  | "halal"
  | "digital"
  | "reservoir"
  | "shipbuilding";

type Zone = {
  id: ZoneId;
  name: string;
  ha: number;
  icon: IconName;
  uses: string[];
  card: boolean;
};

export const maduraZones: Zone[] = [
  {
    id: "logistics",
    name: "Logistics and Warehousing Zone",
    ha: 189,
    icon: "box",
    card: true,
    uses: [
      "Container yard and freight forwarding",
      "Distribution center",
      "Cold storage",
      "Stockpile and bulk material handling",
      "Shipyard industry",
    ],
  },
  {
    id: "processing",
    name: "Processing Industrial Zone",
    ha: 819,
    icon: "factory",
    card: true,
    uses: [
      "Food and seafood processing",
      "Silica and glass industry",
      "Petrochemical industry",
      "Light to medium manufacturing",
    ],
  },
  {
    id: "halal",
    name: "Halal Industrial Zone",
    ha: 324,
    icon: "seal",
    card: true,
    uses: [
      "Halal food industry",
      "Halal cosmetics",
      "Pharmaceutical and herbal products",
      "Halal packaging",
    ],
  },
  {
    id: "digital",
    name: "Digital Industrial Zone",
    ha: 420,
    icon: "data",
    card: true,
    uses: [
      "Data center",
      "Smart manufacturing and IoT",
      "IT and digital services",
      "Research and development center",
    ],
  },
  { id: "reservoir", name: "Reservoir", ha: 214, icon: "drop", card: false, uses: [] },
  {
    id: "shipbuilding",
    name: "Shipbuilding and Port Zone",
    ha: 34,
    icon: "anchor",
    card: true,
    uses: [],
  },
];

export const madura = {
  title: "Wiraraja Madura Industrial Estate III",
  category: "Special Economic Zone (SEZ)",
  gateway: { label: "Render: Madura estate gateway", size: "1600 × 1000 px" },
  intro:
    "The first integrated industrial, logistics, energy, and downstream-processing platform in Madura Island (Bangkalan).",
  benefits: {
    title: "Benefits of Special Economic Zone",
    lead: "Driving sustainable national economic growth and strengthening Indonesia’s global competitiveness.",
    items: [
      { icon: "coins", label: "Tax holiday and tax allowance" },
      { icon: "doc", label: "Ease of customs" },
      { icon: "doc", label: "Easy, fast and integrated licensing" },
      { icon: "building", label: "World-class infrastructure" },
      { icon: "passport", label: "Ease of visa and labor mobility" },
      { icon: "globe", label: "Integration to global supply chain" },
    ] satisfies { icon: IconName; label: string }[],
  },
  zoneMap: {
    label: "Photo or map: estate zone map",
    size: "1920 × 1000 px",
  },
  builtForBusiness: [
    { icon: "road", title: "Accessibility", text: "Toll road and arterial connection" },
    { icon: "bolt", title: "Reliable energy", text: "Power plant and clean energy" },
    { icon: "drop", title: "Water supply", text: "Integrated water management" },
    { icon: "wifi", title: "Digital infrastructure", text: "High-speed internet and smart system" },
    { icon: "shield", title: "Security", text: "Integrated security system" },
    { icon: "leaf", title: "Green and sustainable", text: "Eco-industrial park concept" },
  ] satisfies { icon: IconName; title: string; text: string }[],
  location: {
    lead: "Wiraraja Madura Industrial Estate III in relation to existing facilities and infrastructure. Strategic access. Strong connectivity. Limitless potential.",
    photo: {
      label: "Map: Java–Madura with distance rings",
      size: "1200 × 1200 px, square",
    },
    // km disimpan sebagai angka: dipakai untuk teks "3 km" DAN panjang bar
    distances: [
      { icon: "cap", label: "Trunojoyo University", km: 3 },
      { icon: "anchor", label: "Kamal Seaport", km: 8.2 },
      { icon: "building", label: "Bangkalan City", km: 10.2 },
      { icon: "bridge", label: "Suramadu Bridge", km: 13 },
      { icon: "building", label: "Surabaya City, capital of East Java Province", km: 26.4 },
      { icon: "anchor", label: "Tanjung Perak Seaport", km: 30 },
      { icon: "road", label: "Dupak Toll Gate", km: 30.3 },
      { icon: "road", label: "Waru Toll Gate", km: 37.6 },
      { icon: "road", label: "Romokalisari Toll Gate", km: 40.3 },
      { icon: "plane", label: "Juanda International Airport", km: 46 },
      { icon: "anchor", label: "JIPE Seaport", km: 63 },
    ] satisfies { icon: IconName; label: string; km: number }[],
  },
};