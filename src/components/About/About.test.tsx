import { render, screen } from "@testing-library/react"
import About from "./About"
import { NextIntlClientProvider } from "next-intl";

import messages from "../../../messages/ko.json";
describe('Testing About Component', () => {

    it("about 섹션을 렌더링한다.", () => {
        render(

            <NextIntlClientProvider locale="ko" messages={messages}>
                <About />
            </NextIntlClientProvider>);
        const heading = screen.getByRole("heading", { level: 2 })
        expect(heading).toHaveTextContent('ABOUT');
        expect(heading).toBeInTheDocument();
        expect(screen.getAllByRole("article")).toHaveLength(3);

    })
})