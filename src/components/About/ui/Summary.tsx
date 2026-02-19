import { TypographyH3 } from "@/components/ui/shadcn/typography/TypographyH3";
import { TypographyP } from "@/components/ui/shadcn/typography/TypographyP";
import Badge from "./Badge";
import FlagJP from "@/components/ui/svgIcon/FlagJP";
import FlagUK from "@/components/ui/svgIcon/FlagUK";

export default function Summary() {
    const BADGES = [
        {
            src: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
            alt: 'HTML5 Badge'
        }, {
            src: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
            alt: 'CSS3 Badge'
        }, {
            src: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
            alt: 'Tailwindcss Badge'
        }, {
            src: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
            alt: 'Javscript Badge'
        }, {
            src: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
            alt: 'Typescript Badge'
        }, {
            src: "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
            alt: 'React Badge'
        }, {
            src:
                "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white",
            alt: 'Next.js Badge'
        },
    ]
    return (
        <ul className="md:max-w-3xl flex flex-col gap-y-8">
            <li >
                <TypographyH3>NAME</TypographyH3>
                <h4 className="text-4xl px-4 py-2">노형래</h4>
            </li>
            <li>
                <TypographyH3>Language</TypographyH3>
                <div className="flex flex-col gap-y-4 py-4">
                    <div className="w-max flex gap-x-2 px-4 py-2">
                        <FlagJP />
                        <span className="text-2xl">
                            <TypographyP>JLPT N2</TypographyP>
                        </span>
                    </div>
                    <div className="w-max flex gap-x-2 px-4 py-2">
                        <FlagUK />
                        <span className="text-2xl">
                            <TypographyP>TOEIC 940</TypographyP>
                        </span>
                    </div>
                </div>
            </li>
            <li >
                <TypographyH3>Certificate</TypographyH3>
                <div className="w-max px-4 py-2">
                    <span className="text-2xl"><TypographyP>정보처리기사</TypographyP></span>
                </div>
            </li>
            <li >
                <TypographyH3>Experience With</TypographyH3>
                <div className="flex flex-wrap gap-2 py-4 px-8">
                    {
                        BADGES.map((item, idx) => <Badge key={idx} src={item.src} alt={item.alt} />)
                    }
                </div>

            </li>
            <li>
                <TypographyH3>Currently Learning</TypographyH3>
                <div className="flex flex-wrap gap-2 py-4 px-8">
                    <Badge src='https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white' alt="NestJS Badge" />
                </div>
            </li>
        </ul>
    )
}