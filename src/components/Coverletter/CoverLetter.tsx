import item from "@/lib/coverletter.json";
import { CoverLetterItem } from "./CoverLetterItem";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef, useState } from "react";
import React from "react";
import ButtonNext from "../ui/ButtonNext";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function CoverLetter() {
  const { data } = item;
  const [current, setCurrent] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const elements = gsap.utils.toArray(
        "#coverletter-container > section",
        containerRef.current
      );
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",

          onToggle: (self) => {
            if (self.isActive)
              gsap.to("#coverletter_navigation", {
                display: "block",
                duration: 0,
              });
            else
              gsap.to("#coverletter_navigation", {
                display: "none",
                duration: 0,
              });
          },
          onUpdate: () => {
            // 修正必要
            elements.map((item) => {
              if (item instanceof HTMLElement)
                if (ScrollTrigger.isInViewport(item, 0.7)) setCurrent(item.id);
            });
          },
        },
        delay: 0,
        defaults: { duration: 0.3, opacity: 0 },
      });

      // const items: Array<HTMLDivElement> = gsap.utils.toArray(
      //   "#coverletter-container > section",
      //   containerRef.current
      // ) as HTMLDivElement[];
      // items.forEach((selector, idx) => {
      //   tl.fromTo(
      //     selector, // type TweenTarget = string | object | null; 3.1.2^ | element
      //     { opacity: 0, x: 100 * (idx + 1) },
      //     { opacity: 1, x: 0 }
      //   );
      // });
      tl.fromTo("#button-next-container", { y: 100 }, { opacity: 1, y: 0 });
    },
    { scope: containerRef }
  );

  return (
    <>
      <section
        id="coverletter"
        className="w-screen flex min-h-screen items-center justify-center relative"
        ref={containerRef}
      >
        {/* fixed nav */}
        <nav
          id="coverletter_navigation"
          className="p-4 hidden fixed top-0 md:top-[50%] right-0"
        >
          <ul className="text-3xl flex md:flex-col gap-8 md:list-disc font-bold z-50">
            {data.map((item, idx) => (
              <li key={idx}>
                <button
                  className={`cursor-pointer ${
                    current === item.title ? "text-sky-300" : null
                  }`}
                  onClick={() => {
                    console.log("click");
                    document.getElementById(item.title)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        {/* Page */}
        <div
          id="coverletter-container"
          className="flex flex-col items-center justify-center gap-2 md:gap-4 p-1"
        >
          {data
            ? data.map((item, idx) => {
                return (
                  <React.Fragment key={idx}>
                    <CoverLetterItem
                      id={`item-container-${idx}`}
                      title={item.title}
                      description={item.description}
                    />
                  </React.Fragment>
                );
              })
            : null}
          <div className="absolute bottom-0">
            <ButtonNext targetId="projects" />
          </div>
        </div>
      </section>
    </>
  );
}
