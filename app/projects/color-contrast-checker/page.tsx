import type { Metadata } from "next";
import { meta } from "./meta";
import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";

export const metadata: Metadata = {
    title: meta.title,
    description: meta.description,
};

/**
 * Color Contrast Checker project page.
 *
 * @return The project page element.
 */
export default function Page() {
    return (
        <ProjectLayout meta={meta}>
            <p>
                I built this because I wanted a contrast checker I could use
                quickly on my phone without fighting a cluttered interface.
                WebAIM&apos;s checker is the industry standard, but I find it
                visually overwhelming — I wanted something simpler.
            </p>
            <p>
                The tool checks text and background color combinations against
                WCAG AA and AAA requirements and gives a clear pass/fail result.
                It works offline as an installed PWA, which is how I use it day
                to day.
            </p>
            <p>
                The main design challenge wasn&apos;t technical — it was laying out
                the color inputs, results, and live preview so that everything
                remained readable and usable across screen sizes. I went through
                a few iterations before landing on something I was happy with.
            </p>
            <p>
                One deliberate decision: the dark mode toggle overrides your
                system theme rather than following it. A contrast checker that
                locks you into your system&apos;s background color can interfere with
                the task — if you&apos;re checking colors for a dark interface, you
                want to see them on a dark background.
            </p>
            <p>
                Scores a perfect 100 across Performance, Accessibility, Best
                Practices, and SEO on Lighthouse.
            </p>
        </ProjectLayout>
    );
}
