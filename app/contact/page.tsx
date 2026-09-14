import styles from "@/app/contact/page.module.css";
import { FORMSPREE_URL, LINKEDIN_URL } from "@/lib/constants/links";
import { Metadata } from "next";
import { FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export const metadata: Metadata = {
    title: "Contact",
};

/**
 * Contact page offering two ways to get in touch: LinkedIn and a
 * Formspree-backed email form.
 *
 * @return The contact page element.
 */
export default function Page() {
    return (
        <>
            <div className="page-header">
                <div className="page-header__inner">
                    <p className="eyebrow page-header__eyebrow">
                        Get in touch
                    </p>
                    <h1 className="display page-header__title">
                        Let&apos;s
                        <br />
                        Talk
                    </h1>
                </div>
            </div>

            <hr className="rule" />
            <section
                className={styles.contact_body}
                aria-label="Contact options"
            >
                <div className="wrap">
                    <div className={styles.contact_grid}>
                        <div>
                            <div
                                className={styles.linkedin_card}
                                role="region"
                                aria-label="LinkedIn contact"
                            >
                                <p className={styles.linkedin_card__eyebrow}>
                                    Preferred
                                </p>
                                <h2 className={styles.linkedin_card__heading}>
                                    Find me on LinkedIn
                                </h2>
                                <p className={styles.linkedin_card__text}>
                                    LinkedIn is the best place to reach me. I
                                    can see whether you&apos;re a person,
                                    which I appreciate — I get a lot of noise
                                    through other channels. I&apos;m usually
                                    responsive within a day or two.
                                </p>
                                <div className={styles.linkedin_card__action}>
                                    <a
                                        href={LINKEDIN_URL}
                                        className={`btn ${styles.btn_linkedin}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedin aria-hidden="true" />
                                        Connect on LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className={styles.form_heading}>
                                Or send a message
                            </h2>
                            <form
                                className={styles.form}
                                action={FORMSPREE_URL}
                                method="POST"
                                aria-label="Contact form"
                                noValidate
                            >
                                <div className={styles.field}>
                                    <label
                                        className={styles.field__label}
                                        htmlFor="name"
                                    >
                                        Your name
                                    </label>
                                    <input
                                        className={styles.field__input}
                                        type="text"
                                        id="name"
                                        name="name"
                                        autoComplete="name"
                                        required
                                        aria-required="true"
                                    />
                                </div>
                                <div className={styles.field}>
                                    <label
                                        className={styles.field__label}
                                        htmlFor="email"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        className={styles.field__input}
                                        type="email"
                                        id="email"
                                        name="email"
                                        autoComplete="email"
                                        required
                                        aria-required="true"
                                    />
                                </div>
                                <div className={styles.field}>
                                    <label
                                        className={styles.field__label}
                                        htmlFor="message"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        className={styles.field__textarea}
                                        id="message"
                                        name="message"
                                        required
                                        aria-required="true"
                                    ></textarea>
                                </div>
                                <p className={styles.form__note}>
                                    Messages are processed via Formspree.
                                    I&apos;ll reply by email.
                                </p>
                                <button
                                    type="submit"
                                    className={`btn btn--solid ${styles.form__submit}`}
                                >
                                    <FiSend aria-hidden="true" /> Send message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
