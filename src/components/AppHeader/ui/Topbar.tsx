import LangToggle from "./LangToggle";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-sm border-b border-border">
      <div className="md:max-w-[min(66vw,1400px)] mx-auto px-6 py-3.5 flex items-center justify-between">
        <span className="flex items-center gap-2 font-bold text-sm">
          <span className="w-5 h-5 rounded-md bg-gradient-to-br from-primary to-[#8b7ff0]" />
          nhl1991
        </span>
        <LangToggle />
      </div>
    </header>
  );
}
