import { render, screen } from "@testing-library/react"
import Contact from "./Contact"
import messages from "@messages/ko.json"
import { NextIntlClientProvider } from "next-intl"
// jest.mock("next-intl", () => ({
//     useTranslations: () => (key: string) => key,
// }));
describe("Testing Contact Component", () => {
    it("헤딩을 표시한다.", () => {
        render(
            <NextIntlClientProvider locale="ko" messages={{ contact: { title: '연락처' } }}>
                <Contact />
            </NextIntlClientProvider>)
        expect(
            screen.getByRole("heading", {
                level: 2,
                name: "연락처",
            })
        ).toBeInTheDocument();
    })

    it("헤딩, 이메일주소와 깃허브 주소를 표시한다.", () => {

        render(
            <NextIntlClientProvider locale="ko" messages={messages}>
                <Contact />
            </NextIntlClientProvider>
        )
        expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "GitHub" })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "laslark1991@gmail.com" })).toBeInTheDocument();
    })

    it("각 <Link>의 href를 검증한다.", () => {

        const GITHUB_URL = "https://github.com/nhl1991";
        const EMAIL = "laslark1991@gmail.com";
        render(
            <NextIntlClientProvider locale="ko" messages={messages}>
                <Contact />
            </NextIntlClientProvider>
        )


        expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute('href', GITHUB_URL)
        expect(screen.getByRole("link", { name: "laslark1991@gmail.com" })).toHaveAttribute('href', `mailto:${EMAIL}`)
    })

})