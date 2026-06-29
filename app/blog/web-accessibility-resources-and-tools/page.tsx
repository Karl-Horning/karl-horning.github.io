import type { Metadata } from "next";
import { meta } from "./meta";
import BlogLayout from "@/components/BlogLayout/BlogLayout";

export const metadata: Metadata = {
    title: meta.title,
    description: meta.description,
};

/**
 * Web accessibility resources and tools blog post page.
 *
 * @return The blog post page element.
 */
export default function Page() {
    return (
        <BlogLayout meta={meta}>
            <p>
                A reference list of web accessibility tools, guidelines, and
                articles. Starred items (⭐️) are good starting points if
                you&apos;re new to accessibility or just want to focus on the
                essentials.
            </p>

            <h2>Checklist</h2>

            <figure>
                <img
                    src="/img/blog/accessibility-resources/wcag-screenshot.avif"
                    alt=""
                />
                <figcaption>
                    The WCAG checklist helps ensure your web content meets
                    accessibility standards.
                </figcaption>
            </figure>
            <ul>
                <li>
                    ⭐️{" "}
                    <a
                        href="https://www.a11yproject.com/checklist/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        The Web Content Accessibility Guidelines (WCAG)
                    </a>
                    : A detailed checklist based on WCAG 2.2, providing
                    guidelines for creating accessible web content.
                </li>
            </ul>

            <h2>Guidance</h2>

            <h3>Community resources</h3>

            <figure>
                <img
                    src="/img/blog/accessibility-resources/a11y-screenshot.avif"
                    alt=""
                />
                <figcaption>
                    The A11Y Project is a community hub for practical
                    accessibility resources.
                </figcaption>
            </figure>
            <ul>
                <li>
                    ⭐️{" "}
                    <a
                        href="https://www.a11yproject.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        The A11Y Project
                    </a>
                    : A community-driven resource that makes accessibility
                    easier to understand and apply.
                </li>
                <li>
                    <a
                        href="https://a11y.coffee/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        A11y Coffee
                    </a>
                    : Practical tips and advice for web accessibility.
                </li>
                <li>
                    <a
                        href="https://inclusivedesignprinciples.info/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Inclusive Design Principles
                    </a>
                    : A concise set of principles for designing inclusively.
                </li>
                <li>
                    <a
                        href="https://accessibility.blog.gov.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        The Accessibility Blog (GOV.UK)
                    </a>
                    : Case studies and guidance from the UK Government Digital
                    Service.
                </li>
            </ul>

            <h3>Official documentation</h3>

            <figure>
                <img
                    src="/img/blog/accessibility-resources/mdn-screenshot.avif"
                    alt=""
                />
                <figcaption>
                    Mozilla&apos;s resource hub for developers tackling
                    accessibility.
                </figcaption>
            </figure>
            <ul>
                <li>
                    ⭐️{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/Accessibility"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN Accessibility
                    </a>
                    : Mozilla&apos;s guide to web accessibility.
                </li>
                <li>
                    <a
                        href="https://www.w3.org/WAI/standards-guidelines/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        W3C Accessibility Standards Overview
                    </a>
                    : An overview of W3C standards including WCAG, ARIA, and
                    ATAG.
                </li>
                <li>
                    <a
                        href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/Overview.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Understanding WCAG 2.0
                    </a>
                    : The official documentation explaining each WCAG guideline
                    in detail.
                </li>
                <li>
                    <a
                        href="https://www.w3.org/WAI/tutorials/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Web Accessibility Tutorials
                    </a>
                    : Step-by-step tutorials from the Web Accessibility
                    Initiative (WAI).
                </li>
                <li>
                    <a
                        href="https://www.w3.org/TR/html-aria/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ARIA in HTML
                    </a>
                    : The official W3C guide to using ARIA roles and labels
                    effectively.
                </li>
            </ul>

            <h3>Keyboard accessibility</h3>

            <figure>
                <img
                    src="/img/blog/accessibility-resources/webaim-screenshot.avif"
                    alt=""
                />
                <figcaption>
                    WebAIM&apos;s guide explaining how to make sites navigable
                    by keyboard.
                </figcaption>
            </figure>
            <ul>
                <li>
                    ⭐️{" "}
                    <a
                        href="https://webaim.org/techniques/keyboard/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Keyboard Accessibility
                    </a>
                    : A detailed walkthrough for making sites keyboard-friendly.
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Keyboard"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Keyboard (MDN)
                    </a>
                    : Mozilla&apos;s reference for keyboard accessibility
                    standards.
                </li>
                <li>
                    <a
                        href="https://support.mozilla.org/en-US/kb/accessibility-features-firefox-make-firefox-and-we"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Accessibility features in Firefox
                    </a>
                    : How Firefox supports users who rely on accessibility
                    features.
                </li>
            </ul>

            <h3>Articles and case studies</h3>
            <ul>
                <li>
                    <a
                        href="https://www.w3.org/standards/webdesign/accessibility"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Accessibility
                    </a>{" "}
                    (W3C): An overview of the standards that shape accessible
                    web design.
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Handling common accessibility problems
                    </a>
                    : Mozilla&apos;s guidance on solving common accessibility
                    issues.
                </li>
                <li>
                    ⭐️{" "}
                    <a
                        href="https://www.ssa.gov/accessibility/testmethod.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        SSA 508 Test Method
                    </a>
                    : The Social Security Administration&apos;s structured
                    approach to accessibility testing.
                </li>
                <li>
                    <a
                        href="https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        What we found when we tested tools on the world&apos;s
                        least-accessible webpage
                    </a>
                    : GOV.UK&apos;s honest comparison of automated testing
                    tools.
                </li>
                <li>
                    <a
                        href="https://www.imperial.ac.uk/stories/dhm-accessibility-guide/#article"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        This guide is unreadable
                    </a>
                    : A useful example of what poor accessibility looks like in
                    practice.
                </li>
            </ul>

            <h2>Testing tools</h2>
            <p>
                No tool catches everything — automated tools typically find
                around 30-40% of accessibility issues. Use them alongside manual
                testing and keyboard navigation checks.
            </p>

            <h3>Browser extensions</h3>

            <figure>
                <img
                    src="/img/blog/accessibility-resources/lighthouse-screenshot.avif"
                    alt=""
                />
                <figcaption>
                    Google Lighthouse offers audits for accessibility and site
                    performance.
                </figcaption>
            </figure>
            <ul>
                <li>
                    ⭐️{" "}
                    <a
                        href="https://developers.google.com/web/tools/lighthouse/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Lighthouse
                    </a>
                    : Built into Chrome DevTools. Audits accessibility,
                    performance, SEO, and best practices.
                </li>
                <li>
                    <a
                        href="https://www.deque.com/axe/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        axe DevTools
                    </a>
                    : One of the most widely used accessibility testing
                    libraries, available as a browser extension and via{" "}
                    <code>@axe-core/playwright</code> for automated testing.
                </li>
            </ul>

            <figure>
                <img
                    src="/img/blog/accessibility-resources/accessibility-insights-screenshot.avif"
                    alt=""
                />
                <figcaption>
                    Microsoft&apos;s Accessibility Insights tool for detecting
                    and fixing accessibility issues.
                </figcaption>
            </figure>
            <ul>
                <li>
                    ⭐️{" "}
                    <a
                        href="https://accessibilityinsights.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Accessibility Insights
                    </a>
                    : Microsoft&apos;s extension for finding and fixing
                    accessibility issues, including a guided FastPass workflow.
                </li>
                <li>
                    ARIA DevTools{" "}
                    <a
                        href="https://addons.mozilla.org/en-US/firefox/addon/aria-devtools/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        (Firefox)
                    </a>{" "}
                    /{" "}
                    <a
                        href="https://chromewebstore.google.com/detail/aria-devtools/dneemiigcbbgbdjlcdjjnianlikimpck"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        (Chrome)
                    </a>
                    : View missing ARIA labels, misused roles, and keyboard
                    issues.
                </li>
                <li>
                    WAVE Evaluation Tool{" "}
                    <a
                        href="https://addons.mozilla.org/en-US/firefox/addon/wave-accessibility-tool/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        (Firefox)
                    </a>{" "}
                    /{" "}
                    <a
                        href="https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        (Chrome)
                    </a>
                    : WebAIM&apos;s browser extension for visual accessibility
                    checks.
                </li>
            </ul>

            <h3>Contrast checkers</h3>

            <figure>
                <img
                    src="/img/blog/accessibility-resources/contrast-checker-screenshot.avif"
                    alt=""
                />
                <figcaption>
                    WebAIM&apos;s Contrast Checker makes colour contrast testing
                    quick and simple.
                </figcaption>
            </figure>
            <ul>
                <li>
                    ⭐️{" "}
                    <a
                        href="https://webaim.org/resources/contrastchecker/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Contrast Checker
                    </a>
                    : WebAIM&apos;s tool for checking text and background colour
                    contrast ratios against WCAG thresholds.
                </li>
                <li>
                    <a
                        href="https://color.a11y.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Colour Contrast Accessibility Validator
                    </a>
                    : Scans an entire page for contrast issues.
                </li>
            </ul>

            <h3>Visual testing and standalone tools</h3>

            <figure>
                <img
                    src="/img/blog/accessibility-resources/wave-screenshot.avif"
                    alt=""
                />
                <figcaption>
                    WebAIM&apos;s WAVE tool highlights accessibility issues
                    visually on the page.
                </figcaption>
            </figure>
            <ul>
                <li>
                    ⭐️{" "}
                    <a
                        href="https://wave.webaim.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WAVE
                    </a>
                    : Overlays visual indicators on the page to show
                    accessibility issues in context.
                </li>
                <li>
                    <a
                        href="https://pa11y.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Pa11y
                    </a>
                    : Command-line tool for automated accessibility testing.
                    Useful in CI pipelines.
                </li>
                <li>
                    <a
                        href="https://squizlabs.github.io/HTML_CodeSniffer/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        HTML_CodeSniffer
                    </a>
                    : Detects code-level accessibility issues.
                </li>
                <li>
                    <a
                        href="https://jdan.github.io/tota11y/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        tota11y
                    </a>
                    : A JavaScript bookmarklet that visualises accessibility
                    errors directly on the page.
                </li>
                <li>
                    <a
                        href="https://asqatasun.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Asqatasun
                    </a>
                    : Open-source tool for automated accessibility auditing.
                </li>
            </ul>

            <p>— Karl</p>
        </BlogLayout>
    );
}
