export default function CoverLetterHeader({title}: { title: string}) {
  return (
    <header id="header" className="text-center font-bold p-1">
      <h1 id="title" className="">
        {title}
      </h1>
    </header>
  );
}
