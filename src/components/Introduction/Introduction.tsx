"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import DisplayGreet from "./ui/DisplayGreet";
import ScrollButton from "../ui/NextSectionButton";

gsap.registerPlugin(useGSAP);

//Component for Intro
export default function Introduction() {
  const containerRef = useRef<HTMLDivElement>(null);

  // useGSAP(
  //   () => {
  //     const tl = gsap.timeline({
  //       // onComplete: () => {
  //       //   gsap.delayedCall(1.5, handleOnClick);
  //       // },
  //       defaults: { duration: 0.5, ease: "none", opacity: 0 },
  //     });

  //     tl.fromTo("#intro_1", { opacity: 0, delay: 0.5 }, { opacity: 1 })
  //       .fromTo("#intro_2", { opacity: 0, delay: 0.5 }, { opacity: 1 })
  //       .fromTo("#button-next-container", { y: 100 }, { opacity: 1, y: 0 });

  //     tl.to(
  //       containerRef.current,
  //       {
  //         scrollTrigger: {
  //           trigger: containerRef.current,
  //           start: "center top",
  //           end: "bottom center",
  //           scrub: 1,
  //         },
  //         opacity: 0,
  //         duration: 1
  //       }
  //     );
  //   },

  //   { scope: containerRef }
  // );

  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center">
      <div
        ref={containerRef}
        id="first"
        className="w-full md:max-w-7xl h-full  flex flex-col items-center justify-center gap-8"
      >
        <div className="p-8 flex items-center justify-center">
          <DisplayGreet />
        </div>
        
      </div>
      <div>
          <ScrollButton targetId="coverletter" />
        </div>
    </section>
  );
}
