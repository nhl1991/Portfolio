'use client'

import { WhatsNewItem } from "@/lib/interface";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export default function WhatsNew() {
  const t = useTranslations();
  const items = t.raw("whatsNew") as WhatsNewItem[];
  const title = t("sectionTitles.whatsNew");

  return (
    <section id="whatsnew" className="md:max-w-[min(66vw,1400px)] mx-auto px-6 py-8 scroll-mt-20">
      <h2 className="text-[17px] font-extrabold mb-4">{title}</h2>
      <div className="bg-card border border-border rounded-2xl divide-y divide-border px-5">
        {items.map((item, idx) => (
          <div key={idx} className="flex gap-4 py-3.5">
            <span
              className={cn(
                "font-mono text-xs flex-none w-24 pt-0.5",
                item.current ? "font-bold text-primary" : "text-primary/60"
              )}
            >
              {item.version}
            </span>
            <span
              className={cn(
                "text-sm",
                item.current ? "font-semibold" : "text-muted-foreground"
              )}
            >
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
