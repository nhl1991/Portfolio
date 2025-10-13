"use client";
import Description from "@/components/Projects/Description";
import { useEffect, useState } from "react";
import ProjectNavigation from "@/components/Projects/ProjectNavigation";
import { useStore } from "@/lib/stores";

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

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
