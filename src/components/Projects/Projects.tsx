"use client";
import DescriptionModal from "@/components/Projects/components/DescriptionModal/DescriptionModal";
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
      className="w-full h-full flex items-center justify-center"
      onMouseOver={(e) => e.stopPropagation()}
    >
        <ProjectNavigation />
        {isModalOpen ? <DescriptionModal /> : null}
    </div>
  );
}
