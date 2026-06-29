/**
 * @fileoverview Unit tests for the Projects section component.
 *
 * Verifies that all published projects are rendered with correct headings and links.
 */

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PROJECTS } from "@/lib/projects";
import Projects from "./Projects";

const published = PROJECTS.filter((p) => !p.draft);

describe("Projects", () => {
    it("renders the section heading", () => {
        render(<Projects />);
        expect(
            screen.getByRole("heading", { name: "Projects" })
        ).toBeInTheDocument();
    });

    it("has id='projects' for anchor navigation", () => {
        const { container } = render(<Projects />);
        expect(container.querySelector("#projects")).toBeInTheDocument();
    });

    it("renders a list item for each published project", () => {
        render(<Projects />);
        for (const project of published) {
            expect(
                screen.getByRole("heading", { name: project.title })
            ).toBeInTheDocument();
        }
    });

    it("renders a 'View' link for each published project", () => {
        render(<Projects />);
        const viewLinks = screen.getAllByRole("link", { name: /view/i });
        expect(viewLinks).toHaveLength(published.length);
    });

    it("links each project to its correct slug path", () => {
        render(<Projects />);
        for (const project of published) {
            expect(
                screen.getByRole("link", {
                    name: `View ${project.title} project`,
                })
            ).toHaveAttribute("href", `/projects/${project.slug}`);
        }
    });
});
