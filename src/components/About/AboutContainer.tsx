"use client"
import NextSectionButton from "../ui/NextSectionButton"
import { TypographyH1 } from "../ui/shadcn/typography/TypographyH1"
import About from "./ui/About"
import Summary from "./ui/Summary"

export default function AboutContainer() {


    return (
        <section id="coverletter" className="w-screen min-h-screen flex flex-col">
            <header className="py-20">
                <TypographyH1>ABOUT ME</TypographyH1>
            </header>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="md:max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-center ">
                    <div className="flex items-center justify-center flex-col gap-y-4 md:max-w-[960px] px-8 py-4 rounded-xl ">
                        <About />
                    </div>
                    <div className="flex items-center justify-center flex-col gap-y-4 md:max-w-[960px] px-8 py-4 rounded-xl ">
                        <Summary />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <NextSectionButton targetId="projects" />
            </div>

        </section>
    )
}