'use client'
import { useRef } from "react";
import Introduction from "@/components/Introduction/Introduction";
import CoverLetter from "@/components/Coverletter/CoverLetter";
import Projects from "../components/Projects/Projects";
import Contacts from "@/components/Contact/Contacts";

export default function Home() {

  const containerRef = useRef<HTMLElement>(null);

  return (
    <section id="section" className="w-screen min-h-screen overflow-hidden" ref={containerRef}>
  
      <Introduction />
      <CoverLetter />
      <Projects />
      <Contacts />
    </section>
  );
}
