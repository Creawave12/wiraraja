import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ParkView from "@/components/sections/pillars/park/ParkView";
import { estates } from "@/content/pillars";
import EnergyView from "@/components/sections/pillars/energy/EnergyView";
import MaduraView from "@/components/sections/pillars/madura/MaduraView";

const views: Record<string, React.ComponentType> = {
    park: ParkView,
    energy: EnergyView,
    madura: MaduraView,
};

type Props = {
  params: Promise<{ estate: string }>;
};

// Daftar halaman yang dibuat saat build (static generation)
export function generateStaticParams() {
  return Object.keys(views).map((estate) => ({ estate }));
}

// Slug di luar daftar di atas langsung 404, tidak dicoba dirender
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { estate } = await params;
  const data = estates.find((e) => e.slug === estate);
  if (!data) return {};
  return { title: data.name, description: data.metaDescription };
}

export default async function EstatePage({ params }: Props) {
  const { estate } = await params;
  const View = views[estate];
  if (!View) notFound();
  return <View />;
}