export default function Chip({children}){
    return(
        <div className="flex items-center gap-1 ring-2 ring-zinc-800 rounded-full py-1 px-3 w-fit text-md font-semibold whitespace-nowrap transition-all select-none">
            {children}
        </div>
    )
}