
import { TypographyH3 } from "@/components/ui/shadcn/typography/TypographyH3";
import { TypographyP } from "@/components/ui/shadcn/typography/TypographyP";
import { useTranslations } from "next-intl";

interface ABOUT {
    title: string,
    content: string
}

export default function About() {
    const t = useTranslations()
    const about = t.raw('about');
    return (
        <ul className="md:max-w-3xl flex flex-col gap-y-8">
            {
                about.map((item:ABOUT, idx: number)=>{
                    return <li key={idx}>
                <TypographyH3>{item.title}</TypographyH3>
                <TypographyP>{item.content}
                </TypographyP>
            </li>
                })
            }
        </ul>
    )
}