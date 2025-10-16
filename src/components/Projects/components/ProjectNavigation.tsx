"use client";
import Image from "next/image";
import { projects } from "@/lib/projects.json";
import { useStore } from "@/lib/stores";
import { Project } from "@/lib/interface";
import ButtonNext from "@/components/ui/ButtonNext";
import Header from "@/components/Projects/ui/Header";

export default function ProjectNavigation() {
  // React.MouseEventHandler<HTMLAnchorElement>

  const { setItem, setIsModalOpen } = useStore();

  return (
    <section
      className={`w-screen h-screen p-4 flex items-center flex-col gap-8`}
    >
      <Header text="個人開発" />
      <article className="grid-layout">
        {projects.map((item: Project, i) => {
          return (
            <div
              key={i}
              className="w-full h-full border-2 border-black dark:border-white rounded-2xl overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-500"
              onClick={() => {
                setItem(item);
                setIsModalOpen(true);
              }}
            >
              {/* {item.clone ? (
                <div className="absolute inset-0 bg-black h-min px-4">
                  <p>CLONE-CODED</p>
                </div>
              ) : null} */}

              <Image
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                src={item.Image}
                alt={item.title}
              />
            </div>
          );
        })}
      </article>
      <ButtonNext targetId="contact" />
    </section>
  );
}
