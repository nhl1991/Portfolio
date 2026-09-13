import messages from "@messages/ko.json"
import { NextIntlClientProvider } from "next-intl"
import InfoSection from "./InfoSection"
import { render, screen } from "@testing-library/react"

describe("Testing InfoSection Component", () => {

    it("정보 섹션을 렌더링한다.",()=>{
        render(
            <NextIntlClientProvider locale="ko" messages={messages}>
                <InfoSection />
            </NextIntlClientProvider>
        )

        expect(screen.getByText("제공자")).toBeInTheDocument()
        expect(screen.getByText("카테고리")).toBeInTheDocument()
        expect(screen.getByText("호환성")).toBeInTheDocument()
        expect(screen.getByText("언어")).toBeInTheDocument()
        expect(screen.getByText("프로젝트")).toBeInTheDocument()

    })
    it("어학 정보를 렌더링한다.",()=>{
        render(
            <NextIntlClientProvider locale="ko" messages={messages}>
                <InfoSection />
            </NextIntlClientProvider>
        )

        expect(screen.getByText("JLPT N2")).toBeInTheDocument()
        expect(screen.getByText("TOEIC 940")).toBeInTheDocument()

    })


})