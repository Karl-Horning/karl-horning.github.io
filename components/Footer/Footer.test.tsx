/**
 * @fileoverview Unit tests for the Footer component.
 *
 * Verifies the brand link, navigation links, and all four social media links.
 */

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
    it("renders the brand name linking to home", () => {
        render(<Footer />);
        const brand = screen.getByRole("link", { name: "Karl Horning" });
        expect(brand).toHaveAttribute("href", "/");
    });

    it("renders all navigation links", () => {
        render(<Footer />);
        expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
        expect(
            screen.getByRole("link", { name: "Projects" })
        ).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "Blog" })).toBeInTheDocument();
        expect(
            screen.getByRole("link", { name: "Contact" })
        ).toBeInTheDocument();
    });

    it("renders the GitHub social link", () => {
        render(<Footer />);
        expect(
            screen.getByRole("link", { name: /github/i })
        ).toBeInTheDocument();
    });

    it("renders the LinkedIn social link", () => {
        render(<Footer />);
        expect(
            screen.getByRole("link", { name: /linkedin/i })
        ).toBeInTheDocument();
    });

    it("renders the CodePen social link", () => {
        render(<Footer />);
        expect(
            screen.getByRole("link", { name: /codepen/i })
        ).toBeInTheDocument();
    });

    it("renders the RSS feed link", () => {
        render(<Footer />);
        expect(
            screen.getByRole("link", { name: /rss/i })
        ).toBeInTheDocument();
    });
});
