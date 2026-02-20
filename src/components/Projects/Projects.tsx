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
    <section
      id="projects"
      className="w-screen h-screen flex flex-col"
      onMouseOver={(e) => e.stopPropagation()}
    >


      <header className="py-20"><TypographyH1>PROJECTS</TypographyH1></header>
      <ProjectNavigation />
      {isModalOpen ? <ProjectModal /> : null}
    </section>
  );
}
