"use client";
import { useStore } from "@/lib/stores";
import gsap from "gsap";
import { MouseEvent, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import ModalHeader from "./ui/ModalHeader";
import ProjectStack from "./components/ProjectStack";
import ProjectPreviewImage from "./components/ProjectPreviewImage";
import ProjectDescription from "./components/ProjectDescription";

export default function DescriptionModal() {
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
      className="w-screen h-screen bg-black/50 p-4 md:p-8 fixed inset-0"
      onClick={() => {
        setIsModalOpen(false);
      }}
      ref={containerRef}
    >
      <div
        className={`dark:bg-slate-900 bg-white rounded-2xl h-full md:max-h-full overflow-scroll`}
        onClick={(e: MouseEvent<HTMLElement>) => {
          e.stopPropagation();
        }}
      >
        <ModalHeader
          title={item.title}
          website={item.URL}
          github={item.github}
        />

        <article className="flex items-center justify-center flex-col gap-2 p-2">
          <div className="flex flex-col gap-4">
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
          <div className="w-full  p-2 flex items-center justify-center">
            <ProjectDescription description={item.description} />
          </div>
        </article>
      </div>
    </section>
  );
}
