import { TypographyH3 } from "@/components/ui/shadcn/typography/TypographyH3";
import { TypographyP } from "@/components/ui/shadcn/typography/TypographyP";

export default function About() {

    return (
        <ul className="md:max-w-3xl flex flex-col gap-y-8">
            <li>
                <TypographyH3>1. UI/UX 디자인</TypographyH3>
                <TypographyP>웹 개발을 처음 접했을 때, 다른 언어에 비해 결과가 즉각적으로 시각화된다는 점에서 큰 흥미를 느꼈습니다.
                    단순히 기능을 구현하는 것을 넘어, 사용자가 직관적으로 이해하고 편리하게 사용할 수 있는 인터페이스를 설계하는 과정에 매력을 느끼게 되었습니다. 이후 프로젝트를 진행하며 사용자 경험을 고려한 화면 구성과 흐름 설계에 꾸준히 관심을 가지고 학습하고 있습니다.
                </TypographyP>
            </li>
            <li>
                <TypographyH3>
                    2. 리팩토링
                </TypographyH3>
                <TypographyP>여러 개인 프로젝트를 진행하면서 “더 나은 구조는 없을까?”, “가독성을 높일 수 있는 방법은 무엇일까?”를 지속적으로 고민하게 되었습니다.
                    그 과정에서 코드의 동작뿐만 아니라 유지보수성과 확장성을 고려하는 습관이 형성되었고, 불필요한 중복 제거, 책임 분리, 명확한 네이밍 등 코드 품질 개선에 대한 관심이 높아졌습니다. 앞으로도 기능 구현을 넘어, 지속 가능한 코드 작성에 집중하고자 합니다.
                </TypographyP>
            </li>
            <li>
                <TypographyH3>
                    3. 백엔드 및 풀스택 역량 확장</TypographyH3>
                <TypographyP>  현재는 프론트엔드 개발에 집중하고 있으나, 장기적으로는 프론트엔드와 백엔드를 모두 이해하는 풀스택 엔지니어로 성장하는 것을 목표로 하고 있습니다.
                    Firebase를 활용하여 인증 및 데이터 관리 기능을 구현해본 경험이 있으며, 향후 Prisma와 PostgreSQL을 학습하여 보다 구조화된 데이터 설계 및 서버 사이드 로직 구현 역량을 강화할 계획입니다.
                </TypographyP>
            </li>
        </ul>
    )
}