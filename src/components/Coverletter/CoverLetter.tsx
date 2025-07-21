
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import  item  from "@/lib/coverletter.json"
import React from "react";
import { Content } from "./Content";


export default function CoverLetter() {
    const ref = useRef(null);
    const { data } = item;
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray("#coverletter > div").forEach((element) => {
            if (element instanceof HTMLDivElement) {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: "top top",
                        end: "bottom center+=100",
                        scrub: true, // 스크롤에 따라 애니메이션 진행
                        pin: true,
                        pinSpacing: false,
                        // markers: true,
                    },
                }).fromTo(element, { opacity: 0 }, { opacity: 1 }).to(element, { opacity: 0});
                // const animations = {
                //     fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
                //     fadeOut: { from: { opacity: 1 }, to: { opacity: 0 } },
                //     slideIn: { from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1 } },
                //     scaleUp: { from: { scale: 0.5 }, to: { scale: 1 } },
                // };


                // timeline.fromTo(element, index % 2 === 0 ? { x: "-100%" } : { x: "100%", }, { x: "0%" })
                // timeline.fromTo(element.querySelector("#header"), animations.fadeIn, animations.fadeOut)
                // .fromTo(element.querySelector("#content"), animations.fadeIn, animations.fadeOut)
                // .fromTo(element.querySelector("#footer"), animations.fadeIn, animations.fadeOut)
                // .to(element, { opacity: 0 })
            }
        });

    });

    return (
        <>
            <div id="coverletter" className="w-[100vw] h-max" ref={ref}>
                {
                    data && data.map((item, i) => {
                        return <Content key={i} id={`panel_${i}`} title={item.title} description={item.description} />
                    })
                }

            </div>
            
        </>
    )
}


