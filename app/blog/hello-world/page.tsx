import type { Metadata } from "next";
import { meta } from "./meta";
import BlogLayout from "@/components/BlogLayout/BlogLayout";

export const metadata: Metadata = {
    title: meta.title,
    description: meta.description,
};

/**
 * Hello, World blog post page.
 *
 * @return The blog post page element.
 */
export default function Page() {
    return (
        <BlogLayout meta={meta}>
            <p>
                Welcome to the blog. The convention demands a Hello, World — so
                here it is.
            </p>
            <p>
                This is where I write about things I&apos;ve learned, problems
                I&apos;ve worked through, and decisions I&apos;ve had to make as
                a developer. I write publicly because the same challenges tend
                to come up for other people too, and experience is more useful
                when it&apos;s shared.
            </p>
            <p>The three areas I keep coming back to:</p>
            <ul>
                <li>
                    <strong>Accessibility</strong> — building things that work
                    for everyone, not as an afterthought
                </li>
                <li>
                    <strong>Architecture</strong> — how systems are structured,
                    why certain decisions get made, and what the trade-offs look
                    like in practice
                </li>
                <li>
                    <strong>Lessons from development</strong> — honest write-ups
                    of what I built, what I found, and what I&apos;d do
                    differently
                </li>
            </ul>
            <p>
                Posts here are practical rather than theoretical. If something
                is worth writing about, it&apos;s because I ran into it, worked
                through it, and think the experience is worth documenting.
            </p>
            <p>— Karl</p>
        </BlogLayout>
    );
}
