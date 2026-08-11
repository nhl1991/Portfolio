import Github from "@/components/ui/svgIcon/Github";
import GlobalAlt from "@/components/ui/svgIcon/Global-Alt";
import { DialogTitle } from "@/components/ui/shadcn/dialog";
import Link from "next/link";

export default function ProjectTitle({
  title,
  website,
  github,
}: {
  title: string;
  website: string;
  github: string;
}) {
  return (
    <header className="w-full flex flex-col items-center gap-2 pr-8">
      <DialogTitle className="text-lg font-extrabold text-center">
        {title.toUpperCase()}
      </DialogTitle>
      <div className="flex items-center gap-3">
        <Link href={website} aria-label="Website" target="_blank" rel="noopener noreferrer">
          <GlobalAlt className="w-6 h-6 text-muted-foreground hover:text-primary" />
        </Link>
        <Link href={github} aria-label="Github" target="_blank" rel="noopener noreferrer">
          <Github className="w-5 h-5 fill-muted-foreground hover:fill-primary" />
        </Link>
      </div>
    </header>
  );
}
