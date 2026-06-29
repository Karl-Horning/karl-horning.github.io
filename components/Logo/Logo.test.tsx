/**
 * @fileoverview Unit tests for the Logo component.
 */

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Logo from "./Logo";

describe("Logo", () => {
    it("renders a link to the home page", () => {
        render(<Logo />);
        const link = screen.getByRole("link", { name: "Karl Horning" });
        expect(link).toHaveAttribute("href", "/");
    });

    it("includes the data-text attribute used by the glitch effect", () => {
        render(<Logo />);
        const link = screen.getByRole("link", { name: "Karl Horning" });
        expect(link).toHaveAttribute("data-text", "Karl Horning");
    });

    it("forwards tabIndex to the anchor element", () => {
        render(<Logo tabIndex={-1} />);
        const link = screen.getByRole("link", { name: "Karl Horning" });
        expect(link).toHaveAttribute("tabindex", "-1");
    });
});
