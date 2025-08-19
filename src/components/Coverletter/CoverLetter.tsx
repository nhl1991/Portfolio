import item from "@/lib/coverletter.json"
import { CoverLetterItem } from "./CoverLetterItem";
// import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function CoverLetter() {
    const { data } = item;
    const containerRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
            },
            delay: 1,
            defaults: { duration: 0.4, opacity: 0, x: 100 }
        })

        // tl.fromTo("#profile-image", { opacity: 0 }, { opacity: 1 })
        const items: Array<HTMLDivElement> = gsap.utils.toArray("#coverletter-container > div", containerRef.current) as HTMLDivElement[];
        items.forEach((selector) => {
            tl.fromTo(
                selector, // type TweenTarget = string | object | null; 
                { opacity: 0 },
                { opacity: 1, delay: 0.1 }
            );
        });
        tl.fromTo("#button-next-container", { y: 100 }, { opacity: 1, y: 0 })


    }, { scope: containerRef })

    const handleOnClick = () => {
        document.getElementById("projects")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    return (
        <>
            <div id="coverletter" className="w-screen flex min-h-screen items-center justify-center" ref={containerRef} >
                <div className="w-full h-full flex flex-col items-center justify-center">
                    {/* <div className="w-full h-max flex items-center justify-center p-4">
                        <div id="profile-image" className="min-w-64 min-h-64 rounded-full relative overflow-hidden">
                            <Image src="/src/profile-image/profile.jpeg" className="object-cover" fill sizes="(max-width: 100vw) 50vw" alt="profile" />
                        </div>
                    </div> */}
                    <div>
                        <div id="coverletter-container" className="w-full max-w-[1920px] h-max flex flex-col md:grid grid-cols-[repeat(4,minmax(240px,640px))] gap-2 md:gap-4 lg:gap-8 grid-rows-1 p-2">

                            {data ? data.map((item, idx) => {
                                return <CoverLetterItem key={idx} id={`item-container-${idx}`} title={item.title} description={item.description} />;
                            }) : null
                            }
                        </div>
                    </div>
                    {/* <div className="w-full h-16 bg-red-200"></div> */}
                    <div id="button-next-container" className="p-2">
                        <div className="rounded-4xl p-4 text-white bg-sky-500 hover:bg-sky-400">
                            <button className="text-xl 2xl:text-4xl cursor-pointer" onClick={handleOnClick}>次へ進む</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


