"use client"
import Image from "next/image";
import { useStore } from "@/lib/stores";
import { Project } from "@/lib/interface";
import { TypographyH1 } from "@/components/ui/shadcn/typography/TypographyH1";
import { useTranslations } from "next-intl";

export default function ProjectNavigation() {
  // React.MouseEventHandler<HTMLAnchorElement>

  const { setItem, setIsModalOpen } = useStore();
  const t = useTranslations();
  const projects = t.raw('projects')
  return (
    <div
      className="w-full h-full p-4 gap-8 flex flex-col items-center justify-center-safe"
    >
      <header className="py-20">
        <TypographyH1>PROJECTS</TypographyH1>
      </header>
      <div className="grid-layout p-24">
        {projects.map((item: Project, i: number) => {
          return (
            <article
              key={i}
              className=" rounded-xl overflow-hidden relative cursor-pointer"
              onClick={() => {
                setItem(item);
                setIsModalOpen(true);
              }}
            >
              {item.clone ? (
                <div className="w-full h-full bg-black/80 absolute inset-0 flex items-center justify-center px-4 z-20">
                  <p className="font-bold text-4xl">CLONE-CODING</p>
                </div>
              ) : null}

              <Image
                className="object-cover z-10 hover:scale-115 transition-transform duration-500"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                src={item.Image}
                alt={item.title}
              />
            </article>
          );
        })}
      </div>
    </div>
  );
}
