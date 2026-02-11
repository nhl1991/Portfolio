"use client";
import { useStore } from "@/lib/stores";
import gsap from "gsap";
import { MouseEvent, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import ModalHeader from "./ui/ModalHeader";
import ProjectStack from "./components/ProjectStack";
import ProjectPreviewImage from "./components/ProjectPreviewImage";
import ProjectDescription from "./components/ProjectDescription";

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
        className="dark:bg-slate-900 bg-white rounded-2xl max-h-full h-max w-full md:w-max md:min-w-[96rem] overflow-scroll p-2"
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
          <div className="w-full flex flex-col gap-4 text-4xl p-2">
            <ProjectPreviewImage
              image={item.Image}
              url={item.URL}
              github={item.github}
              title={item.title}
            />
          </div>
          <div className="flex flex-col gap-y-8 text-3xl p-2 ">
            <ProjectStack
              language={item.language}
              framework={item.framework}
              database={item.database}
            />
            <ProjectDescription description={item.description} />
          </div>
          <footer>
            <p className="text-xl">
              ログインが必要な場合 *ID: guest@example.com / PW:Guest1234!@
            </p>
          </footer>
        </article>
      </div>
    </section>
  );
}
