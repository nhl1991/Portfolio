import { TypographyH1 } from "@/components/ui/shadcn/typography/TypographyH1";
import { TypographyH2 } from "@/components/ui/shadcn/typography/TypographyH2";

export default function DisplayGreet() {
  return (
    <article className="p-2 flex flex-col gap-2 text-gradient">
      <TypographyH1>
        Laslark1991&apos;s
      </TypographyH1>
      <TypographyH2>
        Portfolio
      </TypographyH2>
    </article>
  );
}
