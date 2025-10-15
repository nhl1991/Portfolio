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
    <div className="flex flex-row gap-1 items-center justify-center">
      <div className="w-max flex flex-col gap-2">
        <ListTitle title="Language" />
        <ListTitle title="Framework" />
        <ListTitle title="Database" />
      </div>
      <div className="w-max flex flex-col gap-2">
        <ListItem items={language} />
        <ListItem items={framework} />
        <ListItem items={database} />
      </div>
    </div>
  );
}
