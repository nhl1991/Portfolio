import { ListTitle } from "./ItemTitle";
import { ListItem } from "./ListItemTitle";

export default function ProjectStack({
  language,
  framework,
  database,
}: {
  language: Array<string>;
  framework: Array<string>;
  database: Array<string>;
}) {
  return (
    <figure className="flex flex-row gap-4 text-2xl items-center justify-center">
      <div className="w-max flex flex-col gap-4">
        <ListTitle title="Language" />
        <ListItem items={language} />
        <ListTitle title="Framework" />
        <ListItem items={framework} />
        <ListTitle title="Database" />
        <ListItem items={database} />
      </div>
    </figure>
  );
}
