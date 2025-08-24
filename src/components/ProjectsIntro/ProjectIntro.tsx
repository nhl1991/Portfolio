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
        "#projects-link-container",
        { opacity: 0 },
        { opacity: 1, filter: "blur(0px)" }
      )
    },
    { scope: containerRef }
  );

  return (
    <div id="projects" className="w-[100vw] h-[100vh]" ref={containerRef}>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div id="projects-link-container" className="px-4 hero-subtitle">
          <div className="py-2">
            <p className="">ご覧ありがとうございます。</p>
          </div>
          <div className="flex py-4">
            <p className="">プロジェクトの例は</p>
            <b className="text-whitegi">
              <LinkButton
                className="rounded-2xl button-hover"
                href={"/projects"}
                text="こちら"
                bg={true}
              />
            </b>
            <p className="">になります。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
