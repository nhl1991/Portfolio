
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import IntroductionWrapper from "./IntroduceContainer";
import { useRef } from "react";


gsap.registerPlugin(useGSAP);

//Component for Intro
export default function Introduction() {

    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        const tl = gsap.timeline({
            onComplete: () => { gsap.delayedCall(0.5, scrollTo) },
            defaults: { duration: 1, ease: "power1.in" }

        })


        tl.fromTo("#intro_1", { opacity: 0 }, { opacity: 1 })
            .fromTo("#intro_2", { opacity: 0 }, { opacity: 1 })
            .fromTo("#intro_3", { opacity: 0 }, { opacity: 1 }).call(scrollTo, undefined, "+=2")


    }, { scope: containerRef })

    function scrollTo() {
        document.getElementById("coverletter")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    return (
        <>
            <div ref={containerRef} id="first" className="w-[100vw] h-[100vh]">
                <IntroductionWrapper>
                    <div className="text-xl md:text-4xl p-2 text-gradient flex flex-col gap-4">
                        <p id="intro_1" className="text-6xl text-center">こんにちは。</p>
                        <p id="intro_2">私は<b className="text-5xl"><ruby>盧<rp>(</rp><rt>ノ</rt><rp>)</rp>亨<rp>(</rp><rt>ヒョン</rt><rp>)</rp>來<rp>(</rp><rt>レ</rt><rp>)</rp></ruby></b>と申します。</p>
                        <p id="intro_3">どうぞよろしくお願いします。</p>
                    </div>
                    {/* <div id="intro_4" className="hover:cursor-pointer rounded-2xl px-1 md:py-2">
                        <div className="flex items-center justify-center p-1 rounded-2xl ">
                            <div className="hover:animate-none h-full flex items-center justify-center px-2 text-black hover:text-white hover:bg-sky-600/50 rounded-2xl transition-colors duration-200">
                                <label className="px-4 py-0.5  cursor-pointer flex items-center justify-center h-max w-max text-xl md:text-4xl" htmlFor="scrollTo">
                                    詳しく見る
                                    <svg className="w-6 md:w-8 animate-pulse " data-slot="icon" fill="currentcolor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M7.47 12.78a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 0 0-1.06-1.06L8 11.19 5.28 8.47a.75.75 0 0 0-1.06 1.06l3.25 3.25ZM4.22 4.53l3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 0 0-1.06-1.06L8 6.19 5.28 3.47a.75.75 0 0 0-1.06 1.06Z" />
                                    </svg>
                                </label>
                                <button id="scrollTo" className="hidden" onClick={scrollTo} />
                            </div>
                        </div>

                    </div> */}
                    {/* <Link id="scrollToCoverletter" href="#coverletter" scroll={true}>GO!</Link> */}
                </IntroductionWrapper>

            </div>

        </>
    )
}