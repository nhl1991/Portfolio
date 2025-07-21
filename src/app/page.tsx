'use client'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Introduction from "@/components/Introduction/Introduction";
import CoverLetter from "@/components/Coverletter/CoverLetter";
import LinkButton from "@/components/ui/LinkButton";




export default function Home() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.timeline({
      scrollTrigger: {
        trigger: "#end",
        start: 'top center',
        end: 'bottom bottom',
        pin: true,
        pinSpacing: true,
        scrub: 1,
      }
    });

  })

  return (
    <section id="section" className="w-screen h-max bg-black text-white" ref={container}>
      <Introduction />
      <CoverLetter />
      {/* <Projects /> */}
      <div id="end" className="w-[100vw] h-[100vh] flex flex-col items-center justify-center relative">
        <p className="header_text">ご覧ありがとうございます。</p>
        <div className="flex items-center justify-center text-4xl">
          <p className="px-2 py-1">プロジェクトの例は</p>
          <LinkButton href={'/projects'} text="こちら" />
          <p className="px-2 py-1">になります。</p>
        </div>
      </div>
    </section>
  );
}
