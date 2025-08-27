import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

//Component for Intro
export default function Introduction() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        // onComplete: () => {
        //   gsap.delayedCall(1.5, handleOnClick);
        // },
        defaults: { duration: 0.5, ease: "none", opacity: 0 },
        delay: 0.5,
      });

      tl.fromTo("#intro_1", { opacity: 0 }, { opacity: 1 })
        .fromTo("#intro_2", { opacity: 0 }, { opacity: 1 })
        .fromTo("#intro_3", { opacity: 0 }, { opacity: 1 })
        .fromTo("#button-next-container", { y: 100 }, { opacity: 1, y: 0 });
    },
    { scope: containerRef }
  );

  function handleOnClick() {
    document.getElementById("coverletter")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div
      ref={containerRef}
      id="first"
      className="w-[100vw] h-[100vh] flex flex-col items-center justify-center"
    >
      <div className="p-2  flex flex-col gap-2">
        <h1 id="intro_1" className="text-gradient">
          こんにちは。
        </h1>
        <h2 id="intro_2" className="text-gradient">
          私は
          <b className="">
            <ruby>
              盧<rp>(</rp>
              <rt>ノ</rt>
              <rp>)</rp>亨<rp>(</rp>
              <rt>ヒョン</rt>
              <rp>)</rp>來<rp>(</rp>
              <rt>レ</rt>
              <rp>)</rp>
            </ruby>
          </b>
          と申します。
        </h2>
        <h3 id="intro_3" className="text-gradient">
          どうぞよろしくお願いします。
        </h3>
      </div>
      <div id="button-next-container" className="p-2">
        <div className="rounded-2xl px-4 py-2 text-white button-hover">
          <label
            htmlFor="button-next-coverletter"
            className=" cursor-pointer text-[1rem]"
          >
            次へ進む
          </label>
          <button
            id="button-next-coverletter"
            className="hidden"
            onClick={handleOnClick}
          ></button>
        </div>
      </div>
    </div>
  );
}
