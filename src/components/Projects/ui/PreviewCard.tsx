'use client'

import Image from "next/image";
import { Project } from "@/lib/interface";
import { useStore } from "@/lib/stores";

export default function PreviewCard({ project }: { project: Project }) {
  const { setItem, setIsModalOpen } = useStore();

  return (
    <button
      type="button"
      onClick={() => {
        setItem(project);
        setIsModalOpen(true);
      }}
      className="preview-card text-left cursor-pointer hover:-translate-y-0.5 transition-transform"
    >
      <div className="relative aspect-[16/10]">
        <Image
          className="object-cover"
          src={project.image}
          alt={project.title}
          fill
          sizes="220px"
        />
        {project.clone ? (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center px-2">
            <span className="text-white text-xs font-bold tracking-wide text-center">
              CLONE-CODING
            </span>
          </div>
        ) : null}
      </div>
      <div className="p-3.5">
        <p className="font-bold text-sm mb-1 truncate">{project.title}</p>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-2.5 leading-relaxed">
          {project.highlight ?? project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.framework.map((f) => (
            <span
              key={f}
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent text-accent-foreground"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
