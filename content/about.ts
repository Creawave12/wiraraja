import type { IconName } from "@/components/ui/Icon";

export const aboutHeader = {
  eyebrow: "About Us",
  title: "One-stop Solution for Your Investment",
  description:
    "Our company aims to provide you bright solutions to move your business forward. Create impact together, reach new heights together.",
  // Isi dengan link YouTube/MP4 dari client. Kosong = tombol tidak tampil.
  videoUrl: "",
};

export const intro = {
  eyebrow: "About Wiraraja Indonesia",
  title: "Building a Golden Indonesia, Together",
  photo: {
    label: "Photo or render: head office building",
    size: "1920 × 800 px, wide",
  },
  paragraphs: [
    "Wiraraja Indonesia was established in 1998 in Batam, Riau Islands, Indonesia, and engages in Industrial Park and Renewable Energy.",
    "Wiraraja Indonesia continues to grow and add value by executing in alignment with its vision, mission and core values, creating value for all stakeholders in its mission to empower Indonesia.",
    "Empowering Indonesia, building up the nation through integrated products, services, and solutions with quality and long-term value creation to our stakeholders worldwide: Wiraraja Indonesia aims to continuously innovate towards a “Golden Indonesia”.",
  ],
};

export const president = {
  eyebrow: "Leadership Message",
  title: "A Message from Our President Director",
  paragraphs: [
    "In Wiraraja Indonesia, we are committed to driving positive change and growth by delivering integrated business solutions through our business pillars. We aim to generate a sustainable future for our stakeholders, while improving the lives of many.",
    "We always on the lookout for creating milestones and path for partnerships with notable partners and clients across the globe. In the future, we envision our organization as a valuable partner who provide the best solutions to our stakeholders in the ever-changing needs.",
    "We are thankful for your support and look forward to crafting a better future together.",
  ],
  hashtag: "#UntukmuIndonesiaku",
  closing: "Best Regards,",
  name: "Akhmad Ma’ruf",
  role: "President Director",
  photo: {
    label: "Portrait: Akhmad Ma’ruf, President Director",
    size: "900 × 1125 px, portrait, plain background",
  },
};

export const direction = {
  eyebrow: "Direction",
  title: "Vision and mission",
  lead: "Discover how our vision and mission help shape our company’s core values which serves as a roadmap of our shared goals.",
  vision:
    "To be the leading Company in Asia that provides integrated products, services, and solutions with quality and long-term value creation to our stakeholders worldwide.",
  mission: [
    "To collaborate with strategic partners to provide a better life for the community as well as bring welfare and prosperity to the stakeholders",
    "To continuously innovate towards a golden Indonesia",
  ],
};

type CompanyValue = {
  id: string;
  icon: IconName;
  name: string;
  description: string;
};

export const valuesIntro = {
  eyebrow: "What We Stand For",
  title: "Company values",
};

export const values: CompanyValue[] = [
  { id: "integrity", icon: "scales", name: "Integrity", description: "Ethical standards in every practice" },
  { id: "quality", icon: "seal", name: "Quality", description: "Excellence in every deliverable" },
  { id: "innovative", icon: "bulb", name: "Innovative", description: "Continuously solving new challenges" },
  { id: "collaborative", icon: "chat", name: "Collaborative", description: "Growing together with partners" },
  { id: "customer-delight", icon: "heart", name: "Customer Delight", description: "Exceeding expectations always" },
];

type Milestone = {
  year: string;
  tbd?: boolean;
  tag: string;
  title: string;
  text: string;
  photo: { label: string; size: string };
};

export const milestonesIntro = {
  eyebrow: "Our Journey",
  title: "Milestone",
  lead: "Growth, impact, and continuous innovation, one step at a time.",
};

export const milestones: Milestone[] = [
  {
    year: "1998",
    tag: "Founded",
    title: "Manufacturing: Blown-Film Line",
    text: "Wiraraja Indonesia was established in 1998 in Batam, Riau Islands, Indonesia. Our blown-film line focused on producing PE bags, PP bags, electronics covers, furniture covers, biodegradable plastics, agricultural films, recycling plastics, and recycled pellets.",
    photo: { label: "Photo: 1998 blown-film line", size: "1200 × 900 px" },
  },
  {
    year: "20XX",
    tbd: true,
    tag: "Growth phase",
    title: "Industrial Park Development",
    text: "Launch of Wiraraja Industrial Park I, a full-scale industrial estate offering factory buildings, warehouses, and distribution centers for manufacturing companies.",
    photo: { label: "Photo: Industrial Park I", size: "1200 × 900 px" },
  },
  {
    year: "2023",
    tag: "Expansion",
    title: "Green Renewable Energy and Smart-Eco Industrial Park II",
    text: "Established in 2023 at Galang Island, Riau Islands, Indonesia, with a total area of 851 ha, reinforcing Wiraraja’s role in supporting Indonesia’s national development.",
    photo: { label: "Photo: Galang Island park", size: "1200 × 900 px" },
  },
  {
    year: "2026",
    tag: "Present",
    title: "Three estates, one Golden Indonesia",
    text: "Today Wiraraja runs Industrial Park I in Batam, the Green Renewable Energy and Smart-Eco Industrial Park II on Galang Island, and Madura Industrial Estate III in a Special Economic Zone, and keeps building toward a Golden Indonesia.",
    photo: { label: "Photo: Madura Industrial Estate III", size: "1200 × 900 px" },
  },
];