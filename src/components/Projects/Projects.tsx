"use client";
import ProjectModal from "@/components/Projects/components/DescriptionModal/ProjectModal";
import ProjectNavigation from "@/components/Projects/components/ProjectNavigation";
import { useStore } from "@/lib/stores";



export default function ProjectContainer() {
  const { isModalOpen } = useStore();

  return (
    <section
      id="projects"
      className="min-h-screen"
      onMouseOver={(e) => e.stopPropagation()}
    >
        <ProjectNavigation />
        {isModalOpen ? <ProjectModal /> : null}
    </section>
  );
}
