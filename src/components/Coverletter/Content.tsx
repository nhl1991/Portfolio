
import { Item } from "@/lib/interface"
import React from "react"
import DescriptionText from "../ui/DescriptionText"


export function Content({ id, title, description }: {
    id: string, title: string, description: Item[] | string
}) {

    return (
        <div id={id} className={`w-full  h-max p-2 md:p-8 flex items-center justify-center relative `}>
            <div className={`w-full md:w-2/3 h-full overflow-scroll p-1  rounded-2xl`}>
                <header id="header" className="rounded-2xl p-1 md:p-2 flex items-center justify-center">
                    <h1 id="title" className="header_text p-1">{title}</h1>
                </header>
                <section id="content" className="w-full flex items-center justify-center py-4 overflow-scroll">
                    <div className="w-full h-full flex flex-col items-start justify-center p-2  rounded-2xl md:px-4 gap-2">
                        {typeof description === 'string' ?
                            <DescriptionText>{description}</DescriptionText> :
                            <div className="p-2 items-center flex">
                                <div className="flex flex-col items-end justify-center p-2">
                                    <ul className="p-1 flex flex-col gap-4">
                                        {
                                            description.map((item, i) => {
                                                return <li key={i}>
                                                    <div className="w-max px-1 py-0.5 text-2xl rounded-xl md:rounded-2xl bg-gray-500/50 text-white">
                                                        <h2 className="list-item-title px-1 py-0.5 flex">
                                                            {item.item_title}
                                                        </h2>
                                                    </div>
                                                    <div className=" rounded-2xl px-2 py-1">
                                                        <span>
                                                            <p className="list-item-description pl-2 md:pl-4">{item.item_description}</p>
                                                        </span>
                                                    </div>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}