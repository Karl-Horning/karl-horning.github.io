import Link from "next/link";
import styles from "@/components/Hero/Hero.module.css";
import { LINKEDIN_URL } from "@/lib/constants/links";
import { FiArrowUpRight } from "react-icons/fi";

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
                        — Full-stack developer
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
                                accessible, no loading screens. Previously a
                                Full-Stack Engineer at Learnlight, scaling a
                                GraphQL API for 700,000+ learners across 180
                                countries.
                            </p>
                        </div>
                        <div className={styles.hero__actions}>
                            <Link href="/#projects" className="btn btn--solid">
                                View my work
                            </Link>
                            <a
                                href={LINKEDIN_URL}
                                className="btn btn--ghost"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn <FiArrowUpRight aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="rule"></hr>
        </>
    );
}
