/**
 * @fileoverview Unit tests for the Hero section component.
 */

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LINKEDIN_URL } from "@/lib/constants/links";
import Hero from "./Hero";

describe("Hero", () => {
    it("renders the site owner's name in the h1", () => {
        render(<Hero />);
        const heading = screen.getByRole("heading", { level: 1 });
        expect(heading.textContent).toContain("Karl");
        expect(heading.textContent).toContain("Horning");
    });

    it("renders the 'View my work' CTA", () => {
        render(<Hero />);
        expect(
            screen.getByRole("link", { name: /view my work/i })
        ).toBeInTheDocument();
    });

    it("renders the LinkedIn link with the correct href", () => {
        render(<Hero />);
        const link = screen.getByRole("link", { name: /linkedin/i });
        expect(link).toHaveAttribute("href", LINKEDIN_URL);
    });

    it("renders an Introduction landmark region", () => {
        render(<Hero />);
        expect(
            screen.getByRole("region", { name: "Introduction" })
        ).toBeInTheDocument();
    });

    it("includes the hero-rule sentinel for scroll detection", () => {
        const { container } = render(<Hero />);
        expect(container.querySelector("#hero-rule")).toBeInTheDocument();
    });
});
