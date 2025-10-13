"use client";
import Description from "@/components/Projects/Description";
import ProjectNavigation from "@/components/Projects/ProjectNavigation";
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
      <div className="w-full h-full md:flex overflow-hidden">
        <ProjectNavigation />
        {isModalOpen ? <Description /> : null}
      </div>
    </div>
  );
}
