'use client'

import { useTranslations } from "next-intl";

export default function Hero() {
  const tSummary = useTranslations("summary");
  const t = useTranslations("appHeader");
  const name = tSummary("name");
  const subtitle = t("subtitle");
  const pillCategory = t("pillCategory");
  const pillStatus = t("pillStatus");
  const version = t("version");
  const ctaContact = t("ctaContact");
  const ctaHistory = t("ctaHistory");

  return (
    <div className="md:max-w-[min(66vw,1400px)] mx-auto px-6 pt-11 pb-8 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
      <div className="w-24 h-24 md:w-26 md:h-26 flex-none rounded-3xl bg-gradient-to-br from-[#6a5ef0] to-[#463be0] shadow-xl shadow-primary/30 flex items-center justify-center text-white font-extrabold text-3xl">
        HN
      </div>
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold mb-1">{name}</h1>
        <p className="text-muted-foreground text-base mb-3">{subtitle}</p>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-3">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-secondary text-muted-foreground border border-border">
            {pillCategory}
          </span>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[color-mix(in_oklab,var(--app-green)_12%,transparent)] text-[var(--app-green)] inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--app-green)]" />
            {pillStatus}
          </span>
        </div>
        <span className="block font-mono text-xs text-muted-foreground mb-4">
          {version}
        </span>
        <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
          <a
            href="#contact"
            className="text-sm font-bold px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:brightness-110"
          >
            {ctaContact}
          </a>
          <a
            href="#whatsnew"
            className="text-sm font-bold px-5 py-2.5 rounded-full bg-card text-foreground border border-border hover:border-primary hover:text-primary"
          >
            {ctaHistory}
          </a>
        </div>
      </div>
    </div>
  );
}
