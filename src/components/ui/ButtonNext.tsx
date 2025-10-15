'use client'

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
    <div id="button-next-container" className="p-2">
      <div className="text-white">
        <label
          htmlFor={id}
          className="rounded-2xl  px-4 py-2 cursor-pointer text-[1rem] button-hover"
        >
          次へ
        </label>
        <button
          id={id}
          className="hidden"
          onClick={handleOnClick}
        ></button>
      </div>
    </div>
  );
}
