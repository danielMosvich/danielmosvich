export default function MiniChip({ children }) {
  return (
    <div className="bg-zinc-800 text-white w-fit px-3 py-1 text-sm  rounded-full font-mono capitalize whitespace-nowrap">
      {children}
    </div>
  );
}
