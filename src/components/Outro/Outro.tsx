import Image from "next/image";
import ContactMessage from "./ui/ContactMessage";

export default function Outro() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col items-center justify-center gap-12 p-2"
    >
      <ContactMessage />
      <figure className="relative">
        <img
          src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"
          alt="Next.js"
          width={150}
          height={40}
        />
      </figure>
    </section>
  );
}
