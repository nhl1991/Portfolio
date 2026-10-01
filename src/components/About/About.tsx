'use client'

import { AboutItem } from "@/lib/interface";
import { useTranslations } from "next-intl";

function isAboutItemArray(value: unknown): value is AboutItem[] {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        typeof (item as AboutItem).title === "string" &&
        typeof (item as AboutItem).content === "string"
    )
  );
}

export default function About() {
  const t = useTranslations();
  const rawAbout = t.raw("about");
  const about = isAboutItemArray(rawAbout) ? rawAbout : [];
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
