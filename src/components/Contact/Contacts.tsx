import Link from "next/link";
import Image from "next/image";
import { EmailIcon, HomeIcon } from "@/components/ui/svgIcon/Icons";
import ContactHeader from "./ui/ContactHeader";

export default function Contacts() {
  return (
    <section id="contact" className="w-full min-h-screen flex flex-col items-center justify-center bottom-0 gap-4 p-2">
      <ContactHeader />
      <div className="flex gap-4">
         {/* Github - Navigate to Github */}
        <Link
          href="https://github.com/nhl1991"
          className="w-12 h-12  rounded-full"
        >
          <div className="w-full h-full relative hover:opacity-80">
            <Image
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              src="/src/navigationThumbnail/github.webp"
              alt="github"
            />
          </div>
        </Link>

         {/* Mail - Open default mail provider */}
        <Link
          title="mail"
          href={"mailto:laslark1991@gmail.com"}
          className="rounded-full p-2 button-hover"
        >
          <EmailIcon className="w-8" stroke="white"/>
        </Link>
         {/* Home - Scroll To Top. */}
        <Link title="home" href={"/"} className="rounded-full p-2 button-hover">
          <HomeIcon className="w-8" />
        </Link>
      </div>
    </section>
  );
}
