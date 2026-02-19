import { EmailIcon, HomeIcon } from "@/components/ui/svgIcon/Icons";
import Image from "next/image";
import Link from "next/link";
export default function ContactList() {
  return (
    <aside className="flex flex-row fixed h-max w-max bottom-30 right-16 gap-4 p-4">
      {/* Github - Navigate to Github */}
      <Link
        title="github"
        href="https://github.com/nhl1991"
        className="w-20 h-20 relative rounded-full hover:scale-105 duration-300 p-2"
      >
        <Image
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          src="/src/navigationThumbnail/github.webp"
          alt="github"
        />
      </Link>

      {/* Mail - Open default mail provider */}
      <Link
        title="mail"
        href={"mailto:laslark1991@gmail.com"}
        className="w-20 bg-black rounded-full p-2 hover:scale-105 duration-300"
      >
        <EmailIcon className="" stroke="white" />
      </Link>
      {/* Home  */}
      <Link
        title="home"
        href={"/"}
        className="w-20 bg-black rounded-full p-2 hover:scale-105 duration-300"
      >
        <HomeIcon className="" />
      </Link>
    </aside>
  );
}
