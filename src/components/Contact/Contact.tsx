'use client'

import Github from "@/components/ui/svgIcon/Github";
import { EmailIcon } from "@/components/ui/svgIcon/Icons";
import Link from "next/link";
import { useTranslations } from "next-intl";

const GITHUB_URL = "https://github.com/nhl1991";
const EMAIL = "laslark1991@gmail.com";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="md:max-w-[min(66vw,1400px)] mx-auto px-6 py-8 scroll-mt-20">
      <h2 className="text-[17px] font-extrabold mb-4">{t("title")}</h2>
      <div className="flex flex-wrap gap-2.5">
        <Link
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full bg-card text-foreground border border-border hover:border-primary hover:text-primary"
        >
          <EmailIcon className="w-4 h-4" />
          {EMAIL}
        </Link>
        <Link
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full bg-card text-foreground border border-border hover:border-primary hover:text-primary"
        >
          <Github className="w-4 h-4 fill-current" />
          GitHub
        </Link>
      </div>
    </section>
  );
}
