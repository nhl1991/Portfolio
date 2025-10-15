export default function ProjectDescription({
  description,
}: {
  description: string;
}) {
  return (
    <div className="">
      <h3 className="font-bold">DESCRIPTION</h3>
      <p className="md:w-[32rem] px-2 md:text-xl 2xl:text-2xl">{description}</p>
      <p className="text-sm">
        ログインが必要な場合 *ID: guest@example.com / PW:Guest1234!@
      </p>
    </div>
  );
}
