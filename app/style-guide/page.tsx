import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Style Guide",
    description: "Internal reference for the design tokens and reusable classes used across karlhorning.dev.",
    robots: { index: false, follow: false },
};

const COLOURS: {
    name: string;
    varName: string;
    light: string;
    dark: string;
}[] = [
    { name: "Pink", varName: "--pink", light: "#cb2d6f", dark: "#cb2d6f" },
    { name: "Pink dark", varName: "--pink-dk", light: "#a52259", dark: "#a52259" },
    { name: "Pink text", varName: "--pink-text", light: "#a52259", dark: "#e8709a" },
    { name: "Pink light", varName: "--pink-light", light: "#e8709a", dark: "#e8709a" },
    { name: "Background", varName: "--bg", light: "#f7f3ee", dark: "#111015" },
    { name: "Background 2", varName: "--bg2", light: "#ede9e3", dark: "#1a1522" },
    { name: "Foreground", varName: "--fg", light: "#0d0d0d", dark: "#e8e8e8" },
    { name: "Muted", varName: "--muted", light: "#5c5552", dark: "#9a8fa8" },
    { name: "Border", varName: "--border", light: "#d5cfc8", dark: "#2a2035" },
    { name: "Footer background", varName: "--footer-bg", light: "#0d0d0d", dark: "#0c0a10" },
];

/**
 * Internal reference page showing the site's colour tokens, typography, buttons, tags, and fonts as they're actually defined.
 *
 * @return The style guide page element.
 */
