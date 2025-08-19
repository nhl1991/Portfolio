import { useRef } from "react";
import LinkButton from "../ui/LinkButton";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function ProjectIntro() {

    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
            },
            delay: 1,
            defaults: { duration: 0.4, opacity: 0, filter: "blur(8px)"}
        })

        tl.fromTo("#projects-message", {opacity:0 }, {opacity: 1, filter: "blur(0px)"})
        .fromTo("#projects-link", {opacity:0 }, {opacity: 1, filter: "blur(0px)"})



    }, { scope: containerRef })

    return (
        <div id="projects" className="w-[100vw] h-[100vh]" ref={containerRef}>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="px-4 hero-subtitle">
                    <div id="projects-message" className="py-2">
                        <p className="">ご覧ありがとうございます。</p>
                    </div>
                    <div id="projects-link" className="flex py-4">
                        <p className="">プロジェクトの例は</p>
                        <LinkButton className="text-gradient" href={'/projects'} text="こちら" bg={true} />
                        <p className="">になります。</p>
                    </div>
                </div>
            </div>
        </div>
    )
}