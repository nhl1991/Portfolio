import { Item } from "@/lib/interface";
import React, { useRef } from "react";
import CoverLetterHeader from "./ui/CoverletterHeader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CodeIcon } from "../ui/svgIcon/Icons";

export function CoverLetterItem({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: Item[];
}) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom bottom",
          scrub: true
        },
        defaults: { duration: 0.3, opacity: 0 },
      });
      tl.fromTo("section > header", { opacity: 0}, {opacity: 1}).fromTo("section > article", { opacity: 0}, { opacity: 1});
    },
    { scope: sectionRef }
  );

  return (
    <section
      id={title}
      className="h-screen flex flex-col items-center justify-center"
      ref={sectionRef}
    >
      <CoverLetterHeader title={title} />
      <article id={id} className={`w-[48rem] rounded-2xl relative`}>
        <div
          id="content"
          className="flex flex-col items-center justify-center overflow-scroll"
        >
          <ul className="w-full flex flex-col gap-0.5 md:gap-1">
            {description.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  <li className="w-full p-1">
                    <div className="w-max flex items-center justify-center gap-1">
                      <CodeIcon className="w-6" />
                      <h3 className="font-bold">{item.item_title}</h3>
                    </div>
                    <div className="px-2">
                      <span>
                        <p className="text-3xl">{item.item_description}</p>
                      </span>
                    </div>
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      </article>
    </section>
  );
}
