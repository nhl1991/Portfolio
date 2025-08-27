import { Project } from "@/lib/interface";
import Image from "next/image";
import LinkButton from "../ui/LinkButton";
import { ListTitle } from "../CirclingNavigation/ui/ItemTitle";
import { ListItem } from "../CirclingNavigation/ui/ItemContainer";

export default function MobileContainer({ item }: { item: Project }) {
  return (
    <div className="w-full h-full rounded-2xl mobile-bg-color p-2">
      <div className="h-full rounded-2xl bg-white/50 dark:bg-black">
        <div className="w-full h-max flex items-center justify-end p-2">
          <div className="w-max flex items-center justify-center gap-2">
            <LinkButton
              href={"https://" + item.URL}
              text="Website"
              bg={true}
            ></LinkButton>
            <LinkButton
              href={item.github}
              text="Github"
              bg={true}
            ></LinkButton>
          </div>
        </div>
        {item != undefined ? (
          <div className="w-full h-full flex flex-col gap-2 items-center">
            <div className="w-max px-4 py-2">
              <p className="font-bold px-2 py-1">
                {item?.title
                  .replace("Project", "")
                  .replaceAll("-", " ")
                  .toUpperCase()}
              </p>
            </div>

            <div className="min-w-64 min-h-48 relative rounded-2xl overflow-hidden p-1 border-2 ">
              <Image
                className="object-cover"
                src={item.Image}
                alt={item.title}
                fill
              />
            </div>

            <div className="flex flex-row items-center justify-center">
              <div className="w-max">
                <ListTitle title="Language" />
                <ListItem items={item.language} />
                <ListTitle title="Framework" />
                <ListItem items={item.framework} />
                <ListTitle title="Database" />
                <ListItem items={item.database} />
              </div>
            </div>
            <div className="w-full p-2 ">
              <h2 className="w-full font-bold p-2">Description</h2>
              <div className="w-full h-max px-4">
                <p className="px-2">{item.description}</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
