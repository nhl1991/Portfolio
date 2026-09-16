'use client'

import { GitRepository } from "@/lib/interface";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function WhatsNew() {
  const t = useTranslations();
  // const items = t.raw("whatsNew") as WhatsNewItem[];
  const title = t("sectionTitles.whatsNew");
  const [data, setData] = useState<GitRepository[]>([])
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    async function init() {
      setLoading(true);
      try {
        const response = await fetch('/api/github', {
          method: 'GET'
        })
        const { repos } = await response.json();
        setData(repos);

      } catch (e) {
        console.log(e);
        setError((e as Error).message);

      } finally {
        setLoading(false);
      }
    }

    init();
  }, [])

  return (
    <section id="whatsnew" className="md:max-w-[min(66vw,1400px)] mx-auto px-6 py-8 scroll-mt-20 min-h-[26rem]">

      <h2 className="text-[17px] font-extrabold mb-4">{title}</h2>
      {
        loading ? (
          <div className="bg-card border border-border rounded-2xl divide-y divide-border px-5">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div key={idx} className="flex items-center gap-4 py-3.5">
                <span className="h-5 w-24 flex-none rounded bg-muted animate-pulse" />
                <span className="h-5 w-40 rounded bg-muted animate-pulse" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="bg-card border border-border rounded-2xl px-5 py-3.5">
            <p className="text-sm text-destructive">{error}</p>
          </div>
        ) : data.length > 0 ? (
          <div className="bg-card border border-border rounded-2xl divide-y divide-border px-5">
            {data.map((item: GitRepository, idx) => (
              <div key={item.node_id} className="flex gap-4 py-3.5">
                <span
                  className={cn(
                    "font-mono text-xs flex-none w-24 pt-0.5",
                    idx < 1 ? "font-bold text-primary" : "text-primary/60"
                  )}
                >
                  {new Date(item.updated_at).toISOString().slice(0, 10)}
                </span>
                <span
                  className={cn(
                    "text-sm",
                    idx < 1 ? "font-semibold" : "text-muted-foreground"
                  )}
                >
                  <Link href={item.html_url}>
                    {item.name}
                  </Link>
                </span>
              </div>
            ))}
          </div>
        ) : null
      }
      {/* <div className="bg-card border border-border rounded-2xl divide-y divide-border px-5">
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
      </div> */}
    </section>
  );
}
