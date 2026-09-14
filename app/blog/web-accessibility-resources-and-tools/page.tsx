import type { Metadata } from "next";
import { meta } from "./meta";
import BlogLayout from "@/components/BlogLayout/BlogLayout";
import ExternalLink from "@/components/ExternalLink/ExternalLink";

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
                articles. Items marked <strong>Recommended</strong> are good
                starting points if you&apos;re new to accessibility or just
                want to focus on the essentials.
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
                    <strong>Recommended:</strong>{" "}
                    <ExternalLink href="https://www.a11yproject.com/checklist/">
                        The Web Content Accessibility Guidelines (WCAG)
                    </ExternalLink>
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
                    <strong>Recommended:</strong>{" "}
                    <ExternalLink href="https://www.a11yproject.com/">
                        The A11Y Project
                    </ExternalLink>
                    : A community-driven resource that makes accessibility
                    easier to understand and apply.
                </li>
                <li>
                    <ExternalLink href="https://a11y.coffee/">
                        A11y Coffee
                    </ExternalLink>
                    : Practical tips and advice for web accessibility.
                </li>
                <li>
                    <ExternalLink href="https://inclusivedesignprinciples.info/">
                        Inclusive Design Principles
                    </ExternalLink>
                    : A concise set of principles for designing inclusively.
                </li>
                <li>
                    <ExternalLink href="https://accessibility.blog.gov.uk/">
                        The Accessibility Blog (GOV.UK)
                    </ExternalLink>
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
                    <strong>Recommended:</strong>{" "}
                    <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">
                        MDN Accessibility
                    </ExternalLink>
                    : Mozilla&apos;s guide to web accessibility.
                </li>
                <li>
                    <ExternalLink href="https://www.w3.org/WAI/standards-guidelines/">
                        W3C Accessibility Standards Overview
                    </ExternalLink>
                    : An overview of W3C standards including WCAG, ARIA, and
                    ATAG.
                </li>
                <li>
                    <ExternalLink href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/Overview.html">
                        Understanding WCAG 2.0
                    </ExternalLink>
                    : The official documentation explaining each WCAG guideline
                    in detail.
                </li>
                <li>
                    <ExternalLink href="https://www.w3.org/WAI/tutorials/">
                        Web Accessibility Tutorials
                    </ExternalLink>
                    : Step-by-step tutorials from the Web Accessibility
                    Initiative (WAI).
                </li>
                <li>
                    <ExternalLink href="https://www.w3.org/TR/html-aria/">
                        ARIA in HTML
                    </ExternalLink>
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
                    <strong>Recommended:</strong>{" "}
                    <ExternalLink href="https://webaim.org/techniques/keyboard/">
                        Keyboard Accessibility
                    </ExternalLink>
                    : A detailed walkthrough for making sites keyboard-friendly.
                </li>
                <li>
                    <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Keyboard">
                        Keyboard (MDN)
                    </ExternalLink>
                    : Mozilla&apos;s reference for keyboard accessibility
                    standards.
                </li>
                <li>
                    <ExternalLink href="https://support.mozilla.org/en-US/kb/accessibility-features-firefox-make-firefox-and-we">
                        Accessibility features in Firefox
                    </ExternalLink>
                    : How Firefox supports users who rely on accessibility
                    features.
                </li>
            </ul>

            <h3>Articles and case studies</h3>
            <ul>
                <li>
                    <ExternalLink href="https://www.w3.org/standards/webdesign/accessibility">
                        Accessibility
                    </ExternalLink>{" "}
                    (W3C): An overview of the standards that shape accessible
                    web design.
                </li>
                <li>
                    <ExternalLink href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility">
                        Handling common accessibility problems
                    </ExternalLink>
                    : Mozilla&apos;s guidance on solving common accessibility
                    issues.
                </li>
                <li>
                    <strong>Recommended:</strong>{" "}
                    <ExternalLink href="https://www.ssa.gov/accessibility/testmethod.html">
                        SSA 508 Test Method
                    </ExternalLink>
                    : The Social Security Administration&apos;s structured
                    approach to accessibility testing.
                </li>
                <li>
                    <ExternalLink href="https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/">
                        What we found when we tested tools on the world&apos;s
                        least-accessible webpage
                    </ExternalLink>
                    : GOV.UK&apos;s honest comparison of automated testing
                    tools.
                </li>
                <li>
                    <ExternalLink href="https://www.imperial.ac.uk/stories/dhm-accessibility-guide/#article">
                        This guide is unreadable
                    </ExternalLink>
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
                    <strong>Recommended:</strong>{" "}
                    <ExternalLink href="https://developers.google.com/web/tools/lighthouse/">
                        Lighthouse
                    </ExternalLink>
                    : Built into Chrome DevTools. Audits accessibility,
                    performance, SEO, and best practices.
                </li>
                <li>
                    <ExternalLink href="https://www.deque.com/axe/">
                        axe DevTools
                    </ExternalLink>
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
                    <strong>Recommended:</strong>{" "}
                    <ExternalLink href="https://accessibilityinsights.io/">
                        Accessibility Insights
                    </ExternalLink>
                    : Microsoft&apos;s extension for finding and fixing
                    accessibility issues, including a guided FastPass workflow.
                </li>
                <li>
                    ARIA DevTools{" "}
                    <ExternalLink href="https://addons.mozilla.org/en-US/firefox/addon/aria-devtools/">
                        (Firefox)
                    </ExternalLink>{" "}
                    /{" "}
                    <ExternalLink href="https://chromewebstore.google.com/detail/aria-devtools/dneemiigcbbgbdjlcdjjnianlikimpck">
                        (Chrome)
                    </ExternalLink>
                    : View missing ARIA labels, misused roles, and keyboard
                    issues.
                </li>
                <li>
                    WAVE Evaluation Tool{" "}
                    <ExternalLink href="https://addons.mozilla.org/en-US/firefox/addon/wave-accessibility-tool/">
                        (Firefox)
                    </ExternalLink>{" "}
                    /{" "}
                    <ExternalLink href="https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh">
                        (Chrome)
                    </ExternalLink>
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
                    <strong>Recommended:</strong>{" "}
                    <ExternalLink href="https://webaim.org/resources/contrastchecker/">
                        Contrast Checker
                    </ExternalLink>
                    : WebAIM&apos;s tool for checking text and background colour
                    contrast ratios against WCAG thresholds.
                </li>
                <li>
                    <ExternalLink href="https://color.a11y.com/">
                        Colour Contrast Accessibility Validator
                    </ExternalLink>
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
                    <strong>Recommended:</strong>{" "}
                    <ExternalLink href="https://wave.webaim.org/">
                        WAVE
                    </ExternalLink>
                    : Overlays visual indicators on the page to show
                    accessibility issues in context.
                </li>
                <li>
                    <ExternalLink href="https://pa11y.org/">
                        Pa11y
                    </ExternalLink>
                    : Command-line tool for automated accessibility testing.
                    Useful in CI pipelines.
                </li>
                <li>
                    <ExternalLink href="https://squizlabs.github.io/HTML_CodeSniffer/">
                        HTML_CodeSniffer
                    </ExternalLink>
                    : Detects code-level accessibility issues.
                </li>
                <li>
                    <ExternalLink href="https://jdan.github.io/tota11y/">
                        tota11y
                    </ExternalLink>
                    : A JavaScript bookmarklet that visualises accessibility
                    errors directly on the page.
                </li>
                <li>
                    <ExternalLink href="https://asqatasun.org/">
                        Asqatasun
                    </ExternalLink>
                    : Open-source tool for automated accessibility auditing.
                </li>
            </ul>

            <p>— Karl</p>
        </BlogLayout>
    );
}
