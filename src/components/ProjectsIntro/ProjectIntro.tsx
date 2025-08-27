import { useRef } from "react";
import LinkButton from "../ui/LinkButton";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Link from "next/link";

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
        defaults: { duration: 0.3, opacity: 0, filter: "blur(8px)", ease: 'back.inOut' },
      });

      tl.fromTo(
        "#projects-link-container",
        { opacity: 0 },
        { opacity: 1, filter: "blur(0px)" }
      );
    },
    { scope: containerRef }
  );

  return (
    <div id="projects" className="w-[100vw] h-[100vh]" ref={containerRef}>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div id="projects-link-container" className="px-4">
          <div className="py-2">
            <h1 className="">ご覧ありがとうございます。</h1>
          </div>
          <div>
            <h1 className="flex">
              プロジェクトの例は
                <Link className="animate-pulse" href={'/projects'}><h1  className="text-gradient ">こちら</h1></Link>

              になります。
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
