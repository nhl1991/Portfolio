
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useRef } from "react";


gsap.registerPlugin(useGSAP);

//Component for Intro
export default function Introduction() {

    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => { gsap.delayedCall(2, scrollTo) },
            defaults: { duration: 0.5, ease: "none", opacity: 0 },
            delay: 1
        })

        tl.fromTo("#intro_1", { opacity: 0 }, { opacity: 1 })
            .fromTo("#intro_2", { opacity: 0 }, { opacity: 1 })
            .fromTo("#intro_3", { opacity: 0 }, { opacity: 1 })
    }, { scope: containerRef })

    function scrollTo() {
        document.getElementById("coverletter")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    return (
        <div ref={containerRef} id="first" className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
            <div className="text-xl md:text-4xl p-2  flex flex-col gap-4">
                <p id="intro_1" className="text-gradient hero-title">こんにちは。</p>
                <p id="intro_2" className="text-gradient hero-subtitle">私は<b className=""><ruby>盧<rp>(</rp><rt>ノ</rt><rp>)</rp>亨<rp>(</rp><rt>ヒョン</rt><rp>)</rp>來<rp>(</rp><rt>レ</rt><rp>)</rp></ruby></b>と申します。</p>
                <p id="intro_3" className="text-gradient hero-subtitle">どうぞよろしくお願いします。</p>
            </div>
        </div>
    )
}