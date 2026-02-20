"use client";
import { useStore } from "@/lib/stores";
import gsap from "gsap";
import { MouseEvent, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import ProjectPreviewImage from "./ui/ProjectPreviewImage";
import ProjectStack from "./ui/ProjectStack";
import ProjectDescription from "./ui/ProjectDescription";
import ProjectTitle from "./ui/ProjectTitle";

export default function ProjectModal() {
  const { item, setIsModalOpen } = useStore();
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        delay: 0,
        defaults: { duration: 0.3, opacity: 0 },
      });

      tl.fromTo(
        "section > div",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1 }
      );
    },
    { scope: containerRef }
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (item === undefined) return;
  return (
    <section
      className="w-screen h-screen bg-black/50 fixed inset-0 flex justify-center p-2 items-center z-50"
      onClick={() => {
        setIsModalOpen(false);
      }}
      ref={containerRef}
    >
      <div
        className="dark:bg-slate-900 bg-indigo-950 rounded-2xl md:max-w-7xl  md:aspect-[16/10] w-full overflow-scroll p-2 shadow-2xl"
        onClick={(e: MouseEvent<HTMLElement>) => {
          e.stopPropagation();
        }}
      >
        <ProjectTitle
          title={item.title}
          website={item.URL}
          github={item.github}
        />

        <article className="flex flex-col items-center justify-center gap-2 p-2">
          <div className="flex md:flex-row flex-col gap-y-4 gap-x-12 text-4xl p-2">
            <ProjectPreviewImage
              image={item.Image}
              url={item.URL}
              github={item.github}
              title={item.title}
            />
             <ProjectStack
              language={item.language}
              framework={item.framework}
              database={item.database}
            />
          </div>
          <div className="flex flex-col-reverse gap-y-8 text-3xl p-2 ">
           
            <ProjectDescription description={item.description} />
          </div>
        </article>
      </div>
    </section>
  );
}
