"use client";
import { useStore } from "../../lib/stores";
import Image from "next/image";
import { ListItem } from "./ui/ItemContainer";
import { ListTitle } from "./ui/ItemTitle";
import { MouseEvent, useEffect, useState } from "react";
import LinkButton from "../ui/LinkButton";

export default function Description() {
  const { item, setIsModalOpen } = useStore();
  if (item === undefined) return;

  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = () => {
    setIsHover(true);
  };
  const onMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <section
      className="w-screen h-screen bg-black/50 p-4 md:p-8 fixed inset-0"
      onClick={(e: MouseEvent<HTMLElement>) => {
        setIsModalOpen(false);
      }}
    >
      <div
        className={`dark:bg-slate-900 bg-white rounded-2xl max-h-full overflow-scroll`}
        onClick={(e: MouseEvent<HTMLElement>) => {
          e.stopPropagation();
        }}
      >
        <header className="w-full h-max flex items-center justify-end">
          <div className="w-full flex items-center justify-start">
            <h2 className="font-bold px-4 py-1">
              {item.title.toUpperCase()}
            </h2>
          </div>
          <div className="w-max flex items-center  px-4 py-1 justify-center gap-2">
            <LinkButton
              href={"https://" + item.URL}
              text="Website"
              bg={true}
            ></LinkButton>

            <LinkButton href={item.github} text="Github" bg={true}></LinkButton>
            <button onClick={() => setIsModalOpen(false)}>
              <svg
                className="w-8"
                data-slot="icon"
                fill="none"
                strokeWidth={1.5}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </header>

        <article className="flex items-center justify-center flex-col gap-2 p-2">
          <div className="flex flex-col gap-4">
            <div className="flex">
              <div
                className="w-96 h-96 aspect-[16/9] relative rounded-2xl overflow-hidden "
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <Image
                  className="object-cover"
                  src={item.Image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {isHover ? (
                  <div className="w-full h-full absolute z-50 flex items-center justify-center bg-black/90">
                    <div className="w-full flex items-center justify-center gap-2">
                      <LinkButton
                        href={"http://" + item.URL}
                        text="Website"
                        bg={false}
                      ></LinkButton>
                      <LinkButton
                        href={item.github}
                        text="Github"
                        bg={false}
                      ></LinkButton>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex flex-row gap-1 items-center justify-center">
              
              <div className="w-max flex flex-col gap-2">
                <ListTitle title="Language" />
                <ListTitle title="Framework" />
                <ListTitle title="Database" />
              </div>
              <div className="w-max flex flex-col gap-2">
                <ListItem items={item.language} />
                <ListItem items={item.framework} />
                <ListItem items={item.database} />
              </div>
            </div>
          </div>
          <div className="w-full  p-2 flex items-center justify-center">
            <div className="">
              <h3 className="font-bold">DESCRIPTION</h3>
              <p className="md:w-[32rem] px-2 md:text-xl 2xl:text-2xl">
                {item.description}
              </p>
              <p className="text-sm">
                ログインが必要な場合 *ID: guest@example.com / PW:Guest1234!@
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
