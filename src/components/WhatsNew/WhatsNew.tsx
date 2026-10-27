import { cn } from "@/lib/utils";
import Link from "next/link";
import { getRecentRepos } from "@/lib/github";
import { getTranslations } from "next-intl/server";

const TEXT_PRIMARY = [
  "text-primary/80",
  "text-primary/60",
  "text-primary/40",
  "text-primary/20",
];

export default async function WhatsNew() {
  const t = await getTranslations();
  const title = t("sectionTitles.whatsNew");
  try {
    const data = await getRecentRepos();
    return (
      <section
        id="whatsnew"
        className="md:max-w-[min(66vw,1400px)] mx-auto px-6 py-8 scroll-mt-20 min-h-[26rem]"
      >
        <h2 className="text-[17px] font-extrabold mb-4">{title}</h2>
        {data.length > 0 ? (
          <div className="bg-card border border-border rounded-2xl divide-y divide-border px-5">
            {data.map((item, idx) => {
              return (
                <div key={item.node_id} className="flex gap-4 py-3.5 ">
                  <span
                    className={cn(
                      "font-mono text-xs md:text-2xl flex-none w-48 pt-0.5",
                      idx < 1 ? "font-bold text-primary" : TEXT_PRIMARY[idx - 1],
                    )}
                  >
                    {new Date(item.pushed_at).toISOString().slice(0, 10)}
                  </span>
                  <span
                    className={cn(
                      "text-sm md:text-2xl hover:border-b-cyan-200/50 border-b-2 border-b-transparent",
                      idx < 1 ? "font-semibold" : TEXT_PRIMARY[idx - 1],
                    )}
                  >
                    <Link
                      href={item.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </Link>
                  </span>
                </div>
              );
            })}
          </div>
        ) : null}
      </section>
    );
  } catch (e) {
    console.error(e);
    return (
      <section
        id="whatsnew"
        className="md:max-w-[min(66vw,1400px)] mx-auto px-6 py-8 scroll-mt-20 min-h-[26rem]"
      >
        <h2 className="text-[17px] font-extrabold mb-4">{title}</h2>
        <p className="text-sm text-muted-foreground">{t("whatsNewError")}</p>
      </section>
    );
  }
}
