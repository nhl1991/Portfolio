import { ListTitle } from "../ui/ItemTitle";
import { ListItem } from "../ui/ListItemTitle";

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
        <ListTitle title="Framework" />
        <ListTitle title="Database" />
      </div>
      <div className="w-max flex flex-col gap-4">
        <ListItem items={language} />
        <ListItem items={framework} />
        <ListItem items={database} />
      </div>
    </figure>
  );
}
