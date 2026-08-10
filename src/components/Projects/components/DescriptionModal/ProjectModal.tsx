"use client";
import { useStore } from "@/lib/stores";
import { Dialog, DialogContent } from "@/components/ui/shadcn/dialog";
import ProjectPreviewImage from "./ui/ProjectPreviewImage";
import ProjectStack from "./ui/ProjectStack";
import ProjectDescription from "./ui/ProjectDescription";
import ProjectTitle from "./ui/ProjectTitle";

export default function ProjectModal() {
  const { item, isModalOpen, setIsModalOpen } = useStore();

  if (item === undefined) return null;

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent>
        <ProjectTitle title={item.title} website={item.url} github={item.github} />

        <article className="flex flex-col gap-6 pt-2">
          <div className="flex flex-col md:flex-row gap-6">
            <ProjectPreviewImage image={item.image} title={item.title} />
            <ProjectStack
              language={item.language}
              framework={item.framework}
              database={item.database}
            />
          </div>
          <ProjectDescription description={item.description} />
        </article>
      </DialogContent>
    </Dialog>
  );
}
