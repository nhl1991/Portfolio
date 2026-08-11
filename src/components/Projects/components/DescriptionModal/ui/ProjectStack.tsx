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
    <div className="w-full md:w-56 md:flex-none flex flex-col gap-3">
      <ListTitle title="Language" />
      <ListItem items={language} />
      <ListTitle title="Framework" />
      <ListItem items={framework} />
      <ListTitle title="Database" />
      <ListItem items={database} />
    </div>
  );
}
