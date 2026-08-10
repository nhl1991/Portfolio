'use client'

import FlagJP from "@/components/ui/svgIcon/FlagJP";
import FlagUK from "@/components/ui/svgIcon/FlagUK";
import { InfoRow } from "@/lib/interface";
import { useTranslations } from "next-intl";

export default function InfoSection() {
  const t = useTranslations();
  const info = t.raw("info") as InfoRow[];
  const infoTitle = t("sectionTitles.info");
  const japaneseTitle = t("japanese.title");
  const japaneseContent = t("japanese.content");

  return (
    <section id="info" className="md:max-w-[min(66vw,1400px)] mx-auto px-6 py-8 scroll-mt-20 flex flex-col gap-8">
      <div>
        <h2 className="text-[17px] font-extrabold mb-4">{infoTitle}</h2>
        <div className="bg-card border border-border rounded-2xl divide-y divide-border px-5">
          {info.map((row) => (
            <div key={row.key} className="flex justify-between items-baseline gap-4 py-3">
              <span className="text-sm text-muted-foreground flex-none">{row.key}</span>
              <span className="text-sm text-right">{row.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-[17px] font-extrabold mb-4">{japaneseTitle}</h2>
        <div className="bg-card border border-border rounded-2xl px-5 py-4 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <FlagJP />
            JLPT N2
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold">
            <FlagUK />
            TOEIC 940
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed pt-1">
            {japaneseContent}
          </p>
        </div>
      </div>
    </section>
  );
}
