import { cn } from "@/lib/utils";
import Link from "next/link";

export default function LinkButton({
  href,
  text,
  bg,
  className,
}: {
  href: string;
  text: string;
  bg?: boolean | undefined;
  className?: string;
}) {
  return (
    <Link className={cn("text-white flex items-center justify-center px-4 py-2 text-2xl rounded-md cursor-pointer", bg ? "bg-blue-900 hover:bg-sky-500" : "hover:opacity-80", className)
    } href={href}>{text}</Link>
  );
}

//
