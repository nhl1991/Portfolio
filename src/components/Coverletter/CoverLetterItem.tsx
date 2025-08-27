import { Item } from "@/lib/interface";
import React from "react";

export function CoverLetterItem({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: Item[];
}) {
  return (
    <div
      id={id}
      className={`w-full h-full rounded-2xl shadow-md lg:shadow-lg bg-coverletter shadow-gray-400 dark:shadow-gray-900 relative`}
    >
      <header id="header" className="text-center font-bold p-1 lg:p-4">
        <h2 id="title" className="">
          {title}
        </h2>
      </header>
      <section
        id="content"
        className="w-full  flex flex-col items-center justify-center overflow-scroll"
      >
        <ul className="w-full flex flex-col gap-0.5 md:gap-1">
          {description.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <li className="w-full p-1">
                  <div className="w-max flex items-center justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <h3 className="font-bold">
                      {item.item_title}
                    </h3>
                  </div>
                  <div className="px-2">
                    <span>
                      <p className="">
                        {item.item_description}
                      </p>
                    </span>
                  </div>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
