import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ParkView from "@/components/sections/pillars/park/ParkView";
import { estates } from "@/content/pillars";

// Estate yang tampilannya sudah dibuat. Galang dan Madura ditambah di Fase 5B.
const views: Record<string, React.ComponentType> = {
  park: ParkView,
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