import { TypographyH3 } from "@/components/ui/shadcn/typography/TypographyH3";
import { TypographyP } from "@/components/ui/shadcn/typography/TypographyP";

export default function AboutArticle({ title, content }: { title: string, content: string }) {

    return (
        <>
            <div className="w-max px-4 py-2 rounded-xl bg-blue-900">
                <TypographyH3>{title}</TypographyH3>
            </div>
            <TypographyP>
                {content}
            </TypographyP>
        </>
    )


}