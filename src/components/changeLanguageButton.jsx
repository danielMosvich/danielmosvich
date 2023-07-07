export default function ChangeLanguageButton({ children, action }) {
  return (
    <button
      onClick={action}
      className="bg-zinc-900 text-white shadow-xl shadow-black/30 px-4 rounded-md font-semibold uppercase flex items-center gap-3 min-w-[90px] justify-center text-sm py-2 md:py-0 md:text-md"
    >
      {children}
    </button>
  );
}
