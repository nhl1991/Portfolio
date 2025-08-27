import item from "@/lib/coverletter.json";
import { CoverLetterItem } from "./CoverLetterItem";
// import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function CoverLetter() {
  const { data } = item;
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
        },
        delay: 1,
        defaults: { duration: 0.3, opacity: 0 },
      });

    //   tl.fromTo("#profile-image", { opacity: 0 }, { opacity: 1 });
      const items: Array<HTMLDivElement> = gsap.utils.toArray(
        "#coverletter-container > div",
        containerRef.current
      ) as HTMLDivElement[];
      items.forEach((selector) => {
        tl.fromTo(
          selector, // type TweenTarget = string | object | null; 3.1.2^ | element
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0 }
        );
      });
      tl.fromTo("#button-next-container", { y: 100 }, { opacity: 1, y: 0 });
    },
    { scope: containerRef }
  );

  function handleOnClick(){
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div
        id="coverletter"
        className="w-screen flex min-h-screen items-center justify-center"
        ref={containerRef}
      >
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-full h-max flex items-center justify-center p-4">
            {/* <div
              id="profile-image"
              className="min-w-64 min-h-64 rounded-full relative overflow-hidden"
            >
              <Image
                src="/src/profile-image/profile.jpeg"
                className="object-cover"
                fill
                sizes="(max-width: 100vw) 50vw"
                alt="profile"
              />
            </div> */}
          </div>
          <div className="w-full flex items-center justify-center">
            <div
              id="coverletter-container"
              className="w-full max-w-[1920px] h-max flex flex-col md:grid grid-cols-[repeat(4,minmax(240px,640px))] gap-2 md:gap-4 grid-rows-1 p-1"
            >
              {data
                ? data.map((item, idx) => {
                    return (
                      <CoverLetterItem
                        key={idx}
                        id={`item-container-${idx}`}
                        title={item.title}
                        description={item.description}
                      />
                    );
                  })
                : null}
            </div>
          </div>
          {/* <div className="w-full h-16 bg-red-200"></div> */}
          <div id="button-next-container" className="p-2">
            <div className="rounded-2xl px-4 py-2 text-white button-hover">
              <label
                htmlFor="button-next-projects"
                className="cursor-pointer"
              >
                次へ進む
              </label>
              <button
                id="button-next-projects"
                className="hidden"
                onClick={handleOnClick}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
