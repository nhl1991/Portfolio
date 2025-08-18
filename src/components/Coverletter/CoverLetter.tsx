
import { useRef, useState } from "react";
import item from "@/lib/coverletter.json"
import React from "react";
import { Content } from "./Content";


export default function CoverLetter() {
    const ref = useRef(null);
    const { data } = item;
    const [index, setIndex] = useState(0);

    return (
        <>
            <div id="coverletter" className="w-[100vw] h-[100vh]" ref={ref}>
                <div className="w-full h-max p-4 flex flex-col items-center justify-center ">
                    <div className="overflow-scroll">
                        <ul className="w-max flex p-1 md:px-2 md:text-base text-[8px]">
                            {
                                data && data.map((item, i) => {
                                    return <li key={i} className=" px-1">
                                        <div className={`rounded-2xl md:px-4 px-2 py-2 font-bold hover:bg-sky-600 dark:hover:bg-white/80 hover:text-black transition-colors duration-150 delay-100 ${i === index ? 'dark:bg-white bg-sky-600 text-white  dark:text-black' : 'bg-slate-600/30'}`}>
                                            <button type="button" className="w-full h-full cursor-pointer" onClick={() => setIndex(i)} >
                                                {item.title}
                                            </button>
                                        </div>
                                    </li>
                                })
                            }
                            <li className="px-1">
                                <div className={`rounded-2xl md:px-4 px-2 py-2 font-bold hover:bg-white/80 hover:text-black transition-colors duration-150 delay-100 bg-slate-600/30`} >
                                    <button type="button" className="w-full h-full cursor-pointer" onClick={() => {
                                        document.getElementById("projects")?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                    }} >
                                        プロゼェくトを見る
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full h-max flex ">

                        <Content id={`panel`} title={data[index].title} description={data[index].description} />

                    </div>




                </div>
            </div>
        </>
    )
}


