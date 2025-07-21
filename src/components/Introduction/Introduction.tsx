
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import IntroduceContainer from "./IntroduceContainer";


//Component for Intro
export default function Introduction() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray("#first > div").forEach((element, index) => {
            if (element instanceof HTMLDivElement && index != 0) {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: "top top",
                        end: "bottom center",
                        scrub: true, // 스크롤에 따라 애니메이션 진행
                        pin: true,
                        pinSpacing: false,
                    },
                }).fromTo(element, { opacity: 0, delay: 3 }, { opacity: 1 }).to(element, { opacity: 0});
            }else {
                gsap.fromTo(element as HTMLDivElement, { opacity: 0},{ opacity: 1, delay: 1, duration: 3});
            }
        })
    });

    return (
        <>
            <div id="first" className="w-[100vw] h-[400vh] text-center">
                <IntroduceContainer>こんにちは。
                    <p className="text-sm p-8">下側へスクロールを続けてください。</p>
                    {/* <button onClick={handleScrollButton} className="text-xl p-2">「こんにちは」と言う。</button> */}
                </IntroduceContainer>
                <IntroduceContainer>僕は<ruby>盧<rp>(</rp><rt>ノ</rt><rp>)</rp>亨<rp>(</rp><rt>ヒョン</rt><rp>)</rp>來<rp>(</rp><rt>レ</rt><rp>)</rp></ruby>と申します。</IntroduceContainer>
                <IntroduceContainer>どうぞよろしくお願いします。</IntroduceContainer>
                <IntroduceContainer>それでは自己紹介を始まります。</IntroduceContainer>

            </div>

        </>
    )
}