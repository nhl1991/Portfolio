import LinkButton from "@/components/ui/LinkButton";
import { CloseIcon } from "@/components/ui/svgIcon/Icons";
import { useStore } from "@/lib/stores";

export default function ModalHeader({
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
    <header className="w-full h-max flex items-center justify-end">
      <div className="w-full flex items-center justify-start">
        <h2 className="font-bold px-4 py-1">{title.toUpperCase()}</h2>
      </div>
      <div className="w-max flex items-center  px-4 py-1 justify-center gap-2">
        <LinkButton
          href={"https://" + website}
          text="Website"
          bg={true}
        ></LinkButton>

        <LinkButton href={github} text="Github" bg={true}></LinkButton>
        <button
          className="cursor-pointer"
          onClick={() => setIsModalOpen(false)}
        >
          <CloseIcon className="w-14" />
        </button>
      </div>
    </header>
  );
}
