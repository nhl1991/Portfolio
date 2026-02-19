"use client";

import { useId } from "react";
import ChevronDoubleDown from "./svgIcon/ChevronDoubleDown";

export default function NextSectionButton({ targetId }: { targetId: string }) {
  const id = useId();

  function handleOnClick() {
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div id="button-next-container">
      <button id={id} onClick={handleOnClick}>
        <ChevronDoubleDown className="w-24 animate-bounce" />
        </button>
    </div>
  );
}
