'use client'

import PreviewCard from "./ui/PreviewCard";
import ProjectModal from "@/components/Projects/components/DescriptionModal/ProjectModal";
import { Project } from "@/lib/interface";
import { useTranslations } from "next-intl";

export default function ProjectContainer() {
  const t = useTranslations();
  const tSections = useTranslations("projectSections");
  const projects = t.raw("projects") as Project[];

  const featured = projects.filter((p) => p.highlight);
  const cloneCoding = projects.filter((p) => !p.highlight && p.clone);
  const others = projects.filter((p) => !p.highlight && !p.clone);

  return (
    <section id="projects" className="md:max-w-[min(66vw,1400px)] mx-auto px-6 py-8 scroll-mt-20">
      <ProjectSection title={tSections("featured")} items={featured} />
      <ProjectSection title={tSections("clone")} items={cloneCoding} />
      <ProjectSection title={tSections("others")} items={others} />
      <ProjectModal />
    </section>
  );
}

function ProjectSection({ title, items }: { title: string; items: Project[] }) {
  if (items.length === 0) return null;
  return (
    <div className="mb-8 last:mb-0">
      <h2 className="text-[17px] font-extrabold mb-4">{title}</h2>
      <div className="preview-row">
        {items.map((item) => (
          <PreviewCard key={item.title} project={item} />
        ))}
      </div>
    </div>
  );
}
