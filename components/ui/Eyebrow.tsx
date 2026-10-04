type Props = {
  children: React.ReactNode;
  onDark?: boolean;
};

export default function Eyebrow({ children, onDark = false }: Props) {
  return (
    <p
      className={`mb-2.5 text-[11px] font-medium uppercase tracking-[3px] ${
        onDark ? "text-gold" : "text-gold-dark"
      }`}
    >
      {children}
    </p>
  );
}