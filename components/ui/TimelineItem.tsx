import Tbd from "@/components/ui/Tbd";

type Props = {
  year: string;
  tbd?: boolean; // true jika tahun belum dikonfirmasi client
  tag: string;
  title: string;
  children: React.ReactNode; // deskripsi
  aside?: React.ReactNode; // foto di kolom kanan
};

export default function TimelineItem({
  year,
  tbd = false,
  tag,
  title,
  children,
  aside,
}: Props) {
  return (
    <div
      data-tl-item
      className="group relative grid items-start gap-2.5 md:grid-cols-[150px_1fr_240px] md:gap-7"
    >
      {/* Titik di rel */}
      <span
        aria-hidden="true"
        className="absolute -left-10 top-3 z-[1] h-4 w-4 rounded-full border-2 border-white/35 bg-forest-2 transition duration-[400ms] group-data-[seen=true]:border-gold group-data-[seen=true]:bg-gold group-data-[seen=true]:shadow-[0_0_0_5px_rgba(200,168,75,0.22)]"
      />

      <div>
        <div className="font-serif text-[40px] font-bold leading-none text-gold">
          {tbd ? <Tbd className="text-2xl">{year}</Tbd> : year}
        </div>
        <small className="mt-2.5 block text-[11px] font-medium uppercase tracking-[2px] text-white/60">
          {tag}
        </small>
      </div>

      <div>
        <h3 className="mb-2 text-[22px]">{title}</h3>
        <p className="text-[15.5px] text-white/[0.78]">{children}</p>
      </div>

      {aside}
    </div>
  );
}