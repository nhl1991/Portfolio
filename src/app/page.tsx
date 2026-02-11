"use client";
import { useRef } from "react";
import Introduction from "@/components/Introduction/Introduction";
import CoverLetter from "@/components/Coverletter/CoverLetter";
import Projects from "../components/Projects/Projects";
import Outro from "@/components/Outro/Outro";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      id="section"
      className="overflow-hidden"
      ref={containerRef}
    >
      <Introduction />
      <CoverLetter />
      <Projects />
      <Outro />
    </section>
  );
}
