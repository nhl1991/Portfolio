import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Introduction from "@/components/Introduction/Introduction";

describe("Introduction.tsx", () => {
  it("renders the greeting headings and the scroll button", () => {
    render(<Introduction />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Laslark1991's"
    );
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Portfolio"
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
