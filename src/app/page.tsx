'use client'
import { useRef } from "react";
import Introduction from "@/components/Introduction/Introduction";
import CoverLetter from "@/components/Coverletter/CoverLetter";
import ProjectIntro from "@/components/ProjectsIntro/ProjectIntro";

export default function Home() {

  const containerRef = useRef<HTMLElement>(null);

  return (
    <section id="section" className="w-screen min-h-[300vh]" ref={containerRef}>
  
      <Introduction />
      <CoverLetter />
      <ProjectIntro />
    </section>
  );
}
