/**
 * @fileoverview Unit tests for the Nav component.
 *
 * Covers desktop navigation links and hamburger menu accessibility attributes.
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Nav from "./Nav";

describe("Nav", () => {
    it("renders all navigation links", () => {
        render(<Nav />);
        expect(
            screen.getAllByRole("link", { name: "About" }).length
        ).toBeGreaterThan(0);
        expect(
            screen.getAllByRole("link", { name: "Projects" }).length
        ).toBeGreaterThan(0);
        expect(
            screen.getAllByRole("link", { name: "Blog" }).length
        ).toBeGreaterThan(0);
        expect(
            screen.getAllByRole("link", { name: "Contact" }).length
        ).toBeGreaterThan(0);
    });

    it("renders the hamburger button with aria-expanded='false' initially", () => {
        render(<Nav />);
        expect(
            screen.getByRole("button", { name: "Open navigation menu" })
        ).toHaveAttribute("aria-expanded", "false");
    });

    it("toggles aria-expanded when the hamburger is clicked", async () => {
        render(<Nav />);
        const openButton = screen.getByRole("button", {
            name: "Open navigation menu",
        });
        await userEvent.click(openButton);
        expect(
            screen.getByRole("button", { name: "Close navigation menu" })
        ).toHaveAttribute("aria-expanded", "true");
    });

    it("marks the hamburger as aria-controls='mobile-nav'", () => {
        render(<Nav />);
        expect(
            screen.getByRole("button", { name: "Open navigation menu" })
        ).toHaveAttribute("aria-controls", "mobile-nav");
    });
});
