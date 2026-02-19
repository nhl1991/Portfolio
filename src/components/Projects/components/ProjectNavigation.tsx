"use client";
import Image from "next/image";
import { projects } from "@/lib/projects_ko.json";
import { useStore } from "@/lib/stores";
import { Project } from "@/lib/interface";

export default function ProjectNavigation() {
  // React.MouseEventHandler<HTMLAnchorElement>

  const { setItem, setIsModalOpen } = useStore();

  return (
    <section
      className={`w-screen min-h-screen h-screen p-4 flex items-center justify-center flex-col gap-8`}
    >
      <div className="grid-layout p-24">
        {projects.map((item: Project, i) => {
          return (
            <article
              key={i}
              className="w-full h-full shadow-md rounded-2xl overflow-hidden relative cursor-pointer "
              onClick={() => {
                setItem(item);
                setIsModalOpen(true);
              }}
            >
              {item.clone ? (
                <div className="w-full h-full absolute inset-0 flex items-center justify-center px-4 z-20">
                  <p className="w-full text-4xl bg-black py-12">CLONE-CODED</p>
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
    </section>
  );
}
