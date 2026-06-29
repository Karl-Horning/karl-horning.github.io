/**
 * @fileoverview Unit tests for the About section component.
 */

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import About from "./About";

describe("About", () => {
    it("renders the section heading", () => {
        render(<About />);
        expect(
            screen.getByRole("heading", { name: "About" })
        ).toBeInTheDocument();
    });

    it("renders the profile photo with descriptive alt text", () => {
        render(<About />);
        expect(
            screen.getByAltText("Karl Horning, full-stack developer")
        ).toBeInTheDocument();
    });

    it("has id='about' for anchor navigation", () => {
        const { container } = render(<About />);
        expect(container.querySelector("#about")).toBeInTheDocument();
    });

    it("mentions King's College London", () => {
        render(<About />);
        expect(
            screen.getByText(/King's College London/i)
        ).toBeInTheDocument();
    });
});
