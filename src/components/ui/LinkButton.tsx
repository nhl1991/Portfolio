import Link from "next/link";

export default function LinkButton({ href, text, bg }:{ href: string, text: string, bg?:boolean|undefined}){

    return <Link href={href} className={`px-4 py-2 font-bold rounded-2xl cursor-pointer ${bg ? 'bg-sky-400 hover:bg-sky-600/80':'hover:opacity-80'} `}>{text}</Link>
}


//