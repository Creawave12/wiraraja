type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Tbd({ children, className = "" }: Props) {
  return (
    <span
      className={`inline-block rounded-md border border-dashed border-gold bg-gold/[0.16] px-[9px] leading-[1.6] ${className}`}
    >
      {children}
    </span>
  );
}