import { Item } from "@/lib/interface"
import React from "react"
import DescriptionText from "../ui/DescriptionText"


export function Content({ id, title, description }: {
    id: string, title: string, description: Item[] | string
}) {

    return (
        <div id={id} className={`w-full h-[100vh] rounded-2xl p-2 md:p-12 flex items-center justify-center relative`}>
            <div className={`w-full h-max`}>
                <header id="header" className="w-full h-max p-2 md:p-4 flex items-center justify-center">
                    <h1 id="title" className="header_text">{title}</h1>
                </header>
                <section id="content" className="w-full flex items-center justify-center py-12">
                    <div className="w-full h-full flex justify-center flex-col px-2 md:px-4">
                        {typeof description === 'string' ?
                                    <DescriptionText>{description}</DescriptionText> :
                            description.map((item, i) => {
                                return <React.Fragment key={i}>
                                    <h1 className="list-item-title text-left px-2">{item.item_title}</h1>
                                    <DescriptionText>{item.item_description}</DescriptionText>
                                </React.Fragment>
                            })}
                    </div>
                </section>
                <footer id="footer" className="w-full h-max flex gap-5 items-center justify-center">

                </footer>
            </div>
        </div>
    )
}