"use client";
import ProjectModal from "@/components/Projects/components/DescriptionModal/ProjectModal";
import ProjectNavigation from "@/components/Projects/components/ProjectNavigation";
import { useStore } from "@/lib/stores";

export default function Projects() {


  return (
    <>
      <ProjectNavigationContainer />
    </>
  );
}

function ProjectNavigationContainer() {
  const { isModalOpen } = useStore();

  return (
    <div
      id="projects"
      onMouseOver={(e) => e.stopPropagation()}
    >
        <ProjectNavigation />
        {isModalOpen ? <ProjectModal /> : null}
    </div>
  );
}
