/**
 * @fileoverview Unit tests for the CtaStrip call-to-action section.
 */

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LINKEDIN_URL } from "@/lib/constants/links";
import CtaStrip from "./CtaStrip";

describe("CtaStrip", () => {
    it("renders the section heading", () => {
        render(<CtaStrip />);
        // The h2 text is split across two spans with no whitespace between them,
        // so the accessible name is "Like whatyou see?" — match on the first word.
        expect(
            screen.getByRole("heading", { name: /like what/i })
        ).toBeInTheDocument();
    });

    it("renders the LinkedIn link with the correct href", () => {
        render(<CtaStrip />);
        const link = screen.getByRole("link", { name: /connect on linkedin/i });
        expect(link).toHaveAttribute("href", LINKEDIN_URL);
    });

    it("renders the contact link", () => {
        render(<CtaStrip />);
        expect(
            screen.getByRole("link", { name: /send a message/i })
        ).toBeInTheDocument();
    });

    it("opens the LinkedIn link in a new tab", () => {
        render(<CtaStrip />);
        const link = screen.getByRole("link", { name: /connect on linkedin/i });
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
});
