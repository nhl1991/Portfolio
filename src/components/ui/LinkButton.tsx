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
      <Link className={ className +
        ` text-white flex items-center justify-center px-3 py-1 text-2xl rounded-lg md:rounded-xl cursor-pointer ${
            bg ? "bg-sky-600 dark:bg-indigo-900 dark:hover:bg-indigo-950 hover:bg-sky-800" : "hover:opacity-80"
          } `
      } href={href}>{text}</Link>
  );
}

//
