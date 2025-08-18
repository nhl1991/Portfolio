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
            <div className='w-[50vw] h-full shadow-xl shadow-black'>

                <div className={`w-full h-full ${item === undefined ? 'bg-black' : 'bg-white/10'} rounded-l-2xl `}>
                    <div className='w-full h-max flex items-center justify-end p-2 '>
                        <div className="w-full p-2  flex items-center justify-start">
                            <p className='text-2xl font-bold px-4 py-1'>{item?.title.toUpperCase()}</p>
                        </div>
                        {item ?
                            <div className="w-max flex items-center justify-center gap-2">
                                <LinkButton href={'https://' + item.URL} text="Website" bg={false}></LinkButton>
                                <LinkButton href={item.github} text="Github" bg={false}></LinkButton>
                            </div> : null}
                    </div>
                    {item != undefined ?
                        <div className='w-full h-full flex flex-col gap-2 items-center'>
                            <div className="w-96 h-64 relative rounded-2xl overflow-hidden" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  >
                                <Image className="object-cover" src={item.Image} alt={item.title} fill />
                                {isHover ? <div className="w-96 h-64 absolute z-50 flex items-center justify-center bg-black/90">
                                    <div className="w-full flex    items-center justify-center gap-2">
                                        <LinkButton href={'http://' + item.URL} text="Website" bg={false}></LinkButton>
                                        <LinkButton href={item.github} text="Github" bg={false}></LinkButton>
                                    </div>
                                </div> : null}
                            </div>



                            <div className="flex flex-row gap-1 items-center justify-center">

                                <div className="w-max">
                                    <ListTitle title="Language" />
                                    <ListTitle title="Framework" />
                                    <ListTitle title="Database" />
                                </div>
                                <div className="w-max">
                                    <ListItem items={item.language} />
                                    <ListItem items={item.framework} />
                                    <ListItem items={item.database} />

                                </div>


                            </div>
                            <div className="w-full  p-2 flex items-center justify-center">
                                <div className="w-2/3 h-max">
                                    <p className="px-2">{item.description}</p>
                                </div>
                            </div>
                        </div> : null}
                </div>
            </div>
        )
else
    return(
        <div className="w-[50vw] h-full flex items-center justify-center">
            <p className="text-4xl">左側のメーニュを選んでください。</p>
        </div>
    )
}

