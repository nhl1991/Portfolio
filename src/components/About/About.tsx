'use client'

import { AboutItem } from "@/lib/interface";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations();
  const about = t.raw("about") as AboutItem[];
  const title = t("sectionTitles.about");

  return (
    <section id="about" className="md:max-w-[min(66vw,1400px)] mx-auto px-6 py-8 scroll-mt-20">
      <h2 className="text-[17px] font-extrabold mb-4">{title}</h2>
      <div className="flex flex-col gap-3">
        {about.map((item, idx) => (
          <article
            key={idx}
            className="bg-card border border-border rounded-2xl px-5 py-4"
          >
            <h3 className="font-bold text-sm mb-1.5">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.content}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
