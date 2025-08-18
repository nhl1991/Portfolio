'use client'
import { useRef } from "react";
import Introduction from "@/components/Introduction/Introduction";
import CoverLetter from "@/components/Coverletter/CoverLetter";
import LinkButton from "@/components/ui/LinkButton";

export default function Home() {

  const containerRef = useRef<HTMLElement>(null);

  return (
    <section id="section" className="w-screen h-screen " ref={containerRef}>
      <Introduction />
      <CoverLetter />
      {/* <Projects /> */}
      <div id="projects" className="w-[100vw] h-[100vh] flex flex-col items-center justify-center relative">
        <p className="text-xl md:text-4xl">ご覧ありがとうございます。</p>
        <div className="flex items-center justify-center text-xl md:text-2xl">
          <p className="px-2 py-1">プロジェクトの例は</p>
            <LinkButton className="text-gradient" href={'/projects'} text="こちら" bg={true} />
          <p className="px-2 py-1">になります。</p>
        </div>
      </div>
    </section>
  );
}
