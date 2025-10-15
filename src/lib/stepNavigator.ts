

  export function handleOnClick(target: string) {
    console.log(target)
    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }