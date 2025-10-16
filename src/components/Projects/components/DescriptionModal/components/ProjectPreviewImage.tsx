import { useState } from "react";
import Image from "next/image";
import LinkButton from "@/components/ui/LinkButton";
export default function ProjectPreviewImage({
  title,
  image,
  url,
  github,
}: {
  title: string;
  image: string;
  url: string;
  github: string;
}) {
  const [isHover, setIsHover] = useState(false);
  const onMouseEnter = () => {
    setIsHover(true);
  };
  const onMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <figure
      className="md:w-[64rem] w-[32rem] md:h-[40rem] aspect-[16/10] relative rounded-2xl overflow-hidden p-4 "
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image
        className="object-contain"
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        priority
      />
      {isHover ? (
        <div className="w-full h-full absolute z-50 flex items-center justify-center bg-black/90">
          <div className="flex items-center justify-center gap-2">
            <LinkButton
              href={"http://" + url}
              text="Website"
              bg={false}
            ></LinkButton>
            <LinkButton href={github} text="Github" bg={false}></LinkButton>
          </div>
        </div>
      ) : null}
    </figure>
  );
}
