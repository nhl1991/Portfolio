
import { Item } from "@/lib/interface"
import React from "react"

export function CoverLetterItem({ id, title, description }: {
    id: string, title: string, description: Item[]
}) {

    return (
        <div id={id} className={`w-full h-full rounded-2xl shadow-md lg:shadow-lg bg-coverletter shadow-gray-400 dark:shadow-gray-900 relative`}>
            <header id="header" className="text-center font-bold p-1 lg:p-4">
                <h1 id="title" className="header_text">{title}</h1>
            </header>
            <section id="content" className="w-full  flex flex-col items-center justify-center overflow-scroll">

                <ul className="w-full flex flex-col gap-0.5 md:gap-1">
                    {
                        description.map((item, i) => {

                            return <React.Fragment key={i}>
                                <li className="w-full p-1">
                                    <div className="w-max ">
                                        <h2 className="list-item-title">
                                            {item.item_title}
                                        </h2>
                                    </div>
                                    <div className="px-2">
                                        <span>
                                            <p className="list-item-description">{item.item_description}</p>
                                        </span>
                                    </div>
                                </li>
                            </React.Fragment>
                        })
                    }
                </ul>
            </section>
        </div>
    )
}