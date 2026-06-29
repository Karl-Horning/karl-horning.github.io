import Image from "next/image";
import styles from "@/components/About/About.module.css";

/**
 * About section summarising the site owner's background and experience.
 *
 * Renders a profile photo alongside two paragraphs of biographical text
 * and a location line. Linked from the main navigation via the `#about`
 * anchor and labelled for screen readers via `aria-labelledby`.
 *
 * @return The about section element.
 */
export default function About() {
    return (
        <section className={styles.about} id="about" aria-labelledby="about-heading">
            <div className="wrap">
                <div className="section__meta">
                    <span className="eyebrow" aria-hidden="true">
                        Background
                    </span>
                    <h2 className="section__title" id="about-heading">
                        About
                    </h2>
                </div>
                <div className={styles.about__inner}>
                    <Image
                        className={styles.about__photo}
                        src="/karl-profile-photo.png"
                        alt="Karl Horning, full-stack developer"
                        width={280}
                        height={280}
                    />
                    <div className={styles.about__content}>
                        <p className={styles.about__text}>
                            Before writing code, I spent six years teaching
                            online — over <strong>10,000 hours</strong> of it. I
                            watched slow APIs, broken accessibility, and fragile
                            UX get in the way of real people trying to learn.
                            That experience is still the lens I build through.
                        </p>
                        <p className={styles.about__text}>
                            I&apos;m currently a{" "}
                            <strong>
                                Web Developer for Digital Education at
                                King&apos;s College London
                            </strong>
                            . My background includes leading technical
                            evaluations for enterprise LMS infrastructure at{" "}
                            <strong>Imperial College London</strong>, and three
                            years as a Backend Engineer at{" "}
                            <strong>Learnlight</strong>, where I built the
                            GraphQL API for a platform serving 700,000+ learners
                            across 180 countries.
                        </p>
                        <p className={styles.about__location}>
                            Based in London &middot; Open to remote/hybrid
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
