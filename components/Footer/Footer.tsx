import styles from "@/components/Footer/Footer.module.css";
import { CODEPEN_URL, GITHUB_URL, LINKEDIN_URL, RSS_FEED_URL } from "@/lib/constants/links";
import { NAV_LINKS } from "@/lib/constants/nav";
import Link from "next/link";
import { FaCodepen, FaGithub, FaLinkedin, FaRss } from "react-icons/fa";
import ExternalLink from "@/components/ExternalLink/ExternalLink";

/**
 * Site-wide footer with brand logo, navigation links, and social icons.
 *
 * The top row contains the logo wordmark and an inline nav; the bottom row holds a tagline and icon links to GitHub, LinkedIn, and CodePen.
 *
 * @return The footer element.
 */
export default function Footer() {
    return (
        <footer className={styles.footer} aria-label="Site footer">
            <div className="wrap">
                <div className={styles.footer__top}>
                    <div className={styles.footer__brand}>
                        <Link href="/" className={styles.footer__logo}>
                            Karl Horning
                        </Link>
                    </div>
                    <nav aria-label="Footer navigation">
                        <ul className={styles.footer__nav} role="list">
                            {NAV_LINKS.map(({ href, label }) => (
                                <li key={href}>
                                    <Link href={href}>{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className={styles.footer__bottom}>
                    <div className={styles.footer__legal}>
                        <p className={styles.footer__sub}>
                            Built fast. Built accessible. No loading
                            screens.
                        </p>
                        <Link
                            href="/accessibility-statement"
                            className={styles.footer__legal_link}
                        >
                            Accessibility statement
                        </Link>
                    </div>
                    <ul
                        className={styles.footer__social}
                        role="list"
                        aria-label="Social links"
                    >
                        <li>
                            <ExternalLink
                                href={GITHUB_URL}
                                aria-label="Karl Horning on GitHub"
                            >
                                <FaGithub aria-hidden="true" />
                            </ExternalLink>
                        </li>
                        <li>
                            <ExternalLink
                                href={LINKEDIN_URL}
                                aria-label="Karl Horning on LinkedIn"
                            >
                                <FaLinkedin aria-hidden="true" />
                            </ExternalLink>
                        </li>
                        <li>
                            <ExternalLink
                                href={CODEPEN_URL}
                                aria-label="Karl Horning on CodePen"
                            >
                                <FaCodepen aria-hidden="true" />
                            </ExternalLink>
                        </li>
                        <li>
                            <ExternalLink
                                href={RSS_FEED_URL}
                                aria-label="Subscribe to the RSS feed"
                            >
                                <FaRss aria-hidden="true" />
                            </ExternalLink>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
