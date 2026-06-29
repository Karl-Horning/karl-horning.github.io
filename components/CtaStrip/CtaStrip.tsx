import styles from "@/components/CtaStrip/CtaStrip.module.css";
import { LINKEDIN_URL } from "@/lib/constants/links";
import { FiArrowUpRight } from "react-icons/fi";

/**
 * Full-width call-to-action strip inviting visitors to get in touch.
 *
 * Displays a prominent heading, a short availability note, and two
 * action buttons: one linking to LinkedIn and one to the contact page.
 *
 * @return The CTA strip section element.
 */
export default function CtaStrip() {
    return (
        <section className={styles.cta_strip} aria-labelledby="cta-heading">
            <div className="wrap">
                <h2 className={styles.cta_strip__heading} id="cta-heading">
                    <span className={styles.line1}>Like what</span>
                    <span className={styles.line2}>you see?</span>
                </h2>
                <p className={styles.cta_strip__sub}>
                    I&apos;m available for new opportunities — let&apos;s talk.
                </p>
                <div className={styles.cta_strip__actions}>
                    <a
                        href={LINKEDIN_URL}
                        className="btn btn--solid"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Connect on LinkedIn{" "}
                        <FiArrowUpRight aria-hidden="true" />
                    </a>
                    <a href="contact" className="btn btn--ghost">
                        Send a message
                    </a>
                </div>
            </div>
        </section>
    );
}
