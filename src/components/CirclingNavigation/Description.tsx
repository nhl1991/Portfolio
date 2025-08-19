'use client'
import { useStore } from "../../lib/stores";
import Image from "next/image";
import { ListItem } from "./ui/ItemContainer";
import { ListTitle } from "./ui/ItemTitle";
import { useState } from "react";
import LinkButton from "../ui/LinkButton";

export default function Description() {

    const { item } = useStore();

    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = () => {
        setIsHover(true);
    }
    const onMouseLeave = () => {
        setIsHover(false);
    }

    if (item !== undefined)
        return (
            <div className='w-[50vw] h-full shadow-xl shadow-black overflow-scroll'>
                <div className={`w-full h-full ${item === undefined ? 'bg-black' : 'bg-white/10'} rounded-l-2xl `}>
                    <div className='w-full h-max flex items-center justify-end p-2 md:text-2xl'>
                        <div className="w-full p-2  flex items-center justify-start">
                            <p className=' font-bold px-4 py-1'>{item?.title.toUpperCase()}</p>
                        </div>
                        {item ?
                            <div className="w-max flex items-center justify-center gap-2">
                                <div className="bg-sky-600 rounded-xl md:rounded-2xl py-1 px-2">
                                    <LinkButton href={'https://' + item.URL} text="Website" bg={false}></LinkButton>
                                </div>
                                <div className="bg-sky-600 rounded-xl md:rounded-2xl py-1 px-2">
                                    <LinkButton href={item.github} text="Github" bg={false}></LinkButton>
                                </div>
                            </div> : null}
                    </div>
                    {item != undefined ?
                        <div className='w-full h-full flex flex-col gap-2 items-center '>
                            <div className="w-full h-1/2  p-8 flex items-center justify-center ">
                            <div className="md:min-w-[480px] md:min-h-[260px] h-full aspect-[16/9] relative rounded-2xl overflow-hidden " onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  >
                                <Image className="object-cover" src={item.Image} alt={item.title} fill sizes="(max-width: 100vw), 33vw" />
                                {isHover ? <div className="w-full h-full absolute z-50 flex items-center justify-center bg-black/90">
                                    <div className="w-full flex    items-center justify-center gap-2">
                                        <LinkButton href={'http://' + item.URL} text="Website" bg={false}></LinkButton>
                                        <LinkButton href={item.github} text="Github" bg={false}></LinkButton>
                                    </div>
                                </div> : null}
                            </div>
                            </div>



                            <div className="flex flex-row gap-1 items-center justify-center md:text-sm lg:text-xl">

                                <div className="w-max ">
                                    <ListTitle title="Language" />
                                    <ListTitle title="Framework" />
                                    <ListTitle title="Database" />
                                </div>
                                <div className="w-max ">
                                    <ListItem items={item.language} />
                                    <ListItem items={item.framework} />
                                    <ListItem items={item.database} />

                                </div>


                            </div>
                            <div className="w-full  p-2 flex items-center justify-center">
                                <div className="">
                                    <p className="w-[32rem] px-2 md:text-xl 2xl:text-2xl">{item.description}</p>
                                </div>
                            </div>
                        </div> : null}
                </div>
            </div>
        )
    else
        return (
            <div className="w-[50vw] h-full flex items-center justify-center">
                <p className="text-4xl">左側のメーニュを選んでください。</p>
            </div>
        )
}

