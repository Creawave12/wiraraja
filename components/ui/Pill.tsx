export default function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-tile px-3.5 py-[3px] text-[13px] font-semibold text-brand">
      {children}
    </span>
  );
}