

  export function handleOnClick(element:React.RefObject<HTMLElement>) {
    if(element.current === undefined) return;
    element.current.scrollIntoView({behavior: "smooth",
      block: "start",})
    // document.getElementById("coverletter")?.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    // });
  }