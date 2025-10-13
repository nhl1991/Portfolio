export default function CoverLetterHeader({title}: { title: string}) {
  return (
    <header id="header" className="text-center font-bold p-1 lg:p-4">
      <h2 id="title" className="">
        {title}
      </h2>
    </header>
  );
}
