import PageHeader from "@/components/ui/PageHeader";
import EstateSelector from "@/components/sections/pillars/EstateSelector";
import { pillarsHeader } from "@/content/pillars";

export default function PillarsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader
        eyebrow={pillarsHeader.eyebrow}
        title={pillarsHeader.title}
        description={pillarsHeader.description}
        aside={<EstateSelector />}
      />
      {children}
    </>
  );
}