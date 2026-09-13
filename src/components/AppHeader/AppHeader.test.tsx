import { render, screen } from "@testing-library/react"
import { NextIntlClientProvider } from "next-intl"
import messages from "@messages/ko.json"
import AppHeader from "./AppHeader"

// useRouter Mock : https://www.reddit.com/r/nextjs/comments/1f3n6hc/jest_unit_testing/?tl=ko
jest.mock('next/navigation', () => ({
    useRouter:
        jest.fn().mockReturnValue({
            push: jest.fn(),
            replace: jest.fn(),
            prefetch: jest.fn(), pathname: '/', query: {}, asPath: '/',
        }),
    usePathname: jest.fn(() => '/'),
    useSearchParams: jest.fn(() => ({})),
    refresh: jest.fn(),
}))

describe("App Header Test", () => {

    it("App Header를 렌더링한다.", () => {
        render(
            <NextIntlClientProvider locale="ko" messages={messages}>
                <AppHeader />
            </NextIntlClientProvider>
        )
        const header = screen.getByRole('banner')
        expect(header).toBeInTheDocument();
        expect(header).toHaveTextContent('nhl1991');

    })

})