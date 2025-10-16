import Link from "next/link";
import Image from "next/image";
import { EmailIcon, HomeIcon } from "@/components/ui/svgIcon/Icons";

import ContactMessage from "./ui/ContactMessage";

export default function Contacts() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col items-center justify-center gap-12 p-2"
    >
      <ContactMessage />
      <div className="flex gap-4">
        {/* Github - Navigate to Github */}
        <Link
          title="github"
          href="https://github.com/nhl1991"
          className="w-24 relative rounded-full hover:border-2 hover:scale-105 duration-300 p-2"
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
          className="w-24 bg-black rounded-full p-2 hover:scale-105 duration-300"
        >
          <EmailIcon className="" stroke="white" />
        </Link>
        {/* Home  */}
        <Link
          title="home"
          href={"/"}
          className="w-24 bg-black rounded-full p-2 hover:scale-105 duration-300"
        >
          <HomeIcon className="" />
        </Link>
      </div>
    </section>
  );
}
