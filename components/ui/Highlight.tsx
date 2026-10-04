export default function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-semibold text-forest shadow-[inset_0_-0.42em_0_rgba(200,168,75,0.38)]">
      {children}
    </span>
  );
}