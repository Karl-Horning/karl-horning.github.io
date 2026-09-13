import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import { LINKEDIN_URL } from "@/lib/constants/links";

export const metadata: Metadata = {
    title: "Accessibility Statement",
    description:
        "How karlhorning.dev approaches accessibility, including testing methods, known limitations, and how to report a problem.",
};

export default function Page() {
    return (
        <>
            <div className="page-header">
                <div className="page-header__inner">
                    <p className="eyebrow page-header__eyebrow">
                        Policy
                    </p>
                    <h1 className="display page-header__title">
                        Accessibility
                        <br />
                        Statement
                    </h1>
                </div>
            </div>

            <hr className="rule" />

            <section className={styles.body}>
                <div className="wrap">
                    <div className={styles.content}>
                        <h2>Scope</h2>
                        <p>
                            This statement covers karlhorning.dev, my
                            personal portfolio and blog. I want it to work
                            for everyone, including people using a screen
                            reader, keyboard-only navigation, or a
                            magnifier.
                        </p>

                        <h2>Standard</h2>
                        <p>This site aims to meet WCAG 2.2 Level AA.</p>

                        <h2>How this site is tested</h2>
                        <p>I test this site:</p>
                        <ul>
                            <li>
                                Automated testing with Playwright and
                                axe-core, covering every page on both
                                desktop and mobile viewports, run in CI on
                                every change
                            </li>
                            <li>
                                Manual testing, including keyboard
                                navigation and a screen reader (VoiceOver)
                            </li>
                        </ul>
                        <p>
                            Automated tools catch roughly 30-40% of
                            accessibility issues, so manual testing does
                            most of the work here.
                        </p>

                        <h2>Known limitations</h2>
                        <ul>
                            <li>
                                Links that open in a new tab don&apos;t
                                currently announce that to screen readers.
                            </li>
                            <li>
                                The contact form is processed by Formspree,
                                a third-party service whose interface
                                isn&apos;t under my control.
                            </li>
                        </ul>

                        <h2>Reporting a problem</h2>
                        <p>
                            If you find something on this site that&apos;s
                            hard to use, get in touch:
                        </p>
                        <ul>
                            <li>
                                <Link href="/contact">Contact form</Link>
                            </li>
                            <li>
                                <a
                                    href={LINKEDIN_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                        <p>Last reviewed: 13 September 2026.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
