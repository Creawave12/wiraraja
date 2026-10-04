export default function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 mt-14 text-[22px] first:mt-0 md:mt-16 md:text-[28px]">
      {children}
    </h3>
  );
}