type Props = {
  items: string[];
  onDark?: boolean;
  className?: string;
};

export default function CheckList({
  items,
  onDark = false,
  className = "",
}: Props) {
  return (
    <ul className={`mt-3.5 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`relative border-b py-[9px] pl-[30px] text-[14.5px] font-medium last:border-b-0 before:absolute before:left-1 before:top-[15px] before:h-[7px] before:w-3 before:-rotate-45 before:border-b-2 before:border-l-2 before:border-gold ${
            onDark
              ? "border-white/[0.14] text-white/90"
              : "border-line text-forest"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}