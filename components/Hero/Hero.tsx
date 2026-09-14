import Link from "next/link";
import styles from "@/components/Hero/Hero.module.css";
import { LINKEDIN_URL } from "@/lib/constants/links";
import { FiGrid } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import ExternalLink from "@/components/ExternalLink/ExternalLink";

/**
 * Full-page hero section introducing the site owner.
 *
 * Displays the name, tagline, short bio, and primary calls to action.
 * Intended to occupy the full viewport height on load.
 *
 * @return The hero section element.
 */
export default function Hero() {
    return (
        <>
            <section className="full-page" aria-label="Introduction">
                <div className="page-inner">
                    <p className={styles.hero__eyebrow}>
                        Full-stack developer
                    </p>
                    <h1 className={styles.hero__name}>
                        <span className={styles.line1}>Karl</span>
                        <span className={styles.line2}>Horning</span>
                    </h1>
                    <div id="hero-rule" className={styles.hero__rule} aria-hidden="true"></div>
                    <div className={styles.hero__bottom}>
                        <div className={styles.hero__left}>
                            <h2 className={styles.hero__tagline}>
                                Fast. Accessible.
                                <br />
                                No fluff.
                            </h2>
                            <p className={styles.hero__bio}>
                                Web Developer at King&apos;s College London. I
                                build things that work for everyone — fast,
                                accessible, no loading screens.
                            </p>
                        </div>
                        <div className={styles.hero__actions}>
                            <Link href="/#projects" className="btn btn--solid">
                                <FiGrid aria-hidden="true" /> View my work
                            </Link>
                            <ExternalLink
                                href={LINKEDIN_URL}
                                className="btn btn--ghost"
                            >
                                <FaLinkedin aria-hidden="true" /> LinkedIn
                            </ExternalLink>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="rule"></hr>
        </>
    );
}
