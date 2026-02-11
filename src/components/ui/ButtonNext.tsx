"use client";

import { useId } from "react";

export default function ButtonNext({ targetId }: { targetId: string }) {
  const id = useId();

  function handleOnClick() {
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div id="button-next-container" className=" text-white">
      <label
        htmlFor={id}
        className="rounded-2xl  px-4 py-3 cursor-pointer text-[8rem] button-hover"
      >
        次のセクションへ
      </label>
      <button id={id} className="hidden" onClick={handleOnClick}></button>
    </div>
  );
}
