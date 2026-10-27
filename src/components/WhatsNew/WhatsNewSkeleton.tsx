
export default function WhatsNewSkeleton() {
  return (
    <section id="whatsnew" className="md:max-w-[min(66vw,1400px)] mx-auto px-6 py-8 scroll-mt-20 min-h-[26rem]">
      <div className="h-5 w-24 mb-4 rounded bg-muted animate-pulse" />
      <div className="bg-card border border-border rounded-2xl divide-y divide-border px-5">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div key={idx} className="flex items-center gap-4 py-3.5">
            <span className="h-5 w-24 flex-none rounded bg-muted animate-pulse" />
            <span className="h-5 w-40 rounded bg-muted animate-pulse" />
          </div>
        ))}
      </div>
    </section>
  );
}
