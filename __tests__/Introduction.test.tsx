import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import Introduction from "@/components/Introduction/Introduction";

describe("Introduction.tsx", () => {
  it("renders a heading", () => {
    render(<Introduction />);
    // const heading = screen.getByRole("heading", { level: 1 });
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it("renders a text and fires click event", () => {
    render(<Introduction />, { hydrate: true});
    // const heading = screen.getByRole("heading", { level: 1 });
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent('こんにちは。');
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(/私は.*盧.*と申します。/);
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("どうぞよろしくお願いします。");
   
  });
  // RTL v9^는 자동으로 cleanup();
});


/**
 * Single Elements
 * getBy...: Returns the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found (use getAllBy instead if more than one element is expected).
 * queryBy...: Returns the matching node for a query, and return null if no elements match. This is useful for asserting an element that is not present. Throws an error if more than one match is found (use queryAllBy instead if this is OK).
 * findBy...: Returns a Promise which resolves when an element is found which matches the given query. The promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms. If you need to find more than one element, use findAllBy.
 */