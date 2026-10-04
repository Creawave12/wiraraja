import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import Highlight from "@/components/ui/Highlight";
import { ftzNote, teamNote } from "@/content/pillars";
import { siteConfig } from "@/content/site";

type Props = {
  showFtz?: boolean;
};

export default function EstateFooter({ showFtz = true }: Props) {
  return (
    <div className="mt-11">
      {showFtz && (
        <>
          {ftzNote.map((p) => (
            <p key={p} className="mb-3.5 max-w-[68ch]">
              {p}
            </p>
          ))}
          <p className="mb-3.5 max-w-[68ch]">
            Learn more about the advantages of Free Trade Zone (FTZ) on the{" "}
            <Link href="/investment">
              <Highlight>Investment Insights</Highlight>
            </Link>{" "}
            page.
          </p>
        </>
      )}
      <p className="mb-[26px] max-w-[68ch]">{teamNote}</p>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/contact">Contact Us</ButtonLink>
        {siteConfig.brochureUrl && (
          <ButtonLink href={siteConfig.brochureUrl} variant="solid" icon="download">
            Download PDF
          </ButtonLink>
        )}
      </div>
    </div>
  );
}