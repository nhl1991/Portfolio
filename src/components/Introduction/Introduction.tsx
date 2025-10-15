import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import DisplayGreet from "./ui/DisplayGreet";
import ButtonNext from "../ui/ButtonNext";

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
      });

      tl.fromTo("#intro_1", { opacity: 0, delay: 0.5 }, { opacity: 1 })
        .fromTo("#intro_2", { opacity: 0, delay: 0.5 }, { opacity: 1 })
        .fromTo("#intro_3", { opacity: 0, delay: 0.5 }, { opacity: 1 })
        .fromTo("#button-next-container", { y: 100 }, { opacity: 1, y: 0 });

      tl.to(
        containerRef.current,
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "center top",
            end: "bottom center",
            scrub: 1,
          },
          opacity: 0,
          duration: 1
        }
      );
    },

    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      id="first"
      className="w-[100vw] h-[100vh] flex flex-col items-center justify-center"
    >
      <DisplayGreet />
      <ButtonNext targetId="coverletter" />
    </div>
  );
}
