import Link from "next/link";
import Image from "next/image";

export default function Contacts() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bottom-0 gap-4 p-2">
      <div className="py-2">
        <p className="md:text-6xl">ご覧ありがとうございます。</p>
      </div>
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
          href={"mailto:laslark1991@gmail.com"}
          className="w-12 h-12 rounded-full p-2 button-hover"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </Link>
         {/* Home - Scroll To Top. */}
        <Link href={"/"} className="w-12 h-12 rounded-full p-2 button-hover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
