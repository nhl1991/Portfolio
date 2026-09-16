import { DialogDescription } from "@/components/ui/shadcn/dialog";

export default function ProjectDescription({
  description,
}: {
  description: string;
}) {
  return (
    <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
      {description}
    </DialogDescription>
  );
}
