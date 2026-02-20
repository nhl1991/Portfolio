import { EmailIcon, HomeIcon } from "@/components/ui/svgIcon/Icons";
import Link from "next/link";
import Github from "./svgIcon/Github";
export default function ContactList() {
  return (
    <aside className="flex flex-row fixed h-max w-max bottom-30 right-16 gap-4 p-4">
      {/* Github - Navigate to Github */}
      <Link
        title="github"
        href="https://github.com/nhl1991"
        className="w-20 bg-black rounded-full p-2 hover:scale-105 duration-300 opacity-70"
      >
        <Github className="fill-white" />
      </Link>

      {/* Mail - Open default mail provider */}
      <Link
        title="mail"
        href={"mailto:laslark1991@gmail.com"}
        className="w-20 bg-black rounded-full p-2 hover:scale-105 duration-300 opacity-70"
      >
        <EmailIcon className="" stroke="white" />
      </Link>
      {/* Home  */}
      <Link
        title="home"
        href={"/"}
        className="w-20 bg-black rounded-full p-2 hover:scale-105 duration-300 opacity-70"
      >
        <HomeIcon className="" />
      </Link>
    </aside>
  );
}
