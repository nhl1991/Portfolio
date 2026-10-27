import AppHeader from "@/components/AppHeader/AppHeader";
import About from "@/components/About/About";
import ProjectContainer from "@/components/Projects/Projects";
import WhatsNew from "@/components/WhatsNew/WhatsNew";
import InfoSection from "@/components/InfoSection/InfoSection";
import Contact from "@/components/Contact/Contact";
import { Suspense } from "react";
import WhatsNewSkeleton from "@/components/WhatsNew/WhatsNewSkeleton";

export default async function Home() {
  return (
    <>
      <AppHeader />
      <About />
      <ProjectContainer />
      <Suspense fallback={<WhatsNewSkeleton />}>
        <WhatsNew />
      </Suspense>
      <InfoSection />
      <Contact />
      <footer className="md:max-w-[min(66vw,1400px)] mx-auto px-6 py-10 text-center text-xs text-muted-foreground">
        © 2026 nhl1991 — Portfolio
      </footer>
    </>
  );
}
