export default function ProjectDescription({
  description,
}: {
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-bold">DESCRIPTION</h4>
      <p className="md:w-[48rem] px-2">{description}</p>
      
    </div>
  );
}
