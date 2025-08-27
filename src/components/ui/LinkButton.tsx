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
    <div
      className={
        'text-white flex items-center justify-center px-2 py-1' +
          `  rounded-lg md:rounded-xl cursor-pointer ${
            bg ? "bg-sky-600 hover:bg-sky-800" : "hover:opacity-80"
          } `
      }
    >
      <Link href={href}>{text}</Link>
    </div>
  );
}

//
