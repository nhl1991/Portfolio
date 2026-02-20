import Github from "@/components/ui/svgIcon/Github";
import GlobalAlt from "@/components/ui/svgIcon/Global-Alt";
import { CloseIcon } from "@/components/ui/svgIcon/Icons";
import { useStore } from "@/lib/stores";
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
  const { setIsModalOpen } = useStore();
  return (
    <header className="w-full h-max flex flex-col items-center justify-end p-2">
      
      <div className="w-full flex  items-center justify-end gap-2">
        <Link 
          href={"https://" + website}
          aria-label="Website"
          >
            <GlobalAlt className="w-12 hover:stroke-gray-600 " />
          </Link> 
          <Link 
          href={github}
          aria-label="Github">
            <Github className="w-10 hover:fill-gray-600 " />
          </Link>
        {/* <LinkButton
          href={"https://" + website}
          text="Website"
          bg={true}
        ></LinkButton>

        <LinkButton href={github} text="Github" bg={true}></LinkButton> */}
        <button
          className="cursor-pointer"
          onClick={() => setIsModalOpen(false)}
        >
          <CloseIcon className="w-14" />
        </button>
      </div>
      <div className="w-full flex items-center justify-center">
        <h2 className="font-bold px-4 py-1">{title.toUpperCase()}</h2>
      </div>
    </header>
  );
}