export default function Page() {
    return (
        <>
            <div className="page-header">
                <div className="page-header__inner">
                    <p className="eyebrow page-header__eyebrow">
                        Internal
                    </p>
                    <h1 className="display page-header__title">
                        Style
                        <br />
                        Guide
                    </h1>
                </div>
            </div>

            <hr className="rule" />

            <section className={styles.body}>
                <div className="wrap">
                    <div className={styles.block}>
                        <h2 className="section__title">Colours</h2>
                        <p className={styles.label}>
                            Each swatch reflects the site&apos;s current
                            colour scheme, light or dark. Both values are
                            listed underneath.
                        </p>
                        <br />
                        <div className={styles.swatches}>
                            {COLOURS.map((c) => (
                                <div key={c.varName} className={styles.swatch}>
                                    <div
                                        className={styles.swatch_box}
                                        style={{
                                            background: `var(${c.varName})`,
                                        }}
                                    />
                                    <span className={styles.swatch_name}>
                                        {c.name}
                                    </span>
                                    <span className={styles.swatch_values}>
                                        {c.varName}
                                        <br />
                                        light: {c.light}
                                        <br />
                                        dark: {c.dark}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.block}>
                        <h2 className="section__title">Typography</h2>
                        <div className={styles.type_sample}>
                            <p className={styles.label}>.eyebrow</p>
                            <p className="eyebrow">Eyebrow label</p>
                        </div>
                        <div className={styles.type_sample}>
                            <p className={styles.label}>
                                .display .page-header__title
                            </p>
                            <p className="display" style={{ fontSize: "4rem" }}>
                                Display heading
                            </p>
                        </div>
                        <div className={styles.type_sample}>
                            <p className={styles.label}>.section__title</p>
                            <p className="section__title">Section title</p>
                        </div>
                        <div className={styles.type_sample}>
                            <p className={styles.label}>Body text</p>
                            <p>
                                Default body copy at the site&apos;s base font
                                size — 1.0625rem, 1.65 line-height, set on{" "}
                                <code>body</code> in <code>globals.css</code>.
                            </p>
                        </div>
                    </div>

                    <div className={styles.block}>
                        <h2 className="section__title">Links</h2>
                        <div className={styles.type_sample}>
                            <p className={styles.label}>
                                Default (base a — inherits text colour, no
                                underline)
                            </p>
                            <p>
                                A plain{" "}
                                <a href="#">inline link with no override</a>{" "}
                                looks identical to surrounding text.
                            </p>
                        </div>
                        <div className={styles.type_sample}>
                            <p className={styles.label}>
                                .prose a — shared globally, used in blog
                                posts and the accessibility statement.
                            </p>
                            <div className="prose" style={{ marginBottom: 0 }}>
                                <p style={{ marginBottom: 0 }}>
                                    A{" "}
                                    <a href="#">
                                        pink, underlined content link
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                        <div
                            className={styles.type_sample}
                            style={{
                                background: "var(--footer-bg)",
                                padding: "1.5rem",
                                borderRadius: "4px",
                            }}
                        >
                            <p
                                className={styles.label}
                                style={{ color: "rgba(255,255,255,0.5)" }}
                            >
                                Footer link (.footer__legal_link — dark
                                background)
                            </p>
                            <a
                                href="#"
                                style={{
                                    color: "rgba(255,255,255,0.55)",
                                    textDecoration: "underline",
                                    textUnderlineOffset: "0.2em",
                                    fontSize: "0.75rem",
                                }}
                            >
                                Accessibility statement
                            </a>
                        </div>
                    </div>

                    <div className={styles.block}>
                        <h2 className="section__title">Buttons</h2>
                        <div className={styles.row}>
                            <a className="btn btn--solid" href="#">
                                Solid button
                            </a>
                            <a className="btn btn--ghost" href="#">
                                Ghost button
                            </a>
                        </div>
                        <p className={styles.label}>
                            .btn.btn--solid, .btn.btn--ghost. A third
                            variant, LinkedIn-branded (<code>btn_linkedin</code>
                            {" "}in <code>contact/page.module.css</code>),
                            uses LinkedIn&apos;s brand blue.
                        </p>
                    </div>

                    <div className={styles.block}>
                        <h2 className="section__title">Tags</h2>
                        <ul
                            className={styles.row}
                            style={{ listStyle: "none", padding: 0 }}
                        >
                            <li className="tag">TypeScript</li>
                        </ul>
                        <p className={styles.label}>
                            .tag — a shared global class. Decorative only,
                            not interactive.
                        </p>
                    </div>

                    <div className={styles.block}>
                        <h2 className="section__title">Bullets</h2>
                        <p className={styles.label}>
                            .prose ul, .prose ol — shared globally.
                            Unordered lists use a chevron icon marker,
                            matching the cmalt portfolio; ordered lists
                            keep numbers, coloured to match.
                        </p>
                        <div className="prose" style={{ marginBottom: 0 }}>
                            <ul style={{ marginBottom: 0 }}>
                                <li>First item</li>
                                <li>Second item</li>
                                <li>Third item</li>
                            </ul>
                            <ol style={{ marginTop: "1rem", marginBottom: 0 }}>
                                <li>First step</li>
                                <li>Second step</li>
                                <li>Third step</li>
                            </ol>
                        </div>
                    </div>

                    <div className={styles.block}>
                        <h2 className="section__title">Rule</h2>
                        <hr className="rule" />
                        <p className={styles.label} style={{ marginTop: "1rem" }}>
                            .rule — 2px pink top border, used as a section
                            divider throughout.
                        </p>
                    </div>

                    <div className={styles.block}>
                        <h2 className="section__title">Fonts</h2>
                        <p
                            className={styles.font_sample}
                            style={{ fontFamily: "var(--font-inter)" }}
                        >
                            Inter — body text
                        </p>
                        <p
                            className={styles.font_sample}
                            style={{
                                fontFamily: "var(--font-barlow-condensed)",
                                fontWeight: 900,
                                textTransform: "uppercase",
                            }}
                        >
                            Barlow Condensed — headings (700, 900)
                        </p>
                        <p
                            className={styles.font_sample}
                            style={{ fontFamily: "var(--font-rubik-glitch)" }}
                        >
                            Rubik Glitch — logo only
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
