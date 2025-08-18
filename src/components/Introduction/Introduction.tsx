
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import IntroductionWrapper from "./IntroduceContainer";
import Link from "next/link";


//Component for Intro
export default function Introduction() {

    useGSAP(() => {
        // Create a timeline
        let tl = gsap.timeline({
            delay: 0.5,
            paused: false, // default is false
            defaults: {
                // children inherit these defaults
                duration: 1,
                ease: 'none'
            },
            smoothChildTiming: true,
            autoRemoveChildren: true,
            onComplete: () => {
                console.log('Finished.')
            },
            // other callbacks:
            // onStart, onUpdate, onRepeat, onReverseComplete
        });
        const animations = {
            fadeOut: {
                opacity: 0,
            },
            fadeIn: {
                opacity: 1
            },
            visibleTrue: {
                display: 'flex',
                opacity: 0,
            },
            visibleFalse: {
                display: 'none',
            }
        };
        // const introIds = ['#intro_1', '#intro_2', '#intro_3', '#intro_4'];
        // introIds.forEach(id => {
        //     if(id != '#intro_4')
        //         tl.to(id, animations.visibleTrue)
        //             .fromTo(id, animations.fadeOut, animations.fadeIn).to(id,animations.fadeOut)
        //             .fromTo(id, animations.visibleTrue, animations.visibleFalse)
        //             else
        //                 tl.to(id, animations.visibleTrue)
        //             .fromTo(id, animations.fadeOut, animations.fadeIn)
        // });

    })

    return (
        <>
            <div id="first" className="w-[100vw] h-[100vh]">
                <IntroductionWrapper>
                    <div className="text-xl md:text-4xl p-2">
                        <p id="intro_1">こんにちは。</p>
                        <p id="intro_2">僕は<ruby>盧<rp>(</rp><rt>ノ</rt><rp>)</rp>亨<rp>(</rp><rt>ヒョン</rt><rp>)</rp>來<rp>(</rp><rt>レ</rt><rp>)</rp></ruby>と申します。</p>
                        <p id="intro_3">どうぞよろしくお願いします。</p>
                    </div>
                    <div id="intro_4" className="hover:cursor-pointer rounded-2xl px-1 md:py-2">
                        <div className="flex items-center justify-center p-1 rounded-2xl ">
                            <div className=" animate-pulse hover:animate-none h-full flex items-center justify-center px-2 ">
                                <button id="scrollTo" className="px-4 py-0.5 bg-sky-600 hover:bg-sky-600/80 rounded-2xl text-white cursor-pointer flex items-center justify-center h-max w-max text-xl md:text-4xl" onClick={() => {
                                    document.getElementById("coverletter")?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                                }}>詳しく見る 
                                </button>
                                <svg className="w-6 md:w-8 " data-slot="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M7.47 12.78a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 0 0-1.06-1.06L8 11.19 5.28 8.47a.75.75 0 0 0-1.06 1.06l3.25 3.25ZM4.22 4.53l3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 0 0-1.06-1.06L8 6.19 5.28 3.47a.75.75 0 0 0-1.06 1.06Z" />
                                    </svg>
                            </div>
                        </div>

                    </div>
                    {/* <Link id="scrollToCoverletter" href="#coverletter" scroll={true}>GO!</Link> */}
                </IntroductionWrapper>

            </div>

        </>
    )
}