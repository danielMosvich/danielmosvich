export default function HeaderButtonNav({ children, url,action }) {
  return (
    <a
      href={url}
      className="transition-all border-b-2 border-transparent hover:border-black font-semibold select-none cursor-pointer capitalize"
      onClick={action}
    >
      {children}
    </a>
  );
}
