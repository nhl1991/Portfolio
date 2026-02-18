"use client";
import Image from "next/image";
import { projects } from "@/lib/projects.json";
import { useStore } from "@/lib/stores";
import { Project } from "@/lib/interface";
import ButtonNext from "@/components/ui/ScrollButton";
import Header from "@/components/Projects/ui/Header";

export default function ProjectNavigation() {
  // React.MouseEventHandler<HTMLAnchorElement>

  const { setItem, setIsModalOpen } = useStore();

  return (
    <section
      className={`w-screen h-screen p-4 flex items-center flex-col gap-8`}
    >
      <Header text="個人開発" />
      <div className="grid-layout">
        {projects.map((item: Project, i) => {
          return (
            <article
              key={i}
              className="w-full h-full shadow-md rounded-2xl overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-500"
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
                className="object-cover z-10"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                src={item.Image}
                alt={item.title}
              />
            </article>
          );
        })}
      </div>
      <ButtonNext targetId="contact" />
    </section>
  );
}
