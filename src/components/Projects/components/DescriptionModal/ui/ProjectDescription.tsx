export default function ProjectDescription({
  description,
}: {
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4 py-8">
      <p className="md:w-[48rem] px-2 py-4">{description}</p>
    </div>
  );
}
