"use client";
import Image from "next/image";
import { projects } from "@/lib/projects_ko.json";
import { useStore } from "@/lib/stores";
import { Project } from "@/lib/interface";

export default function ProjectNavigation() {
  // React.MouseEventHandler<HTMLAnchorElement>

  const { setItem, setIsModalOpen } = useStore();

  return (
    <div
      className="w-full h-full p-4 gap-8 flex items-center justify-center-safe"
    >
      <div className="w-max grid-layout p-24 bg-indigo-950 rounded-xl shadow-md">
        {projects.map((item: Project, i) => {
          return (
            <article
              key={i}
              className=" shadow-md rounded-2xl overflow-hidden relative cursor-pointer "
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
