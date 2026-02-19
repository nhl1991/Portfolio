"use client"
import NextSectionButton from "../ui/NextSectionButton"
import { TypographyH1 } from "../ui/shadcn/typography/TypographyH1"
import About from "./ui/About"
import Summary from "./ui/Summary"

export default function AboutContainer() {


    return (
        <section id="coverletter" className="w-screen min-h-screen h-screen flex flex-col items-center justify-center ">
            <div className="w-full h-full flex flex-col items-center justify-center">
                <TypographyH1>ABOUT ME</TypographyH1>
                <div className="md:max-w-7xl w-full flex md:flex-row flex-col items-center justify-center ">
                    <div className="flex items-center justify-center flex-col gap-y-4 md:max-w-[960px] px-8 py-4 rounded-xl order-2 md:order-1">
                        <About />
                    </div>
                    <div className="flex items-center justify-center flex-col gap-y-4 md:max-w-[960px] px-8 py-4 rounded-xl order-1 md:order-2">
                        <Summary />
                    </div>
                </div>
            </div>
            <div>
                <NextSectionButton targetId="projects" />
            </div>

        </section>
    )
}