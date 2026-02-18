"use client";

import { useId } from "react";
import { Button } from "./button";

export default function ScrollButton({ targetId }: { targetId: string }) {
  const id = useId();

  function handleOnClick() {
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div id="button-next-container">
      <Button id={id} size={'lg'} variant={'outline'} onClick={handleOnClick}>NEXT</Button>
    </div>
  );
}
