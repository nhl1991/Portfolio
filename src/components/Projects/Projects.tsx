"use client";
import ProjectModal from "@/components/Projects/components/DescriptionModal/ProjectModal";
import ProjectNavigation from "@/components/Projects/components/ProjectNavigation";
import { useStore } from "@/lib/stores";
import { TypographyH1 } from "../ui/shadcn/typography/TypographyH1";

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
      <TypographyH1>PROJECTS</TypographyH1>
        <ProjectNavigation />
        {isModalOpen ? <ProjectModal /> : null}
    </div>
  );
}
