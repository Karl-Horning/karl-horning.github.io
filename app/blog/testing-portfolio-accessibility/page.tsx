import type { Metadata } from "next";
import { meta } from "./meta";
import BlogLayout from "@/components/BlogLayout/BlogLayout";

export const metadata: Metadata = {
    title: meta.title,
    description: meta.description,
};

/**
 * Testing portfolio accessibility blog post page.
 *
 * @return The blog post page element.
 */
export default function Page() {
    return (
        <BlogLayout meta={meta}>
            <p>
                I&apos;ve been spending more time on the frontend side of my
                work lately — improving my React skills and getting more
                deliberate about how I build UIs. While doing that, I kept
                noticing how often accessibility is treated as something to bolt
                on at the end, if at all —{" "}
                <a
                    href="https://webaim.org/projects/million/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    WebAIM&apos;s 2025 analysis of one million homepages
                </a>{" "}
                found that 94.8% had at least one detectable accessibility
                failure. I didn&apos;t want to build that habit into my own
                site, so I decided to take it seriously from the start.
            </p>
            <p>
                That meant more than running Lighthouse. I added{" "}
                <a
                    href="https://playwright.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Playwright
                </a>{" "}
                and{" "}
                <a
                    href="https://www.deque.com/axe/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    axe-core
                </a>{" "}
                to run automated accessibility checks against every route on
                every build. I also test with keyboard navigation — not just as
                a QA step, but as part of how I use my own site. And I started
                using VoiceOver (the default screen reader on macOS) to check
                things that automated tools don&apos;t catch.
            </p>
            <p>Here&apos;s what I found.</p>

            <h2>The skip link wasn&apos;t working</h2>
            <p>
                A skip link is an accessibility pattern that lets keyboard and
                screen reader users jump directly to the main content, bypassing
                the navigation on every page. It works by linking to an anchor:{" "}
                <code>
                    &lt;a href=&quot;#main&quot;&gt;Skip to main
                    content&lt;/a&gt;
                </code>{" "}
                needs a corresponding{" "}
                <code>&lt;main id=&quot;main&quot;&gt;</code> to land on.
            </p>
            <p>
                My skip link existed, but it wasn&apos;t working reliably
                because I had placed <code>&lt;main&gt;</code> inside individual
                page components rather than in the shared layouts. The fix was
                to move it into the layout wrappers — <code>layout.tsx</code>,{" "}
                <code>BlogLayout</code>, <code>ProjectLayout</code>, and so on —
                so that every page consistently has the skip link target in the
                right place. The page-level components that previously used{" "}
                <code>&lt;main&gt;</code> were updated to use{" "}
                <code>&lt;section&gt;</code> instead, which keeps the content
                semantic without competing with the layout&apos;s{" "}
                <code>&lt;main&gt;</code>.
            </p>
            <p>
                I also added <code>id=&quot;main&quot;</code> to the{" "}
                <code>&lt;main&gt;</code> element itself. This is the correct
                pattern — the skip link target has to be explicitly reachable by
                ID.
            </p>

            <h2>
                Some decorative icons weren&apos;t hidden from assistive
                technology
            </h2>
            <p>
                I have a helper function, <code>decorateIcon</code>, that
                handles icon accessibility in two cases: if an icon is
                decorative (no label provided), it gets{" "}
                <code>aria-hidden=&quot;true&quot;</code> and{" "}
                <code>role=&quot;presentation&quot;</code> so screen readers
                skip it; if it&apos;s meaningful (a label is provided), it gets{" "}
                <code>role=&quot;img&quot;</code> and an accessible label.
            </p>
            <p>
                The function works correctly. The problem was that I had simply
                forgotten to use it on some icons. Those icons were neither
                hidden nor labelled, so screen readers were encountering them
                without context. axe-core flagged them, and the fix was
                straightforward: wrap the missed icons in{" "}
                <code>decorateIcon</code>.
            </p>
            <p>
                This is a good example of why automated testing is useful beyond
                the initial build. I&apos;d applied the pattern consistently in
                most places, but &quot;most places&quot; isn&apos;t good enough
                for accessibility. The tests catch the gaps that manual review
                misses.
            </p>

            <h2>Too many divs</h2>
            <p>
                A lot of the content on the site was wrapped in{" "}
                <code>&lt;div&gt;</code> elements that could have been more
                semantic. I went through and replaced them where appropriate —
                grouping self-contained pieces of content under{" "}
                <code>&lt;article&gt;</code> tags, and using{" "}
                <code>&lt;section&gt;</code> for grouped but non-standalone
                content. Screen readers use landmark elements to let users
                navigate the page structure, so getting these right matters
                beyond just code hygiene.
            </p>

            <h2>Interactive icons needed explicit labels</h2>
            <p>
                The mobile menu toggle and the site logo both had accessibility
                issues around labelling — Firefox&apos;s accessibility tools
                flagged that it wasn&apos;t explicit what these elements were
                for. Adding IDs and ensuring the elements were properly labelled
                for screen readers resolved this. It sounds like a small thing,
                but for someone navigating by screen reader, an unlabelled
                interactive element is a dead end.
            </p>

            <h2>What automated testing didn&apos;t catch</h2>
            <p>
                The VoiceOver testing turned up something none of the automated
                tools flagged: the emojis I&apos;d added to my README
                documentation. I&apos;d included them thinking they might help
                neurodivergent readers scan the content more easily. What I
                hadn&apos;t considered is that VoiceOver reads emojis aloud —
                every single one, with its full description. A README with
                emoji-decorated headings becomes a wall of &quot;star emoji,
                heading text, star emoji&quot; when read by a screen reader.
            </p>
            <p>
                I removed them. The intent was good; the outcome wasn&apos;t.
                It&apos;s a useful reminder that accessibility decisions made
                without testing can go the wrong way even when you&apos;re
                trying to be thoughtful.
            </p>

            <h2>A note on tools</h2>
            <p>
                Automated tools like axe-core are genuinely useful — they catch
                structural and attribute-level issues consistently and at scale.
                But they&apos;re widely cited as finding around 30-40% of
                accessibility issues. The rest requires manual testing: keyboard
                navigation, screen reader walkthroughs, and thinking about the
                actual experience of using the site without a mouse or with
                vision assistance.
            </p>
            <p>
                If you&apos;re looking for a list of tools to get started, I
                keep a{" "}
                <a href="/blog/web-accessibility-resources-and-tools">
                    reference list of accessibility tools and resources
                </a>{" "}
                on this site.
            </p>
            <p>— Karl</p>
        </BlogLayout>
    );
}
