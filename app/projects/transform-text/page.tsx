import type { Metadata } from "next";
import { meta } from "./meta";
import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";

export const metadata: Metadata = {
    title: meta.title,
    description: meta.description,
};

/**
 * Transform Text Extension project page.
 *
 * @return The project page element.
 */
export default function Page() {
    return (
        <ProjectLayout meta={meta}>
            <p>
                macOS and Safari have a native <strong>Transform</strong> option
                in the right-click context menu — uppercase, lowercase, and
                title case built directly into the OS. Chromium-based browsers
                and Firefox have no equivalent. Every time I switched browsers,
                that feature was gone.
            </p>
            <p>
                I had already built{" "}
                <a
                    href={meta.links[4].href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Transform Text
                </a>{" "}
                — a single-page React application covering the transformations I
                used most: formatting strings for file names, function names,
                API payloads, and JSON bodies. The logic was written, tested,
                and working. The missing piece was surface area — it needed to
                be available everywhere, not just in a browser tab.
            </p>
            <p>
                This project was also my first deliberate experiment using
                generative AI as a coding partner. I had seen a talk by
                developers at Microsoft on integrating AI into their daily
                workflow and wanted to test the same approach on a real, bounded
                project. The scope made it a good candidate — the transformation
                logic was already written, requirements were clear, and I could
                review every output critically.
            </p>
            <p>
                Before writing a line of extension code, I reviewed the existing
                repo. The review surfaced real issues: a function named in
                PascalCase inconsistent with every other export, a circular test
                where the expected value used the same logic as the function
                under test, a non-deterministic test that could fail by chance,
                and missing explicit return types on several functions. All were
                fixed and committed before anything was ported across.
            </p>
            <p>
                The extension is built with TypeScript compiled by esbuild,
                tested with Vitest, and follows Manifest V3. The initial
                implementation used <code>&lt;all_urls&gt;</code> in the content
                scripts, which triggered a broad host permissions warning during
                Chrome Web Store submission. Rather than accepting the warning,
                I refactored to use <code>chrome.scripting.executeScript</code>{" "}
                with <code>activeTab</code> — injecting the replacement script
                only when the user explicitly triggers a transformation. One
                transformation, <strong>Trim Whitespace</strong>, came from
                Claude during planning — a useful addition I hadn&apos;t
                considered.
            </p>
            <p>
                Firefox support was added in v1.1.0 via{" "}
                <code>webextension-polyfill</code> — it required source code
                submission alongside the built ZIP and additional manifest
                declarations Chrome didn&apos;t need.
            </p>
            <p>
                The extension was approved first time on all three stores —
                Chrome Web Store, Microsoft Edge Add-ons, and Firefox Add-ons —
                with no rejections or resubmissions.
            </p>
        </ProjectLayout>
    );
}
