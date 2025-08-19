import { useRef } from "react";
import LinkButton from "../ui/LinkButton";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function ProjectIntro() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
        },
        delay: 1,
        defaults: { duration: 0.3, opacity: 0, filter: "blur(8px)" },
      });

      tl.fromTo(
        "#projects-message",
        { opacity: 0 },
        { opacity: 1, filter: "blur(0px)" }
      ).fromTo(
        "#projects-link",
        { opacity: 0 },
        { opacity: 1, filter: "blur(0px)" }
      ).fromTo("#first-letters",{ opacity: 0, x:100 },
        { opacity: 1, x:0, filter: "blur(0px)" })
        .fromTo("#second-letters",{ opacity: 0, x:100 },
        { opacity: 1, x:0, filter: "blur(0px)" })
        .fromTo("#third-letters",{ opacity: 0, x:100},
        { opacity: 1, x:0, filter: "blur(0px)" });
    },
    { scope: containerRef }
  );

  return (
    <div id="projects" className="w-[100vw] h-[100vh]" ref={containerRef}>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="px-4 hero-subtitle">
          <div id="projects-message" className="py-2">
            <p className="">ご覧ありがとうございます。</p>
          </div>
          <div id="projects-link" className="flex py-4">
            <p id="first-letters" className="">プロジェクトの例は</p>
            <b id="second-letters">
              <LinkButton
                className="rounded-2xl button-hover"
                href={"/projects"}
                text="こちら"
                bg={true}
              />
            </b>
            <p id="third-letters" className="">になります。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
