import Image from "next/image";

export default function ProjectPreviewImage({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <figure className="w-full md:flex-1 md:min-w-0 aspect-[16/10] relative rounded-2xl overflow-hidden border border-border">
      <Image
        className="object-cover"
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        priority
      />
    </figure>
  );
}
