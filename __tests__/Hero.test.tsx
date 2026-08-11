import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";

import Hero from "@/components/AppHeader/ui/Hero";
import messages from "../messages/ko.json";

describe("Hero.tsx", () => {
  it("renders the name heading, subtitle, and contact CTA", () => {
    render(
      <NextIntlClientProvider locale="ko" messages={messages}>
        <Hero />
      </NextIntlClientProvider>
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      messages.summary.name
    );
    expect(screen.getByText(messages.appHeader.subtitle)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: messages.appHeader.ctaContact })
    ).toHaveAttribute("href", "#contact");
  });
});
