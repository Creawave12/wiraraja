type Props = {
  className?: string; // atur ukuran, contoh: "h-[52px] w-[52px]"
};

export default function LogoMark({ className = "h-[38px] w-[38px]" }: Props) {
  return (
    <span
      className={`grid flex-none place-items-center rounded-full bg-gold ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-1/2 w-1/2 fill-forest" aria-hidden="true">
        <path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17l-6.1 3.4 1.5-6.8L2.2 9l6.9-.7z" />
      </svg>
    </span>
  );
}