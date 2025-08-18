import Link from "next/link";

export default function LinkButton({ href, text, bg, className }:{ href: string, text: string, bg?:boolean|undefined, className?: string}){

    return <Link href={href} className={className ?? 'text-white' +` px-1.5 md:px-2 md:py-1 py-0.5 font-bold rounded-xl md:rounded-2xl cursor-pointer ${bg ? 'bg-sky-400 hover:bg-sky-600/80':'hover:opacity-80'} `}>{text}</Link>
}


//