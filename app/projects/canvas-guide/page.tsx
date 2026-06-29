import type { Metadata } from "next";
import { meta } from "./meta";
import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";

export const metadata: Metadata = {
    title: meta.title,
    description: meta.description,
};

/**
 * Canvas Content Styling Guide project page.
 *
 * @return The project page element.
 */
export default function Page() {
    return (
        <ProjectLayout meta={meta}>
            <p>
                While leading technical evaluations for enterprise LMS
                infrastructure at Imperial College London, Canvas was selected
                as the platform. Looking at how other institutions and resources
                like Medium approached Canvas styling, I noticed the same
                problems recurring: missing semantic tags, poor colour contrast,
                overuse of legacy elements that could break at any point, and
                layouts that fell apart on mobile.
            </p>
            <p>
                I built a Canvas course to document best practices and give
                colleagues a reference they could copy from directly — HTML and
                CSS patterns that worked within Canvas&apos;s constraints,
                written for educators with no coding background. No framework
                knowledge required; every example is self-contained and
                copy-paste ready.
            </p>
            <p>
                When I moved jobs, I extracted the content into a standalone
                documentation site so staff at other institutions could benefit
                from it. The move also made it possible to improve on what
                Canvas itself cannot provide: light/dark mode, syntax-highlighted
                code blocks with a copy button, and a filterable icon reference.
                The original Canvas course had the full icon set but no way to
                search it — the standalone site fixes that.
            </p>
        </ProjectLayout>
    );
}
